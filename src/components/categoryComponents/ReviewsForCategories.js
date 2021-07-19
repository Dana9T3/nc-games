import { useEffect } from "react";

import ReviewCard from "../RevieCard";
//import fetchCategories from "../apiCalls";

const ReviewsForCategories = ({ category, reviews, setReviews }) => {
  useEffect(() => {
    fetch(
      `https://my-nc-games-app.herokuapp.com/api/reviews?category=${category}`
    )
      //fetchCategories(category)
      .then((response) => response.json())
      .then((data) => {
        setReviews(data.reviews);
      });
  }, [category, setReviews]);

  return (
    <div key={reviews.review_id} className="Reviews">
      {reviews.map((review) => {
        return (
          <ReviewCard
            review={review}
            setReviews={setReviews}
            key={review.review_id}
          />
        );
      })}
    </div>
  );
};

export default ReviewsForCategories;
