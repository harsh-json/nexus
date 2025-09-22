import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-4 px-8 fixed bottom-0">
      <span>
        © {new Date().getFullYear()} Earth & Space Fest. All rights reserved.
      </span>
    </footer>
  );
}
