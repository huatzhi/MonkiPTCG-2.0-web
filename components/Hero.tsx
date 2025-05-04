import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="w-full h-screen relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <Image
          src="/images/logo.png"
          alt="Team Monki Logo"
          width={150}
          height={150}
          className="mb-4 sm:mb-8 w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]"
          priority
        />
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2 sm:mb-4 text-center">
          Team Monki PTCG
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-8 text-center max-w-2xl">
          Malaysia's Premier Pokemon Trading Card Game Team
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors">
            Learn More
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-6 py-3 rounded-lg transition-colors">
            Join Us
          </button>
        </div>
      </div>
    </section>
  )
} 