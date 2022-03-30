import styled from 'styled-components';
import Text from '../../components/Text';
import popcornLogo from '../../assets/popcorn.jpg';

const StyledHeroDiv = styled.div`
	background-size: 1100px;
	background-position-y: -190px;
	background-position-x: 0px;
	padding: 120px;
`;

const Hero = () => {
	return (
		<>
			<StyledHeroDiv>
				<Text
					fontSize="50px"
					textAlign="left"
					margin="30px"
					text="Welcome to TV Shows Library"></Text>
				<Text fontSize="20px" textAlign="left" margin="30px" text="Discover great TV Shows"></Text>
			</StyledHeroDiv>
		</>
	);
};

export default Hero;
