import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import "./NavbarComp.css";

const NavbarComp = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);

	const [color, setColor] = useState(false);
	const changeColor = () => {
		if (window.scrollY >= 100) {
			setColor(true);
		} else {
			setColor(false);
		}
	};

	window.addEventListener("scroll", changeColor);

	return (
		<div className={color ? "header header-bg" : "header"}>
			<Link to="/">
				<h1>Profolio.</h1>
			</Link>
			<ul className={click ? "nav-menu active" : "nav-menu"}>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/project">Project</Link>
				</li>
			</ul>
			<div className="menu-toggle rounded" onClick={handleClick}>
				{click ? (
					<FaTimes size={20} style={{ color: "#fff" }} />
				) : (
					<FaBars size={20} style={{ color: "#fff" }} />
				)}
			</div>
		</div>
	);
};

export default NavbarComp;
