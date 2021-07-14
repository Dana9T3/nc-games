import { useState, useEffect } from "react";

const AddComment = (reviewId) => {
  const [postUsername, setPostUsername] = useState("");
  const [postComment, setPostComment] = useState("");
  console.log(reviewId);

  const HandleSubmit = (postUsername, postComment) => {
    // console.log(postUsername);
    // console.log(postComment);
    useEffect(() => {
      fetch(
        `https://my-nc-games-app.herokuapp.com/api/reviews/${reviewId}/comments`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username: postUsername, body: postComment }),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          //response comes back invalid type or not found? ID not passing through correctly?
        });
    });
  };
  return (
    <form onSubmit={HandleSubmit(postUsername, postComment)}>
      <label htmlFor="Username">Username: </label>
      <input
        onChange={(event) => {
          setPostUsername(event.target.value);
        }}
        type="text"
        id="Username"
      ></input>
      <br />
      <label htmlFor="CommentBody">Comment: </label>
      <input
        onChange={(event) => {
          setPostComment(event.target.value);
        }}
        type="text"
        id="CommentBody"
      ></input>

      <input type="submit" value="Submit"></input>
    </form>
  );
};

export default AddComment;
