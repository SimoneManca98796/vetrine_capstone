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
  const user = useSelector((state) => state.auth.user);
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
      console.log("User data loaded:", user); // Log di debug
      setName(user.name);
      setSurname(user.surname);
      setEmail(user.email);
      setLoading(false);
    } else {
      console.log("No user data available"); // Log di debug
      setLoading(false); // Smetti di caricare se l'utente non è presente
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
      setSuccess("Avatar aggiornato con successo.");
    } catch (error) {
      setError("Impossibile aggiornare l'avatar. Per favore riprova.");
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Le password non corrispondono.");
      return;
    }

    try {
      await axios.put("http://localhost:8080/api/users/me", { password });
      setSuccess("Password aggiornata con successo.");
    } catch (error) {
      setError("Impossibile aggiornare la password. Per favore riprova.");
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
      setSuccess("Profilo aggiornato con successo.");
    } catch (error) {
      setError("Impossibile aggiornare il profilo. Per favore riprova.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="profile-page mt-5">
      {" "}
      {/* Aggiungi una classe per il margine superiore */}
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
            <Form.Label>Cambia Avatar</Form.Label>
            <Form.Control type="file" onChange={handleAvatarChange} />
          </Form.Group>
        </Col>
        <Col md={8}>
          <h2>Profilo</h2>
          <div className="user-details">
            <p>
              <strong>Nome:</strong> {name}
            </p>
            <p>
              <strong>Cognome:</strong> {surname}
            </p>
            <p>
              <strong>Email:</strong> {email}
            </p>
          </div>
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}
          <Form onSubmit={handleProfileUpdate}>
            <Form.Group controlId="formName">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formSurname" className="mt-3">
              <Form.Label>Cognome</Form.Label>
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
              Aggiorna Profilo
            </Button>
          </Form>
          <h3 className="mt-5">Cambia Password</h3>
          <Form onSubmit={handlePasswordChange}>
            <Form.Group controlId="formPassword">
              <Form.Label>Nuova Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formConfirmPassword" className="mt-3">
              <Form.Label>Conferma Nuova Password</Form.Label>
              <Form.Control
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Cambia Password
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
