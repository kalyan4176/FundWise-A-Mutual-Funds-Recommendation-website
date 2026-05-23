# Fundwise — Mutual Fund Recommendation System

![Vercel](https://img.shields.io/badge/Frontend-Vercel-black?logo=vercel)
![Render](https://img.shields.io/badge/Backend-Render-46E3B7?logo=render)
![Python](https://img.shields.io/badge/Python-3.14-blue?logo=python)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![FastAPI](https://img.shields.io/badge/FastAPI-0.136-009688?logo=fastapi)

A full-stack web application that provides personalized mutual fund recommendations based on user financial profiles using Machine Learning. It also includes educational content and financial calculators (SIP, SWP, Real Returns) to assist investors.

## 🌐 Live Demo

| Service | URL |
|---|---|
| 🖥️ **Frontend (Live App)** | [https://fundwise-a-mutual-funds-recommendat.vercel.app](https://fundwise-a-mutual-funds-recommendat.vercel.app) |
| ⚙️ **Backend API** | [https://fundwise-a-mutual-funds-recommendation.onrender.com](https://fundwise-a-mutual-funds-recommendation.onrender.com) |
| 📖 **API Docs (Swagger)** | [https://fundwise-a-mutual-funds-recommendation.onrender.com/docs](https://fundwise-a-mutual-funds-recommendation.onrender.com/docs) |

> **Note:** The backend is hosted on Render's free tier and may take **30–50 seconds to wake up** after a period of inactivity. This is a one-time delay — subsequent requests are fast.

---

## ✨ Features

-   **Personalized Recommendations**: Uses a K-Nearest Neighbors (KNN) algorithm to match user profiles (age, income, risk tolerance, etc.) with suitable mutual funds.
-   **Educational Hub**: A dedicated Home page explaining Mutual Funds, their advantages, and comparisons with traditional investments.
-   **Financial Calculators**:
    -   **SIP Calculator**: Estimate returns on Systematic Investment Plans.
    -   **SWP Calculator**: Plan withdrawals with Systematic Withdrawal Plans.
    -   **Real Returns Calculator**: Calculate inflation-adjusted returns to understand true purchasing power.
-   **Responsive Design**: Fully responsive UI with a mobile-friendly navigation drawer.

---

## 🛠️ Tech Stack

### Frontend
-   **React.js**: Component-based UI library.
-   **Tailwind CSS**: Utility-first CSS framework for styling and responsiveness.
-   **Vite**: Fast build tool and development server.
-   **Axios**: For making HTTP requests to the backend.

### Backend
-   **FastAPI**: High-performance web framework for building APIs with Python.
-   **Scikit-learn**: For implementing the KNN recommendation algorithm.
-   **Pandas**: For data manipulation and analysis.
-   **Uvicorn**: ASGI server for running the FastAPI application.

### Deployment
-   **Vercel** — Frontend hosting with automatic CI/CD from GitHub
-   **Render** — Backend Python web service with automatic CI/CD from GitHub

---

## 🚀 Installation & Local Setup

### Prerequisites
-   Node.js and npm installed.
-   Python 3.8+ installed.

### 1. Backend Setup

Navigate to the backend directory:
```bash
cd backend
```

Install the required Python packages:
```bash
pip install -r requirements.txt
```

Run the backend server:
```bash
uvicorn main:app --reload
```
The backend API will start at `http://localhost:8000`.

### 2. Frontend Setup

Open a new terminal and navigate to the frontend directory:
```bash
cd frontend
```

Create a `.env` file:
```bash
echo "VITE_API_URL=http://localhost:8000" > .env
```

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```
The frontend application will start at `http://localhost:5173`.

---

## 📖 Usage

1.  **Home Page**: Read about mutual funds and why investing is important.
2.  **Find Recommendation**: Click "Find suitable Mutual funds", fill out the questionnaire, and get personalized fund suggestions.
3.  **Calculators**: Use the SIP, SWP, and Real Returns calculators from the navigation menu to plan your investments.

---

## 📁 Project Structure

```
Mutual-Funds-Recommendation-website/
├── backend/
│   ├── main.py          # FastAPI app & API routes
│   ├── model.py         # KNN recommendation model
│   ├── funds.csv        # Mutual funds dataset (814 funds)
│   └── requirements.txt # Python dependencies
└── frontend/
    ├── src/
    │   ├── App.jsx       # Main React application
    │   └── components/   # React components
    ├── index.html
    └── package.json
```

---

## 📊 Model Performance

| Metric | Value |
|---|---|
| Algorithm | K-Nearest Neighbors (k=10) |
| Dataset | 814 Mutual Funds |
| LOO Risk-Class Accuracy | **90.91%** |
| Catalog Coverage | **99.02%** |
| Mean Sharpe Ratio | **1.17** |

---

## 📄 License

This is an academic project and not intended for commercial use.
