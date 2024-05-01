// KEY USDA : OmfmTW7muPfBACbK4U5PeMVFViEblYHua4g6a6Li
export const ADD_PRICE = "ADD_PRICE";
export const FETCH_PRICES_SUCCESS = "FETCH_PRICES_SUCCESS";

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
