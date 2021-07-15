import { useState } from "react";
import SingleGame from "./SingleGame";

const Search = () => {
  const [search, setSearch] = useState("");

  const FindMatch = (event) => {
    event.preventDefault();

    fetch(`https://my-nc-games-app.herokuapp.com/api/reviews/`)
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        data.reviews.filter((review) => {
          search.toLowerCase();
          review.title.toLowerCase();
          //   console.log(search);
          //   console.log(review.title);
          if (review.title === search) {
            return <SingleGame review={review} />;
          } else {
            <p>Game not found</p>;
          }
        });
      });
  };

  return (
    <div className="Search">
      <p>Search</p>
      <form onSubmit={FindMatch}>
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
