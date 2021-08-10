import { Link } from "react-router-dom";

const Header = () => {
	return (
		<span className="top">
			<div className="header">
				<Link to={"/"}>{<h1>🎲 NC GAMES 🎲</h1>}</Link>
			</div>
			{/* <div className="login">Select a User</div> */}
		</span>
	);
};

export default Header;
