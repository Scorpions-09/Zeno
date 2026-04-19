import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { facultyData, schoolStats } from "@/lib/data"

export const metadata = {
  title: "Our School | Zeno Academy",
  description: "Learn about Zeno Academy, our leadership team, and our K12 educational approach.",
}

const values = [
  {
    title: "Belonging first",
    description: "Children learn best when they feel safe, known, and respected. We build that sense of belonging intentionally in every grade.",
  },
  {
    title: "Challenge with support",
    description: "We expect students to think deeply, communicate clearly, and keep growing, while giving them the scaffolds and encouragement they need.",
  },
  {
    title: "Partnership with families",
    description: "School works best when home and classroom trust each other. We communicate clearly and involve families in the learning journey.",
  },
]

const pillars = [
  "Developmentally appropriate teaching from early years through middle school",
  "Visible routines and high expectations that help children feel secure",
  "Language-rich classrooms that strengthen thinking, speaking, reading, and writing",
  "Advisory, counseling, and teacher support systems that prioritize wellbeing",
]

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="mb-14 flex flex-col items-center justify-center space-y-4 text-center">
        <div className="max-w-3xl space-y-3">
          <p className="eyebrow">Our school</p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">A K12 community designed around how children actually grow</h1>
          <p className="text-muted-foreground md:text-xl">
            Zeno Academy combines strong academics, a caring culture, and thoughtful school systems to help every learner feel confident, capable, and connected.
          </p>
        </div>
      </div>

      <div className="grid gap-10">
        <section className="section-shell px-6 py-8 md:px-10 md:py-10">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold">Who we are</h2>
              <p className="mb-4 text-muted-foreground">
                Zeno Academy was built for families who want more than a polished promise. We focus on what daily school life feels like for children, whether classrooms are calm and purposeful, whether expectations are clear, whether communication is reliable, and whether students are genuinely known by adults who care.
              </p>
              <p className="text-muted-foreground">
                Our K12 pathway supports children from early years through middle school with developmentally appropriate teaching, bilingual family support, rich co-curricular opportunities, and systems that make learning visible. We want students to leave school each day feeling stretched, supported, and proud of what they are becoming.
              </p>
            </div>
            <Image
              src="/campus-default.jpg"
              width={700}
              height={460}
              alt="Students and teachers on the Zeno Academy campus"
              className="rounded-[32px] object-cover shadow-lg"
            />
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="section-shell px-6 py-8 md:px-8 md:py-10">
            <h2 className="mb-8 text-2xl font-bold">School at a glance</h2>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
              <div className="text-center">
                <p className="mb-2 text-4xl font-bold text-primary">{schoolStats.students.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Students</p>
              </div>
              <div className="text-center">
                <p className="mb-2 text-4xl font-bold text-primary">{schoolStats.faculty}</p>
                <p className="text-sm text-muted-foreground">Teachers and specialists</p>
              </div>
              <div className="text-center">
                <p className="mb-2 text-4xl font-bold text-primary">{schoolStats.gradeLevels}</p>
                <p className="text-sm text-muted-foreground">Grade levels</p>
              </div>
              <div className="text-center">
                <p className="mb-2 text-4xl font-bold text-primary">{schoolStats.clubs}</p>
                <p className="text-sm text-muted-foreground">Clubs and teams</p>
              </div>
              <div className="text-center">
                <p className="mb-2 text-4xl font-bold text-primary">{schoolStats.languages}</p>
                <p className="text-sm text-muted-foreground">Languages in family communication</p>
              </div>
              <div className="text-center">
                <p className="mb-2 text-4xl font-bold text-primary">{schoolStats.familySatisfaction}%</p>
                <p className="text-sm text-muted-foreground">Family satisfaction</p>
              </div>
            </div>
          </div>

          <div className="section-shell px-6 py-8 md:px-8 md:py-10">
            <h2 className="mb-6 text-2xl font-bold">What shapes the student experience</h2>
            <div className="space-y-4">
              {pillars.map((item, index) => (
                <div key={item} className="flex gap-4 rounded-2xl bg-slate-50 p-4">
                  <div className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{index + 1}</div>
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell px-6 py-8 md:px-10 md:py-10">
          <h2 className="mb-3 text-2xl font-bold">Leadership and key people</h2>
          <p className="mb-8 max-w-3xl text-muted-foreground">
            Great schools are built by people who understand children, support teachers well, and hold a consistent standard for care and learning. Our leadership team works closely with students, staff, and families to keep that standard visible every day.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {facultyData.map((faculty) => (
              <Card key={faculty.id} className="rounded-[28px] border-slate-100 bg-white shadow-none">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Image
                      src={faculty.image || "/campus-default.jpg"}
                      width={120}
                      height={120}
                      alt={faculty.name}
                      className="mb-4 rounded-full object-cover"
                    />
                    <h3 className="text-xl font-bold">{faculty.name}</h3>
                    <p className="mb-1 text-primary">{faculty.title}</p>
                    <p className="mb-4 text-sm text-muted-foreground">{faculty.department}</p>
                    <p className="text-sm text-muted-foreground">{faculty.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <Card key={value.title} className="rounded-[28px] border-0 bg-primary text-primary-foreground shadow-none">
                <CardContent className="p-8">
                  <h3 className="mb-3 text-xl font-bold">{value.title}</h3>
                  <p className="text-primary-foreground/90">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
