import errorImg from "../Assets/Error.png";
import styled from "styled-components";

const StyledErrorImg = styled.img`
  content: url(${errorImg});
  width: 500px;
  margin: auto;
`;

const ErrorPage = () => {
  return <StyledErrorImg  />;
};

export default ErrorPage;
