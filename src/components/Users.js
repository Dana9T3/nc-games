import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/Users";

const Users = () => {
	const [users, setUsers] = useState([]);
	const { loggedInUser, setLoggedInUser } = useContext(UserContext);

	useEffect(() => {
		fetch(`https://my-nc-games-app.herokuapp.com/api/users`)
			.then((response) => response.json())
			.then((data) => {
				//console.log(data);
				setUsers(data.usernames);
			});
	}, [loggedInUser]);

	return (
		<div className="UserText">
			Select a User
			<li className="UsersList">
				{users.map((user) => {
					return (
						<div key={user.username} className="SingleUser">
							<button onClick={() => setLoggedInUser(user.username)}>
								{user.username}
							</button>
						</div>
					);
				})}
			</li>
			You are logged in as {loggedInUser}
		</div>
	);
};

export default Users;
