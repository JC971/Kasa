import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./header";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import Description from "../pages/description";
import Footer from "./footer";
import DetailAppartement from "./DetailApp";



function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/apartment/:id" element={<Description />} />
				<Route path="/apartment/:id/detail" element={<DetailAppartement />} />
			</Routes>

			<Footer />
		</Router>
	);
}

export default App;
