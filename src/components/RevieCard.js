import { useState, useEffect } from "react";
import Comments from "./Comments";
import Votes from "./Votes";
//import reviewByReviewId from "./apiCalls";

const ReviewCard = ({ review }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [singleReview, setSingleReview] = useState({});
  const [votes, setVotes] = useState(singleReview.votes);

  useEffect(() => {
    fetch(
      `https://my-nc-games-app.herokuapp.com/api/reviews/${review.review_id}`
    )
      //reviewByReviewId(review)
      .then((response) => response.json())
      .then((data) => {
        setSingleReview(data.review[0]);
      });
  }, [review]);

  const toggleIsOpen = () => {
    setIsOpen((currOpen) => !currOpen);
  };

  const isClicked = () => {
    setClicked((currClicked) => !currClicked);
    setVotes((currVotes) => currVotes + 1);
    document.getElementById("voteButton").disabled = true;
  };

  return (
    <li className="Review-details" key={singleReview.review_id}>
      <div>
        Title: {singleReview.title}
        <br />
        Votes: {singleReview.votes}
        <button id="voteButton" className="VoteButton" onClick={isClicked}>
          {clicked ? "Voted" : "Upvote!"}
        </button>
        {clicked ? <Votes reviewId={singleReview.review_id} /> : null}
        <br />
        Review: {singleReview.review_body}
        <br />
        Publisher: {singleReview.owner}
        <br />
        Comments: {singleReview.comment_count}
        <button onClick={toggleIsOpen}>
          {isOpen ? "Close Comments" : "View Comments"}
        </button>
        {isOpen ? <Comments reviewId={singleReview.review_id} /> : null}
        <br />
        Posted: {singleReview.created_at}
        <br />
        {
          <img
            className="img"
            src={singleReview.review_img_url}
            alt="non"
          ></img>
        }
      </div>
    </li>
  );
};

export default ReviewCard;
