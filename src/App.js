import { useState, useEffect, useCallback } from 'react';
import { db } from './services/firebase';
import { collection, getDocs } from 'firebase/firestore';
import axios from 'axios';
import './App.css';
import Header from './layouts/Header/Header';
import Main from './layouts/Main/Main';
import Footer from './layouts/Footer/Footer';

const App = () => {
	const [currentUserEmail, setCurrentUserEmail] = useState(null);
	const [searchInput, setSearchInput] = useState('');
	const [searchResults, setSearchResults] = useState([]);
	const [favorites, setFavorites] = useState([]);

	const getSearchResults = async (input) => {
		const response = await axios.get(`https://api.tvmaze.com/search/shows?q=:${input}`);

		if (response.data) {
			setSearchResults(response.data);
		}
	};

	const getFavorites = useCallback(async () => {
		let tempArr = [];
		const querySnapshot = await getDocs(collection(db, currentUserEmail));
		querySnapshot.forEach((doc) => {
			tempArr.push({ name: doc.data().name, image: doc.data().image });
		});
		setFavorites(tempArr);
	}, [currentUserEmail]);

	/* useEffect(() => {
		if (currentUserEmail !== null) {
			getFavorites();
		}
	}, [currentUserEmail, getFavorites]); */

	return (
		<div className="App">
			<Header
				searchInput={searchInput}
				setSearchInput={setSearchInput}
				getSearchResults={getSearchResults}
				currentUserEmail={currentUserEmail}
				setCurrentUserEmail={setCurrentUserEmail}
			/>
			<Main setCurrentUserEmail={setCurrentUserEmail} searchResults={searchResults} />
			<Footer />
		</div>
	);
};

export default App;
