import { FETCH_NOTIFICATIONS_SUCCESS } from "../actions";

const initialState = {
  allNotifications: [],
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      console.log(
        "FETCH_NOTIFICATIONS_SUCCESS action.payload:",
        action.payload
      );
      return {
        ...state,
        allNotifications: action.payload,
      };
    default:
      return state;
  }
};

export default notificationReducer;
