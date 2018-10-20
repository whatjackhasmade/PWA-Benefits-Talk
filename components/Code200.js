import React from "react";
import styled from "styled-components";

const Image = styled.img`
	max-width: 60%;
	width: 400px;
`;

export default class Code200 extends React.Component {
	render() {
		return (
			<div>
				<Image src="./images/200.png" />
			</div>
		);
	}
}
