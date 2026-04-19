export const metadata = {
  title: "School Calendar | Zeno School",
  description: "Key dates, family events, and term planning information for Zeno School.",
}

const termOne = [
  ["August 19", "New family orientation"],
  ["August 21", "First day of school"],
  ["September 13", "Curriculum night for families"],
  ["October 14-18", "Mid-semester conferences"],
  ["October 28-November 1", "Autumn break"],
  ["December 13", "Winter performance showcase"],
  ["December 20", "Last day of Term 1"],
]

const termTwo = [
  ["January 13", "Students return for Term 2"],
  ["February 21", "Student-led learning exhibitions"],
  ["March 10-14", "Spring break"],
  ["April 11", "House activity day"],
  ["May 5-9", "Assessment and reflection week"],
  ["June 13", "End-of-year celebration"],
  ["June 20", "Last day of school"],
]

function CalendarTable({ title, rows }: { title: string; rows: string[][] }) {
  return (
    <section className="rounded-3xl border bg-white p-6 shadow-none">
      <h2 className="mb-6 text-2xl font-bold">{title}</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="border-b text-left text-sm text-muted-foreground">
              <th className="px-4 py-3 font-medium">Date</th>
              <th className="px-4 py-3 font-medium">Event</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([date, event]) => (
              <tr key={`${date}-${event}`} className="border-b last:border-0">
                <td className="px-4 py-4 text-sm font-medium">{date}</td>
                <td className="px-4 py-4 text-sm text-muted-foreground">{event}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default function AcademicCalendarPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
        <div className="max-w-3xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Family planning</p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">School calendar</h1>
          <p className="text-muted-foreground md:text-xl">
            Key academic dates, family events, student showcases, and school breaks to help families plan the year with confidence.
          </p>
        </div>
      </div>

      <div className="grid gap-8">
        <CalendarTable title="Term 1" rows={termOne} />
        <CalendarTable title="Term 2" rows={termTwo} />
      </div>
    </div>
  )
}
