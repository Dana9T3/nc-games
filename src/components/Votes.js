import { useEffect } from "react";

const Votes = ({ reviewId }) => {
  console.log(reviewId);

  useEffect(() => {
    fetch(`https://my-nc-games-app.herokuapp.com/api/reviews/${reviewId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ inc_votes: 1 }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  });
  return null;
};

export default Votes;
