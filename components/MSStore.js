import React from "react";
import styled from "styled-components";

const Avatar = styled.img`
	max-width: 70%;
	width: 950px;

	+ img {
		max-width: 30%;
		width: 700px;
	}
`;

export default class MSStore extends React.Component {
	render() {
		return (
			<div>
				<Avatar src="./images/MS-Store.png" />
				<Avatar src="./images/windows-action-center.png" />
			</div>
		);
	}
}
