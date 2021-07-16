import { useState } from "react";
//import ReviewCard from "./RevieCard";
//import SingleGame from "./SingleGame";

const Search = () => {
  const [search, setSearch] = useState("");

  const FindMatch = (event) => {
    event.preventDefault();

    fetch(`https://my-nc-games-app.herokuapp.com/api/reviews/`)
      .then((response) => response.json())
      .then((data) => {
        const reviews = data.reviews;
        //console.log(reviews);
        return reviews.find((review) => {
          const lcSearch = search.toLowerCase();
          const lcTitle = review.title.toLowerCase();
          // console.log(lcSearch);
          // console.log(lcTitle);
          if (lcTitle === lcSearch) {
            console.log(review);
            // <ReviewCard review={review} />;
          } else {
            console.log("no");
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
