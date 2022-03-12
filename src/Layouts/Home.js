import Hero from './Hero';
import Favorites from './Favorites';

const Home = ({ currentUserEmail }) => {
	return (
		<>
			<Hero />
			<Favorites currentUserEmail={currentUserEmail} />
		</>
	);
};

export default Home;
