import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./Header";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import Description from "../pages/Description";
import Footer from "./Footer";
import ApartmentNotFound from "./OpsHeader";
function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/apartment/:id" element={<Description />} />
				<Route path="*" element={<ApartmentNotFound />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
