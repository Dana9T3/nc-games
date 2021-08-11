import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../contexts/Users";

const AddComment = ({ reviewId, comments, setComments }) => {
	const [postUsername, setPostUsername] = useState("");
	const [postComment, setPostComment] = useState("");
	const { loggedInUser } = useContext(UserContext);

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
				const newComments = [data.comment[0], ...comments];
				setComments(newComments);
			});
		setPostUsername(loggedInUser);
	};
	return (
		<div>
			<p>UserName: {loggedInUser}</p>
			<form onSubmit={HandleSubmit}>
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
		</div>
	);
};

export default AddComment;
