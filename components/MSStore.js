import React from "react";
import styled from "styled-components";

const Avatar = styled.img`
	max-width: 60%;
	width: 700px;
`;

export default class MSStore extends React.Component {
	render() {
		return (
			<div>
				<Avatar src="./images/MS-Store.png" />
			</div>
		);
	}
}
