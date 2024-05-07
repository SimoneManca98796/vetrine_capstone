import { LOGIN_SUCCESS, LOGOUT } from "../actions/index";

const initialState = {
  isAuthenticated: false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload, // Memorizza il token nello stato
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        token: null, // Rimuovi il token dallo stato
      };
    default:
      return state;
  }
};

export default authReducer;
