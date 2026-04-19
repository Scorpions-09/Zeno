import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/lib/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Zeno Academy | Зено академиясы",
  description: "Official website of Zeno Academy, a K12 learning community focused on academic growth, wellbeing, and future-ready learning.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light">
          <LanguageProvider>
            <div className="flex min-h-screen flex-col">
              <div className="bg-slate-950 text-slate-100">
                <div className="container flex flex-col gap-2 py-2 text-xs sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-wrap items-center gap-4 text-slate-300">
                    <a href="mailto:admin@zeno.edu.kg" className="hover:text-white">admin@zeno.edu.kg</a>
                    <span>Mon-Fri, 8:00 AM to 5:30 PM</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-slate-300">
                    <span>Early Years to Grade 9</span>
                    <span>Safe campus, bilingual support, family partnership</span>
                  </div>
                </div>
              </div>
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
