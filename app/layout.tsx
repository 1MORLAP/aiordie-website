import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI or Die",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
