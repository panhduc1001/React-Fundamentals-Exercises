// Create a constant, return users who like a movie
// If no one likes the movie, return a message stating that no one likes the movie
// Else, create a constant called listofLikedUsers, map with users' ids, and return a list of users who like the movie

const UserList = ({ users, usersWhoLikedMovie }) => {
	if (!usersWhoLikedMovie || usersWhoLikedMovie.length === 0) {
		return <p>None of the current users liked this movie.</p>;
	}

	const listofLikedUsers = usersWhoLikedMovie.map((id) => (
		<li key={id}>
			<p>{users[id].name}</p>
		</li>
	));

	return <ul>{listofLikedUsers}</ul>;
};

export default UserList;
