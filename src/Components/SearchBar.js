import styled from "styled-components";
import Button from "./Button";

const StyledForm = styled.form`
  width: 600px;
  margin-left: 250px;
`;

const StyledSearch = styled.input`
  font-size: 15px;
  margin-right: 10px;
  height: 25px;
  width: 200px;
  border-radius: 5px;
  border: 0.5px solid grey;
`;

const SearchBar = ({ input, setInput, getSearchResults }) => {
  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault();
        getSearchResults(input);
      }}
    >
      <StyledSearch
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder="Type to search..."
      />
      <Button text="search" />
    </StyledForm>
  );
};

export default SearchBar;
