import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "/api",
  // withCredentials: true, // Important if using HttpOnly cookies
});
console.log(import.meta.env.VITE_API_URL);
// Request Interceptor: Attach JWT token to every outgoing request
api.interceptors.request.use(
  (config) => {
    // Get token from localStorage (less secure) or handle HttpOnly cookie (more secure)
    const token = localStorage.getItem("jwt_token"); // For localStorage method
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response Interceptor: Handle 401 Unauthorized errors
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If 401 and not the login/signup request itself, and not already retrying
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Mark as retried to avoid infinite loops

      // --- TOKEN REFRESH LOGIC (Optional but Recommended for Production) ---
      // If you have a refresh token mechanism, implement it here.
      // Example:
      // try {
      //   const refreshResponse = await axios.post('/api/auth/refresh-token');
      //   const newAccessToken = refreshResponse.data.accessToken;
      //   localStorage.setItem('jwt_token', newAccessToken);
      //   originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
      //   return api(originalRequest); // Retry the original request with the new token
      // } catch (refreshError) {
      //   // If refresh fails, redirect to login
      //   console.error("Token refresh failed:", refreshError);
      //   localStorage.removeItem('jwt_token');
      //   localStorage.removeItem('user'); // Clear user from local storage
      //   window.location = '/auth'; // Redirect to login page
      //   return Promise.reject(refreshError);
      // }
      // --- END TOKEN REFRESH LOGIC ---

      // If no refresh token mechanism, or refresh fails, redirect to login
      localStorage.removeItem("jwt_token"); // Clear invalid token
      localStorage.removeItem("user"); // Clear user from local storage
      console.error("Unauthorized. Redirecting to login.");
      // Using window.location.href or navigate from react-router-dom directly
      // This part might need to be handled by the AuthContext to use `useNavigate`
      // For now, this is a direct redirect:
      window.location = "/auth";
    }
    return Promise.reject(error);
  },
);

export default api;
