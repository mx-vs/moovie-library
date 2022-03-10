import styled from "styled-components";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

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
  height: 30px;
  width: 250px;
  border-radius: 5px;
  border: 0;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;

const SearchBar = ({ input, setInput, getSearchResults }) => {
  let navigate = useNavigate();

  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault();
        if (input) {
          getSearchResults(input);
          navigate("/search");
        } else {
          alert("The search field is empty!");
        }
      }}
    >
      <StyledSearch
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder="Type to search..."
      />
      <Button width="100px" height="30px" text="search" />
    </StyledForm>
  );
};

export default SearchBar;
