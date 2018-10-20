import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

export default class ServiceWorker extends React.Component {
	render() {
		return (
			<div>
				<Helmet>
					<script src="/sw.js" />
				</Helmet>
			</div>
		);
	}
}
