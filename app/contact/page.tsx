"use client"

import { useState } from "react"
import { SpotlightContainer } from "@/components/ui/spotlight-container"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [activeTab, setActiveTab] = useState("form") // For mobile view: "form" or "info"

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      })
    }, 1500)
  }

  return (
    <main className="min-h-screen p-8 bg-warmPalette-dark-bg text-warmPalette-dark-text">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-warm text-transparent bg-clip-text animate-pulse">Get In Touch</h1>
          <p className="text-warmPalette-dark-text/80 max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or partnerships. 
            Feel free to reach out using the form below or through my social media.
          </p>
        </div>
        
        {/* Mobile Tabs */}
        <div className="md:hidden flex border-b border-warmPalette-muted mb-8">
          <button 
            className={`flex-1 py-3 text-center ${activeTab === "form" ? "border-b-2 border-warmPalette-primary text-warmPalette-primary" : ""}`}
            onClick={() => setActiveTab("form")}
          >
            Contact Form
          </button>
          <button 
            className={`flex-1 py-3 text-center ${activeTab === "info" ? "border-b-2 border-warmPalette-primary text-warmPalette-primary" : ""}`}
            onClick={() => setActiveTab("info")}
          >
            Contact Info
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info - Hidden on mobile when form tab is active */}
          <div className={`${activeTab === "form" ? "hidden md:block" : ""}`}>
            <SpotlightContainer className="p-8 h-full">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-warmPalette-primary/20 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-warmPalette-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <a href="mailto:tanay.dalal@example.com" className="text-warmPalette-primary hover:underline">
                      tanay.dalal@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-warmPalette-primary/20 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-warmPalette-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Location</h3>
                    <p className="text-warmPalette-dark-text/80">
                      San Francisco, California
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-warmPalette-primary/20 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-warmPalette-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Social</h3>
                    <a 
                      href="https://linkedin.com/in/tanay-dalal" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-warmPalette-primary hover:underline"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>
            </SpotlightContainer>
          </div>
          
          {/* Contact Form - Hidden on mobile when info tab is active */}
          <div className={`${activeTab === "info" ? "hidden md:block" : ""}`}>
            <SpotlightContainer className="p-8">
              {!isSubmitted ? (
                <>
                  <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-warmPalette-muted border border-warmPalette-muted rounded-md focus:outline-none focus:ring-2 focus:ring-warmPalette-primary"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-warmPalette-muted border border-warmPalette-muted rounded-md focus:outline-none focus:ring-2 focus:ring-warmPalette-primary"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-warmPalette-muted border border-warmPalette-muted rounded-md focus:outline-none focus:ring-2 focus:ring-warmPalette-primary"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 bg-warmPalette-muted border border-warmPalette-muted rounded-md focus:outline-none focus:ring-2 focus:ring-warmPalette-primary"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 px-4 bg-gradient-warm text-white font-medium rounded-md hover:opacity-90 transition-opacity disabled:opacity-70"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="bg-warmPalette-primary/20 p-4 rounded-full inline-block mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-warmPalette-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
                  <p className="text-warmPalette-dark-text/80 mb-6">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="py-2 px-4 bg-warmPalette-muted text-warmPalette-dark-text rounded-md hover:bg-warmPalette-muted/80 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </SpotlightContainer>
          </div>
        </div>
      </div>
    </main>
  )
}