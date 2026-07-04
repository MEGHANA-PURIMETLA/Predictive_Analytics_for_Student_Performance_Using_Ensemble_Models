import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
  };

  const linkStyle =
    "text-gray-300 hover:text-yellow-500 transition duration-200";

  return (
    <div className="w-72 min-h-screen bg-slate-900 border-r border-slate-700 p-6">

      <h1 className="text-yellow-500 text-2xl font-bold mb-10">
        Student Analytics
      </h1>

      <div className="flex flex-col gap-5">

        <Link className={linkStyle} to="/dashboard">
          Dashboard
        </Link>

        <Link className={linkStyle} to="/percentile">
          Percentile Prediction
        </Link>

        <Link className={linkStyle} to="/rank">
          Rank Prediction
        </Link>

        <Link className={linkStyle} to="/college">
          College Recommendation
        </Link>

        <Link className={linkStyle} to="/gap">
          Dream College Gap Analysis
        </Link>

        <Link className={linkStyle} to="/mock-test">
          Mock Test
        </Link>

        <Link className={linkStyle} to="/weak-topics">
          Weak Topic Analysis
        </Link>

        <button
          onClick={logout}
          className="mt-10 bg-red-600 hover:bg-red-700 text-white rounded-xl py-3 font-semibold"
        >
          Logout
        </button>

      </div>
    </div>
  );
}

export default Sidebar;