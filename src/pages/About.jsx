import React from "react";

export default function About() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4 drop-shadow-lg">About</h2>
      <p className="text-lg text-gray-300 max-w-xl">
        Earth & Space Fest is a college festival dedicated to celebrating science, discovery, and creativity. Learn more about our mission and team.
      </p>
    </section>
  );
}
