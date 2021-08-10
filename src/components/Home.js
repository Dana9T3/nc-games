import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ReviewsForCategories from "./components/categoryComponents/ReviewsForCategories";
import Search from "./components/Search";
import Users from "./components/Users";

function Home() {
	const [category, setCategory] = useState([]);
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		fetch(
			`https://my-nc-games-app.herokuapp.com/api/reviews?category=${category}`
		)
			.then((response) => response.json())
			.then((data) => {
				setReviews(data.reviews);
			});
	}, [category, setReviews]);

	return (
		<BrowserRouter>
			<div className="App">
				<Header />

				<Search setReviews={setReviews} />
				<Nav setCategory={setCategory} />
				<Switch>
					<Route exact path="/users">
						<Users />
					</Route>
					<Route exact path="/reviews">
						<ReviewsForCategories
							category={category}
							reviews={reviews}
							setReviews={setReviews}
						/>
					</Route>
				</Switch>
				<img
					className="LogoImage"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_lMJNpLxMrm1QcrSD8ENEDXWE1tnQUb24PA&usqp=CAU"
					alt="Games Logos"
				></img>
			</div>
		</BrowserRouter>
	);
}

export default Home;
