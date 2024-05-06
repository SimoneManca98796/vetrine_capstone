// KEY USDA : OmfmTW7muPfBACbK4U5PeMVFViEblYHua4g6a6Li
export const ADD_PRICE = "ADD_PRICE";
export const FETCH_PRICES_SUCCESS = "FETCH_PRICES_SUCCESS";
export const FILTER_PRICES = "FILTER_PRICES";
export const FETCH_FILTERED_PRICES_SUCCESS = "FETCH_FILTERED_PRICES_SUCCESS"; // STORICO

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
