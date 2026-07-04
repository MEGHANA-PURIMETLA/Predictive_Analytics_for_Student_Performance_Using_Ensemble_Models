import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050816] flex items-center justify-center px-4">
      <div className="w-full max-w-[500px] bg-[#0B1220] rounded-[28px] border border-slate-800 shadow-2xl p-10">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-semibold text-[#d4af37]">
            College Prediction
          </h1>

          <p className="mt-3 text-slate-400 text-sm">
            Students Performance Portal • Authorization Required
          </p>
        </div>

        {/* Username */}
        <div className="mb-6">
          <label className="block text-xs tracking-[3px] text-slate-500 font-semibold mb-3">
            USERNAME
          </label>

          <input
            type="text"
            placeholder="Enter username"
            className="w-full h-14 px-5 rounded-2xl bg-[#111827] border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#d4af37]"
          />
        </div>

        {/* Password */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-3">
            <label className="text-xs tracking-[3px] text-slate-500 font-semibold">
              PASSWORD
            </label>

            <span className="text-xs text-[#d4af37] font-medium cursor-pointer">
              FORGOT PASSWORD?
            </span>
          </div>

          <input
            type="password"
            placeholder="Enter password"
            className="w-full h-14 px-5 rounded-2xl bg-[#111827] border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#d4af37]"
          />
        </div>

        {/* Button */}
        <button
          onClick={() => navigate("/dashboard")}
          className="w-full h-14 rounded-2xl bg-[#d4af37] text-black font-bold tracking-[2px] hover:opacity-90 transition"
        >
          LOGIN
        </button>

        {/* Footer */}
        <div className="mt-8 text-center">
          <span className="text-slate-500">
            Don't have an account?
          </span>

          <Link
            to="/signup"
            className="ml-2 text-[#d4af37] font-semibold"
          >
            Signup
          </Link>
        </div>

      </div>
    </div>
  );
}