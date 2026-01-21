import "./globals.css";
import Sidebar from "@/components/side-bar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Infa Email",
  description: "Choose Infrastructure Where You Want to Host Your Email",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen overflow-hidden bg-gray-50">
        <div className="flex h-full">
          <Sidebar />
          <main className="flex-1 overflow-hidden">{children}</main>
        </div>
      </body>
    </html>
  );
}
