import React, { Suspense } from 'react';
import { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VideoBackground from '../components/VideoBackground';
import ScrollAnimation from '../components/ScrollAnimation';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Team Monki: Malaysia Top PTCG Team',
  description: 'Welcome to Team Monki, Malaysia\'s premier Pokemon Trading Card Game team. Join us on our journey to become the best PTCG team in Malaysia.',
};

function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#10e07f]"></div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <VideoBackground />

        <ScrollAnimation>
          {/* Welcome Section */}
          <section className="py-20 px-4 bg-gradient-to-b from-[#0a0a0a] via-[#0a1a0a] to-[#1a0a1a]">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left">
                  <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 animate-glow">
                    Welcome to Team Monki
                  </h2>
                  <p className="text-gray-300 text-lg mb-8">
                    Join us on our journey to become the best PTCG team in Malaysia. We are a group of passionate players dedicated to excellence in competitive play.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <button className="px-8 py-3 bg-[#10e07f] text-black font-bold rounded-full hover:bg-[#0bc06a] transition-colors duration-300">
                      Learn More
                    </button>
                    <button className="px-8 py-3 border-2 border-[#10e07f] text-[#10e07f] font-bold rounded-full hover:bg-[#10e07f] hover:text-black transition-colors duration-300">
                      Join Us
                    </button>
                  </div>
                </div>
                <div className="relative h-64 md:h-96">
                  <Image
                    src="/images/team/team-hero.jpg"
                    alt="Team Monki"
                    fill
                    priority
                    quality={100}
                    className="object-cover rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Achievements Section */}
          <section className="py-20 px-4 bg-gradient-to-b from-[#1a0a1a] via-[#0a1a0a] to-[#0a0a0a]">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center animate-glow">
                Our Achievements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-[#10e07f]/20 hover:border-[#10e07f] transition-colors duration-300">
                  <h3 className="text-2xl font-bold text-[#10e07f] mb-4">2023</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• World Championship Qualifiers</li>
                    <li>• Regional Championship Top 4</li>
                    <li>• National Championship Champions</li>
                  </ul>
                </div>
                <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-[#10e07f]/20 hover:border-[#10e07f] transition-colors duration-300">
                  <h3 className="text-2xl font-bold text-[#10e07f] mb-4">2022</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• National Championship Runners-up</li>
                    <li>• Community Tournament Series Champions</li>
                    <li>• Regional Championship Top 8</li>
                  </ul>
                </div>
                <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-[#10e07f]/20 hover:border-[#10e07f] transition-colors duration-300">
                  <h3 className="text-2xl font-bold text-[#10e07f] mb-4">2021</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Regional Championship Top 16</li>
                    <li>• Community Tournament Series Runners-up</li>
                    <li>• Local Tournament Champions</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Community Section */}
          <section className="py-20 px-4 bg-gradient-to-b from-[#0a0a0a] via-[#0a1a0a] to-[#1a0a1a]">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative h-64 md:h-96 order-2 md:order-1">
                  <Image
                    src="/images/community/community-hero.jpg"
                    alt="Team Monki Community"
                    fill
                    priority
                    quality={100}
                    className="object-cover rounded-lg shadow-2xl"
                  />
                </div>
                <div className="text-center md:text-left order-1 md:order-2">
                  <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 animate-glow">
                    Join Our Community
                  </h2>
                  <p className="text-gray-300 text-lg mb-8">
                    Be part of our growing PTCG community. Connect with fellow players, share strategies, and participate in our events.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <button className="px-8 py-3 bg-[#10e07f] text-black font-bold rounded-full hover:bg-[#0bc06a] transition-colors duration-300">
                      Join Discord
                    </button>
                    <button className="px-8 py-3 border-2 border-[#10e07f] text-[#10e07f] font-bold rounded-full hover:bg-[#10e07f] hover:text-black transition-colors duration-300">
                      Follow Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>
      </main>
      <Footer />
    </>
  );
} 