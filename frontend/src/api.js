import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000", // backend server
});

// Example: Upload an image
export const uploadImage = (formData) =>
  API.post("/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

// Example: Get recipes
export const getRecipes = () => API.get("/recipes");
