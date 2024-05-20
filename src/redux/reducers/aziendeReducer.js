import { FETCH_AZIENDE_SUCCESS, CREATE_AZIENDA_SUCCESS } from "../actions";

const initialState = {
  allAziende: [],
};

const aziendeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AZIENDE_SUCCESS:
      return {
        ...state,
        allAziende: action.payload,
      };
    case CREATE_AZIENDA_SUCCESS:
      return {
        ...state,
        allAziende: [...state.allAziende, action.payload],
      };
    default:
      return state;
  }
};

export default aziendeReducer;
