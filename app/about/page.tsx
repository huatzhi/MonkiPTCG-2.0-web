import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Team Monki PTCG',
  description: 'Learn about Team Monki, Malaysia\'s premier Pokemon Trading Card Game team. Our story, mission, and achievements.',
};

export default function About() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">About Team Monki</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src="/images/team/team-hero.jpg"
              alt="Team Monki"
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="mb-4">
              Team Monki was founded in 2018 with a vision to promote and develop the Pokemon Trading Card Game (PTCG) scene in Malaysia. 
              What started as a small group of passionate players has grown into one of the most successful PTCG teams in the country.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="mb-4">
              Our mission is to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Promote competitive PTCG play in Malaysia</li>
              <li>Develop and train new players</li>
              <li>Organize community events and tournaments</li>
              <li>Represent Malaysia in international competitions</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Our Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">2023</h3>
                <ul className="list-disc pl-6">
                  <li>National Championship Winners</li>
                  <li>Regional Championship Top 4</li>
                  <li>World Championship Qualifiers</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">2022</h3>
                <ul className="list-disc pl-6">
                  <li>National Championship Runners-up</li>
                  <li>Regional Championship Winners</li>
                  <li>Community Tournament Series Champions</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p>Striving for the highest standards in everything we do</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p>Building a supportive and inclusive PTCG community</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Growth</h3>
                <p>Continuous learning and development for all members</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 