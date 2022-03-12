import { db } from '../Services/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Label from '../Components/Label';

const StyledDiv = styled.div`
	box-shadow: 0 0px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 300px;
	height: 500px;
	padding: 25px;
`;

const StyledImg = styled.img.attrs((props) => ({
	src: props.src,
}))`
	width: 170px;
	margin-bottom: 5px;
	border-radius: 5px;
`;

const Favorites = ({ currentUserEmail }) => {
	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		let tempArr = [];
		const getFavorites = async () => {
			const querySnapshot = await getDocs(collection(db, currentUserEmail));
			querySnapshot.forEach((doc) => {
				tempArr.push({ name: doc.data().name, image: doc.data().image });
			});
		};
		setFavorites(tempArr);

		if (currentUserEmail !== null) {
			getFavorites();
		}
	}, [currentUserEmail]);

	return (
		<>
			<h3>Your Favorites</h3>
			{Object.values(favorites).map((result, index) => (
				<StyledDiv key={index}>
					<StyledImg src={result.image} />
					<Label text={result.name} title />
				</StyledDiv>
			))}
		</>
	);
};

export default Favorites;
