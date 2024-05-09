import {
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
} from "../actions/index";

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
        token: action.payload.token, // Memorizza il token nello stato
        avatarUrl: action.payload.avatarUrl, // Memorizza l'URL dell'avatar nello stato
        // token: action.payload, // Memorizza il token nello stato
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        token: null, // Rimuove il token dallo stato
        avatarUrl: null,
      };
    case LOGIN_FAIL:
    case REGISTER_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        avatarUrl: null,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
      };
    default:
      return state;
    case "UPDATE_AVATAR_URL":
      return {
        ...state,
        avatarUrl: action.payload,
      };
  }
};

export default authReducer;
