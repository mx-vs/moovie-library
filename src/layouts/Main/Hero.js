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
					margin="40px"
					text="Welcome to the TV Show Library"></Text>
				<Text fontSize="30px" textAlign="left" margin="50px" text="Discover great series"></Text>
			</StyledHeroDiv>
		</>
	);
};

export default Hero;
