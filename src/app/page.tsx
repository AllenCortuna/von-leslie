"use client";
import React from "react";
import { BoxRevealDemo } from "@/components/BoxRevealDemo";
import Confetti from "@/components/Confetti";
import { Invitation } from "@/components/Invitation";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-4 p-4 md:p-8">
      <Confetti />
      <Invitation />
      <BoxRevealDemo />
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLScNPfKxlsAnx4ZPVvHlrbmViyW4hsZwJKt81N9d07_wm_7I3Q/viewform?usp=dialog"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#5f7055] text-white text-xs mx-auto italic font-serif py-2 px-4 rounded block w-fit"
      >
        RSVP Here
      </a>
      <button
        onClick={() => {
          const link = document.createElement("a");
          link.href = "/invitation2.pdf";
          link.download = "invitation2.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
        className="bg-[#5f7055] text-white text-xs mx-auto italic font-serif py-2 px-4 rounded"
      >
        Download Invitation
      </button>
      <button
        onClick={() => {
          const link = document.createElement("a");
          link.href = "/invitation.pdf";
          link.download = "invitation.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
        className="bg-[#5f7055] text-white text-xs mx-auto italic font-serif py-2 px-4 rounded"
      >
        Download FAQs
      </button>
    </div>
  );
}
