import React from "react";
import {
	FaHome,
	FaMailBulk,
	FaFacebook,
	FaGithub,
	FaInstagram,
	FaLinkedin,
} from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
	const redirectToFacebook = () => {
		window.open(
			"https://www.facebook.com/profile.php?id=100007934838369",
			"_blank"
		);
	};
	const redirectToGitHub = () => {
		window.open("https://github.com/MRAmateurH", "_blank");
	};
	const redirectToInstagram = () => {
		window.open(
			"https://instagram.com/_weicha?igshid=MjEwN2IyYWYwYw==",
			"_blank"
		);
	};
	const redirectToLinkedin = () => {
		window.open("https://www.linkedin.com/in/erichsu5763/", "_blank");
	};
	return (
		<div className="footer">
			<div className="footer-container">
				<div className="left">
					<div className="email">
						<h4>
							<FaMailBulk
								size={20}
								style={{ color: "#fff", marginRight: "2rem" }}
							/>
							hsu14253@gmail.com
						</h4>
					</div>
				</div>

				<div className="right">
					<div className="social">
						<h4>
							<FaFacebook
								size={30}
								style={{ color: "#fff", marginRight: "1rem" }}
								onClick={redirectToFacebook}
							/>
							<FaGithub
								size={30}
								style={{ color: "#fff", marginRight: "1rem" }}
								onClick={redirectToGitHub}
							/>
							<FaInstagram
								size={30}
								style={{ color: "#fff", marginRight: "1rem" }}
								onClick={redirectToInstagram}
							/>
							<FaLinkedin
								size={30}
								style={{ color: "#fff", marginRight: "1rem" }}
								onClick={redirectToLinkedin}
							/>
						</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
