import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";

const AppContext = createContext();

const API_BASE = "https://dummyjson.com/products";

const colorPalettes = [
  ["#1d1d1f", "#f5f5f7", "#86868b"],
  ["#1a1d23", "#7d7e80", "#e3e4e5"],
  ["#232124", "#dcd6cd", "#63605c"],
  ["#ffffff", "#1d1d1f", "#0071e3"],
  ["#bf5af2", "#1d1d1f", "#f5f5f7"],
];

const injectMetadata = (products) => {
  return products.map((product, index) => {
    // Normalize watch categories and replace specific URLs
    let category = product.category;
    if (category?.includes('watches')) category = 'watches';

    // Replace the specific low-quality iPhone 5s URL with a premium one
    let thumbnail = product.thumbnail;
    if (thumbnail.includes('iphone-5s')) {
      thumbnail = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-model-unselect-gallery-1-202309?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693010533334";
    }

    return {
      id: product.id,
      name: product.title,
      company: product.brand || "Gearlogy",
      price: Math.round(product.price * 8000), 
      description: product.description,
      category: category,
      featured: product.rating > 4.5 || index < 10,
      stock: product.stock,
      stars: product.rating,
      reviews: Math.floor(product.rating * 123),
      colors: colorPalettes[index % colorPalettes.length],
      image: [
        { url: thumbnail },
        ...(product.images || []).map(url => ({ url }))
      ].filter(img => img.url && typeof img.url === 'string' && img.url.startsWith('http')),
      brand: product.brand,
    };
  });
};

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async () => {
    dispatch({ type: "SET_LOADING" });
    try {
      const categories = [
        'smartphones', 
        'laptops', 
        'tablets', 
        'mens-watches', 
        'womens-watches', 
        'mobile-accessories'
      ];
      const fetches = categories.map(cat => axios.get(`${API_BASE}/category/${cat}`));
      
      const responses = await Promise.all(fetches);
      const allProducts = responses.flatMap(res => res.data.products);
      
      const enriched = injectMetadata(allProducts);
      dispatch({ type: "SET_API_DATA", payload: enriched });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  const getSingleProduct = async (id) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(`${API_BASE}/${id}`);
      const product = res.data;
      const [enriched] = injectMetadata([product]);
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: enriched });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };