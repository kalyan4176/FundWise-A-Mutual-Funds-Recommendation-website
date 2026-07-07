# FundWise - Mutual Fund Recommendation System

FundWise is a full-stack web application that provides personalized mutual fund recommendations based on user financial profiles. Using a Machine Learning recommendation algorithm, FundWise evaluates factors such as age, income, risk tolerance, and investment horizon to match investors with suitable funds. The platform also features interactive calculators and educational resources to help users make informed decisions.

## Live Demo

| Service | URL |
| --- | --- |
| **Frontend Application** | [https://fundwise-a-mutual-funds-recommendat.vercel.app](https://fundwise-a-mutual-funds-recommendat.vercel.app) |
| **Backend API** | [https://fundwise-a-mutual-funds-recommendation-w7kl.onrender.com](https://fundwise-a-mutual-funds-recommendation-w7kl.onrender.com) |
| **API Documentation (Swagger)** | [https://fundwise-a-mutual-funds-recommendation-w7kl.onrender.com/docs](https://fundwise-a-mutual-funds-recommendation-w7kl.onrender.com/docs) |

*Note: The backend service is hosted on Render's free tier and may require 30 to 50 seconds to spin up after a period of inactivity. Subsequent requests are processed instantly.*

---

## Features

- **Personalized Recommendations**: Uses a K-Nearest Neighbors (KNN) algorithm to match user profiles (age, income, risk appetite) with suitable mutual funds.
- **Educational Resources**: An integrated home guide explaining the structure of mutual funds, benefits of investing, and comparative analysis with traditional instruments.
- **Financial Calculators**:
  - **SIP Calculator**: Estimates future returns on Systematic Investment Plans.
  - **SWP Calculator**: Simulates Systematic Withdrawal Plan schedules and final balances.
  - **Real Returns Calculator**: Adjusts nominal investment returns for inflation to reveal actual purchasing power.
- **Responsive Interface**: Optimised layout supporting desktop, tablet, and mobile screens.

---

## Tech Stack

### Frontend
- **React.js**: UI framework.
- **Tailwind CSS**: styling and responsive design.
- **Vite**: Build tool and local development environment.
- **Axios**: HTTP client for API requests.

### Backend
- **FastAPI**: Python API framework.
- **Scikit-learn**: Recommendation engine implementation.
- **Pandas**: Data manipulation and preprocessing.
- **Uvicorn**: ASGI server implementation.

### Infrastructure
- **Vercel**: Frontend deployment and hosting.
- **Render**: Backend service deployment.

---

## Installation & Local Setup

### Prerequisites
- Node.js and npm
- Python 3.8 or higher

### 1. Backend Configuration
Navigate to the backend directory:
```bash
cd backend
```

Install the dependencies:
```bash
pip install -r requirements.txt
```

Start the local server:
```bash
uvicorn main:app --reload
```
The API documentation will be available at `http://localhost:8000/docs`.

### 2. Frontend Configuration
Navigate to the frontend directory:
```bash
cd frontend
```

Configure the environment:
```bash
echo "VITE_API_URL=http://localhost:8000" > .env
```

Install the packages:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```
The application will run locally at `http://localhost:5173`.

---

## Project Structure

```
Mutual-Funds-Recommendation-website/
├── backend/
│   ├── main.py          # FastAPI application & endpoints
│   ├── model.py         # KNN model training & inference
│   ├── funds.csv        # Mutual funds database
│   └── requirements.txt # Python dependencies
└── frontend/
    ├── src/
    │   ├── App.jsx       # Main React entry point
    │   └── components/   # UI components (SIP, SWP, Questionnaire, etc.)
    ├── index.html
    └── package.json
```

---

## Model Evaluation

| Metric | Value |
| --- | --- |
| Algorithm | K-Nearest Neighbors (k=10) |
| Dataset Size | 814 Mutual Funds |
| Leave-One-Out (LOO) Risk-Class Accuracy | 90.91% |
| Catalog Coverage | 99.02% |
| Mean Sharpe Ratio | 1.17 |

---

## License

This is an academic project and is not intended for commercial use or financial advisory purposes.
