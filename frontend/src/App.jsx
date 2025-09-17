import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FoodScanner from "./pages/FoodScanner";

// Pages
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import History from "./pages/History";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Styles
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        {/* Navigation Bar */}
        <Navbar />

        {/* Main content */}
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/scanner" element={<FoodScanner />} />
            <Route path="/history" element={<History />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
