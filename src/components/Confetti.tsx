"use client";
import React, { useEffect, useState } from "react";
import ConfettiBoom from 'react-confetti-boom';

const Confetti = () => {
  const [isExploding, setIsExploding] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsExploding(true);
      // Reset explosion after a short delay
      setTimeout(() => {
        setIsExploding(false);
        console.log("explode")
      }, 5000);
    }, 8000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="z-50 w-full">
      {isExploding && (
        <ConfettiBoom mode="boom" particleCount={300} colors={['#5f7055', '#6f3a27']} />
      )}
    </div>
  );
};

export default Confetti;
