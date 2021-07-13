import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ReviewsForCategories from "./components/categoryComponents/ReviewsForCategories";

function App() {
  const [category, setCategory] = useState([]);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav setCategory={setCategory} />
        <Switch>
          <Route path="/api/categories">
            <ReviewsForCategories category={category} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
