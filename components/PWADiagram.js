import React from "react";
import styled from "styled-components";

const Diagram = styled.img`
	width: 800px;
`;

export default class PWADiagram extends React.Component {
	render() {
		return (
			<div>
				<Diagram src="../images/service-worker-1.png" />
			</div>
		);
	}
}
