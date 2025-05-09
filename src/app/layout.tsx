import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], 
  style: ["normal", "italic",],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Von and Leslie",
  description: "Join us for flowing drinks and more dancing",
  openGraph: {
    type: "website",
    url: "https://vonwillloveyouendleslie.vercel.app",
    title: "Von and Leslie",
    description: "Join us for flowing drinks and more dancing",
    images: [
      {
        url: 'https://vonwillloveyouendleslie.vercel.app/ogImage.png',
        width: 1200,
        height: 630,
        alt: 'Von and Leslie Wedding',
      },
    ],
    siteName: "Von and Leslie Wedding",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="flex justify-center items-start bg-[#fbfaf7] h-screen overflow-auto text-zinc-700 text-sm">{children}</main>
      </body>
    </html>
  );
}