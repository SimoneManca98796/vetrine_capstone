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
    case FETCH_PRODUCTS_SUCCESS: {
      console.log("Categoria:", action.category);
      console.log("Prodotti ricevuti:", action.payload);
      const allProducts = removeDuplicates([
        ...state.allProducts,
        ...action.payload,
      ]);
      return {
        ...state,
        allProducts,
        [action.category]: action.payload,
        displayedProducts: allProducts,
      };
    }
    case CREATE_PRODUCT_SUCCESS: {
      console.log("Prodotto creato:", action.payload);
      const { categoryName } = action.payload;
      const allProducts = removeDuplicates([
        ...state.allProducts,
        action.payload,
      ]);
      return {
        ...state,
        allProducts,
        [categoryName]: [...(state[categoryName] || []), action.payload],
        displayedProducts: allProducts,
      };
    }
    case SEARCH_PRODUCTS: {
      if (Array.isArray(action.payload)) {
        const filteredProducts = state.allProducts.filter((product) =>
          action.payload.some(
            (searchResult) =>
              searchResult.id === product.id ||
              product.name
                .toLowerCase()
                .includes(searchResult.name.toLowerCase())
          )
        );
        console.log("Prodotti filtrati:", filteredProducts);
        return { ...state, displayedProducts: filteredProducts };
      } else {
        console.error(
          "SEARCH_PRODUCTS payload is not an array:",
          action.payload
        );
        return state;
      }
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

const removeDuplicates = (products) => {
  const uniqueProducts = [];
  const productIds = new Set();

  for (const product of products) {
    if (!productIds.has(product.id)) {
      uniqueProducts.push(product);
      productIds.add(product.id);
    }
  }

  return uniqueProducts;
};

export default productsReducer;
