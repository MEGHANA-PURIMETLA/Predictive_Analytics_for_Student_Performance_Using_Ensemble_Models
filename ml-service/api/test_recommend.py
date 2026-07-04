from recommend_college import recommend_colleges

recommended, gap = recommend_colleges(
    predicted_rank=8386,
    category="General",
    dream_college="NIT Trichy"
)

print("\nRecommended Colleges:")
print(recommended)

print("\nGap Analysis:")
print(gap)