import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import Link from "next/link";

const HomeArrow = () => {
  return (
    <div className="fixed top-6 left-6 z-50">
      <Link
        href="/"
        className="flex items-center gap-2 text-neutral-700 hover:text-black transition"
      >
        <FiArrowLeft className="w-5 h-5" />
        <span className="text-sm font-medium">Back to Home</span>
      </Link>
    </div>
  );
};

export default HomeArrow;
