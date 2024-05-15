import {
  FETCH_PRICES_SUCCESS,
  FETCH_FILTERED_PRICES_SUCCESS,
  ADD_PRICE,
  FILTER_PRICES,
} from "../actions";

const initialState = {
  prezzilist: [],
  filteredList: [],
};

const PrezziAmericaniReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRICES_SUCCESS:
      return {
        ...state,
        prezzilist: Array.isArray(action.payload) ? action.payload : [],
        filteredList: Array.isArray(action.payload) ? action.payload : [],
      };
    case FETCH_FILTERED_PRICES_SUCCESS:
      return {
        ...state,
        filteredList: Array.isArray(action.payload) ? action.payload : [],
      };
    case ADD_PRICE:
      return {
        ...state,
        prezzilist: [...state.prezzilist, action.payload],
        filteredList: [...state.prezzilist, action.payload],
      };
    case FILTER_PRICES:
      return {
        ...state,
        filteredList: state.prezzilist.filter((item) =>
          Object.entries(action.payload).every(([key, value]) =>
            item[key].includes(value)
          )
        ),
      };
    default:
      return state;
  }
};

export default PrezziAmericaniReducer;
