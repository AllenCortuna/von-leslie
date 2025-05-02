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
        className="bg-[#5f7055] hover:bg-[#4a5842] text-white text-sm mx-auto italic font-serif py-3 px-6 rounded-md shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 block w-fit border border-[#8a9c7e]"
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
        className="bg-[#5f7055] hover:bg-[#4a5842] text-white text-sm mx-auto italic font-serif py-3 px-6 rounded-md shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center gap-2 border border-[#8a9c7e] w-fit"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
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
        className="bg-[#5f7055] hover:bg-[#4a5842] text-white text-sm mx-auto italic font-serif py-3 px-6 rounded-md shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center gap-2 border border-[#8a9c7e] w-fit"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        Download FAQs
      </button>
    </div>
  );
}
