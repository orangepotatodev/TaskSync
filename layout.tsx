import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { AuthProvider } from "./providers/AuthProvider";

const nunito = Nunito({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Auth Pages",
  description: "Authentication pages project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={nunito.className}>
        <NextTopLoader
          height={2}
          color="#27AE60"
          easing="cubic-bezier(0.53,0.21,0,1)"
        />
        <AuthProvider>
          <div className="w-full">{children}</div>
        </AuthProvider>
      </body>
    </html>
  );
} 