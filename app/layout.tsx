import type React from "react"
import { Inter } from "next/font/google"
import ClientLayout from "./components/badge-remover"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "Compsoft Communications - Leading ICT Solutions Provider",
  description:
    "Comprehensive end-to-end ICT solutions to businesses across Southern Africa using best-of-breed technologies.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
