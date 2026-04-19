'use client'

import { useState, FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export default function StudentPortalPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError(null)
    setMessage('Demo portal only. Connect this form to your SIS or parent portal provider to enable real login.')
  }

  const handleForgotPassword = () => {
    setError(null)
    setMessage('Please contact portal support at admin@zeno.edu.kg for account assistance.')
  }

  return (
    <div className="container flex min-h-screen items-center justify-center py-12 md:py-16 lg:py-24">
      <Card className="w-full max-w-md rounded-3xl shadow-none">
        <CardHeader className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Family access</p>
          <CardTitle className="text-2xl font-bold">Parent Portal</CardTitle>
        </CardHeader>
        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertTitle>Login failed</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {message && (
            <Alert className="mb-4">
              <AlertDescription>{message}</AlertDescription>
            </Alert>
          )}
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="parent@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full">Sign in</Button>
          </form>
          <div className="mt-4 text-center">
            <Button variant="link" onClick={handleForgotPassword} className="text-sm">
              Need help accessing your account?
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
