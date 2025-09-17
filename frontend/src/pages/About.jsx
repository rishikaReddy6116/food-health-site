import React from "react";
import ScannerIcon from "../assets/scanner-icon.png";
import RecipeIcon from "../assets/recipe-icon.png";
import StatsIcon from "../assets/stats-icon.png";

function About() {
  return (
    <div className="about-section">
      <h1>About SnackWise</h1>
      <p>
        SnackWise is your personal <strong>smart food companion</strong>, designed to make healthy eating simple, fun, and delicious. 
        Whether you’re curious about nutritional content or looking for recipe inspiration, SnackWise has got you covered.
      </p>

      <div className="feature-card">
        <img src={ScannerIcon} alt="Scanner" />
        <h3>Smart Food Scanner</h3>
        <p>Snap a photo and get instant <strong>calories, protein, carbs, fats</strong> info for your meal.</p>
      </div>
      
      <div className="feature-card">
        <img src={RecipeIcon} alt="Recipes" />
        <h3>AI Recipe Assistant</h3>
        <p>Get personalized <strong>diet-friendly and tasty recipes</strong> based on your food or ingredients.</p>
      </div>

      <div className="feature-card">
        <img src={StatsIcon} alt="Stats" />
        <h3>Track Your Progress</h3>
        <p>Monitor your meals and nutrition history easily to stay on top of your health goals.</p>
      </div>
      <p>
        SnackWise transforms the way you interact with food. 
        Eat smarter, cook easier, and enjoy every bite!
      </p>
    </div>
  );
}

export default About;
