import React from "react";
import { Link } from "react-router-dom";

import "./Wallpaper.css";
import wallpaperimg from "./../../img/home-page-wallpaper.jpg";

const Wallpaper = () => {
	return (
		<div className="wallpaper">
			<div className="mask">
				<img className="into-img" src={wallpaperimg} />
			</div>
			<div className="content">
				<p>Wei-Chen(Eric), Hsu</p>
				<h1>Software Engineer</h1>
				<div>
					<Link to="/about" className="button">
						About
					</Link>
					<Link to="/project" className="button button-light">
						Project
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Wallpaper;
