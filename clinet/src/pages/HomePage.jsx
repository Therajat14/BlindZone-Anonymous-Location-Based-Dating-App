import React from "react";
import { Link } from "react-router";
import { Heart, MapPin, MessageCircle, Shield } from "lucide-react";
import useAuth from "../hooks/useAuth";
import AppLayout from "../components/layout/AppLayout";

const HomePage = () => {
  const { user, isAuthenticated } = useAuth();

  return (
    <div className="flex min-h-screen flex-col justify-between p-6">
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center">
        <div className="mb-12 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary-500/10">
            <Heart className="h-10 w-10 text-primary-500" fill="currentColor" />
          </div>
          <h1 className="mb-3 text-4xl font-bold text-white">BlindZone</h1>
          <p className="text-lg text-gray-400">
            Find your connection — safely and anonymously
          </p>
        </div>

        <div className="mb-12 space-y-6">
          <div className="flex items-center space-x-4">
            <Shield className="h-6 w-6 flex-shrink-0 text-secondary-500" />
            <p className="text-gray-300">100% Anonymous Until You Choose</p>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="h-6 w-6 flex-shrink-0 text-warning-500" />
            <p className="text-gray-300">Discover People Around You</p>
          </div>
          <div className="flex items-center space-x-4">
            <MessageCircle className="h-6 w-6 flex-shrink-0 text-success-500" />
            <p className="text-gray-300">Chat Only After Mutual Interest</p>
          </div>
        </div>

        <div className="space-y-4">
          {/* {isAuthenticated && user ? (
            <p className="text-center text-lg text-gray-200">
              Welcome back,{" "}
              <span className="font-semibold text-white">{user.username}</span>!
            </p>
          ) : (
            <>
              <Link
                to="signup"
                className="gradient-button block w-full rounded-2xl px-6 py-4 text-center font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                Get Started
              </Link>
              <Link
                to="/auth"
                className="block w-full rounded-2xl border border-gray-600 px-6 py-4 text-center font-medium text-gray-300 transition-all duration-200 hover:border-gray-500 hover:bg-white/5"
              >
                I Already Have an Account
              </Link>
            </>
          )} */}

          <Link
            to="signup"
            className="gradient-button block w-full rounded-2xl px-6 py-4 text-center font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
          >
            Get Started
          </Link>
          <Link
            to="/auth"
            className="block w-full rounded-2xl border border-gray-600 px-6 py-4 text-center font-medium text-gray-300 transition-all duration-200 hover:border-gray-500 hover:bg-white/5"
          >
            I Already Have an Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
