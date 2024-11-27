import React from "react";
import { Roboto_Mono } from "next/font/google"
// These styles apply to every route in the application
import "./globals.css";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
  weight: "300"
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className={robotoMono.variable}>
      <body>{children}</body>
    </html>
  )
}