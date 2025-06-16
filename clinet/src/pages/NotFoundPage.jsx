// client/src/pages/NotFoundPage.jsx
import React from "react";
import AppLayout from "../components/layout/AppLayout"; // Assuming AppLayout provides the base layout and global background
import { Link } from "react-router"; // For navigation
import { Frown } from "lucide-react"; // An appropriate icon for not found

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      {/* Icon for Not Found */}
      <div className="animate-bounce-slow mb-8">
        {" "}
        {/* Added a subtle animation */}
        <Frown
          className="mx-auto h-24 w-24 text-primary-500"
          strokeWidth={1.5}
        />
      </div>

      {/* 404 Error Message */}
      <h1 className="text-shadow mb-4 text-6xl font-extrabold text-white md:text-8xl">
        404
      </h1>
      <h2 className="mb-4 text-3xl font-bold text-gray-200 md:text-4xl">
        Page Not Found
      </h2>

      {/* Explanatory Text */}
      <p className="mb-8 max-w-md text-lg leading-relaxed text-gray-400 md:text-xl">
        Oops! It looks like the page you're trying to reach doesn't exist or has
        been moved. Don't worry, we'll help you find your way back.
      </p>

      {/* Go Home Button */}
      <Link
        to="/"
        className="gradient-button flex w-full items-center justify-center gap-2 rounded-2xl px-10 py-4 text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl sm:w-auto"
      >
        <Frown className="h-5 w-5" /> Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
