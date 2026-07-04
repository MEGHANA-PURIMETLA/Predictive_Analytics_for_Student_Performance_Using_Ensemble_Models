
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function RankPrediction() {

  const prediction = JSON.parse(
    localStorage.getItem("predictionResult")
  );

  return (
    <div className="flex bg-[#050816] min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-8">

          <h1 className="text-white text-3xl font-bold">
            Rank Prediction
          </h1>

          <div className="bg-slate-900 p-8 rounded-2xl mt-8 border border-slate-700">

            <h2 className="text-gray-400">
              Predicted Rank
            </h2>

            <h1 className="text-yellow-500 text-6xl font-bold mt-4">
              {prediction?.rank || "--"}
            </h1>

          </div>

          <div className="bg-slate-900 p-8 rounded-2xl mt-6 border border-slate-700">

            <h2 className="text-white text-xl font-semibold mb-4">
              Rank Analysis
            </h2>

            <p className="text-gray-300">
              Predicted Percentile:
              {" "}
              <span className="text-green-400 font-bold">
                {prediction?.percentile || "--"}%
              </span>
            </p>

            <p className="text-gray-300 mt-3">
              Based on your marks and category,
              the estimated JEE rank is shown above.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default RankPrediction;
