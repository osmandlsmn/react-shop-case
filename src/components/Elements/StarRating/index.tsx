import Icon from "@/components/Icon";
import React from "react";

interface RatingProps {
  rating: number;
}

const StarRating: React.FC<RatingProps> = ({ rating = 0 }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <span key={index}>{index <= rating ? <Icon icon="star" color="#FFC107" size={18} /> : <Icon icon="star" color="#CCCCCC" size={18} />}</span>
        );
      })}
    </div>
  );
};

export default StarRating;
