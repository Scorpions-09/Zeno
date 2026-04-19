import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { admissionRequirements } from "@/lib/data"

export const metadata = {
  title: "Admissions | Zeno Academy",
  description: "Admissions information for Zeno Academy, including tours, assessments, and application requirements.",
}

const processSteps = [
  {
    step: "1",
    title: "Book a school tour",
    description: "Visit the campus, meet our team, and talk through your child's age, needs, and learning goals.",
  },
  {
    step: "2",
    title: "Submit an application",
    description: "Complete the inquiry and admissions form, then upload key student documents for review.",
  },
  {
    step: "3",
    title: "Assessment and conversation",
    description: "Depending on grade level, we may invite the student for a readiness activity, placement check, or interview.",
  },
  {
    step: "4",
    title: "Offer and onboarding",
    description: "Once placement is confirmed, families receive an offer, orientation details, and next-step guidance.",
  },
]

const familyFaqs = [
  {
    question: "Do you accept mid-year applications?",
    answer: "Yes, when places are available. Our team will confirm capacity by grade level and help assess whether a mid-year transition is suitable for your child.",
  },
  {
    question: "How do you support students joining from different systems?",
    answer: "We review previous school records, talk with families, and use age-appropriate assessment to understand readiness, strengths, and any support needs before placement.",
  },
  {
    question: "Can families visit before applying?",
    answer: "Absolutely. We encourage tours and admissions conversations before formal application so families can understand the school culture and ask practical questions.",
  },
]

export default function AdmissionsPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
        <div className="max-w-3xl space-y-3">
          <p className="eyebrow">Admissions</p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">A thoughtful admissions journey for children and families</h1>
          <p className="text-muted-foreground md:text-xl">
            We want the school fit to be right, not rushed. Our admissions process is designed to feel clear, welcoming, and age-appropriate from first inquiry to first day.
          </p>
        </div>
      </div>

      <div className="grid gap-10">
        <section className="section-shell px-6 py-8 md:px-10 md:py-10">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold">What families can expect</h2>
              <p className="mb-4 text-muted-foreground">
                We look beyond paperwork. We want to understand how a child learns, what support they may need, and how we can partner well with the family. That means our process includes conversations, document review, and grade-appropriate assessment rather than a one-size-fits-all checklist.
              </p>
              <p className="text-muted-foreground">
                Our team is happy to explain class size, language support, transition planning, student wellbeing services, and co-curricular opportunities so families can make a confident decision.
              </p>
            </div>
            <div className="rounded-[28px] bg-slate-50 p-6">
              <h3 className="mb-4 text-xl font-bold">Admissions timeline</h3>
              <div className="space-y-4 text-sm text-muted-foreground">
                <div>
                  <p className="font-semibold text-foreground">Priority applications</p>
                  <p>Open from January through early spring for the following academic year.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Rolling admissions</p>
                  <p>Applications remain open afterward when places are available in specific grades.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Family response time</p>
                  <p>Most completed applications receive an update within 5 to 7 working days.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell px-6 py-8 md:px-10 md:py-10">
          <h2 className="mb-6 text-2xl font-bold">Requirements by division</h2>
          <Tabs defaultValue="early-years">
            <TabsList className="mb-6 h-auto flex-wrap gap-2 bg-transparent p-0">
              <TabsTrigger value="early-years">Early Years</TabsTrigger>
              <TabsTrigger value="primary">Primary School</TabsTrigger>
              <TabsTrigger value="middle">Middle School</TabsTrigger>
            </TabsList>
            {admissionRequirements.map((program) => (
              <TabsContent key={program.division} value={program.division.toLowerCase().split(" ")[0] === "early" ? "early-years" : program.division.toLowerCase().split(" ")[0]}>
                <Card className="rounded-[28px] shadow-none">
                  <CardHeader>
                    <CardTitle>{program.division}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-8 md:grid-cols-[1fr_260px]">
                      <div>
                        <h3 className="mb-2 text-lg font-semibold">Required items</h3>
                        <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                          {program.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-2xl bg-slate-50 p-5">
                        <h3 className="mb-3 text-lg font-semibold">Deadlines</h3>
                        <div className="space-y-3 text-sm">
                          <div>
                            <p className="font-medium">Priority deadline</p>
                            <p className="text-muted-foreground">{program.deadlines.priority}</p>
                          </div>
                          <div>
                            <p className="font-medium">Rolling admissions</p>
                            <p className="text-muted-foreground">{program.deadlines.rolling}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-bold">How the process works</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item) => (
              <Card key={item.step} className="rounded-[28px] border-white/70 bg-white/90 shadow-none">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-xl font-bold text-primary">{item.step}</span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="section-shell px-6 py-8 md:px-8 md:py-10">
            <h2 className="mb-6 text-2xl font-bold">Tuition support and family guidance</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="rounded-[24px] shadow-none">
                <CardHeader>
                  <CardTitle>Enrollment guidance</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Our admissions office helps families understand grade placement, transition readiness, language support, and documentation needs. We aim to make every step practical and reassuring.
                </CardContent>
              </Card>
              <Card className="rounded-[24px] shadow-none">
                <CardHeader>
                  <CardTitle>Tuition planning</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Families can speak with our team about tuition structure, deposit timelines, sibling considerations, and onboarding costs before confirming enrollment.
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="section-shell px-6 py-8 md:px-8 md:py-10">
            <h2 className="mb-6 text-2xl font-bold">Frequently asked by families</h2>
            <div className="space-y-4">
              {familyFaqs.map((item) => (
                <div key={item.question} className="rounded-2xl bg-slate-50 p-5">
                  <h3 className="font-bold">{item.question}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell overflow-hidden bg-primary p-8 text-center text-primary-foreground">
          <h2 className="mb-4 text-2xl font-bold">Ready to take the next step?</h2>
          <p className="mx-auto mb-6 max-w-2xl">
            Book a visit, ask questions, and let us help you decide whether Zeno Academy is the right place for your child to learn and grow.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/admissions/apply">
              <Button size="lg" variant="secondary" className="rounded-full">Book a Tour</Button>
            </Link>
            <a href="mailto:admin@zeno.edu.kg">
              <Button size="lg" variant="outline" className="rounded-full border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
                Contact Admissions
              </Button>
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
