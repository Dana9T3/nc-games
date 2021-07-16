export const reviewByReviewId = (review) => {
  return fetch(
    `https://my-nc-games-app.herokuapp.com/api/reviews/${review.review_id}`
  );
};

export const fetchCategories = (category) => {
  console.log(category);
  return fetch(
    `https://my-nc-games-app.herokuapp.com/api/reviews?category=${category}`
  );
};

export const fetchCommentsByReviewId = (reviewId) => {
  return fetch(
    `https://my-nc-games-app.herokuapp.com/api/reviews/${reviewId}/comments`
  );
};

export default reviewByReviewId;
