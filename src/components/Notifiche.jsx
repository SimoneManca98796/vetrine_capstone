import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotifications, markNotificationsAsRead } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import "../Notifiche.css";

const Notifiche = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const notifiche = useSelector((state) => state.notifiche.allNotifications);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userId = useSelector((state) => state.auth.user?.id);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchNotifications(userId));
    } else {
      navigate("/FormLogin");
    }
  }, [dispatch, isAuthenticated, navigate, userId]);

  useEffect(() => {
    if (isAuthenticated && notifiche.length > 0) {
      dispatch(markNotificationsAsRead(userId));
    }
  }, [dispatch, isAuthenticated, notifiche.length, userId]);

  return (
    <div className="notifiche-container container">
      <h1 className="notifiche-header">Notifiche</h1>
      <div className="notifiche-list">
        {notifiche.map((notifica) => {
          const userName = notifica.fonte ? notifica.fonte : "Utente";
          const dataOra = notifica.timestamp
            ? new Date(notifica.timestamp).toLocaleString()
            : "Data non disponibile";
          return (
            <div key={notifica.id} className="notifica-item">
              <img
                src={notifica.avatarURL || "/path/to/default/avatar.png"}
                alt="User Avatar"
                className="notifica-avatar"
                onError={(e) => {
                  e.target.src = "/path/to/default/avatar.png";
                  console.error("Error loading avatar:", notifica.avatarURL);
                }}
              />
              <div className="notifica-content">
                <p>
                  {notifica.messaggio}
                  .
                  <br />
                  <strong>
                    Dai un&#39;occhiata{" "}
                    <a
                      href={notifica.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      qui
                    </a>
                    .
                  </strong>
                </p>
                <div className="notifica-timestamp">{dataOra}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Notifiche;
