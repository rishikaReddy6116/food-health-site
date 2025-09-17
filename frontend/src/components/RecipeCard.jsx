import React from "react";

function RecipeCard({ name, calories, protein, carbs, fat, image }) {
  return (
    <div className="recipe-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Calories: {calories}</p>
      <p>Protein: {protein}g | Carbs: {carbs}g | Fat: {fat}g</p>
    </div>
  );
}

export default RecipeCard;
