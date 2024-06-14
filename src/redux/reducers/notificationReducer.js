import {
  FETCH_NOTIFICATIONS_SUCCESS,
  FETCH_UNREAD_NOTIFICATIONS_SUCCESS,
  MARK_NOTIFICATIONS_AS_READ_SUCCESS,
} from "../actions";

const initialState = {
  allNotifications: [],
  unreadNotifications: [],
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      console.log("Reducer - Notifications payload:", action.payload);
      return {
        ...state,
        allNotifications: action.payload,
      };
    case FETCH_UNREAD_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        unreadNotifications: action.payload,
      };
    case MARK_NOTIFICATIONS_AS_READ_SUCCESS:
      return {
        ...state,
        unreadNotifications: [],
      };
    default:
      return state;
  }
};

export default notificationReducer;
