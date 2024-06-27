import {
  UPLOAD_DOCUMENT_SUCCESS,
  UPLOAD_DOCUMENT_FAILURE,
} from "../actions/index";

const initialState = {
  document: null,
  error: null,
};

const documentReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_DOCUMENT_SUCCESS:
      return { ...state, document: action.payload, error: null };
    case UPLOAD_DOCUMENT_FAILURE:
      return { ...state, error: action.payload, document: null };
    default:
      return state;
  }
};

export default documentReducer;
