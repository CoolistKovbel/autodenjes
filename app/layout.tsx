import type { Metadata } from "next";
import "./globals.css";
import { geistMono, geistSans } from "./components/ui/fonts";



export const metadata: Metadata = {
  title: "Dunjuplop",
  description: "Looking for a way to make something passive for yourself, this the place to start. Welcoming all the pioneers for there next adventure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
