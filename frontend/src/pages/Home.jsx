// Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to SnackWise 🍎</h1>
        <p>Smart food scanning & recipe suggestions in seconds.</p>
        <button className="cta-btn" onClick={() => navigate("/scanner")}>
          Start Scanning
        </button>
      </section>

      {/* Features Section */}
      <section className="features">
        <div
          className="feature-card"
          onClick={() => navigate("/scanner")}
          style={{ cursor: "pointer" }}
        >
          <img src="/images/scan.png" alt="Scan Food" />
          <h3>Scan Food Instantly</h3>
          <p>Use your camera to detect food items and get instant results.</p>
        </div>

        <div
          className="feature-card"
          onClick={() => navigate("/recipes")}
          style={{ cursor: "pointer" }}
        >
          <img src="/images/recipe.png" alt="Recipes" />
          <h3>Discover Recipes</h3>
          <p>Find healthy and delicious recipes tailored to your ingredients.</p>
        </div>

        <div
          className="feature-card"
          onClick={() => navigate("/history")}
          style={{ cursor: "pointer" }}
        >
          <img src="/images/history.png" alt="History" />
          <h3>Track Your History</h3>
          <p>Keep a log of your past scans and meal choices.</p>
        </div>
      </section>
    </div>
  );
}
