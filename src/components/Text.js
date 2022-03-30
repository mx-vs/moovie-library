import styled from 'styled-components';

const StyledText = styled.h2`
	font-size: ${(props) => props.fontSize};
	text-align: ${(props) => props.textAlign};
	margin: ${(props) => props.margin};
	text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
	font-weight: normal;
	color: #24292f;
`;

const Text = (props) => {
	return (
		<StyledText fontSize={props.fontSize} textAlign={props.textAlign} margin={props.margin}>
			{props.text}
		</StyledText>
	);
};

export default Text;
