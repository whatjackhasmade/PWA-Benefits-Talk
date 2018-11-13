import React from "react";
import styled from "styled-components";

const TweetHorizontal = styled.div`
	& > * {
		margin: 0 auto;
	}
`;

export default class StarbucksTweet extends React.Component {
	componentDidMount() {
		const script = document.createElement("script");

		script.src = "https://platform.twitter.com/widgets.js";
		script.async = true;

		document.body.appendChild(script);
	}

	render() {
		return (
			<div>
				<TweetHorizontal>
					<blockquote class="twitter-tweet" data-lang="en">
						<p lang="en" dir="ltr">
							My team at{" "}
							<a href="https://twitter.com/Starbucks?ref_src=twsrc%5Etfw">
								@Starbucks
							</a>{" "}
							has been building a PWA, and it&#39;s now in beta! Check it out at{" "}
							<a href="https://t.co/tEUXM8BLgP">https://t.co/tEUXM8BLgP</a> if
							you&#39;re an existing customer!{" "}
							<a href="https://t.co/b9IJ3HbGpx">pic.twitter.com/b9IJ3HbGpx</a>
						</p>
						&mdash; David Brunelle (@davidbrunelle){" "}
						<a href="https://twitter.com/davidbrunelle/status/905931990444244995?ref_src=twsrc%5Etfw">
							September 7, 2017
						</a>
					</blockquote>
				</TweetHorizontal>
			</div>
		);
	}
}
