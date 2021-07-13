import { useEffect, useState } from "react";

const ReviewsForCategories = ({ category }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(
      `https://my-nc-games-app.herokuapp.com/api/reviews?category=${category}`
    )
      .then((response) => response.json())
      .then((data) => {
        setReviews(data.reviews);
      });
  }, [category]);

  return (
    <div className="Reviews">
      {reviews.map((review) => {
        return (
          <li className="Review-details" key={review.review_id}>
            <div>
              Title: {review.title}
              <br />
              Votes: {review.votes}
              <br />
              Publisher: {review.owner}
              <br />
              Comments: {review.comment_count}
              <br />
              Posted: {review.created_at}
              {/* <img>{review.review_img_url}</img> */}
            </div>
          </li>
        );
      })}
    </div>
  );
};

export default ReviewsForCategories;
