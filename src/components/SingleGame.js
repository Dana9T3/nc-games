const SingleGame = ({ review }) => {
  console.log(review);
  return <p>hi</p>;
  // return (
  //   <li className="Review-details" key={singleReview.review_id}>
  //     <div>
  //       Title: {singleReview.title}
  //       <br />
  //       Votes: {singleReview.votes}
  //       <button className="VoteButton" onClick={isClicked}>
  //         {clicked ? "Voted" : "Upvote!"}
  //       </button>
  //       {clicked ? <Votes reviewId={singleReview.review_id} /> : null}
  //       <br />
  //       Review: {singleReview.review_body}
  //       <br />
  //       Publisher: {singleReview.owner}
  //       <br />
  //       Comments: {singleReview.comment_count}
  //       <button onClick={toggleIsOpen}>
  //         {isOpen ? "Close Comments" : "View Comments"}
  //       </button>
  //       {isOpen ? <Comments reviewId={singleReview.review_id} /> : null}
  //       <br />
  //       Posted: {singleReview.created_at}
  //       <br />
  //       {
  //         <img
  //           className="img"
  //           src={singleReview.review_img_url}
  //           alt="non"
  //         ></img>
  //       }
  //     </div>
  //   </li>
  // );
};

export default SingleGame;
