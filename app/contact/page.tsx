"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Linkedin, Mail, MapPin, Send, ArrowRight } from "lucide-react"
import { PageBackground } from "@/components/ui/page-background"
import { SpotlightContainer } from "@/components/ui/spotlight-container"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <PageBackground variant="dark">
      <div className="container relative px-4 py-16 md:py-24">
        {/* Header with animated gradient */}
        <SpotlightContainer className="mb-16 p-8 text-center">
          <div className="animate-fade-in">
            <div className="inline-block relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-lg blur"></div>
              <h1 className="relative font-bold tracking-tight text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-text-shimmer">
                Let's Create Something Amazing
              </h1>
            </div>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground animate-fade-in-up delay-100">
              Have an idea? Let's bring it to life together. I'm always excited to collaborate on 
              innovative projects and new opportunities.
            </p>
          </div>
        </SpotlightContainer>

        {/* Connect With Me Section - Full Width */}
        <div className="max-w-4xl mx-auto mb-16 animate-fade-in-up">
          <SpotlightContainer 
            spotlightSize={1000}
            spotlightOpacity={0.2}
          >
            <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Connect With Me
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4 group/item hover:translate-x-2 transition-transform">
                <div className="rounded-xl bg-primary/10 p-3 text-primary group-hover/item:bg-primary group-hover/item:text-background transition-all duration-300">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <Link 
                    href="mailto:dalaltanay7@gmail.com" 
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group/link"
                  >
                    dalaltanay7@gmail.com
                    <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4 group/item hover:translate-x-2 transition-transform">
                <div className="rounded-xl bg-primary/10 p-3 text-primary group-hover/item:bg-primary group-hover/item:text-background transition-all duration-300">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Location</h3>
                  <p className="text-muted-foreground group-hover/item:text-foreground transition-colors">Chicago, IL</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group/item hover:translate-x-2 transition-transform">
                <div className="rounded-xl bg-primary/10 p-3 text-primary group-hover/item:bg-primary group-hover/item:text-background transition-all duration-300">
                  <Linkedin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">LinkedIn</h3>
                  <Link 
                    href="https://linkedin.com/in/tanaydalal" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group/link"
                  >
                    Connect with me
                    <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                  </Link>
                </div>
              </div>
            </div>
          </SpotlightContainer>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <SpotlightContainer
            spotlightSize={1000}
            spotlightOpacity={0.2}
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-colors duration-500"></div>
            
            <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Send a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2 group">
                  <Label htmlFor="name" className="text-sm font-medium group-focus-within:text-primary transition-colors">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background/50 backdrop-blur-sm focus:bg-background transition-all duration-300"
                  />
                </div>
                <div className="space-y-2 group">
                  <Label htmlFor="email" className="text-sm font-medium group-focus-within:text-primary transition-colors">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background/50 backdrop-blur-sm focus:bg-background transition-all duration-300"
                  />
                </div>
              </div>
              
              <div className="space-y-2 group">
                <Label htmlFor="subject" className="text-sm font-medium group-focus-within:text-primary transition-colors">
                  Subject
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-background/50 backdrop-blur-sm focus:bg-background transition-all duration-300"
                />
              </div>
              
              <div className="space-y-2 group">
                <Label htmlFor="message" className="text-sm font-medium group-focus-within:text-primary transition-colors">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="resize-none bg-background/50 backdrop-blur-sm focus:bg-background transition-all duration-300"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full group relative overflow-hidden hover:shadow-lg transition-all duration-300"
                disabled={isSubmitting}
              >
                <div className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </form>

            {isSubmitted && (
              <div className="absolute inset-0 flex items-center justify-center bg-card/95 backdrop-blur-sm rounded-lg animate-fade-in z-10">
                <div className="text-center p-6 max-w-md scale-in-center">
                  <div className="inline-flex mx-auto items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for reaching out! I'll get back to you as soon as possible.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setIsSubmitted(false)}
                    className="mx-auto group hover:border-primary/50 transition-colors"
                  >
                    Close
                  </Button>
                </div>
              </div>
            )}
          </SpotlightContainer>
        </div>
      </div>
    </PageBackground>
  )
}

