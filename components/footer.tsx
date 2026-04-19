import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t bg-slate-950 text-slate-100">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-lg font-bold">Zeno School</h3>
            <p className="text-sm text-slate-300">A caring K12 learning community for curious, confident, and kind young people.</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">Explore</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/about" className="hover:text-white">Our School</Link></li>
              <li><Link href="/news" className="hover:text-white">School Stories</Link></li>
              <li><Link href="/admissions" className="hover:text-white">Admissions</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">Family Resources</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link href="/resources/academic-calendar" className="hover:text-white">School Calendar</Link></li>
              <li><Link href="/resources/library" className="hover:text-white">Learning Commons</Link></li>
              <li><Link href="/resources/student-portal" className="hover:text-white">Parent Portal</Link></li>
              <li><Link href="/admissions/apply" className="hover:text-white">Book a Visit</Link></li>
            </ul>
          </div>

          <div className="space-y-3 text-sm text-slate-300">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">Contact</h3>
            <p>88 Harmony Road, Education Park</p>
            <p>Shenzhen, Guangdong 518000</p>
            <p className="pt-2">Email: admissions@zenoschool.edu</p>
            <p>Phone: +86 (755) 8601 2026</p>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Zeno School. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
