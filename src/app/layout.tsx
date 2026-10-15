import type { Metadata } from "next";
import "./globals.css";
import "./visual-refresh.css";

export const metadata: Metadata = {
  title: "MSME Digital Assistant — Your business, in good hands",
  description:
    "A local-first business workspace for India's manufacturers, distributors, and growing teams. Keep your numbers close and your next move clear.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
