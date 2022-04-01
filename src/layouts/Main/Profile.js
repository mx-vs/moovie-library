import styled from 'styled-components';
import Text from '../../components/Text';
import Favorites from './Favorites';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`;

const Profile = () => {
	return (
		<Wrapper>
			<Text fontSize="30px" textAlign="left" margin="10px" text="My Favorites"></Text>
		</Wrapper>
	);
};

export default Profile;
