import { Link } from "react-router-dom";

const Header = () => {
  return <Link to={"/"}>{<h1>NC GAMES</h1>}</Link>;
};

export default Header;