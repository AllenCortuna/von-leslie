"use client";
import React from "react";
import { BoxRevealDemo } from "@/components/BoxRevealDemo";
import Confetti from "@/components/Confetti";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-4 p-4 md:p-8">
      <Confetti />
      <BoxRevealDemo />
      <button
        onClick={() => {
          const link = document.createElement("a");
          link.href = "/invitation.pdf";
          link.download = "invitation.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
        className="bg-[#5f7055] text-white text-lg mx-auto italic font-serif font-semibold py-2 px-4 rounded"
      >
        Download Invitation
      </button>
    </div>
  );
}
