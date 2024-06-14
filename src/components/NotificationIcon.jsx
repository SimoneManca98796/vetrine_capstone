import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUnreadNotifications } from "../redux/actions";
import { BellFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import "../NotificationIcon.css";

const NotificationIcon = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const unreadNotifications = useSelector(
    (state) => state.notifiche.unreadNotifications
  );
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userId = useSelector((state) => state.auth.user?.id);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchUnreadNotifications(userId));
    }
  }, [dispatch, isAuthenticated, userId]);

  const handleIconClick = () => {
    if (!isAuthenticated) {
      navigate("/FormLogin");
    } else {
      navigate("/Notifiche");
    }
  };

  return (
    <div className="notification-icon" onClick={handleIconClick}>
      <BellFill size={20} />
      {isAuthenticated && unreadNotifications.length > 0 && (
        <span className="badge">{unreadNotifications.length}</span>
      )}
    </div>
  );
};

export default NotificationIcon;
