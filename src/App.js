import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ReviewsForCategories from "./components/categoryComponents/ReviewsForCategories";
import Search from "./components/Search";
import Users from "./components/Users";
import { UserContext } from "./contexts/Users";

function App() {
	const [category, setCategory] = useState([]);
	const [reviews, setReviews] = useState([]);
	const [loggedInUser, setLoggedInUser] = useState("");

	useEffect(() => {
		fetch(
			`https://my-nc-games-app.herokuapp.com/api/reviews?category=${category}`
		)
			.then((response) => response.json())
			.then((data) => {
				setReviews(data.reviews);
			});
	}, [category, setReviews]);

	console.log(loggedInUser.length);

	return (
		<BrowserRouter>
			<UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
				<div className="App">
					<Header />

					<Users />
					<Search setReviews={setReviews} />
					<Nav setCategory={setCategory} />
					<Switch>
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
			</UserContext.Provider>
		</BrowserRouter>
	);
}

export default App;
