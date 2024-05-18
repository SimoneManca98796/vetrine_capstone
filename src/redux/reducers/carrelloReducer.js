import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  UPDATE_ITEM_QUANTITY,
  APPLY_DISCOUNT_CODE,
} from "../actions/index";

const initialState = {
  items: [],
  discount: 0,
};

const carrelloReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART: {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        const newItems = [...state.items];
        newItems[itemIndex] = {
          ...newItems[itemIndex],
          quantity: newItems[itemIndex].quantity + action.payload.quantity,
        };
        return {
          ...state,
          items: newItems,
        };
      } else {
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      }
    }
    case REMOVE_ITEM_FROM_CART: {
      const newItems = state.items.filter((item) => item.id !== action.payload);
      return {
        ...state,
        items: newItems,
      };
    }
    case UPDATE_ITEM_QUANTITY: {
      const newItems = state.items.map((item) =>
        item.id === action.payload.itemId
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      return {
        ...state,
        items: newItems,
      };
    }
    case APPLY_DISCOUNT_CODE: {
      const discount = action.payload === "DISCOUNT10" ? 10 : 0;
      return {
        ...state,
        discount,
      };
    }
    default:
      return state;
  }
};

export default carrelloReducer;
