import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import PercentilePrediction from "./pages/PercentilePrediction";
import RankPrediction from "./pages/RankPrediction";
import CollegeRecommendation from "./pages/CollegeRecommendation";
import GapAnalysis from "./pages/GapAnalysis";
import MockTest from "./pages/MockTest";
import WeakTopicAnalysis from "./pages/WeakTopicAnalysis";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/percentile" element={<PercentilePrediction />} />
        <Route path="/rank" element={<RankPrediction />} />
        <Route path="/college" element={<CollegeRecommendation />} />
        <Route path="/gap" element={<GapAnalysis />} />

        <Route path="/mock-test" element={<MockTest />} />
        <Route path="/weak-topics" element={<WeakTopicAnalysis />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;