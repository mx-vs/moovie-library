import styled from 'styled-components';
import film from '../Assets/film.jpg';
import cowLogo from '../Assets/cow.png';

const StyledHeroDiv = styled.div`
	height: 300px;
	background-image: url(${film});
	background-size: 1100px;
	background-position-y: -190px;
	background-position-x: 0px;
`;

const ContainerP = styled.div`
	background-color: #24292f;
	background: rgba(0, 0, 0, 0.8);
	border-radius: 5px;
	width: 400px;
	height: 200px;
	margin: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const StyledP = styled.p`
	color: white;
	text-align: center;
	padding: 30px;
	line-height: 25px;
`;

const CowLogo = styled.img`
	content: url(${cowLogo});
	width: 70px;
	height: 70px;
	padding: 30px;
`;

const Hero = () => {
	return (
		<>
			<StyledHeroDiv>
				<ContainerP>
					<CowLogo />
					<StyledP>
						Welcome to Moovie Library!
						<br /> <br />
						Discover
						<br />
						and permanently favorite moovies
						<br />
						(a.k.a TV Shows)!
						<br />
					</StyledP>
				</ContainerP>
			</StyledHeroDiv>
		</>
	);
};

export default Hero;
