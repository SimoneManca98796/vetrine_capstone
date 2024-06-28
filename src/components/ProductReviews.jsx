import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import StarRating from "./StarRating";
import "../ProductReviews.css";

const ProductReviews = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ comment: "", rating: 0 });
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/reviews/product/${productId}`
        );
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, [productId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleRatingChange = (newRating) => {
    setNewReview({ ...newReview, rating: newRating });
  };

  const handleSubmitReview = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:8080/api/reviews",
        { ...newReview, product: { id: productId } },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setReviews([...reviews, response.data]);
      setMessage("Review submitted successfully");
      setNewReview({ comment: "", rating: 0 });
    } catch (error) {
      console.error("Error submitting review:", error);
      setMessage("Failed to submit review");
    }
  };

  return (
    <div className="product-reviews">
      <h2>Recensione Prodotto</h2>
      {message && <p>{message}</p>}
      {reviews.map((review) => (
        <div key={review.id} className="product-review">
          <StarRating
            count={5}
            rating={review.rating}
            onChangeRating={() => {}}
          />
          <p>{review.comment}</p>
          <p>
            <strong>By:</strong> {review.user.name}
          </p>
        </div>
      ))}
      <div className="submit-review">
        <h3>Invia Recensione</h3>
        <input
          type="text"
          name="comment"
          value={newReview.comment}
          onChange={handleInputChange}
          placeholder="Lascia un commento..."
        />
        <StarRating
          count={5}
          rating={newReview.rating}
          onChangeRating={handleRatingChange}
        />
        <button onClick={handleSubmitReview}>Invia</button>
      </div>
    </div>
  );
};

ProductReviews.propTypes = {
  productId: PropTypes.any.isRequired,
};

export default ProductReviews;
