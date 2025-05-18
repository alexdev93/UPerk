'use client'

import React, { useState } from "react";

const Subscrib: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
  };

  return (
    <div className="flex justify-center items-center py-8">
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg shadow-lg p-8 w-full max-w-4xl flex flex-col md:flex-row justify-between items-center">
        {/* Left Section - Text */}
        <div className="text-white mb-6 md:mb-0 md:mr-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            STAY AHEAD WITH THE LATEST IN AI!
          </h2>
          <p className="text-sm md:text-base">
            At Universal Peek, we share insights on audio AI innovations
            transforming web development, customer service, and HR recruitment.
            Discover how AI can elevate your business.
          </p>
        </div>

        {/* Right Section - Email Input and Button */}
        <div className="w-full md:w-auto">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="yourname@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full md:w-64 p-3 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
            <button
              onClick={handleSubmit}
              className="w-full md:w-auto bg-gray-900 text-white font-semibold py-3 px-6 rounded-md hover:bg-gray-800 transition"
            >
              SUBSCRIBE NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscrib;
