import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
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
	const [searchResults, setSearchResults] = useState({});

	const getSearchResults = async (input) => {
		const response = await axios.get(`https://api.tvmaze.com/search/shows?q=:${input}`);

		if (response.data) {
			setSearchResults(response.data);
		}
	};

	return (
		<div className="App">
			<Header
				input={input}
				setInput={setInput}
				getSearchResults={getSearchResults}
				currentUserEmail={currentUserEmail}
				setCurrentUserEmail={setCurrentUserEmail}
			/>
			<Routes>
				<Route path="/" element={<Home currentUserEmail={currentUserEmail} />} />
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
