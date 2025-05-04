import React from 'react'
import Image from 'next/image'

interface TeamMember {
  name: string
  role: string
  image: string
  description: string
}

const teamMembers: TeamMember[] = [
  {
    name: "John Doe",
    role: "Team Captain",
    image: "/images/team/players/player1.jpg",
    description: "Experienced PTCG player with multiple regional championships"
  },
  {
    name: "Jane Smith",
    role: "Strategy Coach",
    image: "/images/team/players/player2.jpg",
    description: "Former national champion and expert deck builder"
  },
  {
    name: "Mike Johnson",
    role: "Community Manager",
    image: "/images/team/players/player3.jpg",
    description: "Organizes local tournaments and community events"
  }
]

export default function Team() {
  return (
    <section className="w-full py-12 sm:py-20 px-4 sm:px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 sm:h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{member.name}</h3>
                <p className="text-sm sm:text-base text-blue-600 font-medium mb-2 sm:mb-3">{member.role}</p>
                <p className="text-sm sm:text-base text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8 sm:mt-12">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors">
            View All Members
          </button>
        </div>
      </div>
    </section>
  )
} 