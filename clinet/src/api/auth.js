// client/src/api/auth.js
import { useNavigate } from "react-router";
import api from "./index";

export const login = async (credentials) => {
  try {
    const response = await api.post("/auth/login", credentials);
    // Assuming the backend sends the token in the response data under 'token'
    // or as an HttpOnly cookie. If HttpOnly, no need to store here.
    if (response.data.token) {
      localStorage.setItem("jwt_token", response.data.token); // Store the JWT
    }
    return response.data; // Contains user info, etc.
  } catch (error) {
    throw error.response.data || error.message;
  }
};

export const signup = async (userData) => {
  try {
    const response = await api.post("/auth/signup", userData);
    if (response.data.token) {
      localStorage.setItem("jwt_token", response.data.token); // Store the JWT
    }
    return response.data;
  } catch (error) {
    throw error.response.data || error.message;
  }
};

export const logout = async () => {
  try {
    // Backend logout might invalidate token, clear session, etc.
    // const response = await api.post("/auth/logout");
    localStorage.removeItem("jwt_token"); // Clear token on logout
    // return response.data;
  } catch (error) {
    throw error.response.data || error.message;
  }
};

// Example: Fetch user profile (requires auth token)
export const getProfile = async () => {
  try {
    const response = await api.get("/auth/profile");
    if (response.status === 403 && response.data.redirectTo) {
      navigate(response.data.redirectTo); // React Router or equivalent
    }
    // Assuming a protected profile endpoint
    return response.data;
  } catch (error) {
    throw error.response.data || error.message;
  }
};
