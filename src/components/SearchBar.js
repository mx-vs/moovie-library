import styled from 'styled-components';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const StyledForm = styled.form`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 600px;
`;

const StyledSearch = styled.input`
	height: 15px;
	width: 250px;
	font-size: 15px;
	color: #2a2a29;
	margin-right: 10px;
	border-radius: 20px;
	padding: 10px;
	border: 0;
	text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
	box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
	:focus,
	:hover {
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
		outline: none;
	}
`;

const SearchBar = ({ searchInput, setSearchInput, getSearchResults }) => {
	let navigate = useNavigate();

	return (
		<StyledForm
			onSubmit={(e) => {
				e.preventDefault();
				if (searchInput) {
					getSearchResults(searchInput);
					navigate('/search');
				} else {
					alert('The search field is empty!');
				}
			}}>
			<StyledSearch
				value={searchInput}
				onChange={(event) => setSearchInput(event.target.value)}
				placeholder="Type to search..."
			/>
			<Button width="120px" height="35px" text="search" />
		</StyledForm>
	);
};

export default SearchBar;
