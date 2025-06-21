import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowLeft, Mail, Lock } from "lucide-react";
import useAuth from "../../hooks/useAuth";

const LoginForm = () => {
  const { login, loading: authLoading, error: authError } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [localError, setLocalError] = useState("");

  const isLoading = authLoading;
  const displayError = localError || authError;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError("");

    if (!email || !password) {
      setLocalError("Please fill in all fields");
      return;
    }

    try {
      await login({ email, password });
      navigate("/discover");
    } catch (err) {
      setLocalError(err.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen p-6">
      <div className="mx-auto max-w-md">
        <div className="mb-8 pt-12">
          <Link
            to="/welcome"
            className="mb-8 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gray-300 transition-colors hover:bg-white/20"
          >
            <ArrowLeft size={20} />
          </Link>

          <h1 className="mb-2 text-3xl font-bold text-white">Welcome Back</h1>
          <p className="text-gray-400">Sign in to continue your journey</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {displayError && (
            <div className="rounded-lg border border-error-500/20 bg-error-500/10 p-4 text-sm text-error-500">
              {displayError}
            </div>
          )}

          <div className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-primary-500" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="glass-effect w-full rounded-2xl py-4 pl-12 pr-4 text-white placeholder-gray-400 transition-all focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-primary-500" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="glass-effect w-full rounded-2xl py-4 pl-12 pr-4 text-white placeholder-gray-400 transition-all focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="gradient-button w-full rounded-2xl px-6 py-4 font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </button>

          <div className="text-center">
            <span className="text-gray-400">Don't have an account? </span>
            <Link
              to="/signup"
              className="hover:text-primary-400 font-semibold text-primary-500 transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
