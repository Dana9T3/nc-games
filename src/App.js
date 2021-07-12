import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Dexterity from "./components/categoryComponents/Dexterity";

function App() {
  const [category, setCategory] = useState("");

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <Switch>
          <Route exact path="/api/categories/dexterity">
            <Dexterity />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
