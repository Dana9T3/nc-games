import { useEffect, useState } from "react";
import AddComment from "./AddComment";

const Comments = ({ reviewId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(
      `https://my-nc-games-app.herokuapp.com/api/reviews/${reviewId}/comments`
    )
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
            <div id={reviewId} className="SingleComment">
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
        <button className="AddComment" onClick={<AddComment />}>
          Add Comment
        </button>
      </div>
    );
  } else return <p className="Comments">No comments posted.</p>;
};

export default Comments;
