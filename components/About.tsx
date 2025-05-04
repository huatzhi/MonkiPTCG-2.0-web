import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <section className="w-full py-12 sm:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/team/team-hero.jpg"
              alt="Team Monki"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">About Us</h2>
            <p className="text-base sm:text-lg text-gray-600 mb-4">
              Team Monki is Malaysia's premier Pokemon Trading Card Game team, dedicated to promoting
              competitive play and community building in the region.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
                <p className="text-sm text-gray-600">
                  To promote competitive PTCG play and build a strong community in Malaysia.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Our Vision</h3>
                <p className="text-sm text-gray-600">
                  To be the leading PTCG team in Southeast Asia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 