import { useState } from "react";

const AddComment = ({ reviewId, comments, setComments }) => {
  const [postUsername, setPostUsername] = useState("");
  const [postComment, setPostComment] = useState("");

  console.log(comments);

  const HandleSubmit = (event) => {
    event.preventDefault();
    // console.log(postUsername);
    // console.log(postComment);

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
        console.log(data.comment);
        const newComments = [data.comment[0], ...comments];
        setComments(newComments);
      });
  };
  return (
    <form onSubmit={HandleSubmit}>
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
