import { db } from '../Services/firebase';
import { collection, addDoc } from 'firebase/firestore';
import styled from 'styled-components';
import Label from '../Components/Label';
import Star from '../Components/Star';

const StyledSection = styled.section`
	box-shadow: 0 0px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
	padding: 20px;
	margin: 20px;
	display: flex;
	justify-content: center;
	width: 600px;
	border-radius: 5px;
	margin: 20px auto;
	position: relative;
`;

const StyledDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const StyledImg = styled.img.attrs((props) => ({
	src: props.src,
}))`
	width: 170px;
	border-radius: 5px;
`;

const StyledSummary = styled.p`
	text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
	width: 400px;
	font-size: 12px;
	line-height: 20px;
	text-align: center;
	margin-left: 30px;
`;

const SearchResults = ({ currentUserEmail, searchResults }) => {
	const noImageUrl =
		'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg';

	const addToFavourites = async (name, image) => {
		await addDoc(collection(db, currentUserEmail), {
			name,
			image,
		});
	};

	return (
		<>
			{Object.values(searchResults).map((result, index) => (
				<StyledSection key={index}>
					<StyledDiv>
						{currentUserEmail !== null && (
							<Star
								onClick={() => {
									result.show.image !== null
										? addToFavourites(result.show.name, result.show.image.original)
										: addToFavourites(result.show.name, noImageUrl);
								}}
							/>
						)}
						<Label text={result.show.name} title></Label>
						{result.show.image !== null ? (
							<StyledImg src={result.show.image.original} />
						) : (
							<StyledImg src={noImageUrl} />
						)}
					</StyledDiv>

					<StyledDiv>
						<Label text={`Genre: ${result.show.genres}`} />
						<Label text={`Runtime: ${result.show.runtime} minutes`} />
						<StyledSummary>{`Summary: ${result.show.summary.replace(
							/<\/?[^>]+(>|$)/g,
							'',
						)}`}</StyledSummary>
						<Label text="More information at:" />
						<a
							href={result.show.url}
							target="_blank"
							rel="noopener noreferrer"
							style={{ fontSize: '12px' }}>
							{result.show.url}
						</a>
					</StyledDiv>
				</StyledSection>
			))}
		</>
	);
};

export default SearchResults;
