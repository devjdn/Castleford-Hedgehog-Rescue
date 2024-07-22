import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import Header from "./components/header";

const inter = Inter_Tight({subsets: ["latin"]});


export const metadata: Metadata = {
  title: "Castleford Hedgehog Rescue",
  description: "Castleford Hedgehog Rescue is a charity dedicated to preserving and protecting Britain's population of hedgehogs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
