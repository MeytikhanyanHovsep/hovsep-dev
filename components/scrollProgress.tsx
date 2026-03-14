"use client";
import React, { useState, useEffect } from "react";

export default function ScrollProgress() {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setCompletion(
          Number((currentProgress / scrollHeight).toFixed(2)) * 100,
        );
      }
    };

    window.addEventListener("scroll", updateScrollCompletion);

    return () => {
      window.removeEventListener("scroll", updateScrollCompletion);
    };
  }, []);

  return (
    <div
      style={{ transform: `translateX(${completion - 100}%)` }}
      className="fixed top-0 left-0 h-1 rounded-r-md w-full bg-primary z-[100] transition-transform duration-150 ease-out"
    />
  );
}
