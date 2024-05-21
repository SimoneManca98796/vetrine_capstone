import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotifications } from "../redux/actions";
import { ListGroup, Container } from "react-bootstrap";
import "../Notifiche.css";

const Notifiche = () => {
  const dispatch = useDispatch();
  const notificationsState = useSelector((state) => state.notifications);

  useEffect(() => {
    dispatch(fetchNotifications());
  }, [dispatch]);

  if (!notificationsState) {
    return <p>Caricamento in corso...</p>;
  }

  if (notificationsState.error) {
    return <p>Errore: {notificationsState.error}</p>;
  }

  const notifications = notificationsState.allNotifications;

  return (
    <Container className="notifiche-container">
      <h1 className="mb-3">Notifiche</h1>
      <ListGroup>
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <ListGroup.Item key={notification.id}>
              <strong>{notification.type}</strong>: {notification.message}{" "}
              <br />
              <small>{notification.date}</small>
            </ListGroup.Item>
          ))
        ) : (
          <p>Nessuna notifica trovata.</p>
        )}
      </ListGroup>
    </Container>
  );
};

export default Notifiche;
