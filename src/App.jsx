import { useState } from "react";
import "./App.css";

function App() {
	return (
		<>
			<Route>
				<Route path="/" element={<Home />} />
			</Route>
		</>
	);
}

export default App;
