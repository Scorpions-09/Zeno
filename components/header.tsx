"use client"

import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe } from "lucide-react"
import { translations } from "@/lib/i18n"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [language, setLanguage] = useState<"en" | "zh">("en")

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleLanguage = () => setLanguage(language === "en" ? "zh" : "en")

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 min-w-0">
          <Image src="/logo-default.svg" alt="Zeno School Logo" width={40} height={40} className="h-10 w-10" />
          <div className="min-w-0">
            <p className="truncate text-lg font-bold leading-tight">Zeno School</p>
            <p className="truncate text-xs text-muted-foreground">Inspiring curious minds from early years to middle school</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            {translations[language].nav.home}
          </Link>
          <Link href="/news" className="text-sm font-medium transition-colors hover:text-primary">
            {translations[language].nav.news}
          </Link>
          <Link href="/admissions" className="text-sm font-medium transition-colors hover:text-primary">
            {translations[language].nav.admissions}
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            {translations[language].nav.about}
          </Link>
          <Link href="/admissions/apply">
            <Button size="sm">{translations[language].nav.applyNow}</Button>
          </Link>
          <Button variant="ghost" size="icon" className="ml-1" onClick={toggleLanguage} aria-label="Toggle language">
            <Globe className="h-5 w-5" />
          </Button>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {isMenuOpen && (
        <div className="border-t bg-background md:hidden">
          <div className="container py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-sm font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                {translations[language].nav.home}
              </Link>
              <Link href="/news" className="text-sm font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                {translations[language].nav.news}
              </Link>
              <Link href="/admissions" className="text-sm font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                {translations[language].nav.admissions}
              </Link>
              <Link href="/about" className="text-sm font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                {translations[language].nav.about}
              </Link>
              <Link href="/admissions/apply" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full">{translations[language].nav.applyNow}</Button>
              </Link>
              <Button variant="outline" className="w-full justify-center gap-2" onClick={toggleLanguage}>
                <Globe className="h-4 w-4" />
                <span>{language === "en" ? "中文" : "English"}</span>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
