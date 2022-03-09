import styled from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;
  font-size: 15px;
  height: 25px;
  width: 90px;
  color: black;
  background-color: #f03d4e;
  border-radius: 5px;
  border: 0px;
  transition: all 0.3s ease-out;
  :hover {
    background: black;
    color: white;
  }
`;

const Button = (props) => {
  return <StyledButton>{props.text}</StyledButton>;
};

export default Button;
