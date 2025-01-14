"use client"
import {Rocket, Stars} from 'lucide-react'
import {useEffect, useState} from "react"
import Link from "next/link";

export default function NotFound() {
  const [stars, setStars] = useState<Array<{ x: number; y: number; size: number }>>([])

  useEffect(() => {
    // Generate random stars
    const newStars = Array.from({length: 50}, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
    }))
    setStars(newStars)
  }, [])

  return (
    <div className="min-h-screen bg-[#0B1026] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated stars background */}
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
        />
      ))}

      {/* Lost in space rocket */}
      <div className="animate-float mb-8">
        <Rocket className="h-24 w-24 text-purple-500"/>
      </div>

      {/* Content */}
      <div className="text-center z-10 px-4">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-purple-400 mb-6">
          Lost in Space
        </h2>
        <p className="text-gray-400 mb-8 max-w-md">
          The galaxy you&apos;re looking for seems to be in another dimension. Let&apos;s get you back to known space.
        </p>
        <Link
          href="/"
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2 rounded-full"
        >
          Return to Base
        </Link>
      </div>

      {/* Decorative elements */}
      <Stars className="absolute left-10 top-20 h-8 w-8 text-purple-500 opacity-50"/>
      <Stars className="absolute right-10 bottom-10 h-8 w-8 text-purple-500 opacity-50"/>
    </div>
  )
}

