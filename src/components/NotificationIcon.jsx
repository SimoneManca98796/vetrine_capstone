import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUnreadNotifications } from "../redux/actions";
import { BellFill } from "react-bootstrap-icons";
import "../NotificationIcon.css";

const NotificationIcon = () => {
  const dispatch = useDispatch();
  const unreadNotifications = useSelector(
    (state) => state.notifiche.unreadNotifications
  );

  useEffect(() => {
    dispatch(fetchUnreadNotifications());
  }, [dispatch]);

  return (
    <div className="notification-icon">
      <BellFill size={20} />
      {unreadNotifications.length > 0 && (
        <span className="badge">{unreadNotifications.length}</span>
      )}
    </div>
  );
};

export default NotificationIcon;
