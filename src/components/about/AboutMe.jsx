import React, { useState, useRef } from "react";

import "./AboutMe.css";

import Chatroom from "./Chatroom";
import { Paper, Typography } from "@mui/material";

import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

const AboutImg = () => {
	return (
		<></>
		// <div className="about-img">
		// 	<div className="heading">
		// 		<h1>This is About</h1>
		// 		<p>this is text</p>
		// 		<h1>徐瑋辰</h1>
		// 		<IntroContent />
		// 	</div>
		// </div>
	);
};

const IntroContent = () => {
	return (
		<>
			<div style={{ textAlign: "left", padding: "1em" }}>
				<h1>Wei-Chen (Eric), Hsu</h1>
				<h4>
					A cheerful learner, embracing challenges with a positive
					attitude and eagerness.
				</h4>
			</div>
		</>
	);
};

const CodeBlock = () => {
	const code = `// Your code goes here function example() {console.log('Hello, MUI!');}`;
	const textRef = useRef(null);
	const [isCopied, setIsCopied] = useState(false);

	const handleCopyText = () => {
		if (textRef.current) {
			const textArea = document.createElement("textarea");
			textArea.value = textRef.current.innerText;
			document.body.appendChild(textArea);
			textArea.select();
			document.execCommand("copy");
			document.body.removeChild(textArea);

			setIsCopied(true);
			setTimeout(() => {
				setIsCopied(false);
			}, 2000);
		}
	};
	return (
		<Paper
			elevation={3}
			style={{
				display: "flex",
				padding: "8px",
				background: "rgba(0, 0, 0, 0.5)",
				borderRadius: "5px",
				boxShadow: "none",
				overflow: "hidden",
				whiteSpace: "nowrap",
			}}
		>
			{isCopied ? (
				<CheckRoundedIcon sx={{ color: "azure" }} />
			) : (
				<ContentCopyRoundedIcon
					sx={{ color: "azure" }}
					onClick={handleCopyText}
				/>
			)}
			<Typography
				variant="body2"
				color="white"
				component="div"
				style={{ padding: "5px" }}
				ref={textRef}
			>
				{code}
			</Typography>
		</Paper>
	);
};

const IntroItem = (props) => {
	const { number, content } = props;

	return (
		<>
			<div
				style={{
					textAlign: "left",
					color: "#eaebeb",
					margin: "2em 0 1em 0",
				}}
			>
				<span className="number">{number}</span>
				<span>{content}</span>
			</div>
		</>
	);
};

const AboutMe = () => {
	return (
		<>
			<div className="about-bg">
				<div style={{ height: "90px" }}></div>
				<div
					style={{
						position: "relative",
						maxWidth: "1280px",
						margin: "0 auto",
						padding: "0 1em 3em 1em",
						clear: "both",
						boxSizing: "border-box",
						borderRadius: 7,
						// backgroundColor: "#142929",
					}}
				>
					<IntroContent />

					<div style={{ display: "flex" }}>
						<div className="w-1-3">
							<h1>Hello</h1>
							<IntroItem number={1} content="這是第一個項目" />
							<CodeBlock />
						</div>
						<div className="w-2-3">
							<Chatroom />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutMe;
