import {
  FETCH_AMERICAN_PRICES_SUCCESS,
  FETCH_FILTERED_AMERICAN_PRICES_SUCCESS,
} from "../actions";

const initialState = {
  prezzilist: [],
  filteredList: [],
};

const PrezziAmericaniReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AMERICAN_PRICES_SUCCESS:
      return {
        ...state,
        prezzilist: Array.isArray(action.payload) ? action.payload : [],
        filteredList: Array.isArray(action.payload) ? action.payload : [],
      };
    case FETCH_FILTERED_AMERICAN_PRICES_SUCCESS:
      return {
        ...state,
        filteredList: Array.isArray(action.payload) ? action.payload : [],
      };
    default:
      return state;
  }
};

export default PrezziAmericaniReducer;
