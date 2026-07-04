
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardCard from "../components/DashboardCard";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Dashboard() {
  const prediction = JSON.parse(
    localStorage.getItem("predictionResult")
  );

  const data = [
    {
      subject: "Physics",
      marks:
        Number(localStorage.getItem("physics")) || 0,
    },
    {
      subject: "Chemistry",
      marks:
        Number(localStorage.getItem("chemistry")) || 0,
    },
    {
      subject: "Maths",
      marks:
        Number(localStorage.getItem("maths")) || 0,
    },
  ];

  return (
    <div className="flex bg-[#050816] min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-8">

          <div>
            <h1 className="text-white text-4xl font-bold">
              Welcome to Your Dashboard 
            </h1>

            <p className="text-gray-400 mt-2">
              Predictive Analytics for Student Performance Using Ensemble Models
            </p>
          </div>

          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

            <DashboardCard
              title="Predicted Percentile"
              value={
                prediction
                  ? `${prediction.percentile}%`
                  : "--"
              }
            />

            <DashboardCard
              title="Predicted Rank"
              value={
                prediction
                  ? prediction.rank
                  : "--"
              }
            />

            <DashboardCard
              title="Recommended Colleges"
              value={
                prediction?.recommended_colleges?.length || 0
              }
            />

            <DashboardCard
              title="Dream College Status"
              value={
                prediction?.gap_analysis?.status || "--"
              }
            />

          </div>

          {/* Subject Performance Chart */}
          <div className="bg-slate-900 mt-10 p-6 rounded-2xl border border-slate-700">

            <h2 className="text-white text-2xl font-semibold mb-6">
              Subject Performance
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <XAxis
                  dataKey="subject"
                  stroke="#ffffff"
                />

                <YAxis stroke="#ffffff" />

                <Tooltip />

                <Bar
                  dataKey="marks"
                  fill="#eab308"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>

          </div>

          {/* Bottom Section */}
          <div className="grid md:grid-cols-2 gap-6 mt-10">

            {/* Recommended Colleges */}
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700">

              <h2 className="text-yellow-500 text-xl font-bold">
                Recommended Colleges
              </h2>

              <ul className="mt-4 text-gray-300 space-y-3">

                {prediction?.recommended_colleges?.map(
                  (college, index) => (
                    <li key={index}>
                      🏫 {college}
                    </li>
                  )
                )}

              </ul>

            </div>

            {/* Dream College Status */}
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700">

              <h2 className="text-yellow-500 text-xl font-bold">
                Dream College Status
              </h2>

              <div className="mt-5">

                <p className="text-gray-400">
                  Dream College
                </p>

                <h3 className="text-white text-xl mt-1">
                  {prediction?.gap_analysis?.dream_college || "--"}
                </h3>

                <p className="text-gray-400 mt-5">
                  Status
                </p>

                <h1
                  className={`text-4xl font-bold mt-2 ${
                    prediction?.gap_analysis?.status ===
                    "Eligible"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {prediction?.gap_analysis?.status || "--"}
                </h1>

                <p className="text-gray-300 mt-4">
                  Required Rank:{" "}
                  {prediction?.gap_analysis?.required_rank}
                </p>

                <p className="text-gray-300">
                  Your Rank:{" "}
                  {prediction?.gap_analysis?.your_rank}
                </p>

                <p className="text-gray-300">
                  Gap:{" "}
                  {prediction?.gap_analysis?.gap}
                </p>

              </div>

            </div>

          </div>

          {/* Features */}
          <div className="bg-slate-900 rounded-2xl p-6 mt-10 border border-slate-700">

            <h2 className="text-yellow-500 text-xl font-bold mb-6">
              Available Features
            </h2>

            <div className="grid md:grid-cols-4 gap-5">

              <div className="bg-slate-800 rounded-xl p-4">
                <h3 className="text-white font-semibold">
                  Percentile Prediction
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  Predict JEE percentile using ensemble models.
                </p>
              </div>

              <div className="bg-slate-800 rounded-xl p-4">
                <h3 className="text-white font-semibold">
                  Rank Prediction
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  Estimate rank from performance metrics.
                </p>
              </div>

              <div className="bg-slate-800 rounded-xl p-4">
                <h3 className="text-white font-semibold">
                  College Recommendation
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  Get colleges based on predicted rank.
                </p>
              </div>

              <div className="bg-slate-800 rounded-xl p-4">
                <h3 className="text-white font-semibold">
                  Gap Analysis
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  Compare predicted rank with dream college cutoff.
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;
