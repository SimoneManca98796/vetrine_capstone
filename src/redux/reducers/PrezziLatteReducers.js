import { ADD_PRICE, FETCH_PRICES_SUCCESS } from "../actions";

const initialState = {
  prezzilist: [],
};

const PrezziLatteReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRICES_SUCCESS:
      return {
        ...state,
        prezzilist: action.payload,
      };
    case ADD_PRICE:
      return {
        ...state,
        prezzilist: [...state.prezzilist, action.payload],
      };
    default:
      return state;
  }
};

export default PrezziLatteReducers;
