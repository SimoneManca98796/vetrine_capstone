import {
  FETCH_OVINI_PRICES_SUCCESS,
  FETCH_FILTERED_OVINI_PRICES_SUCCESS,
  ADD_OVINI_PRICE, // Assumi che questa azione sia definita
  FILTER_OVINI_PRICES, // Assumi che questa azione sia definita
} from "../actions";

const initialState = {
  prezzilist: [],
  filteredList: [],
};

const PrezziOviniReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_OVINI_PRICES_SUCCESS: {
      return {
        ...state,
        prezzilist: action.payload,
        filteredList: action.payload, // Assicurati di aggiornare entrambi per coerenza iniziale
      };
    }
    case FETCH_FILTERED_OVINI_PRICES_SUCCESS: {
      return {
        ...state,
        filteredList: action.payload,
      };
    }
    case ADD_OVINI_PRICE: {
      const updatedPrezzi = [...state.prezzilist, action.payload];
      return {
        ...state,
        prezzilist: updatedPrezzi,
        filteredList: updatedPrezzi, // Opzionale: aggiorna la lista filtrata se necessario
      };
    }
    case FILTER_OVINI_PRICES: {
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

export default PrezziOviniReducer;
