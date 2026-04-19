export const metadata = {
  title: "Learning Commons | Zeno Academy",
  description: "Explore reading, research, and student learning resources at Zeno Academy.",
}

export default function LibraryPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
        <div className="max-w-3xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Resources</p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Learning Commons</h1>
          <p className="text-muted-foreground md:text-xl">
            A flexible reading and research space that supports curiosity, independent study, guided inquiry, and joyful access to books.
          </p>
        </div>
      </div>

      <div className="grid gap-12">
        <section>
          <h2 className="mb-6 text-2xl font-bold">What students can do here</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-slate-50 p-6 text-muted-foreground">
              Browse leveled readers, bilingual texts, nonfiction collections, and classroom-linked reading lists selected for different age groups.
            </div>
            <div className="rounded-3xl bg-slate-50 p-6 text-muted-foreground">
              Use supervised research stations, digital subscriptions, and project support resources for inquiry and presentation work.
            </div>
            <div className="rounded-3xl bg-slate-50 p-6 text-muted-foreground">
              Join read-aloud sessions, book tastings, literacy events, and author-themed weeks that help build reading identity.
            </div>
            <div className="rounded-3xl bg-slate-50 p-6 text-muted-foreground">
              Access calm study zones and small group tables for collaborative work, reflection, and guided intervention sessions.
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-bold">Opening hours</h2>
          <div className="overflow-x-auto rounded-3xl border bg-white">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b text-left text-sm text-muted-foreground">
                  <th className="px-6 py-4 font-medium">Day</th>
                  <th className="px-6 py-4 font-medium">Hours</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="px-6 py-4 text-sm font-medium">Monday to Friday</td><td className="px-6 py-4 text-sm text-muted-foreground">8:00 AM to 5:00 PM</td></tr>
                <tr className="border-b"><td className="px-6 py-4 text-sm font-medium">Saturday</td><td className="px-6 py-4 text-sm text-muted-foreground">Open for special events only</td></tr>
                <tr><td className="px-6 py-4 text-sm font-medium">Sunday</td><td className="px-6 py-4 text-sm text-muted-foreground">Closed</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-bold">Need help?</h2>
          <p className="text-muted-foreground">
            Families and students can contact the Learning Commons team at <a href="mailto:library@zeno.edu.kg" className="text-primary hover:underline">library@zeno.edu.kg</a> for borrowing support, reading recommendations, or research help.
          </p>
        </section>
      </div>
    </div>
  )
}
