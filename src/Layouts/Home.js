import Hero from './Hero';
import Favorites from './Favorites';
import Label from '../Components/Label';

const Home = ({ currentUserEmail, favorites }) => {
	return (
		<>
			<Hero />
			{currentUserEmail !== null ? (
				<Favorites currentUserEmail={currentUserEmail} favorites={favorites} />
			) : (
				<Label text="Please login to see your favorites"></Label>
			)}
		</>
	);
};

export default Home;
