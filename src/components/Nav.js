import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nav = ({ setCategory }) => {
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
      <p>Choose a Category</p>
      {categories.map((category) => {
        return (
          <span key={category.slug} className="SingleCat">
            <Link
              to={`/api/categories`}
              onClick={() => {
                setCategory(category.slug);
              }}
            >
              {category.slug}{" "}
            </Link>
          </span>
        );
      })}
    </div>
  );
};

export default Nav;
