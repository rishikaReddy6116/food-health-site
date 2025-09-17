import os
import requests
from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

# Load .env file
load_dotenv()

app = FastAPI()

# CORS for frontend (adjust if needed)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # or restrict to ["http://localhost:5173"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Nutritionix credentials from .env
NUTRITIONIX_APP_ID = os.getenv("NUTRITIONIX_APP_ID")
NUTRITIONIX_API_KEY = os.getenv("NUTRITIONIX_API_KEY")

@app.post("/get-nutrition/")
async def get_nutrition(food_name: str = Form(...)):
    if not food_name:
        return {"error": "Food name is required."}

    url = "https://trackapi.nutritionix.com/v2/natural/nutrients"
    headers = {
        "x-app-id": NUTRITIONIX_APP_ID,
        "x-app-key": NUTRITIONIX_API_KEY,  
        "Content-Type": "application/json"
    }
    payload = {"query": food_name}

    response = requests.post(url, headers=headers, json=payload)

    if response.status_code != 200:
        return {"error": f"API request failed: {response.text}"}

    data = response.json()

    # Handle case where no food found
    if "foods" not in data or len(data["foods"]) == 0:
        return {"error": f"No nutrition data found for '{food_name}'."}

    item = data["foods"][0]  # First match
    return {
        "foodName": item["food_name"],
        "calories": item["nf_calories"],
        "protein": item["nf_protein"],
        "carbs": item["nf_total_carbohydrate"],
        "fat": item["nf_total_fat"],
    }