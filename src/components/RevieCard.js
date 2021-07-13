import { useState } from "react";
import Comments from "./Comments";

const ReviewCard = ({ review }) => {
  const [isOpen, setIsOpen] = useState(false);
  //console.log(review);

  const toggleIsOpen = () => {
    setIsOpen((currOpen) => !currOpen);
  };

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
        <button onClick={toggleIsOpen}>
          {isOpen ? <Comments reviewId={review.review_id} /> : "View Comments"}
        </button>
        <br />
        Posted: {review.created_at}
        {/* <img>{review.review_img_url}</img> */}
      </div>
    </li>
  );
};

export default ReviewCard;
