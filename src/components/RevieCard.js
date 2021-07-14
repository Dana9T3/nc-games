import { useState } from "react";
import Comments from "./Comments";
import Votes from "./Votes";

const ReviewCard = ({ review }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen((currOpen) => !currOpen);
  };

  const isClicked = () => {
    setClicked((currClicked) => !currClicked);
  };

  return (
    <li className="Review-details" key={review.review_id}>
      <div>
        Title: {review.title}
        <br />
        Votes: {review.votes}
        <button className="VoteButton" onClick={isClicked}>
          {clicked ? "Voted" : "Upvote!"}
        </button>
        {clicked ? <Votes reviewId={review.review_id} /> : null}
        <br />
        Publisher: {review.owner}
        <br />
        Comments: {review.comment_count}
        <button onClick={toggleIsOpen}>
          {isOpen ? "Close Comments" : "View Comments"}
        </button>
        {isOpen ? <Comments reviewId={review.review_id} /> : null}
        <br />
        Posted: {review.created_at}
        {/* <img>{review.review_img_url}</img> */}
      </div>
    </li>
  );
};

export default ReviewCard;
