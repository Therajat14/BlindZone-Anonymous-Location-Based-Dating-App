import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowLeft, Mail, Lock, User, Shield } from "lucide-react";
import useAuth from "../../hooks/useAuth"; // Assuming your useAuth hook is in hooks/useAuth.js

const Signup = () => {
  // Destructure signup, loading, and error from your AuthContext
  const {
    signup,
    loading: authLoading,
    error: authError,
    user: authUser,
  } = useAuth();
  const navigate = useNavigate();

  // Component local states for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(true);

  // Local state for displaying immediate input validation errors
  const [localError, setLocalError] = useState("");

  // Use a combined loading state: local submission loading or global auth loading
  const isLoading = authLoading;
  // Use a combined error state: local validation error or global auth error
  let displayError = authError;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError(""); // Clear previous local errors

    // Basic client-side validation
    if (!email || !password || (!isAnonymous && !displayName)) {
      setLocalError("Please fill in all required fields.");
      return;
    }

    if (password.length < 6) {
      setLocalError("Password must be at least 6 characters.");
      return;
    }

    try {
      // Call the signup function from your AuthContext
      // This function already handles API calls, token storage, and user state updates
      await signup({
        email,
        password,
        displayName: isAnonymous ? undefined : displayName,
        isAnonymous,
      });

      // If signup is successful, AuthContext will update the user state.
      // The navigate logic can remain here or be handled within AuthProvider's signup,
      // depending on whether you want immediate redirection or wait for a user context update.
      // For simplicity, we'll keep it here after the await.
      navigate("/discover");
    } catch (err) {
      // The error will already be set in the AuthContext, but you could add
      // specific local handling here if needed.
      displayError = console.error("Signup failed in component:", err);
    }
  };

  // Optional: Redirect if user is already authenticated (e.g., if they revisit /signup)
  // useEffect(() => {
  //   if (authUser) {
  //     navigate('/discover');
  //   }
  // }, [authUser, navigate]);

  return (
    <div className="min-h-screen p-6">
      <div className="mx-auto max-w-md">
        <div className="mb-8 pt-12">
          <Link
            to="/"
            className="mb-8 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gray-300 transition-colors hover:bg-white/20"
          >
            <ArrowLeft size={20} />
          </Link>
          <h1 className="mb-2 text-3xl font-bold text-white">Join BlindZone</h1>
          <p className="text-gray-400">Create your anonymous profile</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {displayError && (
            <div className="rounded-lg border border-error-500/20 bg-error-500/10 p-4 text-sm text-error-500">
              {displayError}
            </div>
          )}

          <div className="rounded-2xl border border-primary-500/20 bg-primary-500/10 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-primary-500" />
                <div>
                  <p className="font-semibold text-white">Anonymous Mode</p>
                  <p className="text-sm text-gray-400">
                    Stay completely anonymous
                  </p>
                </div>
              </div>
              <label className="relative inline-flex cursor-pointer items-center">
                <input
                  type="checkbox"
                  checked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                  className="peer sr-only"
                />
                <div className="peer h-6 w-11 rounded-full bg-gray-600 peer-checked:bg-primary-500 peer-focus:outline-none"></div>
              </label>
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 z-10 h-5 w-5 -translate-y-1/2 transform text-primary-500" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="glass-effect w-full rounded-2xl py-4 pl-12 pr-4 text-white placeholder-gray-400 transition-all focus:ring-2 focus:ring-primary-500"
                required
              />
            </div>

            {!isAnonymous && (
              <div className="relative">
                <User className="absolute left-4 top-1/2 z-10 h-5 w-5 -translate-y-1/2 transform text-primary-500" />
                <input
                  type="text"
                  placeholder="Display Name"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="glass-effect w-full rounded-2xl py-4 pl-12 pr-4 text-white placeholder-gray-400 transition-all focus:ring-2 focus:ring-primary-500"
                  required={!isAnonymous}
                />
              </div>
            )}

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 z-10 h-5 w-5 -translate-y-1/2 transform text-primary-500" />
              <input
                type="password"
                placeholder="Password (min 6 characters)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="glass-effect w-full rounded-2xl py-4 pl-12 pr-4 text-white placeholder-gray-400 transition-all focus:ring-2 focus:ring-primary-500"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="gradient-button w-full rounded-2xl px-6 py-4 font-semibold text-white transition-all duration-200 hover:scale-105 disabled:opacity-50"
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </button>

          <p className="text-center text-xs leading-relaxed text-gray-400">
            By signing up, you agree to our Terms of Service and Privacy Policy
          </p>

          <div className="text-center">
            <span className="text-gray-400">Already have an account? </span>
            <Link
              to="/login"
              className="hover:text-primary-400 font-semibold text-primary-500 transition-colors"
            >
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
