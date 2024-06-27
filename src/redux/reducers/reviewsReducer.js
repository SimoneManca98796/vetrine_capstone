import {
  FETCH_REVIEWS_SUCCESS,
  FETCH_REVIEWS_FAILURE,
  CREATE_REVIEW_SUCCESS,
  CREATE_REVIEW_FAILURE,
} from "../actions/index";

const initialState = {
  reviews: [],
  error: null,
};

const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REVIEWS_SUCCESS:
      return { ...state, reviews: action.payload, error: null };
    case FETCH_REVIEWS_FAILURE:
      return { ...state, error: action.payload, reviews: [] };
    case CREATE_REVIEW_SUCCESS:
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
        error: null,
      };
    case CREATE_REVIEW_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default reviewsReducer;
