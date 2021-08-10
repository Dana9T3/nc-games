import { useState } from "react";

const Search = ({ setReviews }) => {
	const [search, setSearch] = useState("");

	const fetchReviews = (event) => {
		event.preventDefault();
		fetch(`https://my-nc-games-app.herokuapp.com/api/reviews/`)
			.then((response) => response.json())
			.then((data) => {
				const matchedGame = data.reviews.filter((game) => {
					const lcSearch = search.toLowerCase();
					const lcTitle = game.title.toLowerCase();

					if (lcTitle.includes(lcSearch)) return game;
					else return null;
				});

				setReviews(matchedGame);
			});
	};

	return (
		<div className="Search">
			<p>Search</p>
			<form onSubmit={fetchReviews}>
				<label htmlFor="Game">Enter a Game Title: </label>
				<input
					placeholder="eg. Jenga"
					type="text"
					id="Game"
					onChange={(event) => {
						setSearch(event.target.value);
					}}
				></input>
				<input type="submit" value="Submit"></input>
			</form>
		</div>
	);
};

export default Search;
