import React from "react";
// react@17
import ReactDOM from "react-dom";
// react@18
// import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

// react@17
ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById("root")
);

// react@18
// ReactDOM.createRoot(document.getElementById("root")).render(
// 	<BrowserRouter>
// 		<App />
// 	</BrowserRouter>
// );
