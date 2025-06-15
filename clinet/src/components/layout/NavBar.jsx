// client/src/components/layout/NavBar.jsx
import React from "react";
import { Link, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import { Button } from "../common/Button";

const NavBar = () => {
  const { user, isAuthenticated, logout } = useAuth(); // Use isAuthenticated
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/auth"); // Redirect to auth page after logout
  };

  return (
    <nav className="bg-blue-600 p-4 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          DatingApp
        </Link>
        <div className="space-x-4">
          {isAuthenticated ? ( // Check isAuthenticated
            <>
              <Link to="/profile" className="hover:text-blue-200">
                Profile
              </Link>
              <Link to="/chats" className="hover:text-blue-200">
                Chats
              </Link>
              <Link to="/matches" className="hover:text-blue-200">
                Matches
              </Link>
              <Button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600"
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/auth" className="hover:text-blue-200">
                Login / Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
