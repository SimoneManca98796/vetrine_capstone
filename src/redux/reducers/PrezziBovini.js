import {
  FETCH_BOVINI_PRICES_SUCCESS,
  FETCH_FILTERED_BOVINI_PRICES_SUCCESS,
  ADD_BOVINI_PRICE,
  FILTER_BOVINI_PRICES,
} from "../actions";

const initialState = {
  prezzilist: [],
  filteredList: [],
};

const PrezziBoviniReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOVINI_PRICES_SUCCESS: {
      return {
        ...state,
        prezzilist: action.payload,
        filteredList: action.payload,
      };
    }
    case FETCH_FILTERED_BOVINI_PRICES_SUCCESS: {
      return {
        ...state,
        filteredList: action.payload,
      };
    }
    case ADD_BOVINI_PRICE: {
      const updatedPrezzi = [...state.prezzilist, action.payload];
      return {
        ...state,
        prezzilist: updatedPrezzi,
        filteredList: updatedPrezzi,
      };
    }
    case FILTER_BOVINI_PRICES: {
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

export default PrezziBoviniReducer;
