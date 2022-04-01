import { db } from '../../services/firebase';
import { collection, addDoc } from 'firebase/firestore';
import styled from 'styled-components';
import Text from '../../components/Text';
import Star from '../../components/Star';

const StyledSection = styled.section`
	display: flex;
	flex-direction: column;
	width: 350px;
	height: 500px;
	margin: 25px 15px;
	padding: 25px;
	border-radius: 20px;
	box-shadow: 0 0px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
	background: rgba(255, 255, 255, 0.8);
`;

const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`;

const StyledImg = styled.img.attrs((props) => ({
	src: props.src,
}))`
	width: 160px;
	height: 230px;
	margin: 10px;
	border-radius: 20px;
`;

const StyledSummary = styled.p`
	text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
	margin: 5px;
	font-size: 12px;
	line-height: 20px;
	text-align: justify;
`;

const SearchResults = ({ currentUserEmail, searchResults }) => {
	const noImageUrl =
		'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg';

	const addToFavourites = async (name, image) => {
		await addDoc(collection(db, currentUserEmail), {
			//add ID which will be used to change the star and enable remove from favorites
			name,
			image,
		});
	};

	return (
		<div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
			{searchResults !== [] && (
				<>
					{Object.values(searchResults).map((result, index) => (
						<StyledSection key={index}>
							<StyledDiv>
								{currentUserEmail !== null && (
									<Star
										onClick={() => {
											result.show.image !== null
												? addToFavourites(
														result.show.name,
														result.show.image.original,
												  )
												: addToFavourites(result.show.name, noImageUrl);
											alert('This moovie has been added to your favorites!');
										}}
									/>
								)}
								{result.show.image !== null ? (
									<StyledImg src={result.show.image.original} />
								) : (
									<StyledImg src={noImageUrl} />
								)}
							</StyledDiv>

							<StyledDiv>
								<Text
									fontSize="30px"
									textAlign="center"
									margin="5px"
									text={result.show.name}
								/>
								<StyledSummary>{`${result.show.summary
									.replace(/<\/?[^>]+(>|$)/g, '')
									.substring(0, 300)}...`}</StyledSummary>
							</StyledDiv>

							<StyledDiv>
								<Text fontSize="15px" textAlign="center" margin="10px" text="More info at:" />
								<a
									href={result.show.url}
									target="_blank"
									rel="noopener noreferrer"
									style={{ fontSize: '14px', color: '#24292f' }}>
									TVMaze
								</a>
							</StyledDiv>
						</StyledSection>
					))}

					<Text text="No results" title="true" />
				</>
			)}
		</div>
	);
};

export default SearchResults;
