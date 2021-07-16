import { useState } from "react";

const Search = ({ setReviews }) => {
  const [search, setSearch] = useState("");
  const [allReviews, setAllReviews] = useState([]);

  fetch(`https://my-nc-games-app.herokuapp.com/api/reviews/`)
    .then((response) => response.json())
    .then((data) => {
      setAllReviews(data.reviews);
    });

  const FindGame = () => {
    const matchedGame = allReviews.filter((game) => {
      search.toLowerCase();
      game.title.toLowerCase();
      console.log(game);
    });
    setReviews(matchedGame);
  };

  return (
    <div className="Search">
      <p>Search</p>
      <form onSubmit={FindGame}>
        <label htmlFor="Game">Enter a Game: </label>
        <input
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
