"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface EnhancedSkillBadgeProps {
  name: string
  icon?: LucideIcon
  level?: 0 | 1 | 2 | 3 | 4 | 5
  className?: string
}

export function EnhancedSkillBadge({ 
  name, 
  icon: Icon,
  level = 0, 
  className,
  ...props
}: EnhancedSkillBadgeProps & React.HTMLAttributes<HTMLDivElement>) {
  // Render level indicator dots
  const levelIndicator = () => {
    if (level === 0) return null;
    
    return (
      <div className="ml-1 flex space-x-0.5">
        {[1, 2, 3, 4, 5].map(i => (
          <div 
            key={i}
            className={cn(
              "h-1 w-1 rounded-full transition-colors duration-300",
              i <= level ? "bg-primary" : "bg-primary/30"
            )}
          />
        ))}
      </div>
    );
  };
  
  return (
    <div 
      className={cn(
        "skill-badge group relative border border-primary/20 hover:border-primary/30 shadow-sm",
        className
      )}
      {...props}
    >
      {Icon && (
        <div className="text-primary transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-4 w-4" />
        </div>
      )}
      
      <span className="text-sm font-medium text-foreground/90">{name}</span>
      
      {levelIndicator()}
      
      {/* Show level on hover */}
      {level > 0 && (
        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-md bg-popover px-2 py-1 text-xs font-medium shadow-md opacity-0 transition-opacity group-hover:opacity-100 border border-border z-10">
          {
            level === 1 ? "Beginner" :
            level === 2 ? "Elementary" :
            level === 3 ? "Intermediate" :
            level === 4 ? "Advanced" :
            "Expert"
          }
        </span>
      )}
    </div>
  )
}