import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team - Team Monki PTCG',
  description: 'Meet the talented members of Team Monki, Malaysia\'s premier Pokemon Trading Card Game team.',
};

interface TeamMember {
  id: string;
  name: string;
  role: string;
  division: string;
  image: string;
  bio: string;
  achievements: string[];
}

const teamMembers: TeamMember[] = [
  {
    id: 'john-doe',
    name: 'John Doe',
    role: 'Team Captain',
    division: 'Masters',
    image: '/images/team/players/player1.jpg',
    bio: 'John has been playing PTCG since 2015 and has won multiple national championships.',
    achievements: [
      'National Champion 2023',
      'Regional Champion 2022',
      'World Championship Top 16'
    ]
  },
  {
    id: 'jane-smith',
    name: 'Jane Smith',
    role: 'Senior Player',
    division: 'Seniors',
    image: '/images/team/players/player2.jpg',
    bio: 'Jane is one of our rising stars, known for her innovative deck building.',
    achievements: [
      'Regional Champion 2023',
      'National Championship Top 8'
    ]
  },
  {
    id: 'mike-johnson',
    name: 'Mike Johnson',
    role: 'Junior Player',
    division: 'Juniors',
    image: '/images/team/players/player3.jpg',
    bio: 'Mike is our youngest team member and shows great potential.',
    achievements: [
      'Junior National Champion 2023'
    ]
  }
];

export default function Team() {
  return (
    <main className="min-h-screen py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Our Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{member.name}</h2>
                <p className="text-blue-600 font-medium mb-1">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.division}</p>
                <p className="text-gray-700 mb-4">{member.bio}</p>
                <div className="space-y-2">
                  <h3 className="font-semibold">Achievements:</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {member.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 