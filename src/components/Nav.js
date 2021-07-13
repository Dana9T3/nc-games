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
      {categories.map((category) => {
        return (
          <div key={category.slug}>
            <p>
              <Link
                to={`/api/categories/${category.slug}`}
                onClick={() => {
                  setCategory(category.slug);
                }}
              >
                {category.slug}{" "}
              </Link>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Nav;
