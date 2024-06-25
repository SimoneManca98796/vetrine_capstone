import {
  FETCH_NOTIFICATIONS_SUCCESS,
  FETCH_UNREAD_NOTIFICATIONS_SUCCESS,
  MARK_NOTIFICATION_AS_READ_SUCCESS,
  MARK_ALL_NOTIFICATIONS_AS_READ_SUCCESS, // Aggiunto
} from "../actions";

const initialState = {
  allNotifications: [],
  unreadNotifications: [],
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        allNotifications: action.payload,
      };
    case FETCH_UNREAD_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        unreadNotifications: action.payload,
      };
    case MARK_NOTIFICATION_AS_READ_SUCCESS: {
      const { userId, notificaId } = action.payload;
      return {
        ...state,
        allNotifications: state.allNotifications.map((notifica) =>
          notifica.id === notificaId
            ? { ...notifica, readers: [...notifica.readers, userId] }
            : notifica
        ),
        unreadNotifications: state.unreadNotifications.filter(
          (notifica) => notifica.id !== notificaId
        ),
      };
    }
    case MARK_ALL_NOTIFICATIONS_AS_READ_SUCCESS: {
      const { userId } = action.payload;
      return {
        ...state,
        allNotifications: state.allNotifications.map((notifica) =>
          notifica.readers.includes(userId)
            ? notifica
            : { ...notifica, readers: [...notifica.readers, userId] }
        ),
        unreadNotifications: [],
      };
    }
    default:
      return state;
  }
};

export default notificationReducer;
