import { useState, useEffect, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import { db } from './Services/firebase';
import { collection, getDocs } from 'firebase/firestore';
import axios from 'axios';
import './App.css';
import Header from './Layouts/Header';
import Home from './Layouts/Home';
import SearchResults from './Layouts/SearchResults';
import Login from './Layouts/Login';
import Register from './Layouts/Register';
import ErrorPage from './Layouts/ErrorPage';
import Footer from './Layouts/Footer';

const App = () => {
	const [currentUserEmail, setCurrentUserEmail] = useState(null);
	const [input, setInput] = useState('');
	const [searchResults, setSearchResults] = useState([]);
	const [favorites, setFavorites] = useState([]);
	let currentUser = localStorage.getItem('currentUser');

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

	useEffect(() => {
		if (currentUserEmail !== null) {
			getFavorites();
		}
	}, [currentUserEmail, getFavorites]);

	return (
		<div className="App">
			<Header
				input={input}
				setInput={setInput}
				getSearchResults={getSearchResults}
				currentUserEmail={currentUserEmail}
				setCurrentUserEmail={setCurrentUserEmail}
				currentUser={currentUser}
			/>
			<Routes>
				<Route
					path="/"
					element={<Home currentUserEmail={currentUserEmail} favorites={favorites} />}
				/>
				<Route
					path="/search/*"
					element={
						<SearchResults currentUserEmail={currentUserEmail} searchResults={searchResults} />
					}
				/>
				<Route path="/login" element={<Login setCurrentUserEmail={setCurrentUserEmail} />} />
				<Route path="/register" element={<Register setCurrentUserEmail={setCurrentUserEmail} />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
