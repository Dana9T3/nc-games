import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ReviewsForCategories from "./components/categoryComponents/ReviewsForCategories";
import Search from "./components/Search";

function App() {
  const [category, setCategory] = useState([]);
  const [reviews, setReviews] = useState([]);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Search setReviews={setReviews} />
        <Nav setCategory={setCategory} />
        <Switch>
          <Route path="/api/categories">
            <ReviewsForCategories
              category={category}
              reviews={reviews}
              setReviews={setReviews}
            />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
