import "./App.css";

import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";

import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/project" element={<Project />} />
			</Routes>
		</>
	);
}

export default App;
