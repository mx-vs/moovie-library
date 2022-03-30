import { Route, Routes } from 'react-router-dom';
import Hero from './Hero';
import SearchResults from './SearchResults';
import Login from './Login';
import Register from './Register';
import ErrorPage from './ErrorPage';
import Profile from './Profile';
import styled from 'styled-components';

const MainWrapper = styled.div`
	background-image: url(https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80);
	height: 780px;
`;

const Main = () => {
	return (
		<MainWrapper>
			<Routes>
				<Route path="/" element={<Hero />} />
				<Route path="/search/*" element={<SearchResults />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</MainWrapper>
	);
};

export default Main;
