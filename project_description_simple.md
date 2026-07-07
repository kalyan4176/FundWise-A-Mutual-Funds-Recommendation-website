# Fundwise — Mutual Fund Recommendation System

## What is this Project?

Fundwise is a full-stack web application that gives **personalized mutual fund recommendations** to investors based on their financial profile. The user fills a short questionnaire (age, income, risk appetite, investment duration) and the ML model instantly returns the **top 10 most suitable funds** from a dataset of **814 Indian mutual funds**.

It also serves as an investment education platform and provides **3 built-in financial calculators** — SIP, SWP, and Real Returns.

---

## Problem it Solves

India's mutual fund market has **1,000+ schemes** across dozens of AMCs. Picking the right one is confusing for retail investors. Most platforms recommend based on popularity — not on the user's individual financial situation. Fundwise fills that gap using machine learning.

---

## Tech Stack

### Frontend
| Tool | Version | Role |
|---|---|---|
| React.js | 19.2.0 | UI framework |
| Vite | 7.2.4 | Build tool & dev server |
| Tailwind CSS | 3.4.19 | Styling |
| Axios | 1.13.2 | API calls |

### Backend
| Tool | Version | Role |
|---|---|---|
| Python | 3.14.3 | Server language |
| FastAPI | 0.136.1 | REST API framework |
| Uvicorn | 0.47.0 | ASGI server |
| Pandas | 3.0.3 | Data loading & cleaning |
| Scikit-learn | 1.8.0 | KNN model & scaler |
| NumPy | 2.4.6 | Numerical operations |
| Pydantic | 2.13.4 | Request validation |

### Deployment
| Platform | What it hosts |
|---|---|
| **Vercel** | React frontend |
| **Render** | Python FastAPI backend |
| **GitHub** | Source control + CI/CD trigger |

---

## API Endpoints

### `GET /`
Health check.
```
Response: { "message": "Welcome to MF Recommender API" }
```

### `POST /recommend`
Main recommendation endpoint. Accepts a user profile and returns **10 fund recommendations**.

**Input fields:**
- `investment_amount` — Amount to invest (₹)
- `risk_appetite` — `"Low"` / `"Medium"` / `"High"`
- `age` — Investor's age
- `duration` — Investment horizon in years
- `sip_or_lumpsum` — Mode of investment
- `salary`, `savings`, `net_worth`, `dependents` — Optional financial context

**Output:** Array of 10 fund objects with scheme name, category, returns (1yr / 3yr / 5yr), sharpe ratio, expense ratio, risk level, fund size, AMC name, and more.

**Swagger Docs:** `https://fundwise-a-mutual-funds-recommendation-w7kl.onrender.com/docs`

---

## ML Model

- **Algorithm:** K-Nearest Neighbors (KNN), k = 10, Euclidean distance
- **How it works:**
  1. User inputs → converted into a **composite risk score (1–6)** using age, duration, and risk appetite
  2. A **6-dimensional target feature vector** is computed (risk, returns across 3 horizons, volatility, Sharpe)
  3. Vector is Z-score normalized using `StandardScaler`
  4. KNN retrieves the **10 closest matching funds** from the dataset
- **Features used:** `risk_score`, `returns_1yr`, `returns_3yr`, `returns_5yr`, `sd`, `sharpe`

---

## Dataset

- **814 Indian mutual funds** with **20 attributes** each
- Covers Equity (308), Debt (282), Hybrid (116), Other (80), Solution Oriented (28)
- Risk levels 1 (lowest) to 6 (highest) — SEBI classification
- Key fields: returns (1yr / 3yr / 5yr), Sharpe ratio, alpha, beta, standard deviation, expense ratio, fund size, star rating

---

## Evaluation Metrics

| Metric | Value |
|---|---|
| LOO Risk-Class Accuracy | **90.91%** |
| Risk Neighbor Alignment | **89.41%** |
| Catalog Coverage | **99.02%** (806 / 814 funds) |
| Mean Sharpe Ratio | **1.17** |
| Mean 3yr Return | **18.05%** |

---

## Key Specialties

1. **Multi-factor risk scoring** — Combines age, investment duration, and self-reported risk appetite into one score before querying the model
2. **Multi-horizon matching** — Matches funds on 1-year, 3-year, AND 5-year returns simultaneously
3. **Sharpe-aware recommendations** — Prioritizes risk-adjusted return quality, not just raw returns
4. **3 financial calculators** — SIP, SWP, and inflation-adjusted Real Returns — all in one app
5. **99% catalog coverage** — Almost every fund in the dataset gets recommended to at least one user type
6. **Auto CI/CD** — Pushing to GitHub auto-deploys both frontend (Vercel) and backend (Render)
7. **Mobile responsive** — Full hamburger menu navigation on smaller screens
8. **No login required** — Zero friction, instant access

---

## USP (Unique Selling Point)

> Most fund platforms recommend based on past AUM or star ratings. **Fundwise is the only tool that builds a personalized risk-return profile per user** — factoring age, income, dependents, horizon, and risk tolerance together — and matches it directly to funds using ML similarity search.

---

## Live Links

| | URL |
|---|---|
| 🖥️ App | https://fundwise-a-mutual-funds-recommendat.vercel.app |
| ⚙️ API | https://fundwise-a-mutual-funds-recommendation-w7kl.onrender.com |
| 📖 Docs | https://fundwise-a-mutual-funds-recommendation-w7kl.onrender.com/docs |
| 💻 GitHub | https://github.com/kalyan4176/Mutual-Funds-Recommendation-website |

---

## Project in Numbers

- **814** mutual funds in dataset
- **20** attributes per fund
- **6** ML features used
- **10** recommendations per query
- **90.91%** model accuracy
- **3** financial calculators
- **6** React components
- **2** API endpoints
- **2** cloud platforms (Vercel + Render)
