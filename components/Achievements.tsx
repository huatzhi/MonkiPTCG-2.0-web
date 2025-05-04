import React from 'react'
import Image from 'next/image'

interface Achievement {
  title: string
  date: string
  description: string
  image: string
}

const achievements: Achievement[] = [
  {
    title: "National Championship 2023",
    date: "June 2023",
    description: "First place in the Malaysian National Championship",
    image: "/images/achievements/national-2023.jpg"
  },
  {
    title: "Regional Championship 2023",
    date: "March 2023",
    description: "Top 8 finish in the Southeast Asia Regional Championship",
    image: "/images/achievements/regional-2023.jpg"
  },
  {
    title: "Community Impact Award",
    date: "December 2022",
    description: "Recognized for outstanding contribution to the local PTCG community",
    image: "/images/achievements/community-2022.jpg"
  }
]

export default function Achievements() {
  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={achievement.image}
                  alt={achievement.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-gray-600 mb-2">{achievement.date}</p>
                <p className="text-gray-700">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 