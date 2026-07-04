
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function PercentilePrediction() {
  const [physics, setPhysics] = useState("");
  const [chemistry, setChemistry] = useState("");
  const [maths, setMaths] = useState("");
  const [category, setCategory] = useState("General");
  const [dreamCollege, setDreamCollege] = useState("NIT Trichy");

  const [result, setResult] = useState(null);


const handlePredict = async () => {
  try {
    const response = await fetch(
      "http://localhost:5000/api/predict",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          physics,
          chemistry,
          maths,
          category,
          dreamCollege,
        }),
      }
    );

    const data = await response.json();

    // Save for Dashboard
    localStorage.setItem(
      "predictionResult",
      JSON.stringify(data)
    );

    localStorage.setItem(
      "physics",
      physics
    );

    localStorage.setItem(
      "chemistry",
      chemistry
    );

    localStorage.setItem(
      "maths",
      maths
    );

    localStorage.setItem(
      "dreamCollege",
      dreamCollege
    );

    setResult(data);

  } catch (error) {
    console.error(error);
    alert("Prediction Failed");
  }
};


  return (
    <div className="flex bg-[#050816] min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-8">

          <h1 className="text-white text-3xl font-bold">
            Student Prediction Dashboard
          </h1>

          <div className="bg-slate-900 p-8 rounded-2xl mt-8 border border-slate-700">

            <div className="grid md:grid-cols-2 gap-5">

              <input
                type="number"
                placeholder="Physics Marks"
                value={physics}
                onChange={(e) => setPhysics(e.target.value)}
                className="w-full p-4 bg-slate-800 border border-slate-700 rounded-xl text-white outline-none focus:border-yellow-500"
              />

              <input
                type="number"
                placeholder="Chemistry Marks"
                value={chemistry}
                onChange={(e) => setChemistry(e.target.value)}
                className="w-full p-4 bg-slate-800 border border-slate-700 rounded-xl text-white outline-none focus:border-yellow-500"
              />

              <input
                type="number"
                placeholder="Maths Marks"
                value={maths}
                onChange={(e) => setMaths(e.target.value)}
                className="w-full p-4 bg-slate-800 border border-slate-700 rounded-xl text-white outline-none focus:border-yellow-500"
              />

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-4 bg-slate-800 border border-slate-700 rounded-xl text-white outline-none focus:border-yellow-500"
              >
                <option>General</option>
                <option>OBC</option>
                <option>SC</option>
                <option>ST</option>
                <option>EWS</option>
              </select>

              <select
                value={dreamCollege}
                onChange={(e) => setDreamCollege(e.target.value)}
                className="w-full p-4 bg-slate-800 border border-slate-700 rounded-xl text-white outline-none focus:border-yellow-500 md:col-span-2"
              >
                <option>NIT Trichy</option>
                <option>NIT Surathkal</option>
                <option>NIT Warangal</option>
                <option>NIT Calicut</option>
                <option>NIT Rourkela</option>
                <option>NIT Kurukshetra</option>
                <option>NIT Jaipur</option>
                <option>NIT Allahabad</option>
                <option>NIT Bhopal</option>
                <option>NIT Durgapur</option>
                <option>IIIT Hyderabad</option>
                <option>IIIT Bangalore</option>
                <option>IIIT Allahabad</option>
              </select>

            </div>

            <button
              onClick={handlePredict}
              className="bg-yellow-500 text-black px-8 py-3 rounded-xl mt-6 font-bold"
            >
              Predict
            </button>

            {result && (

              <div className="mt-8 space-y-6">

                <div className="grid md:grid-cols-2 gap-5">

                  <div className="bg-slate-800 p-6 rounded-xl">
                    <h3 className="text-slate-400">
                      Predicted Percentile
                    </h3>

                    <h1 className="text-green-400 text-4xl font-bold mt-2">
                      {result.percentile}
                    </h1>
                  </div>

                  
                </div>

                

                

              </div>

            )}

          </div>

        </div>
      </div>
    </div>
  );
}

export default PercentilePrediction;
