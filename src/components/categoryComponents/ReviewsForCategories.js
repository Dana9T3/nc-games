import { useEffect, useState } from "react";

import ReviewCard from "../RevieCard";
//import fetchCategories from "../apiCalls";

const ReviewsForCategories = ({ category }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(
      `https://my-nc-games-app.herokuapp.com/api/reviews?category=${category}`
    )
      //fetchCategories(category)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setReviews(data.reviews);
      });
  }, [category]);

  return (
    <div key={reviews.review_id} className="Reviews">
      {reviews.map((review) => {
        return <ReviewCard review={review} />;
      })}
    </div>
  );
};

export default ReviewsForCategories;
