import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://my-nc-games-app.herokuapp.com/api/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.categories);
      });
  }, []);

  return (
    <div className="Nav">
      {categories.map((category) => {
        return (
          <div key={category.slug}>
            <Link to={`/api/categories/${category.slug}`}>{category.slug}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Nav;
