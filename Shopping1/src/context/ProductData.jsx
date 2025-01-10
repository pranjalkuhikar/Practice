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

  return (
    <ProductContext.Provider
      value={{ product, count, setCount, cart, setCart }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductData;
