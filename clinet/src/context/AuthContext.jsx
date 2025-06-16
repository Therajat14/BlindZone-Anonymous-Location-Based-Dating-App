// client/src/context/AuthContext.jsx
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "./CreateContext";
import {
  login as apiLogin,
  signup as apiSignup,
  logout as apiLogout,
  getProfile as apiGetProfile,
} from "../api/auth";
import { useNavigate } from "react-router";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  // Function to check and load user on app start
  const loadUserFromToken = async () => {
    const token = localStorage.getItem("jwt_token");
    if (token) {
      // Potentially decode token here if it contains user data,
      // or make an API call to /profile to verify token and get fresh user data.
      // Making an API call is more robust for checking token validity.
      try {
        const profileData = await apiGetProfile(); // This call will use the token
        setUser(profileData.user); // Assuming profileData has a 'user' object
        localStorage.setItem("user", JSON.stringify(profileData.user));
      } catch (err) {
        console.error("Failed to load user profile with token:", err);
        localStorage.removeItem("jwt_token"); // Clear invalid token
        localStorage.removeItem("user");
        setUser(null);
        navigate("/");
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    loadUserFromToken();
  }, []); // Run only once on mount

  const login = async (credentials) => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiLogin(credentials); // This handles token storage
      setUser(data.user); // Assuming backend sends user object
      localStorage.setItem("user", JSON.stringify(data.user)); // Store user details (optional)
      setLoading(false);

      return data;
    } catch (err) {
      setError(err.message || "Login failed");
      setLoading(false);
      throw err;
    }
  };

  const signup = async (userData) => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiSignup(userData); // This handles token storage
      setUser(data.user); // Assuming backend sends user object
      localStorage.setItem("user", JSON.stringify(data.user)); // Store user details (optional)
      setLoading(false);
      return data;
    } catch (err) {
      setError(err.message || "Signup failed");
      setLoading(false);
      throw err;
    }
  };

  const logout = async () => {
    setLoading(true);
    setError(null);
    try {
      await apiLogout(); // Backend logout (optional)
      localStorage.removeItem("jwt_token"); // Clear token
      localStorage.removeItem("user"); // Clear user data
      setUser(null);
      navigate("/login");
      setLoading(false);
    } catch (err) {
      setError(err.message || "Logout failed");
      setLoading(false);
      throw err;
    }
  };

  const value = {
    user,
    loading,
    error,
    login,
    signup,
    logout,
    isAuthenticated: !!user && !!localStorage.getItem("jwt_token"), // Derived state
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
