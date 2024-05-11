import { combineReducers, configureStore } from "@reduxjs/toolkit";
import PrezziLatteReducer from "../reducers/PrezziLatteReducers";
import PrezziOviniReducer from "../reducers/PrezziOvini";
import authReducer from "../reducers/authReducer";

const globalReducer = combineReducers({
  prezziLatte: PrezziLatteReducer, // prezzi del latte
  prezziOvini: PrezziOviniReducer, // prezzi ovini
  auth: authReducer, //  reducer di autenticazione
});

const store = configureStore({
  reducer: globalReducer,
});

export default store;
