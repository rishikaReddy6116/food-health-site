# SnackWise - Food Health Site

A comprehensive web application designed to help users make healthier food choices by providing instant nutritional information, recipe suggestions, and a personal health history tracker. This project is split into a **React frontend** and a **FastAPI backend** to provide a seamless and powerful user experience.

-----

## Features

### Frontend

  * **Food Scanner:** Upload an image of food to receive detailed nutritional information.
  * **Recipe Suggestions:** Get personalized recipe recommendations based on scanned foods or dietary preferences.
  * **Nutrition History:** Track and view a history of scanned foods and their nutritional data.
  * **About Page:** Learn more about the project and its goals.

### Backend

  * **Nutrition Data API:** A robust API built with FastAPI that fetches and provides detailed nutritional data for various foods.
  * **Secure Environment:** Uses environment variables to securely manage API keys and other sensitive information.

-----

## Tech Stack

### Frontend

  * **React:** A JavaScript library for building user interfaces.
  * **CSS:** For styling the application.

### Backend

  * **FastAPI:** A modern, high-performance web framework for building APIs with Python.
  * **Python:** The core language for the backend logic.

-----

## Installation Instructions

### Backend Setup (FastAPI)

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/Food-Health-Site.git
    cd Food-Health-Site/backend
    ```

2.  **Create and activate a virtual environment:**

    ```bash
    python -m venv venv
    # On macOS/Linux:
    source venv/bin/activate
    # On Windows:
    venv\Scripts\activate
    ```

3.  **Install dependencies:**

    ```bash
    pip install -r requirements.txt
    ```

4.  **Set up environment variables:**

      * Create a `.env` file in the `backend/` directory.
      * Add your API keys or other secrets as shown in the Environment Variables section below.

### Frontend Setup (React)

1.  **Navigate to the frontend directory:**

    ```bash
    cd ../frontend
    ```

2.  **Install Node.js dependencies:**

    ```bash
    npm install
    ```

-----

## How to Run

1.  **Start the Backend Server:**

      * Make sure your virtual environment is activated.
      * From the `backend/` directory, run:

    <!-- end list -->

    ```bash
    uvicorn main:app --reload
    ```

      * The backend server will run at `http://127.0.0.1:8000`.

2.  **Start the Frontend Server:**

      * From the `frontend/` directory, run:

    <!-- end list -->

    ```bash
    npm start
    ```

      * The frontend application will open in your browser at `http://localhost:3000`.

-----

## Folder Structure

```
Food-Health-Site/
├── backend/
│   ├── venv/                 # Python virtual environment (ignored by Git)
│   ├── .env.example          # Example file for environment variables
│   ├── main.py               # FastAPI application entry point
│   ├── requirements.txt      # Python dependencies
│   └── ...                   # Other backend files
├── frontend/
│   ├── node_modules/         # Node.js dependencies (ignored by Git)
│   ├── public/               # Static assets
│   ├── src/                  # React source code
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│   ├── package.json          # Node.js dependencies and scripts
│   └── ...                   # Other frontend files
├── .gitignore
└── README.md
```

-----

## Environment Variables

The backend uses a `.env` file to manage sensitive information, which is not committed to the repository.

Create a file named `.env` in the `backend/` folder and add the following variables:

```
# Example for a food nutrition API key
FOOD_API_KEY=your_api_key_here
```

**Note:** Replace `your_api_key_here` with your actual API key.

-----

## Future Improvements

  * Implement a user authentication system.
  * Integrate a more advanced food recognition model for the food scanner.
  * Add a feature to save custom recipes.
  * Enhance the nutrition history with charts and detailed analytics.
  * Add unit tests for both frontend and backend code.

-----

## License

This project is licensed under the MIT License. See the [LICENSE](https://www.google.com/search?q=LICENSE) file for details.

-----

## Badges

[](https://opensource.org/licenses/MIT)
[](https://www.python.org/)
[](https://fastapi.tiangolo.com/)
[](https://reactjs.org/)
