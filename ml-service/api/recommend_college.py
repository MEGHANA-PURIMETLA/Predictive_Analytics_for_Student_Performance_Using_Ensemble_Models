import pandas as pd
import os

def recommend_colleges(predicted_rank, category, dream_college):

    BASE_DIR = os.path.dirname(os.path.abspath(__file__))

    df = pd.read_csv(
        os.path.join(
            BASE_DIR,
            "datasets",
            "college_recommendation.csv"
        )
    )

    # Filter by category
    filtered = df[df["Category"] == category]

    # Eligible colleges
    eligible = filtered[
        filtered["Max_Rank"] >= predicted_rank
    ]

    eligible = eligible.sort_values("Max_Rank")

    recommendations = (
        eligible["College"]
        .head(5)
        .tolist()
    )

    # Dream College Analysis
    dream_data = filtered[
        filtered["College"] == dream_college
    ]

    gap_result = {}

    if not dream_data.empty:

        required_rank = int(
            dream_data.iloc[0]["Max_Rank"]
        )

        if predicted_rank <= required_rank:
            status = "Eligible"
            gap = required_rank - predicted_rank
        else:
            status = "Need Improvement"
            gap = predicted_rank - required_rank

        gap_result = {
            "dream_college": dream_college,
            "required_rank": required_rank,
            "your_rank": int(predicted_rank),
            "gap": gap,
            "status": status
        }

    return recommendations, gap_result