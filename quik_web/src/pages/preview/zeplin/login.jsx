import React, { useState } from "react";

export default function LoginPage() {
  const [role, setRole] = useState("employee");

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 w-10/12 max-w-6xl">
        {/* Left side - Login form */}
        <div className="flex flex-col justify-center px-8">
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

          {/* Login Form */}
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          <form className="flex flex-col space-y-4">
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

            <a href="#" className="text-sm text-black font-semibold">
              Forgot password?
            </a>

            <button
              type="submit"
              className="bg-orange-400 text-white font-semibold py-2 rounded hover:bg-orange-500"
            >
              Login
            </button>
          </form>

          <p className="mt-6 text-sm">
            Don’t have an account?{" "}
            <a href="#" className="font-bold">
              Sign up
            </a>
          </p>
        </div>

        {/* Right side - Illustration */}
        <div className="hidden md:flex items-center justify-center">
          {/* Replace with your actual SVG or image */}
          <img
            src="https://undraw.co/illustrations" 
            alt="illustration"
            className="w-3/4"
          />
        </div>
      </div>
    </div>
  );
}
