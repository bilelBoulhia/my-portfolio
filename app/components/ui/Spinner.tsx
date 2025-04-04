// File: components/ui/Spinner.tsx
"use client"

import React from 'react'

type SpinnerProps = {
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'secondary' | 'white'
  className?: string
}

export const Spinner = ({
  size = 'md',
  color = 'primary',
  className = ''
}: SpinnerProps) => {
  // Map size to pixel values
  const sizeMap = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  }

  // Map color to Tailwind classes
  const colorMap = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    white: 'text-white'
  }

  const sizeClass = sizeMap[size]
  const colorClass = colorMap[color]

  return (
    <div className={`inline-block animate-spin ${sizeClass} ${colorClass} ${className}`} role="status" aria-label="Loading">
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  )
}