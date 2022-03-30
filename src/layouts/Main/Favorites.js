import styled from 'styled-components';
import Text from '../../components/Text';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`;

const StyledDiv = styled.div`
	box-shadow: 0 0px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 250px;
	padding: 25px;
	margin: 20px;
`;

const StyledImg = styled.img.attrs((props) => ({
	src: props.src,
}))`
	width: 170px;
	margin-bottom: 5px;
	border-radius: 5px;
`;

const Favorites = ({ currentUserEmail, favorites }) => {
	return (
		<>
			<Text text="Your Favorites" title="true" />
			<Wrapper>
				{Object.values(favorites).map((result, index) => (
					<StyledDiv key={index}>
						<StyledImg src={result.image} />
						<Text text={result.name} title />
					</StyledDiv>
				))}
			</Wrapper>
		</>
	);
};

export default Favorites;
