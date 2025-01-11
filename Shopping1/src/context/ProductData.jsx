/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ProductContext = createContext();
const ProductData = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);

  // Product Fetching
  const fetchData = async () => {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products/");
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Add To Cart
  const addToCart = (idx) => {
    setCount((prev) => prev + 1);
    setCart((prevcart) => [...prevcart, idx]);
  };

  // Delete from Cart
  const removeItemFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((_, idx) => idx !== id));
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <ProductContext.Provider
      value={{
        product,
        count,
        setCount,
        cart,
        setCart,
        addToCart,
        removeItemFromCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductData;
