import {
  FETCH_NOTIFICATIONS_SUCCESS,
  FETCH_UNREAD_NOTIFICATIONS_SUCCESS,
  MARK_NOTIFICATION_AS_READ_SUCCESS,
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
    case MARK_NOTIFICATION_AS_READ_SUCCESS:
      return {
        ...state,
        allNotifications: state.allNotifications.filter(
          (notifica) => notifica.id !== action.payload
        ),
        unreadNotifications: state.unreadNotifications.filter(
          (notifica) => notifica.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default notificationReducer;
