import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Row,
  Col,
  Image,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import { updateAvatarUrl, updateProfile } from "../redux/actions/index";
import axios from "axios";
import "../ProfilePage.css";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user); // Assicurati che questo sia il percorso corretto per accedere ai dati dell'utente
  const avatarUrl = useSelector((state) => state.auth.avatarUrl);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setSurname(user.surname);
      setEmail(user.email);
      setLoading(false);
    } else {
      setLoading(false); // Se non c'è utente, smetti di caricare
    }
  }, [user]);

  const handleAvatarChange = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/users/upload-avatar",
        formData
      );
      dispatch(updateAvatarUrl(response.data.uri));
      setSuccess("Avatar updated successfully.");
    } catch (error) {
      setError("Failed to update avatar. Please try again.");
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      await axios.put("http://localhost:8080/api/users/me", { password });
      setSuccess("Password updated successfully.");
    } catch (error) {
      setError("Failed to update password. Please try again.");
    }
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:8080/api/users/me", {
        name,
        surname,
        email,
      });
      dispatch(updateProfile({ name, surname, email }));
      setSuccess("Profile updated successfully.");
    } catch (error) {
      setError("Failed to update profile. Please try again.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="profile-page mt-5">
      <Row>
        <Col md={4} className="text-center">
          <Image
            src={
              avatarUrl
                ? `${avatarUrl}?${new Date().getTime()}`
                : "/path/to/default/avatar.png"
            }
            roundedCircle
            width="150"
            height="150"
          />
          <Form.Group controlId="formFile" className="mt-3">
            <Form.Label>Change Avatar</Form.Label>
            <Form.Control type="file" onChange={handleAvatarChange} />
          </Form.Group>
        </Col>
        <Col md={8}>
          <h2>Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}
          <Form onSubmit={handleProfileUpdate}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formSurname" className="mt-3">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                type="text"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Update Profile
            </Button>
          </Form>
          <h3 className="mt-5">Change Password</h3>
          <Form onSubmit={handlePasswordChange}>
            <Form.Group controlId="formPassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formConfirmPassword" className="mt-3">
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Change Password
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
