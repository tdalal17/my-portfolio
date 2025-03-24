"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  const routes = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/about",
      label: "About",
    },
    {
      href: "/projects",
      label: "Projects",
    },
    {
      href: "/resume",
      label: "Resume",
    },
    {
      href: "/contact",
      label: "Contact",
    },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-[#B46E3C]">Tanay Dalal</span>
        </Link>
        
        <nav className="hidden gap-8 md:flex">
          {routes.map((route) => (
            <div key={route.href} className="relative h-16 flex items-center">
              <Link
                href={route.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[#B46E3C]",
                  pathname === route.href
                    ? "text-[#B46E3C]" 
                    : "text-muted-foreground"
                )}
              >
                {route.label}
              </Link>
              {pathname === route.href && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B46E3C]" />
              )}
            </div>
          ))}
        </nav>
        
        <div className="flex items-center gap-2">
          <ThemeToggle />
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden hover:bg-[#B46E3C]/10 hover:text-[#B46E3C]"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex items-center mb-8 mt-2">
                <span className="text-xl font-bold text-[#B46E3C]">
                  Tanay Dalal
                </span>
              </div>
              <nav className="grid gap-6 text-lg font-medium">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                      "flex items-center px-4 py-2 rounded-md",
                      pathname === route.href
                        ? "text-[#B46E3C] bg-[#B46E3C]/10" 
                        : "text-muted-foreground hover:text-[#B46E3C] hover:bg-[#B46E3C]/5"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {route.label}
                    {pathname === route.href && (
                      <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#B46E3C]" />
                    )}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}