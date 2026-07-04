# Predictive Analytics for Student Performance Using Ensemble Models

## Overview

This project is a Machine Learning-based web application that predicts a student's percentile and rank based on subject marks and category. It also provides college recommendations, dream college gap analysis, mock tests, and weak topic analysis to help students improve their academic performance.

---

# Technologies Used

### Frontend

* React.js
* Tailwind CSS
* Recharts

### Backend

* Node.js
* Express.js

### Machine Learning

* Python
* Scikit-Learn
* XGBoost
* Pandas
* NumPy
* Joblib

---

# Project Structure

```text
student-performance-predictor-starter/

├── client/
│   ├── src/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── ml-service/
│   └── api/
│       ├── datasets/
│       ├── models/
│       ├── predict.py
│       ├── train_percentile.py
│       ├── train_rank.py
│       └── recommend_college.py
```

---

# Installation

## Frontend

```bash
cd client
npm install
```

## Backend

```bash
cd server
npm install
```

## Python Dependencies

```bash
pip install pandas numpy scikit-learn xgboost joblib
```

---

# Model Training

Navigate to:

```bash
cd ml-service/api
```

Train Percentile Model

```bash
python train_percentile.py
```

Train Rank Model

```bash
python train_rank.py
```

---

# Run the Application

## Terminal 1 (Backend)

```bash
cd server
node server.js
```

Server runs on:

```text
http://localhost:5000
```

---

## Terminal 2 (Frontend)

```bash
cd client
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# Features

* User Login & Signup
* Dashboard
* Percentile Prediction
* Rank Prediction
* College Recommendation
* Dream College Gap Analysis
* Mock Test Module
* Weak Topic Analysis
* Interactive Charts

---

# Machine Learning Models

* Random Forest Regressor
* XGBoost Regressor
* Voting Regressor Ensemble

---

# Input Parameters

* Physics Marks
* Chemistry Marks
* Mathematics Marks
* Category
* Dream College

---

# Output

* Predicted Percentile
* Predicted Rank
* Recommended Colleges
* Dream College Gap Analysis
* Mock Test Results
* Weak Topic Analysis

---

# Future Enhancements

* Real-time examination datasets
* AI-based personalized study planner
* Adaptive mock tests
* Cloud deployment
* User authentication with database

---

# Developed By

**Purimetla Meghana**

B.E. Computer Science and Engineering

Student Performance Prediction using Ensemble Machine Learning Models
