import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import Header from "./component/Header.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import Description from "./pages/Description.jsx";
import Footer from "./component/Footer.jsx";
import ApartmentNotFound from "./component/ApartmentNotFound.jsx.jsx";

function App() {
	
	
	return (
		<Router>
		<Header />
		<Routes>
		<Route path="/" element={<HomePage />} />
		<Route path="/about" element={<AboutPage />} />
		<Route path="/apartment/:id" element={<Description />} />
		<Route path="/not-found" element={<ApartmentNotFound />} />
		<Route path="*" element={<ApartmentNotFound />} />
		</Routes>
		<Footer />
		</Router>
		);
	}
	
	export default App;
	