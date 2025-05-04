import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Journey - Team Monki PTCG',
  description: 'Follow Team Monki\'s journey from a small group of passionate players to Malaysia\'s premier Pokemon Trading Card Game team.',
};

interface Milestone {
  year: string;
  title: string;
  description: string;
  image: string;
}

const milestones: Milestone[] = [
  {
    year: '2018',
    title: 'Team Monki Founded',
    description: 'A group of passionate PTCG players came together to form Team Monki.',
    image: '/images/journey/founding.jpg'
  },
  {
    year: '2019',
    title: 'First National Championship',
    description: 'Team Monki made its debut in the National Championship, securing top 16 positions.',
    image: '/images/journey/national-2019.jpg'
  },
  {
    year: '2020',
    title: 'Community Expansion',
    description: 'Launched our first community training program and organized local tournaments.',
    image: '/images/journey/community-2020.jpg'
  },
  {
    year: '2021',
    title: 'International Recognition',
    description: 'Team members represented Malaysia in international competitions.',
    image: '/images/journey/international-2021.jpg'
  },
  {
    year: '2022',
    title: 'Regional Champions',
    description: 'Won our first Regional Championship and established training centers.',
    image: '/images/journey/regional-2022.jpg'
  },
  {
    year: '2023',
    title: 'National Champions',
    description: 'Achieved our greatest success by winning the National Championship.',
    image: '/images/journey/national-2023.jpg'
  }
];

export default function Journey() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Our Journey</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500"></div>
            
            {/* Milestones */}
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'
                }`}
              >
                <div className="relative">
                  {/* Year marker */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    {milestone.year}
                  </div>
                  
                  {/* Content */}
                  <div className={`bg-white rounded-lg shadow-md overflow-hidden ${
                    index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'
                  }`}>
                    <div className="relative h-48">
                      <Image
                        src={milestone.image}
                        alt={milestone.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h2 className="text-2xl font-semibold mb-2">{milestone.title}</h2>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <h2 className="text-2xl font-semibold mb-4">Join Us on Our Journey</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Be a part of Team Monki's exciting journey as we continue to grow and achieve new milestones.
            </p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
              Join the Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 