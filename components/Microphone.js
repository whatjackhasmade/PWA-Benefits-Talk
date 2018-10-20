import React from "react";
import styled from "styled-components";

const Canvas = styled.canvas`
	height: 400px;
	width: 100%;

	transform: rotateX(180deg);
`;

export default class Microphone extends React.Component {
	componentDidMount() {
		var h = document.querySelector("#volume");
		var canvas = document.querySelector("#canvasAudio");
		var ctx = canvas.getContext("2d");
		var soundAllowed = function(stream) {
			window.persistAudioStream = stream;
			var audioContent = new AudioContext();
			var audioStream = audioContent.createMediaStreamSource(stream);
			var analyser = audioContent.createAnalyser();
			audioStream.connect(analyser);
			analyser.fftSize = 1024;

			var frequencyArray = new Uint8Array(analyser.frequencyBinCount);

			var doDraw = function() {
				requestAnimationFrame(doDraw);
				analyser.getByteFrequencyData(frequencyArray);
				var adjustedLength;
				ctx.fillStyle = "#FFFFFF";
				ctx.fillRect(0, 0, 500, 500);
				ctx.fillStyle = "#0000FF";
				for (var i = 0; i < 255; i++) {
					adjustedLength =
						Math.floor(frequencyArray[i]) - (Math.floor(frequencyArray[i]) % 5);
					ctx.fillRect(i, 0, i + 1, adjustedLength);
				}
			};
			doDraw();
		};

		var soundNotAllowed = function(error) {
			h.innerHTML = "You must allow your microphone.";
			console.log(error);
		};

		navigator.getUserMedia({ audio: true }, soundAllowed, soundNotAllowed);
	}

	render() {
		return (
			<div>
				<Canvas id="canvasAudio" />
				<span id="volume" />
			</div>
		);
	}
}
