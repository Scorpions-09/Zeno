'use client'

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, HeartHandshake, Sparkles, ShieldCheck, Users, CalendarDays, CheckCircle2, MessageSquareMore } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { newsData, schoolStats } from "@/lib/data"
import { useLanguage } from "@/lib/language-context"

const highlights = [
  {
    icon: BookOpen,
    title: "Strong academics",
    description: "Clear expectations, evidence-based teaching, and purposeful learning pathways in literacy, numeracy, language, and inquiry.",
  },
  {
    icon: HeartHandshake,
    title: "Whole-child care",
    description: "We build belonging, emotional safety, and trusted teacher relationships so children can do their best work.",
  },
  {
    icon: Sparkles,
    title: "Enriched student life",
    description: "STEAM, arts, clubs, performances, sports, and service learning help students discover what excites them.",
  },
]

const quickLinks = [
  {
    icon: ShieldCheck,
    title: "Safeguarding and wellbeing",
    description: "A secure campus, trained staff, and daily routines that support student health, confidence, and care.",
  },
  {
    icon: Users,
    title: "Home-school partnership",
    description: "Families stay informed through regular communication, workshops, conferences, and visible learning updates.",
  },
  {
    icon: CalendarDays,
    title: "Structured school experience",
    description: "Balanced days, age-appropriate transitions, and a calendar designed around student rhythm and family planning.",
  },
]

const journey = [
  "Early years built around routine, play, and language-rich discovery",
  "Primary classrooms that strengthen independence, literacy, numeracy, and character",
  "Middle school experiences that expand confidence, agency, and future readiness",
]

const trustSignals = [
  "Small-group support and specialist intervention when needed",
  "Bilingual family communication and visible teacher partnership",
  "Balanced emphasis on academics, wellbeing, and student voice",
]

export default function Home() {
  const { language, translations } = useLanguage()
  const latestNews = newsData.slice(0, 3)

  return (
    <div className="flex min-h-screen flex-col">
      <section className="relative overflow-hidden py-16 md:py-24 lg:py-28">
        <div className="absolute inset-0 soft-grid opacity-50" />
        <div className="container relative z-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div className="space-y-6">
              <span className="inline-flex rounded-full border border-primary/15 bg-white/90 px-4 py-1 text-sm font-medium text-primary shadow-sm">
                K12 Education • Early Years to Grade 9
              </span>
              <div className="space-y-4">
                <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                  {translations[language].hero.title}
                </h1>
                <p className="text-lg font-semibold text-primary">{translations[language].hero.subtitle}</p>
                <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
                  {translations[language].hero.description}
                </p>
              </div>
              <div className="flex flex-col gap-3 min-[420px]:flex-row">
                <Link href="/admissions/apply">
                  <Button size="lg" className="gap-2 rounded-full px-7">
                    {translations[language].hero.applyNow}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="rounded-full px-7">
                    {translations[language].hero.learnMore}
                  </Button>
                </Link>
              </div>
              <div className="grid gap-3 pt-2 sm:grid-cols-2">
                {trustSignals.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/70 p-4 shadow-sm ring-1 ring-slate-100">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-primary" />
                    <p className="text-sm text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-10 hidden w-52 rounded-3xl bg-white/90 p-5 shadow-xl backdrop-blur lg:block">
                <p className="text-sm font-semibold text-slate-900">Family experience</p>
                <p className="mt-2 text-sm text-muted-foreground">Warm welcome, clear communication, and thoughtful support from first inquiry onward.</p>
              </div>
              <div className="absolute -bottom-6 right-0 hidden w-52 rounded-3xl bg-primary p-5 text-primary-foreground shadow-xl lg:block">
                <p className="text-sm font-semibold">Student wellbeing matters here</p>
                <p className="mt-2 text-sm text-primary-foreground/90">Advisory, counseling, safeguarding, and routines that help children feel secure.</p>
              </div>
              <Image
                src="/campus-default.jpg"
                width={760}
                height={560}
                alt="Happy students learning on campus"
                className="relative z-10 mx-auto aspect-[4/3] rounded-[32px] border border-white/70 object-cover shadow-[0_28px_70px_-28px_rgba(15,23,42,0.45)]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-10 md:pb-14">
        <div className="container grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="rounded-[28px] border-primary/10 bg-primary text-primary-foreground shadow-none lg:col-span-1">
            <CardContent className="p-6">
              <p className="text-sm font-medium text-primary-foreground/80">At a glance</p>
              <p className="mt-2 text-3xl font-bold">{schoolStats.students.toLocaleString()}</p>
              <p className="text-sm text-primary-foreground/85">students learning across our K12 pathway</p>
            </CardContent>
          </Card>
          <Card className="rounded-[28px] border-white/70 bg-white/90 shadow-none"><CardContent className="p-6"><p className="text-3xl font-bold">{schoolStats.faculty}</p><p className="text-sm text-muted-foreground">teachers and specialists</p></CardContent></Card>
          <Card className="rounded-[28px] border-white/70 bg-white/90 shadow-none"><CardContent className="p-6"><p className="text-3xl font-bold">{schoolStats.clubs}</p><p className="text-sm text-muted-foreground">clubs, teams, and co-curricular programs</p></CardContent></Card>
          <Card className="rounded-[28px] border-white/70 bg-white/90 shadow-none"><CardContent className="p-6"><p className="text-3xl font-bold">{schoolStats.familySatisfaction}%</p><p className="text-sm text-muted-foreground">family satisfaction in annual feedback</p></CardContent></Card>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container section-shell px-6 py-10 md:px-10 md:py-12">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="space-y-3">
              <p className="eyebrow">Our approach</p>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{translations[language].mission.title}</h2>
              <p className="text-muted-foreground md:text-lg">{translations[language].mission.description}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => {
                const Icon = item.icon
                return (
                  <Card key={item.title} className="rounded-[28px] border-slate-100 bg-white shadow-none">
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="section-shell px-6 py-8 md:px-8 md:py-10">
            <p className="eyebrow">Learning journey</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">A school path that feels coherent from one stage to the next</h2>
            <div className="mt-6 space-y-4">
              {journey.map((item, index) => (
                <div key={item} className="flex gap-4 rounded-2xl bg-slate-50 p-4">
                  <div className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{index + 1}</div>
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="section-shell px-6 py-8 md:px-8 md:py-10">
            <p className="eyebrow">Family communication</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">Parents should never feel left in the dark</h2>
            <div className="mt-6 space-y-4">
              {quickLinks.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="flex gap-4 rounded-2xl border bg-white p-4">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-accent text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold">{item.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container">
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className="eyebrow">School stories</p>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{translations[language].news.title}</h2>
              <p className="text-muted-foreground md:text-lg">{translations[language].news.description}</p>
            </div>
            <Link href="/news">
              <Button variant="outline" className="rounded-full">View all stories</Button>
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {latestNews.map((news) => (
              <Card key={news.id} className="overflow-hidden rounded-[28px] border-white/70 bg-white/92 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.3)]">
                <Image
                  src={news.image || "/campus-default.jpg"}
                  width={400}
                  height={220}
                  alt={news.title}
                  className="aspect-video w-full object-cover"
                />
                <CardContent className="space-y-3 p-6">
                  <p className="text-sm font-medium text-primary">{news.category}</p>
                  <h3 className="text-xl font-bold leading-snug">{news.title}</h3>
                  <p className="text-sm text-muted-foreground">{new Date(news.date).toLocaleDateString()}</p>
                  <p className="line-clamp-3 text-muted-foreground">{news.summary}</p>
                  <Link href={`/news/${news.id}`}>
                    <Button variant="link" className="px-0">
                      {translations[language].news.readMore}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container">
          <div className="section-shell overflow-hidden bg-primary px-6 py-10 text-primary-foreground md:px-10 md:py-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_280px] lg:items-center">
              <div>
                <p className="eyebrow !text-primary-foreground/80">Take the next step</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">{translations[language].cta.title}</h2>
                <p className="mt-4 max-w-2xl text-base text-primary-foreground/90 md:text-lg">{translations[language].cta.description}</p>
                <div className="mt-6 flex flex-col gap-3 min-[420px]:flex-row">
                  <Link href="/admissions/apply">
                    <Button size="lg" variant="secondary" className="rounded-full">Book a Tour</Button>
                  </Link>
                  <Link href="/about">
                    <Button size="lg" variant="outline" className="rounded-full border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
                      Learn about our approach
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="rounded-[28px] bg-white/10 p-6 backdrop-blur">
                <div className="flex items-start gap-3">
                  <MessageSquareMore className="mt-1 h-5 w-5" />
                  <div>
                    <p className="font-semibold">Questions before you visit?</p>
                    <p className="mt-2 text-sm text-primary-foreground/90">Our admissions team can talk through grade placement, class routines, support needs, and the best entry point for your child.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
