import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tanay Dalal | Software Engineer & Cloud Enthusiast",
  description: "Personal portfolio of Tanay Dalal, Software Engineer and Cloud Enthusiast",
  generator: 'v0.dev',
  metadataBase: new URL('https://tdalal17.github.io'),
  openGraph: {
    title: "Tanay Dalal | Software Engineer & Cloud Enthusiast",
    description: "Personal portfolio of Tanay Dalal, Software Engineer and Cloud Enthusiast",
    url: 'https://tdalal17.github.io',
    siteName: 'Tanay Dalal Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: "Tanay Dalal | Software Engineer & Cloud Enthusiast",
    card: 'summary_large_image',
  },
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
  },
} 