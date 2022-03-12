import styled, { keyframes } from "styled-components";
import ReactTooltip from "react-tooltip";
import { MdStar, MdStarBorder } from "react-icons/md";

const jump = keyframes`
  from{
    transform: translateY(0)
  }
  to{
    transform: translateY(-3px)
  }
`;

const FilledStar = styled(MdStar)`
  transition: all 0.3s ease-out;
  :hover {
    cursor: pointer;
    color: #dc143c;
    animation: ${jump} 0.2s ease-out forwards;
  }
`;

const EmptyStar = styled(MdStarBorder)`
  transition: all 0.3s ease-out;
  :hover {
    cursor: pointer;
    color: #dc143c;
    animation: ${jump} 0.2s ease-out forwards;
  }
`;

const Star = (props) => {
  return (
    <>
      <EmptyStar
        size="30px"
        data-tip
        data-for="emptyStarTip"
        onClick={props.onClick}
      />
      <ReactTooltip id="emptyStarTip" place="right" effect="solid" type="dark">
        Set Favorite
      </ReactTooltip>
    </>
  );
};

export default Star;
