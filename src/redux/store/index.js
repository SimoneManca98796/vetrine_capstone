import { configureStore } from "@reduxjs/toolkit";
import PrezziLatteReducer from "../reducers/PrezziLatteReducers";

const store = configureStore({
  reducer: {
    prezziLatte: PrezziLatteReducer,
  },
});

export default store;
