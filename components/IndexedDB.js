import React from "react";
import styled from "styled-components";

const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;

	button {
		margin-right: auto;
		margin-top: 16px;
		padding: 16px;
		width: auto;

		appearance: none;
		background: blue;
		border: none;
		color: white;
		cursor: pointer;
		font-size: 24px;
		outline: none;
		transition: 0.2s all ease;

		&:active,
		&:focus,
		&:hover {
			background: #22f;
		}
	}

	input {
		padding: 8px;

		appearance: none;
		border: 1px solid rgba(0, 0, 0, 0.2);
		font-size: 24px;
		outline: none;
	}

	label {
		margin-top: 16px;
	}

	* {
		min-height: 44px;
		width: 100%;
	}
`;

export default class IndexedDB extends React.Component {
	constructor(props) {
		super(props);
		this.addData = this.addData.bind(this);
	}

	addData(e) {
		e.preventDefault();
		return false;
		console.log("yo");
	}

	componentDidMount() {
		var db;

		var openRequest = indexedDB.open("test_db", 1);

		openRequest.onupgradeneeded = function(e) {
			var db = e.target.result;
			console.log("running onupgradeneeded");
			if (!db.objectStoreNames.contains("PWABenefits")) {
				var storeOS = db.createObjectStore("PWABenefits", {
					keyPath: "name"
				});
			}
		};
		openRequest.onsuccess = function(e) {
			console.log("running onsuccess");
			db = e.target.result;
			addItem();
		};
		openRequest.onerror = function(e) {
			console.log("onerror!");
			console.dir(e);
		};

		function addItem() {
			var transaction = db.transaction(["PWABenefits"], "readwrite");
			var PWABenefits = transaction.objectStore("PWABenefits");
			var item = {
				name: "Jack Pritchard",
				role: "Web App Developer",
				description: "Welsh man, fond of dark chocolate and bike rides",
				created: "07-05-1995"
			};

			var request = PWABenefits.add(item);

			request.onerror = function(e) {
				console.log("Error", e.target.error.name);
			};
			request.onsuccess = function(e) {
				console.log("Woot! Did it");
			};
		}
	}

	render() {
		return <div />;
	}
}
