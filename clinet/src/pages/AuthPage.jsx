// client/src/pages/AuthPage.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import LoginForm from "../components/auth/LoginForm";
import SignupForm from "../components/auth/SignupForm";
import useAuth from "../hooks/useAuth";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { login, signup, loading, error, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/"); // Redirect to home if already authenticated
    }
  }, [isAuthenticated, navigate]);

  const handleAuthSubmit = async (credentials) => {
    try {
      if (isLogin) {
        await login(credentials);
      } else {
        await signup(credentials);
      }
      // Redirection handled by useEffect if isAuthenticated becomes true
    } catch (err) {
      // Error is already handled by useAuth hook and passed as 'error' state
      console.error("Authentication failed:", err);
    }
  };

  // If user is authenticated, this component might quickly render and then redirect
  if (isAuthenticated) {
    return null; // Or a small loading indicator while redirecting
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-xl">
        <h1 className="mb-6 text-center text-3xl font-bold">
          {isLogin ? "Login" : "Sign Up"}
        </h1>
        {error && <p className="mb-4 text-center text-red-500">{error}</p>}
        {isLogin ? (
          <LoginForm
            onSubmit={handleAuthSubmit}
            isLoading={loading}
            error={error}
          />
        ) : (
          <SignupForm
            onSubmit={handleAuthSubmit}
            isLoading={loading}
            error={error}
          />
        )}
        <p className="mt-6 text-center text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="font-medium text-blue-600 hover:underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
