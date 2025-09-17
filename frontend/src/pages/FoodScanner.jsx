import React, { useState } from "react";
import axios from "axios";

function FoodScanner() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [foodName, setFoodName] = useState("");
  const [nutritionResult, setNutritionResult] = useState(null);

  // Handle image upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  // Fetch nutrition info
  const fetchNutritionData = async () => {
    if (!foodName) {
      alert("Please enter a food name.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("food_name", foodName);

      const response = await axios.post(
        "http://127.0.0.1:8000/get-nutrition/",
        formData
      );

      const data = response.data;

      if (data.error) {
        alert(data.error);
        return;
      }

      setNutritionResult({
        foodName: data.foodName,
        calories: data.calories,
        protein: data.protein,
        carbs: data.carbs,
        fat: data.fat,
        image: selectedImage ? URL.createObjectURL(selectedImage) : null,
      });
    } catch (error) {
      console.error("Error fetching nutrition data:", error);
      alert("Failed to fetch nutrition data. Please try again.");
    }
  };

  return (
    <div className="food-scanner">
      <h2>Food Scanner</h2>
      <p>Upload an image of your food and enter its name to see nutrition info.</p>

      <input type="file" accept="image/*" onChange={handleFileChange} />

      {selectedImage && (
        <div className="uploaded-img-container">
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Uploaded"
            width={150}
          />
        </div>
      )}

      <div style={{ marginTop: "10px" }}>
        <input
          type="text"
          placeholder="Enter food name"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
        />
        <button onClick={fetchNutritionData}>Get Nutrition Info</button>
      </div>

      {nutritionResult && (
        <div className="scan-card">
          <h3>Nutrition Info: {nutritionResult.foodName}</h3>
          {nutritionResult.image && (
            <div className="img-container">
              <img
                src={nutritionResult.image}
                alt={nutritionResult.foodName}
                width={150}
              />
            </div>
          )}
          <p>Calories: {nutritionResult.calories}</p>
          <p>Protein: {nutritionResult.protein} g</p>
          <p>Carbs: {nutritionResult.carbs} g</p>
          <p>Fat: {nutritionResult.fat} g</p>
        </div>
      )}
    </div>
  );
}

export default FoodScanner;
