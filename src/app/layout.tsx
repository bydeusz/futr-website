import type { Metadata } from "next";
import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "FUTR - Control your full potential",
  description:
    "Control your full potential with our platform designed exclusively for athletes. Connect with brands, showcase your achievements and get offers from new clubs directly, and take your career to new heights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
