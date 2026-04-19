import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { newsData } from "@/lib/data"

export const metadata = {
  title: "School Stories | Zeno School",
  description: "Latest school stories, family updates, and student life highlights from Zeno School.",
}

export default function NewsPage() {
  const featured = newsData[0]
  const rest = newsData.slice(1)

  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="mb-10 flex flex-col items-center justify-center space-y-4 text-center">
        <div className="max-w-3xl space-y-3">
          <p className="eyebrow">School stories</p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Moments that show what school life really feels like</h1>
          <p className="text-muted-foreground md:text-xl">
            Explore learning highlights, student wellbeing updates, family events, and the everyday work of building a strong K12 community.
          </p>
        </div>
      </div>

      <div className="grid gap-8">
        <section className="section-shell overflow-hidden px-0 py-0">
          <div className="grid items-center gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <Image
              src={featured.image || "/news-default.svg"}
              width={700}
              height={420}
              alt={featured.title}
              className="h-full min-h-[280px] w-full object-cover"
            />
            <div className="p-8 md:p-10">
              <p className="text-sm font-medium text-primary">Featured • {featured.category}</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">{featured.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                {new Date(featured.date).toLocaleDateString()} • {featured.author}
              </p>
              <p className="mt-4 text-muted-foreground">{featured.summary}</p>
              <Link href={`/news/${featured.id}`}>
                <Button className="mt-6 rounded-full">Read Story</Button>
              </Link>
            </div>
          </div>
        </section>

        <section>
          <div className="grid gap-6 md:grid-cols-2">
            {rest.map((news) => (
              <Card key={news.id} className="overflow-hidden rounded-[28px] border-white/70 bg-white/92 shadow-sm">
                <Image
                  src={news.image || "/news-default.svg"}
                  width={400}
                  height={220}
                  alt={news.title}
                  className="aspect-video w-full object-cover"
                />
                <CardContent className="space-y-3 p-6">
                  <p className="text-sm font-medium text-primary">{news.category}</p>
                  <h2 className="text-xl font-bold leading-snug">{news.title}</h2>
                  <p className="text-sm text-muted-foreground">
                    {new Date(news.date).toLocaleDateString()} • {news.author}
                  </p>
                  <p className="line-clamp-3 text-muted-foreground">{news.summary}</p>
                  <Link href={`/news/${news.id}`}>
                    <Button variant="link" className="p-0">Read Story</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
