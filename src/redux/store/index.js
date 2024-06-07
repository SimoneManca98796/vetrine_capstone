import { combineReducers, configureStore } from "@reduxjs/toolkit";
import PrezziLatteReducer from "../reducers/PrezziLatteReducers";
import PrezziOviniReducer from "../reducers/PrezziOvini";
import PrezziSuiniReducer from "../reducers/PrezziSuini";
import PrezziBoviniReducer from "../reducers/PrezziBovini";
import PrezziAmericaniReducer from "../reducers/PrezziAmericaniReducer";
import authReducer from "../reducers/authReducer";
import productsReducer from "../reducers/productsReducer";
import paymentReducer from "../reducers/paymentReducer";
import carrelloReducer from "../reducers/carrelloReducer";
import aziendeReducer from "../reducers/aziendeReducer";
import notificationReducer from "../reducers/notificationReducer";

const globalReducer = combineReducers({
  prezziLatte: PrezziLatteReducer, // prezzi del latte
  prezziOvini: PrezziOviniReducer, // prezzi ovini
  prezziSuini: PrezziSuiniReducer, // prezzi suini
  prezziBovini: PrezziBoviniReducer, // prezzi bovini
  prezziAmericani: PrezziAmericaniReducer, // prezzi USA
  auth: authReducer, //  reducer di autenticazione
  products: productsReducer, // reducer dei prodotti per categoria (e-commerce)
  carrello: carrelloReducer, // reducer carrello
  payment: paymentReducer, // reducer per i pagamenti stripe
  aziende: aziendeReducer, // annunci
  notifiche: notificationReducer, // notifiche
});

const store = configureStore({
  reducer: globalReducer,
});

export default store;
