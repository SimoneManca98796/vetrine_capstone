import {
  FETCH_SUINI_PRICES_SUCCESS,
  FETCH_FILTERED_SUINI_PRICES_SUCCESS,
  ADD_SUINI_PRICE,
  FILTER_SUINI_PRICES,
} from "../actions";

const initialState = {
  prezzilist: [],
  filteredList: [],
};

const PrezziSuiniReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUINI_PRICES_SUCCESS: {
      return {
        ...state,
        prezzilist: action.payload,
        filteredList: action.payload,
      };
    }
    case FETCH_FILTERED_SUINI_PRICES_SUCCESS: {
      return {
        ...state,
        filteredList: action.payload,
      };
    }
    case ADD_SUINI_PRICE: {
      const updatedPrezzi = [...state.prezzilist, action.payload];
      return {
        ...state,
        prezzilist: updatedPrezzi,
        filteredList: updatedPrezzi,
      };
    }
    case FILTER_SUINI_PRICES: {
      const filteredPrezzi = state.prezzilist.filter((item) =>
        Object.entries(action.payload).every(([key, value]) =>
          item[key].toString().includes(value)
        )
      );
      return {
        ...state,
        filteredList: filteredPrezzi,
      };
    }
    default:
      return state;
  }
};

export default PrezziSuiniReducer;
