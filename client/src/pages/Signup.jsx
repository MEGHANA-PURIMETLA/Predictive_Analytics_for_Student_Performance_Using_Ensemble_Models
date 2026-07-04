import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log(formData);

    // Later:
    // Save to MongoDB

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#050816] flex items-center justify-center px-4">
      <div className="w-full max-w-[550px] bg-[#0B1220] rounded-[28px] border border-slate-800 shadow-2xl p-10">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-semibold text-[#d4af37]">
            Create Account
          </h1>

          <p className="mt-3 text-slate-400 text-sm">
            Join the Student Performance Analytics Portal
          </p>
        </div>

        <form onSubmit={handleSignup}>

          {/* Full Name */}
          <div className="mb-5">
            <label className="block text-xs tracking-[3px] text-slate-500 font-semibold mb-3">
              FULL NAME
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full h-14 px-5 rounded-2xl bg-[#111827] border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#d4af37]"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="block text-xs tracking-[3px] text-slate-500 font-semibold mb-3">
              EMAIL
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-14 px-5 rounded-2xl bg-[#111827] border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#d4af37]"
              required
            />
          </div>

          {/* Username */}
          <div className="mb-5">
            <label className="block text-xs tracking-[3px] text-slate-500 font-semibold mb-3">
              USERNAME
            </label>

            <input
              type="text"
              name="username"
              placeholder="Choose username"
              value={formData.username}
              onChange={handleChange}
              className="w-full h-14 px-5 rounded-2xl bg-[#111827] border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#d4af37]"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-5">
            <label className="block text-xs tracking-[3px] text-slate-500 font-semibold mb-3">
              PASSWORD
            </label>

            <input
              type="password"
              name="password"
              placeholder="Create password"
              value={formData.password}
              onChange={handleChange}
              className="w-full h-14 px-5 rounded-2xl bg-[#111827] border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#d4af37]"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-8">
            <label className="block text-xs tracking-[3px] text-slate-500 font-semibold mb-3">
              CONFIRM PASSWORD
            </label>

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full h-14 px-5 rounded-2xl bg-[#111827] border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#d4af37]"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full h-14 rounded-2xl bg-[#d4af37] text-black font-bold tracking-[2px] hover:opacity-90 transition"
          >
            CREATE ACCOUNT
          </button>

        </form>

        {/* Footer */}
        <div className="mt-8 text-center">
          <span className="text-slate-500">
            Already have an account?
          </span>

          <Link
            to="/"
            className="ml-2 text-[#d4af37] font-semibold"
          >
            Login
          </Link>
        </div>

      </div>
    </div>
  );
}