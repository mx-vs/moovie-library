import styled from "styled-components";
import Label from "../Components/Label";
import { Link, useNavigate } from "react-router-dom";

const StyledSection = styled.section`
  box-shadow: 0 0px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
  display: flex;
  justify-content: center;
  width: 600px;
  border-radius: 5px;
  margin: 20px auto;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledImg = styled.img.attrs((props) => ({
  src: props.src
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

const SearchResults = ({ searchResults }) => {
  return (
    <>
      {Object.values(searchResults).map((result, index) => (
        <StyledSection key={index}>
          <StyledDiv>
            <Label text={result.show.name} title></Label>
            {result.show.image !== null ? (
              <StyledImg src={result.show.image.original} />
            ) : (
              <StyledImg src="https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg" />
            )}
          </StyledDiv>
          <StyledDiv>
            <Label text={`Genre: ${result.show.genres}`} />
            <Label text={`Runtime: ${result.show.runtime} minutes`} />
            <StyledSummary>{`Summary: ${result.show.summary.replace(
              /<\/?[^>]+(>|$)/g,
              ""
            )}`}</StyledSummary>
            <Label text="More information at:" />
            <Link to={result.show.url} style={{ fontSize: "12px" }}>
              {result.show.url}
            </Link>
          </StyledDiv>
        </StyledSection>
      ))}
    </>
  );
};

export default SearchResults;
