// Create a constant called Dashboard, has props usersByMovie, users, and movies
// Create a sub-constant called movieCards, map through movies via ids, and return a MovieCard with props users, usersWhoLikedMovie, and movieInfo
// Return movie cards in dot points

import MovieCard from "./MovieCard";

const Dashboard = ({ usersLikedMovie, users, movies }) => {
	const movieCards = Object.keys(movies).map((id) => (
		<MovieCard
			key={id}
			users={users}
			usersWhoLikedMovie={usersLikedMovie[id]}
			movieInfo={movies[id]}
		/>
	));
	return <ul>{movieCards}</ul>;
};

export default Dashboard;
