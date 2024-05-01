import { ADD_PRICE, FETCH_PRICES_SUCCESS, FILTER_PRICES } from "../actions";

const initialState = {
  prezzilist: [],
  filteredList: [],
};

const PrezziLatteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRICES_SUCCESS:
      return {
        ...state,
        prezzilist: action.payload,
        filteredList: action.payload,
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

export default PrezziLatteReducer;
