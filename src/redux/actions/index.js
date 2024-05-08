import axios from "axios";

// Imposta un interceptor per aggiungere il token ad ogni richiesta
/*axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);*/

// KEY USDA : OmfmTW7muPfBACbK4U5PeMVFViEblYHua4g6a6Li
export const ADD_PRICE = "ADD_PRICE";
export const FETCH_PRICES_SUCCESS = "FETCH_PRICES_SUCCESS";
export const FILTER_PRICES = "FILTER_PRICES";
export const FETCH_FILTERED_PRICES_SUCCESS = "FETCH_FILTERED_PRICES_SUCCESS"; // STORICO
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"; // LOGIN :)
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT"; // LOGOUT :(
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

//import axios from "axios";

// Aggiunge un nuovo prezzo
export const addPrice = (priceData) => ({
  type: ADD_PRICE,
  payload: priceData,
});

// Recupera i dati esistenti
export const fetchPrices = () => {
  return async (dispatch) => {
    const prices = [
      {
        prodotto: "Pecorino",
        prezzo: "14 €/kg",
        varPerc: "0%",
        data: "01/05/24",
        luogo: "Siena",
      },
      {
        prodotto: "Latte",
        prezzo: "1,40 €/L",
        varPerc: "0%",
        data: "01/05/24",
        luogo: "Siena",
      },
      {
        prodotto: "Caciotta",
        prezzo: "10 €/kg",
        varPerc: "0%",
        data: "26/04/24",
        luogo: "Firenze",
      },
    ];

    dispatch({
      type: FETCH_PRICES_SUCCESS,
      payload: prices,
    });
  };
};

// Fetches filtered prices based on criteria
export const fetchFilteredPrices = (filterCriteria) => {
  console.log("Sending request with:", filterCriteria);
  return async (dispatch) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/prezzi?data=${filterCriteria.data}&luogo=${filterCriteria.luogo}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Filtered data received:", data);
      dispatch({
        type: FETCH_FILTERED_PRICES_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.error("Failed to fetch prices:", error);
    }
  };
};

// Filters prices (this might now be redundant if fetching from server)
export const filterPrices = (criteria) => ({
  type: FILTER_PRICES,
  payload: criteria,
});

// AZIONE NAVBAR PER LOGGARE E USCIRE
//In questo modo preparo l'app per interagire
// facilmente un backend per la gestione degli utenti, utilizzando
// Redux per gestire lo stato dell'interfaccia utente in modo reattivo
// Azione unificata per effettuare il login
export const loginUser = (credentials, navigate) => async (dispatch) => {
  console.log("Invio dati di login:", credentials);
  try {
    const response = await axios.post(
      "http://localhost:8080/api/auth/login",
      credentials
    );
    console.log("Risposta dal server:", response);
    if (response.status === 200) {
      const { token } = response.data;
      console.log("Login riuscito, token ricevuto:", token);
      dispatch({ type: LOGIN_SUCCESS, payload: token });
      localStorage.setItem("token", token); // Salvataggio del token nel localStorage
      navigate("/");
    } else {
      console.log("Login fallito, status:", response.status);
      dispatch({ type: LOGIN_FAIL });
    }
  } catch (error) {
    console.error(
      "Errore nel login:",
      error.response?.data?.message || error.message
    );
    dispatch({ type: LOGIN_FAIL });
  }
};

// Azione per registrare un nuovo utente
export const registerUser = (userData, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/auth/register",
      userData
    );
    if (response.status === 201) {
      dispatch({ type: REGISTER_SUCCESS, payload: response.data });
      console.log("Registrazione riuscita:", response.data);
      navigate("/");
    } else {
      console.log("Registrazione fallita:", response.status);
      dispatch({ type: REGISTER_FAIL });
    }
  } catch (error) {
    console.error(
      "Errore nella registrazione:",
      error.response?.data?.message || error.message
    );
    dispatch({
      type: REGISTER_FAIL,
      error: error.response?.data?.message || error.message,
    });
  }
};

// Azione per il logout
export const logoutUser = () => {
  localStorage.removeItem("token"); // Rimuove il token dal localStorage
  return {
    type: LOGOUT,
  };
};
