import axios from "axios";
import { createContext, useEffect, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await axios.get(
          "https://product-server-json.onrender.com/products"
        );
        console.table(res.data);
        setItems(res.data);
      } catch (e) {
        console.log(e.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchApi();
  }, []);


  return (
    <ProductContext.Provider value={{ items, isLoading }}>
      {children}
    </ProductContext.Provider>
  )
};

export default ProductContext;
