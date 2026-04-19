import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { newsData } from "@/lib/data"
import { ArrowLeft } from "lucide-react"

interface NewsPageProps {
  params: {
    id: string
  }
}

export function generateMetadata({ params }: NewsPageProps) {
  const news = newsData.find((item) => item.id === params.id)

  if (!news) {
    return {
      title: "Story Not Found | Zeno Academy",
      description: "The requested school story could not be found.",
    }
  }

  return {
    title: `${news.title} | Zeno Academy`,
    description: news.summary,
  }
}

export default function NewsDetailPage({ params }: NewsPageProps) {
  const news = newsData.find((item) => item.id === params.id)

  if (!news) {
    notFound()
  }

  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <Link href="/news">
        <Button variant="ghost" className="mb-6 pl-0">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to School Stories
        </Button>
      </Link>

      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-sm font-medium text-primary">{news.category}</p>
        <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{news.title}</h1>
        <p className="mb-6 text-muted-foreground">
          {new Date(news.date).toLocaleDateString()} • {news.author}
        </p>

        <Image
          src={news.image || "/news-default.svg"}
          width={800}
          height={400}
          alt={news.title}
          className="mb-8 aspect-video w-full rounded-[28px] object-cover"
        />

        <div className="prose prose-stone max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: news.content }} />

        <div className="mt-12 rounded-3xl border bg-slate-50 p-6">
          <h2 className="mb-2 text-xl font-bold">Want to learn more about the school?</h2>
          <p className="mb-4 text-muted-foreground">
            Our admissions team can help you explore programs, age groups, and the best next step for your family.
          </p>
          <Link href="/admissions/apply">
            <Button>Book a Tour</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
