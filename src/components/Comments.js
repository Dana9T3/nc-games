import { useEffect, useState } from "react";
import AddComment from "./AddComment";
//import { fetchCommentsByReviewId } from "./apiCalls";

const Comments = ({ reviewId }) => {
  const [comments, setComments] = useState([]);
  const [addComment, setAddComment] = useState(false);

  const toggleAddComment = () => {
    setAddComment((currComment) => !currComment);
  };

  useEffect(() => {
    fetch(
      `https://my-nc-games-app.herokuapp.com/api/reviews/${reviewId}/comments`
    )
      //fetchCommentsByReviewId(reviewId)
      .then((response) => response.json())
      .then((data) => {
        setComments(data.comments);
      });
  }, [reviewId]);

  if (comments) {
    return (
      <div className="Comments">
        {comments.map((comment) => {
          return (
            <div
              key={comment.comment_id}
              id={reviewId}
              className="SingleComment"
            >
              Author: {comment.author}
              <br />
              Review: {comment.body}
              <br />
              Posted: {comment.created_at}
              <br />
              Votes: {comment.votes}
            </div>
          );
        })}
        <button className="AddComment" onClick={toggleAddComment}>
          Add Comment
        </button>
        {addComment ? (
          <AddComment
            reviewId={reviewId}
            comments={comments}
            setComments={setComments}
          />
        ) : null}
      </div>
    );
  } else
    return (
      <div className="Comments">
        No comments posted.
        <br />
        <button className="AddComment" onClick={toggleAddComment}>
          Add Comment
        </button>
        {addComment ? <AddComment reviewId={reviewId} /> : null}
      </div>
    );
};

export default Comments;
