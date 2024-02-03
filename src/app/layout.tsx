import type { Metadata } from "next";
import { Crimson_Pro } from "next/font/google";
import "./globals.css";

const crimsonPro = Crimson_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  authors: [{ name: "Julian Bristol", url: "https://www.linkedin.com/in/julianbristol/" }],
  title: "Julian Bristol | Designer | Developer | Problem Solver | Teacher | Learner | I'm only Human",
  description: "Hey I'm Julian Bristol 🙋🏿‍♂️, welcome to my developer portfolio page. I am a passionate developer and budding designer, fearless learner, and love to solve challenges to elevate user experience and create exceptional user interfaces",
  keywords: ["frontend developer", "web designer", "SEO pro", "ADA/WCAG/A11y activist", "coding skills", "problem solver", "experience-first approach", "UI/UX designer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${crimsonPro.className} bg-creme`}>
        {children}
      </body>
    </html>
  );
}
