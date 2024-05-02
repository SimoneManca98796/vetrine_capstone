import { combineReducers, configureStore } from "@reduxjs/toolkit";
import PrezziLatteReducer from "../reducers/PrezziLatteReducers";

const globalReducer = combineReducers({
  prezziLatte: PrezziLatteReducer, // prezzi del latte
});

const store = configureStore({
  reducer: globalReducer,
});

export default store;
