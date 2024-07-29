import React from "react";
import StarRatings from "react-star-ratings";
import PropTypes from "prop-types";
import "../ProductReviews.css";

const StarRating = ({ count, rating, onChangeRating }) => {
  return (
    <StarRatings
      rating={rating}
      starRatedColor="blue" // Cambia il colore degli stelli
      changeRating={onChangeRating}
      numberOfStars={count}
      name="rating"
      starDimension="24px" // Dimensione delle stelle
      starSpacing="2px" // Spaziatura tra le stelle
    />
  );
};

StarRating.propTypes = {
  count: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  onChangeRating: PropTypes.func.isRequired,
};

export default StarRating;
