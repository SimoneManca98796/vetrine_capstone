import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchNotifications,
  fetchUnreadNotifications,
  markNotificationAsRead,
} from "../redux/actions";
import { useNavigate } from "react-router-dom";
import "../Notifiche.css";

const Notifiche = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const notifiche = useSelector((state) => state.notifiche.allNotifications);
  const unreadNotifiche = useSelector(
    (state) => state.notifiche.unreadNotifications
  );
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userId = useSelector((state) => state.auth.user?.id);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchNotifications(userId));
      dispatch(fetchUnreadNotifications(userId));
    } else {
      navigate("/FormLogin");
    }
  }, [dispatch, isAuthenticated, navigate, userId]);

  const handleMarkAsRead = (notificaId) => {
    console.log(
      `Marking notification ${notificaId} as read for user ${userId}`
    );
    dispatch(markNotificationAsRead(userId, notificaId)).then(() => {
      dispatch(fetchUnreadNotifications(userId));
    });
  };

  const filteredUnreadNotifiche = unreadNotifiche.filter(
    (notifica) => notifica.userId !== userId
  );

  return (
    <div className="notifiche-container container">
      <h1 className="notifiche-header">Notifiche</h1>
      <div className="notifiche-didascalia">
        <img
          src="/bottomArrow.webp"
          alt="Curious man"
          className="notifiche-logo"
        />
        <span className="cartoon-font">Notifiche da visualizzare</span>
      </div>
      <div className="notifiche-list">
        {filteredUnreadNotifiche.length === 0 ? (
          <div className="no-notifications">
            <img src="/NoNotifica.webp" alt="No notifications" />
            <p className="cartoon-font">Nessuna notifica da visualizzare!</p>
          </div>
        ) : (
          filteredUnreadNotifiche.map((notifica) => {
            const userName = notifica.fonte ? notifica.fonte : "Utente";
            const dataOra = notifica.timestamp
              ? new Date(notifica.timestamp).toLocaleString()
              : "Data non disponibile";
            return (
              <div
                key={notifica.id}
                className="notifica-item"
                onClick={() => handleMarkAsRead(notifica.id)}
              >
                <img
                  src={notifica.avatarURL || "/userPredefinito.png"}
                  alt="User Avatar"
                  className="notifica-avatar"
                  onError={(e) => {
                    e.target.src = "/userPredefinito.png";
                    console.error("Error loading avatar:", notifica.avatarURL);
                  }}
                />
                <div className="notifica-content">
                  <p>
                    {notifica.messaggio}.
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
          })
        )}
      </div>
    </div>
  );
};

export default Notifiche;
