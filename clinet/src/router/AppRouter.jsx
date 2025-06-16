// client/src/router/AppRouter.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import HomePage from "../pages/HomePage";
import ChatRoomPage from "../pages/ChatRoomPage";
import { MatchPage } from "../pages/MatchPage";
import { ProfilePage } from "../pages/ProfilePage";
import AuthPage from "../pages/AuthPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { AuthProvider } from "../context/AuthContext";
// import { ChatProvider } from "../context/ChatContext";
import useAuth from "../hooks/useAuth";
import { signup } from "../api/auth";
import SignupForm from "../pages/auth/SignupForm";

const PrivateRoute = ({ children }) => {
  const { user, loading, isAuthenticated } = useAuth(); // Use isAuthenticated

  if (loading) {
    // You might want a full-page loading spinner here
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Loading authentication...</p>
      </div>
    );
  }

  // Check isAuthenticated state
  return isAuthenticated ? children : <Navigate to="/auth" replace />;
};

const AppRouter = () => {
  return (
    <Router>
      <AuthProvider>
        {/* ChatProvider depends on AuthProvider's user, so it should be inside */}

        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="signup" element={<SignupForm />}></Route>
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/matches"
            element={
              <PrivateRoute>
                <MatchPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/chats"
            element={
              <PrivateRoute>
                {/* This can be a list of chats. If currentChat is null, ChatRoomPage
                      will handle displaying a list or redirecting. */}
                <ChatRoomPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/chats/:chatId"
            element={
              <PrivateRoute>
                <ChatRoomPage /> {/* This is for specific chat rooms */}
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRouter;
