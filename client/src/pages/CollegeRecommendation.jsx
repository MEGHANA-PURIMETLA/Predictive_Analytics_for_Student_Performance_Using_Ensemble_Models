import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function CollegeRecommendation() {

  const prediction = JSON.parse(
    localStorage.getItem("predictionResult")
  );

  const colleges =
    prediction?.recommended_colleges || [];

  const rank =
    prediction?.rank || 0;

  const cutoffRanks = {
    "NIT Surathkal": 7000,
    "NIT Warangal": 8000,
    "NIT Calicut": 10000,
    "NIT Rourkela": 12000,
    "NIT Kurukshetra": 15000,
    "NIT Trichy": 5000,
    "IIIT Hyderabad": 3000,
    "IIIT Bangalore": 6000,
    "IIIT Allahabad": 9000,
    "NIT Jaipur": 14000,
    "NIT Allahabad": 11000,
    "NIT Bhopal": 16000,
    "NIT Durgapur": 18000,
  };

  const chartData = colleges.map((college) => {

    const cutoff =
      cutoffRanks[college] || rank;

    let score =
      100 -
      (Math.abs(rank - cutoff) / cutoff) *
        100;

    score = Math.max(
      20,
      Math.min(100, Math.round(score))
    );

    return {
      college,
      score,
    };
  });

  return (
    <div className="flex bg-[#050816] min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-8">

          <h1 className="text-white text-3xl font-bold">
            College Recommendation
          </h1>

          <p className="text-gray-400 mt-2">
            Colleges recommended based on your
            predicted rank and category.
          </p>

          {/* College Cards */}

          <div className="grid md:grid-cols-3 gap-5 mt-8">

            {colleges.length > 0 ? (

              colleges.map((college, index) => (

                <div
                  key={index}
                  className="bg-slate-900 p-6 rounded-2xl border border-yellow-500"
                >
                  <h2 className="text-yellow-500 font-bold text-xl">
                    {college}
                  </h2>

                  <p className="text-gray-400 mt-3">
                    Admission Chance : High
                  </p>
                </div>

              ))

            ) : (

              <div className="text-white text-lg">
                No prediction data found.
                Please run a prediction first.
              </div>

            )}

          </div>

          {/* Graph */}

          {chartData.length > 0 && (

            <div className="bg-slate-900 p-6 rounded-2xl mt-10 border border-slate-700">

              <h2 className="text-yellow-500 text-2xl font-bold mb-6">
                College Suitability Analysis
              </h2>

              <ResponsiveContainer
                width="100%"
                height={350}
              >
                <BarChart data={chartData}>

                  <XAxis
                    dataKey="college"
                    stroke="#ffffff"
                  />

                  <YAxis
                    stroke="#ffffff"
                    domain={[0, 100]}
                  />

                  <Tooltip />

                  <Bar
                    dataKey="score"
                    fill="#eab308"
                    radius={[8, 8, 0, 0]}
                  />

                </BarChart>
              </ResponsiveContainer>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default CollegeRecommendation;