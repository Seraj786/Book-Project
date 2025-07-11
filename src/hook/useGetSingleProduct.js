import { useEffect, useState } from 'react';

const useGetSingleProduct = (productId) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchSingleProduct = async () => {
      if (!productId) return;
      try {
        const response = await fetch(`https://localhost:3000/products/${productId}`);
        if (!response.ok) throw new Error("Failed to fetch product");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching single product:", error);
      }
    };

    fetchSingleProduct();
  }, [productId]);

  return data;
};
export default useGetSingleProduct;