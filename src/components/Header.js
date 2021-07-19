import { Link } from "react-router-dom";

const Header = () => {
  return (
    <span className="top">
      <Link to={"/"}>{<h1>NC GAMES</h1>}</Link>
    </span>
  );
};

export default Header;
