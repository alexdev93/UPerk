"use client";

import type React from "react";
import { useState } from "react";

export function Subscribe() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribing email:", email);
    // Reset form
    setEmail("");
  };

  return (
    <div
      className="w-full max-w-[1280px] mx-auto rounded-xl min-h-[266px]  p-8 text-white my-10"
      style={{
        background: "linear-gradient(to right, #2465EA, #298AF0, #2B9CF3)",
      }}
    >
      <div className="grid gap-6 md:grid-cols-2 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Stay Ahead With The Latest In AI!
          </h2>
          <p className="text-blue-50">
            At Universal Park, we share insights on state AI innovations
            transforming web development, customer service, and HR recruitment.
            Discover how AI works and matters!
          </p>
        </div>

        <div className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium ">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="example@gmail.com"
                className="w-full px-3 py-2 rounded-[7px] text-black bg-white mt-2 h-[43px]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full mt-3 h-[43px] bg-gray-900 hover:bg-gray-800 text-white font-medium py-2 rounded-[7px]"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


export default Subscribe;