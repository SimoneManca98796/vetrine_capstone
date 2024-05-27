import {
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  UPDATE_PROFILE,
} from "../actions/index";

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  avatarUrl: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
        avatarUrl: action.payload.avatarUrl,
        user: action.payload.user,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
        avatarUrl: action.payload.avatarUrl,
        user: action.payload.user,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        avatarUrl: null,
        user: null,
      };
    case UPDATE_PROFILE:
      console.log("Updating profile with:", action.payload);
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
          id: state.user.id,
        },
      };
    case LOGIN_FAIL:
    case REGISTER_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        avatarUrl: null,
        user: null,
      };
    case "UPDATE_AVATAR_URL":
      console.log("URL Avatar aggiornato:", action.payload);
      return {
        ...state,
        avatarUrl: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
