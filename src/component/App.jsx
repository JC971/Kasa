import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./header";
import HomePage from "../pages/HomePage"; 
import AboutPage from "../pages/AboutPage"; 


function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
			</Routes>
            
           
            
		</Router>
	);
}

export default App;
