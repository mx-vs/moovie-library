import styled, { keyframes } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Services/firebase";
import { signOut } from "firebase/auth";
import SearchBar from "../Components/SearchBar";
import Label from "../Components/Label";
import Button from "../Components/Button";
import { MdHome } from "react-icons/md";

const StyledHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-top: 20px;
  height: 60px;
  border-bottom: 1px solid black;
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
  transition: all 0.3s ease-out;

  &:hover {
    cursor: pointer;
    color: #dc143c;
    animation: ${jump} 0.2s ease-out forwards;
  }
`;

const Header = ({
  input,
  setInput,
  getSearchResults,
  currentUserEmail,
  setCurrentUserEmail
}) => {
  let navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setCurrentUserEmail(null);
        localStorage.removeItem("currentUser");
        navigate("/register");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode) {
          alert(errorMessage);
        }
      });
  };

  return (
    <StyledHeaderDiv>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "flex-end"
        }}
      >
        <MdHome size="28px" color="black" />
        <StyledHeader>Moovie Library</StyledHeader>
      </Link>
      <SearchBar
        input={input}
        setInput={setInput}
        getSearchResults={getSearchResults}
      />
      {currentUserEmail === null ? (
        <div style={{ display: "flex" }}>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button text="Login" width="90px" height="20px" margin="0 10px" />
          </Link>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <Button
              text="Register"
              width="90px"
              height="20px"
              margin="0 10px"
            />
          </Link>
        </div>
      ) : (
        <>
          <Label text={`Welcome ${currentUserEmail}`} />
          <Button
            text="Logout"
            width="90px"
            height="20px"
            onClick={handleLogout}
          />
        </>
      )}
    </StyledHeaderDiv>
  );
};

export default Header;
