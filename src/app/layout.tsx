import type { Metadata } from "next";
import { Alegreya_Sans } from "next/font/google";
import "./globals.css";

const alegreyaSans = Alegreya_Sans({ weight: ["100", "300", "400", "500", "700", "800", "900"], subsets: ["latin"],  });

export const metadata: Metadata = {
  title: "Max Podell",
  description: "Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" id="html">
      <body className={alegreyaSans.className}>{children}</body>
    </html>
  );
}
