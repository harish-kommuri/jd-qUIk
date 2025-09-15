import React, { useState } from "react";

export default function SignupPage() {
  const [role, setRole] = useState("employee");

  return (
    <div className="flex min-h-screen">
      {/* Left side - Signup form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-10">
        {/* Role Toggle */}
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setRole("employee")}
            className={`px-6 py-2 rounded ${
              role === "employee"
                ? "bg-orange-400 text-white font-medium"
                : "text-gray-600"
            }`}
          >
            Employee
          </button>
          <button
            onClick={() => setRole("employer")}
            className={`px-6 py-2 rounded ${
              role === "employer"
                ? "bg-orange-400 text-white font-medium"
                : "text-gray-600"
            }`}
          >
            Employer
          </button>
        </div>

        {/* Signup Form */}
        <h2 className="text-2xl font-bold mb-6">Signup</h2>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Full name"
            className="border border-gray-400 rounded px-3 py-2 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-400 rounded px-3 py-2 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-400 rounded px-3 py-2 focus:outline-none"
          />

          <button
            type="submit"
            className="bg-orange-400 text-white font-semibold py-3 rounded hover:bg-orange-500"
          >
            Signup
          </button>
        </form>
      </div>

      {/* Right side - Orange panel */}
      <div className="hidden md:flex w-1/2 bg-orange-400 items-center justify-center relative">
        {/* Background pattern (use SVG/Canvas later if needed) */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/graph-paper.png')]"></div>

        <p className="text-white text-lg font-semibold text-center z-10 px-8">
          Signed in institutions are able
          <br />
          to post new job offers, searching
          <br />
          for candidate…
        </p>
      </div>
    </div>
  );
}
