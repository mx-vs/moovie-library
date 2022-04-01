import styled, { keyframes } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../services/firebase';
import { signOut } from 'firebase/auth';
import SearchBar from '../../components/SearchBar';
import Text from '../../components/Text';
import Button from '../../components/Button';
import { MdHome } from 'react-icons/md';

const StyledHeaderDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	height: 40px;
`;

const jump = keyframes`
  from{
    transform: translateY(0)
  }
  to{
    transform: translateY(-3px)
  }
`;

const StyledHeader = styled.h1`
	font-size: 20px;
	color: #24292f;
	margin-left: 5px;
	transition: all 0.3s ease-out;

	&:hover {
		cursor: pointer;
		color: #dc143c;
		animation: ${jump} 0.1s ease-out forwards;
	}
`;

const Header = ({ searchInput, setSearchInput, getSearchResults, currentUserEmail, setCurrentUserEmail }) => {
	const regex = /.+?(?=@)/g;
	let user = regex.exec(localStorage.getItem('currentUser'));
	let navigate = useNavigate();

	const handleLogout = () => {
		signOut(auth)
			.then(() => {
				setCurrentUserEmail(null);
				localStorage.removeItem('currentUser');
				navigate('/login');
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				if (errorCode) {
					alert(errorMessage);
				}
			});
	};

	const UserButtons = () => {
		if (currentUserEmail === null) {
			return (
				<div style={{ display: 'flex' }}>
					<Link to="/login" style={{ textDecoration: 'none' }}>
						<Button text="Login" width="100px" height="30px" margin="0 10px" />
					</Link>
					<Link to="/register" style={{ textDecoration: 'none' }}>
						<Button text="Register" width="100px" height="30px" margin="0 10px" />
					</Link>
				</div>
			);
		} else {
			return (
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<Link to="/profile" style={{ textDecoration: 'none' }}>
						<Text fontSize="15px" textAlign="left" margin="10px" text={`${user}'s Profile`} />
					</Link>
					<Button text="Logout" width="90px" height="30px" onClick={handleLogout} />
				</div>
			);
		}
	};

	return (
		<StyledHeaderDiv>
			<Link
				to="/"
				style={{
					textDecoration: 'none',
					display: 'flex',
					alignItems: 'flex-end',
				}}>
				<MdHome size="28px" color="black" />
				<StyledHeader>Tv Show Library</StyledHeader>
			</Link>
			<SearchBar
				searchInput={searchInput}
				setSearchInput={setSearchInput}
				getSearchResults={getSearchResults}
			/>
			<UserButtons />
		</StyledHeaderDiv>
	);
};

export default Header;
