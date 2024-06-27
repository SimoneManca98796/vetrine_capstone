import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as filledStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import "../ProductReviews.css";

const StarRating = ({ count, rating, onChangeRating }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (index) => {
    onChangeRating(index + 1);
  };

  const handleMouseOver = (index) => {
    setHoverRating(index + 1);
  };

  const handleMouseOut = () => {
    setHoverRating(0);
  };

  return (
    <div className="star-rating">
      {Array.from({ length: count }, (_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={hoverRating > index || rating > index ? filledStar : emptyStar}
          className={hoverRating > index || rating > index ? "selected" : ""}
          onClick={() => handleClick(index)}
          onMouseOver={() => handleMouseOver(index)}
          onMouseOut={handleMouseOut}
        />
      ))}
    </div>
  );
};

StarRating.propTypes = {
  count: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  onChangeRating: PropTypes.func.isRequired,
};

export default StarRating;
