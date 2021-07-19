import { useState, useEffect } from "react";
import Comments from "./Comments";
import Votes from "./Votes";
//import reviewByReviewId from "./apiCalls";

const ReviewCard = ({ review, setReviews }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [singleReview, setSingleReview] = useState({});
  const [votes, setVotes] = useState(review.votes);

  useEffect(() => {
    fetch(
      `https://my-nc-games-app.herokuapp.com/api/reviews/${review.review_id}`
    )
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setSingleReview(data.review[0]);
      });
  }, [review, setReviews]);

  const toggleIsOpen = () => {
    setIsOpen((currOpen) => !currOpen);
  };

  const isClicked = () => {
    setClicked((currClicked) => !currClicked);
    setVotes((currVotes) => currVotes + 1);
  };

  return (
    <li className="Review-details" key={singleReview.review_id}>
      <div>
        Title:
        <br />
        {singleReview.title}
        <br />
        <br />
        Votes: {votes}
        <button
          id="voteButton"
          className="VoteButton"
          onClick={isClicked}
          disabled={clicked}
        >
          {clicked ? "Voted" : "Upvote!"}
        </button>
        {clicked ? <Votes reviewId={singleReview.review_id} /> : null}
        <br />
        <br />
        Review:
        <br />
        {singleReview.review_body}
        <br />
        <br />
        Publisher:
        <br />
        {singleReview.owner}
        <br />
        <br />
        Comments: {singleReview.comment_count}
        <button onClick={toggleIsOpen}>
          {isOpen ? "Close Comments" : "View Comments"}
        </button>
        {isOpen ? <Comments reviewId={singleReview.review_id} /> : null}
        <br />
        Posted: {singleReview.created_at}
        <br />
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
