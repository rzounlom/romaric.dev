import "./globals.scss";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "romaric.dev",
  description: "personal website of Romaric Zounlome",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen min-w-screen flex-col">
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
