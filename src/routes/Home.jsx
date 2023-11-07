import React from "react";

import NavbarComp from "./../components/template/NavbarComp";
import Wallpaper from "./../components/home/Wallpaper";
import Footer from "./../components/template/Footer";

const Home = () => {
	return (
		<>
			<div>
				<NavbarComp />
				<Wallpaper />
				<Footer />
			</div>
		</>
	);
};

export default Home;
