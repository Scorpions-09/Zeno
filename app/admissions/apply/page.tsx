'use client'

import { useState, FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false)
  const [gradeDivision, setGradeDivision] = useState('early-years')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="container flex flex-col items-center justify-center py-12 text-center md:py-16 lg:py-24">
        <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Thanks, your tour request has been received</h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Our admissions team will contact you shortly to confirm availability, answer questions, and guide you through the next steps.
        </p>
      </div>
    )
  }

  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
        <div className="max-w-3xl space-y-3">
          <p className="eyebrow">Book a visit</p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Start with a conversation, not just a form</h1>
          <p className="text-muted-foreground md:text-xl">
            Tell us a little about your child and your family. We will help you arrange a campus tour, classroom visit, or admissions consultation that fits your grade level.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Card className="section-shell rounded-[32px] shadow-none">
          <CardHeader>
            <CardTitle>What happens next</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5 text-sm text-muted-foreground">
            <div>
              <p className="font-semibold text-foreground">1. Review by admissions</p>
              <p>We check your preferred grade level, timeline, and any key student needs.</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">2. Tour or consultation booking</p>
              <p>We suggest a suitable time for a campus visit, virtual meeting, or assessment step.</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">3. Application guidance</p>
              <p>You receive a clear list of required documents and division-specific next steps.</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Need help now?</p>
              <p>Email <a className="text-primary hover:underline" href="mailto:admissions@zenoschool.edu">admissions@zenoschool.edu</a> or call +86 (755) 8601 2026.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-[32px] border-white/70 bg-white/92 shadow-none">
          <CardHeader>
            <CardTitle>Family inquiry form</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="parentName">Parent or guardian name</Label>
                  <Input id="parentName" placeholder="Enter full name" required className="rounded-2xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="studentName">Student name</Label>
                  <Input id="studentName" placeholder="Enter student name" required className="rounded-2xl" />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Email address</Label>
                  <Input id="email" type="email" placeholder="family@example.com" required className="rounded-2xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone number</Label>
                  <Input id="phone" type="tel" placeholder="Enter contact number" required className="rounded-2xl" />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Applying for division</Label>
                  <Select value={gradeDivision} onValueChange={setGradeDivision}>
                    <SelectTrigger className="rounded-2xl">
                      <SelectValue placeholder="Select division" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="early-years">Early Years</SelectItem>
                      <SelectItem value="primary-school">Primary School</SelectItem>
                      <SelectItem value="middle-school">Middle School</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="entryDate">Preferred entry date</Label>
                  <Input id="entryDate" type="month" required className="rounded-2xl" />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="currentSchool">Current school</Label>
                  <Input id="currentSchool" placeholder="Enter current school or nursery" className="rounded-2xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language">Home language(s)</Label>
                  <Input id="language" placeholder="e.g. Chinese, English" className="rounded-2xl" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="needs">Anything we should know about your child?</Label>
                <Textarea
                  id="needs"
                  placeholder="Share interests, learning needs, support considerations, or what you are hoping to find in a school."
                  className="min-h-32 rounded-3xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="questions">Questions for our admissions team</Label>
                <Textarea
                  id="questions"
                  placeholder="Ask about curriculum, language support, class size, wellbeing, transport, school day, or anything else."
                  className="min-h-28 rounded-3xl"
                />
              </div>

              <Button type="submit" className="w-full rounded-full">Submit inquiry</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
