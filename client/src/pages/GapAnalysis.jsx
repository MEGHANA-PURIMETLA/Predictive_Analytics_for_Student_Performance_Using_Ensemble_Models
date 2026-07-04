
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function GapAnalysis() {

  const prediction = JSON.parse(
    localStorage.getItem("predictionResult")
  );

  const gapData = prediction?.gap_analysis;

  return (
    <div className="flex bg-[#050816] min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-8">

          <h1 className="text-white text-3xl font-bold">
            Dream College Gap Analysis
          </h1>

          <div className="bg-slate-900 p-8 rounded-2xl mt-8 border border-slate-700">

            <div className="mb-8">

              <p className="text-gray-400">
                Dream College
              </p>

              <h1 className="text-yellow-500 text-3xl font-bold mt-2">
                {gapData?.dream_college || "--"}
              </h1>

            </div>

            <div className="mt-6">

              <p className="text-gray-400">
                Required Rank
              </p>

              <h1 className="text-yellow-500 text-4xl font-bold">
                {gapData?.required_rank || "--"}
              </h1>

            </div>

            <div className="mt-6">

              <p className="text-gray-400">
                Your Predicted Rank
              </p>

              <h1 className="text-white text-4xl font-bold">
                {gapData?.your_rank || "--"}
              </h1>

            </div>

            <div className="mt-6">

              <p className="text-gray-400">
                Gap
              </p>

              <h1 className="text-red-500 text-4xl font-bold">
                {gapData?.gap || "--"}
              </h1>

            </div>

            <div className="mt-8">

              <p className="text-gray-400">
                Status
              </p>

              <h1
                className={`text-4xl font-bold mt-2 ${
                  gapData?.status === "Eligible"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {gapData?.status || "--"}
              </h1>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default GapAnalysis;
