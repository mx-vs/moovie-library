import styled, { keyframes } from "styled-components";

const jump = keyframes`
  from{
    transform: translateY(0)
  }
  to{
    transform: translateY(-3px)
  }
`;

const StyledButton = styled.button`
  cursor: pointer;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: rgb(253, 249, 243);
  background-color: #f03d4e;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  border-radius: 5px;
  border: 0px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  margin: ${(props) => props.margin};
  transition: all 0.3s ease-out;
  :hover {
    background: rgb(200, 50, 70);
    animation: ${jump} 0.2s ease-out forwards;
  }
`;

const Button = (props) => {
  return (
    <StyledButton
      width={props.width}
      height={props.height}
      margin={props.margin}
      onClick={props.onClick}
    >
      {props.text}
    </StyledButton>
  );
};

export default Button;
