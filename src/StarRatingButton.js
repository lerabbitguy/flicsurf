import React, { useState, useRef, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Star, StarFill } from "react-bootstrap-icons";
import "./StarRatingButton.css";

const StarRatingButton = () => {
  const [showRating, setShowRating] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);
  const buttonRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setShowRating(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleRatingClick = () => {
    setShowRating((prevState) => !prevState);
  };

  const handleStarClick = (rating) => {
    setSelectedRating(rating);
    setShowRating(false);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 10; i++) {
      const starIcon = i <= selectedRating ? (
        <StarFill key={i} className="star-icon filled" onClick={() => handleStarClick(i)} />
      ) : (
        <Star key={i} className="star-icon" onClick={() => handleStarClick(i)} />
      );
      stars.push(starIcon);
    }
    return stars;
  };

  return (
    <div ref={buttonRef} className="star-rating-button">
      <Button onClick={handleRatingClick} className="rate-button">
        {selectedRating > 0 ? (
          <>
            {selectedRating}/10 <StarFill className="star-icon filled" />
          </>
        ) : (
          <>
            Rate <Star className="star-icon" />
          </>
        )}
      </Button>
      {showRating && (
        <div className="rating-popover">
          {renderStars()}
        </div>
      )}
    </div>
  );
};

export default StarRatingButton;