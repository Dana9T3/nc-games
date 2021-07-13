import { useEffect, useState } from "react";

const Comments = ({ reviewId }) => {
  console.log(reviewId);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(
      `https://my-nc-games-app.herokuapp.com/api/reviews/${reviewId}/comments`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setComments(data.comments);
      });
  }, [reviewId]);

  if (comments) {
    return (
      <div>
        {comments.map((comment) => {
          return (
            <div>
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
      </div>
    );
  } else return <p>No comments posted.</p>;
};

export default Comments;
