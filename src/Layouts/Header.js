import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SearchBar from '../Components/SearchBar';

const StyledHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-top: 20px;
  height: 60px;
  border-bottom: 1px solid black;
`;

const StyledHeader = styled.h1`
  font-size: 20px;

  &:hover {
    cursor: pointer;
    color: #dc143c;
  }
`;

/* const ProfileIcon = styled(UserCircle)`
  width: 30px;
  &:hover {
    cursor: pointer;
    color: #dc143c;
  }
`; */

const Header = ({ input, setInput, getSearchResults }) => {
  return (
    <StyledHeaderDiv>
      <Link to="/">
        <StyledHeader>Moovie Library</StyledHeader>
      </Link>
      <SearchBar
        input={input}
        setInput={setInput}
        getSearchResults={getSearchResults}
      />
      <Link to="/access">
        <h5>Profile</h5>
      </Link>
    </StyledHeaderDiv>
  );
};

export default Header;
