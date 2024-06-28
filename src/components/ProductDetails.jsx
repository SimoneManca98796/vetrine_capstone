import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductReviews from "./ProductReviews";
import "../ProductDetails.css";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/products/${productId}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  return (
    <div className="product-details-container">
      {product ? (
        <div className="product-info">
          <h2>{product.name}</h2>
          <img
            src={product.imageUrl}
            alt={product.name}
            className="product-image"
          />
          <p>{product.description}</p>
          <p>
            <strong>Prezzo:</strong> €{product.price}
          </p>
          <p>
            <strong>Venditore:</strong>{" "}
            {product.vendorName
              ? `${product.vendorName} ${product.vendorSurname}`
              : "Non specificato"}
          </p>
          <ProductReviews productId={productId} />
        </div>
      ) : (
        <p>Caricamento...</p>
      )}
    </div>
  );
};

export default ProductDetails;
