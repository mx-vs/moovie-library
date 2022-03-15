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
				<Label text="Please login or register to see your favorites" />
			)}
		</>
	);
};

export default Home;
