import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 30px;
	margin-top: auto;
`;
const StyledFooter = styled.footer`
	text-align: center;
	font-size: 12px;
	color: #24292f;
`;

const Footer = () => {
	return (
		<Wrapper>
			<StyledFooter>App created by mx-vs</StyledFooter>
		</Wrapper>
	);
};

export default Footer;
