import styled from 'styled-components';
import Button from './Button';
import { useHistory } from 'react-router-dom';

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 600px;
`;

const StyledSearch = styled.input`
  font-size: 18px;
  color: #2a2a29;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  margin-right: 10px;
  height: 25px;
  width: 250px;
  border-radius: 5px;
  border: 0.5px solid grey;
`;

const SearchBar = ({ input, setInput, getSearchResults }) => {
  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault();
        getSearchResults(input);
      }}>
      <StyledSearch
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder="Type to search..."
      />
      <Button width="100px" height="25px" text="search" />
    </StyledForm>
  );
};

export default SearchBar;
