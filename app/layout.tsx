import "../styles/globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "My Personal Website",
  description: "Welcome to my personal website built with Next.js",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
        <body className="bg-gray-50 text-gray-900" >
            {children}
        </body>
    </html>
  );
}