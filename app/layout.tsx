import type React from "react"
import "./globals.css"
import { Inter_Tight, DM_Serif_Display } from "next/font/google"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans",
})

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic", "normal"],
  variable: "--font-serif",
})

export const metadata = {
  title: "Swetha Reddy Ganta | AI Engineer",
  description:
    "Portfolio website for Swetha Reddy Ganta, AI Engineer specializing in machine learning, deep learning, NLP, and computer vision.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn("min-h-screen bg-black font-sans antialiased", interTight.variable, dmSerifDisplay.variable)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'