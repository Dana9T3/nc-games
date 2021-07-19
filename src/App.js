import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ReviewsForCategories from "./components/categoryComponents/ReviewsForCategories";
import Search from "./components/Search";
import SearchResult from "./components/SearchResult";

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
          {/* <img
            className="LogoImage"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_lMJNpLxMrm1QcrSD8ENEDXWE1tnQUb24PA&usqp=CAU"
            alt="Games Logos"
          ></img> */}
        </Switch>
        <SearchResult />
      </div>
    </BrowserRouter>
  );
}

export default App;
