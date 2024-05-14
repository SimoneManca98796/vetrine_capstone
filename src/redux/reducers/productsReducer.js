import {
  FETCH_PRODUCTS_SUCCESS,
  CREATE_PRODUCT_SUCCESS,
  FILTER_PIANTINE_PRICES,
  FILTER_ARTIGIANALI_PRICES,
  FILTER_ANIMALI_PRICES,
  FILTER_ATTREZZATURE_PRICES,
  SEARCH_PRODUCTS,
} from "../actions";

const initialState = {
  allProducts: [],
  displayedProducts: [],
  piantine: [],
  artigianali: [],
  animali: [],
  attrezzature: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      console.log("Categoria:", action.category);
      console.log("Prodotti ricevuti:", action.payload);
      return {
        ...state,
        [action.category]: action.payload,
      };
    case CREATE_PRODUCT_SUCCESS:
      console.log("Prodotto creato:", action.payload);
      return {
        ...state,
        allProducts: [...state.allProducts, action.payload],
      };
    case SEARCH_PRODUCTS: {
      const filteredAllProducts = state.allProducts.filter((product) =>
        product.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      console.log("Prodotti filtrati:", filteredAllProducts);
      return { ...state, displayedProducts: filteredAllProducts };
    }
    case FILTER_PIANTINE_PRICES:
      return {
        ...state,
        piantine: filterProducts(state.piantine, action.payload),
      };
    case FILTER_ARTIGIANALI_PRICES:
      return {
        ...state,
        artigianali: filterProducts(state.artigianali, action.payload),
      };
    case FILTER_ANIMALI_PRICES:
      return {
        ...state,
        animali: filterProducts(state.animali, action.payload),
      };
    case FILTER_ATTREZZATURE_PRICES:
      return {
        ...state,
        attrezzature: filterProducts(state.attrezzature, action.payload),
      };
    default:
      return state;
  }
};

const filterProducts = (products, criteria) => {
  return products.filter((product) =>
    Object.entries(criteria).every(([key, value]) =>
      product[key].includes(value)
    )
  );
};

export default productsReducer;
