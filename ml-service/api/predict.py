import sys
import json
import os
import pandas as pd
import joblib

from recommend_college import recommend_colleges

# --------------------------------------------------
# Base Directory
# --------------------------------------------------

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# --------------------------------------------------
# Load Models
# --------------------------------------------------

percentile_model = joblib.load(
    os.path.join(
        BASE_DIR,
        "models",
        "percentile_model.pkl"
    )
)

rank_model = joblib.load(
    os.path.join(
        BASE_DIR,
        "models",
        "rank_model.pkl"
    )
)

encoder = joblib.load(
    os.path.join(
        BASE_DIR,
        "models",
        "category_encoder.pkl"
    )
)

# --------------------------------------------------
# Inputs
# --------------------------------------------------

physics = float(sys.argv[1])
chemistry = float(sys.argv[2])
maths = float(sys.argv[3])
category = sys.argv[4]
dream_college = sys.argv[5]

# --------------------------------------------------
# Encode Category
# --------------------------------------------------

category_encoded = encoder.transform(
    [category]
)[0]

# --------------------------------------------------
# Prepare Input
# --------------------------------------------------

input_data = pd.DataFrame({
    "Physics": [physics],
    "Chemistry": [chemistry],
    "Maths": [maths],
    "Category": [category_encoded]
})

# --------------------------------------------------
# Predict
# --------------------------------------------------

percentile = percentile_model.predict(
    input_data
)[0]

rank = rank_model.predict(
    input_data
)[0]

# --------------------------------------------------
# Safety Checks
# --------------------------------------------------

percentile = float(percentile)

if percentile < 0:
    percentile = 0

if percentile > 100:
    percentile = 100

rank = int(round(rank))

if rank < 1:
    rank = 1

# --------------------------------------------------
# College Recommendation
# --------------------------------------------------

recommended_colleges, gap_analysis = recommend_colleges(
    rank,
    category,
    dream_college
)

# --------------------------------------------------
# Final Output
# --------------------------------------------------

result = {
    "percentile": round(percentile, 2),
    "rank": rank,
    "recommended_colleges": recommended_colleges,
    "gap_analysis": gap_analysis
}

print(json.dumps(result))