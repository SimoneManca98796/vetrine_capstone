import {
  CREATE_PAYMENT_INTENT_SUCCESS,
  CREATE_PAYMENT_INTENT_FAILURE,
} from "../actions";

const initialState = {
  paymentIntent: null,
  error: null,
};

const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PAYMENT_INTENT_SUCCESS:
      return {
        ...state,
        paymentIntent: action.payload.paymentIntent,
        error: null,
      };
    case CREATE_PAYMENT_INTENT_FAILURE:
      return {
        ...state,
        paymentIntent: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default paymentReducer;
