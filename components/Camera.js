import React from "react";
import styled from "styled-components";

const Webcam = styled.video`
	width: 100%;
`;

export default class Camera extends React.Component {
	componentDidMount() {
		if (navigator.mediaDevices === undefined) {
			navigator.mediaDevices = {};
		}

		if (navigator.mediaDevices.getUserMedia === undefined) {
			navigator.mediaDevices.getUserMedia = function(constraints) {
				var getUserMedia =
					navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
				if (!getUserMedia) {
					return Promise.reject(
						new Error("getUserMedia is not implemented in this browser")
					);
				}

				return new Promise(function(resolve, reject) {
					getUserMedia.call(navigator, constraints, resolve, reject);
				});
			};
		}

		navigator.mediaDevices
			.getUserMedia({
				audio: false,
				video: true
			})
			.then(function(stream) {
				var video = document.querySelector("video");
				// Older browsers may not have srcObject
				if ("srcObject" in video) {
					video.srcObject = stream;
				} else {
					// Avoid using this in new browsers, as it is going away.
					video.src = window.URL.createObjectURL(stream);
				}
				video.onloadedmetadata = function(e) {
					video.play();
				};
			})
			.catch(function(err) {
				console.log(err.name + ": " + err.message);
			});
	}

	render() {
		return (
			<div>
				<Webcam />
			</div>
		);
	}
}
