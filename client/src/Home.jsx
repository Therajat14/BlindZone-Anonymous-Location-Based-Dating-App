import React from "react";

function BlindZoneHero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col justify-center items-center px-4 py-12 text-center text-white">
      <div className="max-w-xl w-full">
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Connect Anonymously. Nearby.
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          Find real connections without revealing your identity.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded shadow-lg">
            Login
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded shadow-lg">
            Sign Up
          </button>
        </div>

        {/* Info Box */}
        <div className="bg-gray-800/60 backdrop-blur-md rounded-xl p-6 text-sm sm:text-base text-left shadow-md">
          <h2 className="text-pink-400 text-xl font-semibold mb-3">
            What is BlindZone?
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>📍 Match with people based on your current location.</li>
            <li>🕵️ Stay anonymous—only you choose when to reveal more.</li>
            <li>💬 Real-time chat opens only after mutual interest.</li>
            <li>🛡️ Privacy-focused. Your data, your control.</li>
            <li>⚡ Clean, distraction-free mobile-first interface.</li>
          </ul>
          <p className="mt-5 text-gray-400 text-xs text-center">
            Currently in early access 🚀 — your feedback makes us better!
          </p>
        </div>
      </div>
    </section>
  );
}

export default BlindZoneHero;
