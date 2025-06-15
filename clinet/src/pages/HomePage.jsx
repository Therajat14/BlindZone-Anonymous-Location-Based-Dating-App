// client/src/pages/HomePage.jsx
import React from "react";
import AppLayout from "../components/layout/AppLayout";
import useAuth from "../hooks/useAuth";

const HomePage = () => {
  const { user, isAuthenticated } = useAuth();

  return (
    <AppLayout>
      <div className="container mx-auto p-4">
        <h1 className="mb-8 text-center text-4xl font-bold">
          Welcome to the Dating App!
        </h1>
        {isAuthenticated && user ? ( // Check isAuthenticated first
          <p className="text-center text-xl text-gray-700">
            Hello, {user.username}! Start exploring matches or chat with your
            connections.
          </p>
        ) : (
          <p className="text-center text-xl text-gray-700">
            Please log in or sign up to find your perfect match.
          </p>
        )}
        {/* Add more content, e.g., a "Find Matches" button, recent activity, etc. */}
      </div>
    </AppLayout>
  );
};

export default HomePage;
