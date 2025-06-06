import React from "react";

function BlindZoneHero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black px-4 py-12 text-center text-white">
      <div className="mb-10 text-4xl font-bold">
        <span className="text-blue-500">Blind</span>
        <span className="text-pink-500">Zone</span>
      </div>
      <div className="w-full max-w-xl">
        {/* Title */}
        <h1 className="mb-4 text-3xl font-bold md:text-5xl">
          Connect Anonymously. Nearby.
        </h1>
        <p className="mb-8 text-lg text-gray-400">
          Find real connections without revealing your identity.
        </p>

        {/* CTA Buttons */}
        <div className="mb-10 flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <button className="rounded bg-indigo-600 px-6 py-2 font-semibold text-white shadow-lg hover:bg-indigo-700">
            Login
          </button>
          <button className="rounded bg-green-600 px-6 py-2 font-semibold text-white shadow-lg hover:bg-green-700">
            Sign Up
          </button>
        </div>

        {/* Info Box */}
        <div className="rounded-xl bg-gray-800/60 p-6 text-left text-sm shadow-md backdrop-blur-md sm:text-base">
          <h2 className="mb-3 text-xl font-semibold text-pink-400">
            What is BlindZone?
          </h2>
          <ul className="list-inside list-disc space-y-2 text-gray-300">
            <li>📍 Match with people based on your current location.</li>
            <li>🕵️ Stay anonymous—only you choose when to reveal more.</li>
            <li>💬 Real-time chat opens only after mutual interest.</li>
            <li>🛡️ Privacy-focused. Your data, your control.</li>
            <li>⚡ Clean, distraction-free mobile-first interface.</li>
          </ul>
          <p className="mt-5 text-center text-xs text-gray-400">
            Currently in early access 🚀 — your feedback makes us better!
          </p>
        </div>
      </div>
    </section>
  );
}

export default BlindZoneHero;
