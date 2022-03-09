import styled from "styled-components";

const StyledLabel = styled.h2`
  font-weight: normal;
  font-size: ${(props) => (props.title ? "20px" : "15px")};
  color: #24292f;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 10px;
`;

const Label = (props) => {
  return <StyledLabel title={props.title}>{props.text}</StyledLabel>;
};

export default Label;
