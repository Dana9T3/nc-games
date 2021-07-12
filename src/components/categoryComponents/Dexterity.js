import { useEffect, useState } from "react";

const Dexterity = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch(
      `https://my-nc-games-app.herokuapp.com/api/reviews?category=dexterity`
    )
      .then((response) => response.json())
      .then((data) => {
        setCategory(data.reviews);
      });
  });

  return (
    <div className="Reviews">
      {category.map((review) => {
        return (
          <div className="Review-details" key={review.review_id}>
            <li>
              {review.review_id}
              {review.title}
              {review.votes}
              {review.owner}
              {review.comment_count}
              {review.created_at}
            </li>
          </div>
        );
      })}
    </div>
  );
};

export default Dexterity;
