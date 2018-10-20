import React from "react";
import styled from "styled-components";

const Avatar = styled.img`
	border-radius: 50%;
	max-width: 200px;
`;

export default class JackPritchard extends React.Component {
	render() {
		return (
			<div>
				<Avatar src="https://pbs.twimg.com/media/Dp2WB7hXcAAxjPE.jpg" />
				<h2>
					Jack Pritchard
					<br />@
					<a href="https://twitter.com/whatjackhasmade" target="_blank">
						WhatJackHasMade
					</a>
				</h2>
				<h3>Freelance Front-End Developer</h3>
			</div>
		);
	}
}
