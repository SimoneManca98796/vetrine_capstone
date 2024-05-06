import { combineReducers, configureStore } from "@reduxjs/toolkit";
import PrezziLatteReducer from "../reducers/PrezziLatteReducers";
import authReducer from "../reducers/authReducer";

const globalReducer = combineReducers({
  prezziLatte: PrezziLatteReducer, // prezzi del latte
  auth: authReducer, //  reducer di autenticazione
});

const store = configureStore({
  reducer: globalReducer,
});

export default store;
