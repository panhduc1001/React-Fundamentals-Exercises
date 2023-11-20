// Create a constant called MovieCard, has props users, usersWhoLikedMovie, and movieInfo
// Return a list item with a key of movieInfo.id, display movie name and users who liked its

import UserList from "./UserList";

const MovieCard = ({ users, usersWhoLikedMovie, movieInfo }) => {
	return (
		<li key={movieInfo.id}>
			<h2>{movieInfo.name}</h2>
			<h3>Liked By:</h3>
			<UserList usersWhoLikedMovie={usersWhoLikedMovie} users={users} />
		</li>
	);
};

export default MovieCard;
