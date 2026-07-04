import pandas as pd
import joblib

from sklearn.ensemble import RandomForestRegressor, VotingRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import r2_score
from sklearn.preprocessing import LabelEncoder

from xgboost import XGBRegressor

# Load dataset
df = pd.read_csv("datasets/student_performance.csv")

# Encode category
le = LabelEncoder()
df["Category"] = le.fit_transform(df["Category"])

# Features
X = df[["Physics", "Chemistry", "Maths", "Category"]]

# Target
y = df["Rank"]

# Split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Models
rf = RandomForestRegressor(
    n_estimators=200,
    random_state=42
)

xgb = XGBRegressor(
    n_estimators=200,
    learning_rate=0.05,
    max_depth=6,
    random_state=42
)

# Ensemble
model = VotingRegressor([
    ("rf", rf),
    ("xgb", xgb)
])

# Train
model.fit(X_train, y_train)

# Predict
pred = model.predict(X_test)

# Accuracy
score = r2_score(y_test, pred)

print("R2 Score:", round(score, 4))

# Save model
joblib.dump(model, "models/rank_model.pkl")

print("Rank model saved successfully!")