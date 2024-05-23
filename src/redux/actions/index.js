import axios from "axios";

const USDA_API_KEY = "OmfmTW7muPfBACbK4U5PeMVFViEblYHua4g6a6Li";

// Imposta un interceptor per aggiungere il token ad ogni richiesta
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    console.log("Current token:", token);
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

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
export const FETCH_OVINI_PRICES_SUCCESS = "FETCH_OVINI_PRICES_SUCCESS"; //PREZZI OVINI
export const FETCH_FILTERED_OVINI_PRICES_SUCCESS =
  "FETCH_FILTERED_OVINI_PRICES_SUCCESS"; //PREZZI OVINI
export const ADD_OVINI_PRICE = "ADD_OVINI_PRICE"; // Action type per aggiungere un prezzo agli ovini
export const FILTER_OVINI_PRICES = "FILTER_OVINI_PRICES";
// Action type per filtrare i prezzi degli ovini
//import axios from "axios";
///////////////////////
// PER SUINI:
export const FETCH_SUINI_PRICES_SUCCESS = "FETCH_SUINI_PRICES_SUCCESS"; //PREZZI SUINI
export const FETCH_FILTERED_SUINI_PRICES_SUCCESS =
  "FETCH_FILTERED_OVINI_PRICES_SUCCESS"; //PREZZI SUINI
export const ADD_SUINI_PRICE = "ADD_OVINI_PRICE"; // Action type per aggiungere un prezzo agli suini
export const FILTER_SUINI_PRICES = "FILTER_SUINI_PRICES";
// PER BOVINI:
export const FETCH_BOVINI_PRICES_SUCCESS = "FETCH_BOVINI_PRICES_SUCCESS"; //PREZZI BOVINI
export const FETCH_FILTERED_BOVINI_PRICES_SUCCESS =
  "FETCH_FILTERED_BOVINI_PRICES_SUCCESS"; //PREZZI BOVINI
export const ADD_BOVINI_PRICE = "ADD_BOVINI_PRICE"; // Action type per aggiungere un prezzo ai bovini
export const FILTER_BOVINI_PRICES = "FILTER_BOVINI_PRICES";
// COSTANTI PER E-COMMERCE:
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FILTER_PIANTINE_PRICES = "FILTER_PIANTINE_PRICES";
export const FILTER_ARTIGIANALI_PRICES = "FILTER_ARTIGIANALI_PRICES";
export const FILTER_ANIMALI_PRICES = "FILTER_ANIMALI_PRICES";
export const FILTER_ATTREZZATURE_PRICES = "FILTER_ATTREZZATURE_PRICES";
export const SEARCH_PRODUCTS = "SEARCH_PRODUCTS";
export const CREATE_PRODUCT_SUCCESS = "CREATE_PRODUCT_SUCCESS";
// COSTANTI PER PAGAMENTI:
export const CREATE_PAYMENT_INTENT_SUCCESS = "CREATE_PAYMENT_INTENT_SUCCESS";
export const CREATE_PAYMENT_INTENT_FAILURE = "CREATE_PAYMENT_INTENT_FAILURE";
// CARRELLO COSTANTI:
export const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
export const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART";
export const UPDATE_ITEM_QUANTITY = "UPDATE_ITEM_QUANTITY";
export const APPLY_DISCOUNT_CODE = "APPLY_DISCOUNT_CODE";
// AZIENDE:
export const FETCH_AZIENDE_SUCCESS = "FETCH_AZIENDE_SUCCESS";
export const CREATE_AZIENDA_SUCCESS = "CREATE_AZIENDA_SUCCESS";
// NOTIFICHE:
export const FETCH_NOTIFICATIONS_SUCCESS = "FETCH_NOTIFICATIONS_SUCCESS";
//////////////////////////////////////////
///////////////// ZONA FETCH://////////////////////////
// Aggiunge un nuovo prezzo
export const addNewPrice = (priceData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/prezzi",
        priceData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch({
        type: ADD_PRICE,
        payload: response.data,
      });
      console.log("Prezzo aggiunto con successo", response.data);
    } catch (error) {
      console.error("Errore nell'aggiungere il nuovo prezzo:", error);
    }
  };
};

// Recupera i dati esistenti
export const fetchPrices = () => {
  return async (dispatch) => {
    const prices = [
      {
        prodotto: "Pecorino",
        prezzo: "14",
        varPerc: "0",
        data: "01/05/24",
        luogo: "Siena",
      },
      {
        prodotto: "Latte",
        prezzo: "1,40",
        varPerc: "0",
        data: "01/05/24",
        luogo: "Siena",
      },
      {
        prodotto: "Caciotta",
        prezzo: "10",
        varPerc: "0",
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
      const response = await axios.get(
        `http://localhost:8080/api/prezzi?data=${filterCriteria.data}&luogo=${filterCriteria.luogo}`
      );
      if (response.status === 200) {
        dispatch({
          type: FETCH_FILTERED_PRICES_SUCCESS,
          payload: response.data,
        });
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
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
export const loginUser =
  (credentials, navigate, setErrorMessage) => async (dispatch) => {
    console.log("Invio dati di login:", credentials);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        credentials
      );
      console.log("Risposta dal server:", response);
      if (response.status === 200) {
        const { token, avatarUrl } = response.data;
        console.log("Login riuscito, token ricevuto:", token);
        dispatch({ type: LOGIN_SUCCESS, payload: { token, avatarUrl } });
        localStorage.setItem("token", token); // Salvataggio del token nel localStorage
        localStorage.setItem("avatarUrl", avatarUrl); // Salva l'URL dell'avatar
        alert("Benvenuto! Accesso effettuato con successo.");
        navigate("/");
      } else {
        console.log("Login fallito, status:", response.status);
        dispatch({ type: LOGIN_FAIL });
        setErrorMessage("Errore nel login. Riprova.");
      }
    } catch (error) {
      console.error(
        "Errore nel login:",
        error.response?.data?.message || error.message
      );
      dispatch({ type: LOGIN_FAIL });
      setErrorMessage("Hai sbagliato password, riprova!");
    }
  };

// Azione per registrare un nuovo utente
export const registerUser =
  (userData, navigate, setErrors) => async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/register",
        userData
      );
      if (response.status === 201) {
        dispatch({ type: REGISTER_SUCCESS, payload: response.data });
        console.log("Registrazione riuscita:", response.data);
        alert("Registrazione riuscita! Benvenuto.");
        navigate("/");
      } else {
        console.log("Registrazione fallita:", response.status);
        dispatch({ type: REGISTER_FAIL });
        setErrors({ general: "Registrazione fallita. Riprova." });
      }
      return response;
    } catch (error) {
      console.error(
        "Errore nella registrazione:",
        error.response?.data?.message || error.message
      );
      dispatch({
        type: REGISTER_FAIL,
        error: error.response?.data?.message || error.message,
      });
      setErrors(
        error.response?.data?.errors || {
          general: "Si è verificato un errore di registrazione.",
        }
      );
    }
  };

// Azione per il logout
export const logoutUser = () => {
  localStorage.removeItem("token"); // Rimuove il token dal localStorage
  return {
    type: LOGOUT,
  };
};
//////////////
// Aggiungi questa azione in actions/index.js
export const updateAvatarUrl = (avatarUrl) => {
  console.log("Aggiornamento URL Avatar:", avatarUrl);
  return {
    type: "UPDATE_AVATAR_URL",
    payload: avatarUrl,
  };
};
///////////////////////////
///////////////////////////
// Fetch prices PER OVINI
export const fetchOviniPrices = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:8080/api/prezziOvini");
      dispatch({
        type: FETCH_OVINI_PRICES_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.error("Failed to fetch ovini prices:", error);
    }
  };
};

// Fetch filtered prices PER OVINI
export const fetchFilteredOviniPrices = (filterCriteria) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/prezziOvini?data=${filterCriteria.data}&luogo=${filterCriteria.luogo}`
      );
      dispatch({
        type: FETCH_FILTERED_OVINI_PRICES_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.error("Failed to fetch filtered ovini prices:", error);
    }
  };
};
//////////////////
// Aggiungi un nuovo prezzo per gli ovini
export const addOviniPrice = (priceData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/prezziOvini",
        priceData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch({
        type: ADD_OVINI_PRICE,
        payload: response.data,
      });
      console.log("Prezzo ovini aggiunto con successo", response.data);
    } catch (error) {
      console.error("Errore nell'aggiungere il nuovo prezzo ovini:", error);
    }
  };
};

// Azione per filtrare i prezzi degli ovini in locale
export const filterOviniPrices = (criteria) => ({
  type: FILTER_OVINI_PRICES,
  payload: criteria,
});
////////////////////
///////////////////////////
// Fetch prices PER SUINI
export const fetchSuiniPrices = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:8080/api/prezziSuini");
      dispatch({
        type: FETCH_SUINI_PRICES_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.error("Failed to fetch ovini prices:", error);
    }
  };
};

// Fetch filtered prices PER OVINI
export const fetchFilteredSuiniPrices = (filterCriteria) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/prezziSuini?data=${filterCriteria.data}&luogo=${filterCriteria.luogo}`
      );
      dispatch({
        type: FETCH_FILTERED_SUINI_PRICES_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.error("Failed to fetch filtered ovini prices:", error);
    }
  };
};
//////////////////
// Aggiungi un nuovo prezzo per i suini
export const addSuiniPrice = (priceData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/prezziSuini",
        priceData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch({
        type: ADD_SUINI_PRICE,
        payload: response.data,
      });
      console.log("Prezzo suini aggiunto con successo", response.data);
    } catch (error) {
      console.error("Errore nell'aggiungere il nuovo prezzo suini:", error);
    }
  };
};

// Azione per filtrare i prezzi dei suini in locale
export const filterSuiniPrices = (criteria) => ({
  type: FILTER_SUINI_PRICES,
  payload: criteria,
});
////////////////////
// BOVINI:
// Fetch prices PER BOVINI
export const fetchBoviniPrices = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/prezziBovini"
      );
      dispatch({
        type: FETCH_BOVINI_PRICES_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.error("Failed to fetch bovini prices:", error);
    }
  };
};

// Fetch filtered prices PER OVINI
export const fetchFilteredBoviniPrices = (filterCriteria) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/prezziBovini?data=${filterCriteria.data}&luogo=${filterCriteria.luogo}`
      );
      dispatch({
        type: FETCH_FILTERED_BOVINI_PRICES_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.error("Failed to fetch filtered bovini prices:", error);
    }
  };
};
//////////////////
// Aggiungi un nuovo prezzo per gli ovini
export const addBoviniPrice = (priceData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/prezziBovini",
        priceData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch({
        type: ADD_BOVINI_PRICE,
        payload: response.data,
      });
      console.log("Prezzo bovini aggiunto con successo", response.data);
    } catch (error) {
      console.error("Errore nell'aggiungere il nuovo prezzo bovini:", error);
    }
  };
};

// Azione per filtrare i prezzi dei bovini in locale
export const filterBoviniPrices = (criteria) => ({
  type: FILTER_BOVINI_PRICES,
  payload: criteria,
});
////////////////////
// Azioni
export const fetchProductsByCategory = (category) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/products/categoryName/${category}`
    );
    console.log("Risposta API:", response.data);
    dispatch({
      type: FETCH_PRODUCTS_SUCCESS,
      category,
      payload: response.data,
    });
  } catch (error) {
    console.error(`Failed to fetch products for category ${category}:`, error);
  }
};

// Azione di filtro per piantine&Ortaggi
export const filterPiantinePrices = (criteria) => ({
  type: FILTER_PIANTINE_PRICES,
  payload: criteria,
});

// Azione di filtro per prodotti artigianali
export const filterArtigianaliPrices = (criteria) => ({
  type: FILTER_ARTIGIANALI_PRICES,
  payload: criteria,
});

// Azione di filtro per animali
export const filterAnimaliPrices = (criteria) => ({
  type: FILTER_ANIMALI_PRICES,
  payload: criteria,
});

// Azione di filtro per attrezzature e utensili
export const filterAttrezzaturePrices = (criteria) => ({
  type: FILTER_ATTREZZATURE_PRICES,
  payload: criteria,
});
///////////////////////////////////
//////// BARRA DI RICERCA ////////////////
export const searchProducts = (searchTerm) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/products/search?query=${searchTerm}`
      );
      if (response.data && Array.isArray(response.data)) {
        console.log("Risposta API con categoria:", response.data);
        dispatch({
          type: SEARCH_PRODUCTS,
          payload: response.data,
        });
      } else {
        throw new Error("Invalid response data");
      }
    } catch (error) {
      console.error("Errore nella ricerca dei prodotti:", error);
    }
  };
};
//////////////////////

//////////////////////////////////////////
// Funzione per creare un nuovo prodotto
export const createProduct = (productData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/products",
        productData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch({
        type: CREATE_PRODUCT_SUCCESS,
        payload: response.data,
      });
      console.log("Prodotto creato con successo", response.data);
    } catch (error) {
      console.error("Errore nella creazione del prodotto:", error);
    }
  };
};
//////////////////////////////////////////////////77
////////////////////////////////////////////////////
/*export const createPaymentIntent =
  (paymentMethodId, amount) => async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/payment/create-payment-intent",
        {
          paymentMethodId,
          amount,
        }
      );
      dispatch({
        type: CREATE_PAYMENT_INTENT_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_PAYMENT_INTENT_FAILURE,
        payload: error.message,
      });
    }
  };*/
//////////////////////////////
////////////////API AMERICANA UDSA //////////////////////////
// Helper function to filter the relevant data
const filterRelevantData = (foods) => {
  const relevantKeywords = ["ovine", "suine", "bovine", "cheese", "milk"];
  return foods.filter((food) => {
    const description = food.description.toLowerCase();
    return relevantKeywords.some((keyword) => description.includes(keyword));
  });
};

// Fetch American prices
export const fetchAmericanPrices = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://api.nal.usda.gov/fdc/v1/foods/search?query=prices&api_key=${USDA_API_KEY}`
      );
      const filteredData = filterRelevantData(response.data.foods);
      dispatch({
        type: FETCH_PRICES_SUCCESS,
        payload: filteredData,
      });
    } catch (error) {
      console.error("Failed to fetch American prices:", error);
    }
  };
};

// Fetch filtered American prices
export const fetchFilteredAmericanPrices = (filterCriteria) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://api.nal.usda.gov/fdc/v1/foods/search?query=prices&data=${filterCriteria.data}&luogo=${filterCriteria.luogo}&api_key=${USDA_API_KEY}`
      );
      const filteredData = filterRelevantData(response.data.foods);
      dispatch({
        type: FETCH_FILTERED_PRICES_SUCCESS,
        payload: filteredData,
      });
    } catch (error) {
      console.error("Failed to fetch filtered American prices:", error);
    }
  };
};
/////////////////////////////////////////////////////////////
// AZIONI CARRELLO PRODOTTI: // Azioni
export const addItemToCart = (item) => ({
  type: ADD_ITEM_TO_CART,
  payload: item,
});

export const removeItemFromCart = (itemId) => ({
  type: REMOVE_ITEM_FROM_CART,
  payload: itemId,
});

export const updateItemQuantity = (itemId, quantity) => ({
  type: UPDATE_ITEM_QUANTITY,
  payload: { itemId, quantity },
});

export const applyDiscountCode = (code) => ({
  type: APPLY_DISCOUNT_CODE,
  payload: code,
});
///////////////////////
/////// AZIENDE ///////////////7
export const fetchAziende = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:8080/api/aziende");
    dispatch({
      type: FETCH_AZIENDE_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.error("Failed to fetch aziende:", error);
  }
};

export const createAzienda = (aziendaData) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/aziende",
      aziendaData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    dispatch({
      type: CREATE_AZIENDA_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.error("Errore nella creazione dell'azienda:", error);
  }
};
//////////////////
// NOTIFICHE:
export const fetchNotifications = () => async (dispatch) => {
  try {
    const response = await fetch("/api/notifications");
    const data = await response.json();
    console.log("Fetched notifications:", data);
    dispatch({ type: FETCH_NOTIFICATIONS_SUCCESS, payload: data });
  } catch (error) {
    console.error("Failed to fetch notifications:", error);
  }
};
