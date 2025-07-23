import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../constant/apiConstant';

const useGetSingleProduct = (productId) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchSingleProduct = async () => {
      if (!productId) return;
      try {
        const response = await fetch(`${API_BASE_URL}/products/${productId}`);
        if (!response.ok) throw new Error("Failed to fetch product");
        const data = await response.json();
        setData(data.result);
      } catch (error) {
        console.error("Error fetching single product:", error);
      }
    };

    fetchSingleProduct();
  }, [productId]);

  return data;
};
export default useGetSingleProduct;