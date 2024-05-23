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
  displayedPiantine: [],
  displayedArtigianali: [],
  displayedAnimali: [],
  displayedAttrezzature: [],
  piantine: [],
  artigianali: [],
  animali: [],
  attrezzature: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS: {
      const { category } = action;
      const allProducts = removeDuplicates([
        ...state.allProducts,
        ...action.payload,
      ]);
      return {
        ...state,
        allProducts,
        [category]: action.payload,
        [`displayed${capitalizeFirstLetter(category)}`]: action.payload,
      };
    }
    case CREATE_PRODUCT_SUCCESS: {
      const { categoryName } = action.payload;
      const allProducts = removeDuplicates([
        ...state.allProducts,
        action.payload,
      ]);
      return {
        ...state,
        allProducts,
        [categoryName]: [...(state[categoryName] || []), action.payload],
        [`displayed${capitalizeFirstLetter(categoryName)}`]: [
          ...(state[categoryName] || []),
          action.payload,
        ],
      };
    }
    case SEARCH_PRODUCTS: {
      const searchResults = action.payload;
      console.log("Risultati della ricerca nel reducer:", searchResults);
      const categorizeProducts = (products, category) => {
        const filteredProducts = products.filter(
          (product) => product.categoryName === category
        );
        console.log(
          `Prodotti categorizzati come ${category}:`,
          filteredProducts
        );
        return filteredProducts;
      };
      return {
        ...state,
        displayedPiantine: categorizeProducts(searchResults, "piantine"),
        displayedArtigianali: categorizeProducts(searchResults, "artigianali"),
        displayedAnimali: categorizeProducts(searchResults, "animali"),
        displayedAttrezzature: categorizeProducts(
          searchResults,
          "attrezzature"
        ),
      };
    }
    case FILTER_PIANTINE_PRICES:
      return {
        ...state,
        displayedPiantine: filterProducts(state.piantine, action.payload),
      };
    case FILTER_ARTIGIANALI_PRICES:
      return {
        ...state,
        displayedArtigianali: filterProducts(state.artigianali, action.payload),
      };
    case FILTER_ANIMALI_PRICES:
      return {
        ...state,
        displayedAnimali: filterProducts(state.animali, action.payload),
      };
    case FILTER_ATTREZZATURE_PRICES:
      return {
        ...state,
        displayedAttrezzature: filterProducts(
          state.attrezzature,
          action.payload
        ),
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

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default productsReducer;
