import ReviewCard from "../RevieCard";
//import fetchCategories from "../apiCalls";

const ReviewsForCategories = ({ category, reviews, setReviews }) => {
	return (
		<div key={reviews.review_id} className="Reviews">
			{reviews.map((review) => {
				return (
					<ReviewCard
						review={review}
						setReviews={setReviews}
						key={review.review_id}
					/>
				);
			})}
		</div>
	);
};

export default ReviewsForCategories;
