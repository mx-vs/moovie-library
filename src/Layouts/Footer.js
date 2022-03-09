import styled from "styled-components";

const StyledFooter = styled.footer`
  text-align: center;
  position: fixed;
  left: 765px;
  bottom: 20px;
  background: black;
  color: white;
`;

const Footer = () => {
  return <StyledFooter>App created by mx-vs</StyledFooter>;
};

export default Footer;
