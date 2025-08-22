import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import RotatingShowcase from './components/RotatingShowcase';
import Songs from './components/Songs';
import AchievementsSection from './components/AchievementsSection';
import FloatingAudioPlayer from './components/FloatingAudioPlayer';
import SocialProofSection from './components/SocialProofSection';

const HomepageImmersiveMusicalShowcase = () => {
  return (
    <>
      <Helmet>
        <title>Muheet Bharti | Senia Gharana Legacy</title>
        <meta 
          name="description" 
          content="Experience the Grammy-nominated artistry of Muheet Bharti, bridging 18 generations of Senia Gharana tradition with contemporary global music. Discover legendary collaborations and immersive musical experiences." 
        />
        <meta name="keywords" content="Muheet Bharti, Grammy nominated, sitar, Senia Gharana, Indian classical music, world music, Arijit Singh collaboration" />
        <meta property="og:title" content="Muheet Bharti | Senia Gharana Legacy" />
        <meta property="og:description" content="Where centuries of tradition meet Grammy-nominated innovation. Experience the musical journey of Muheet Bharti." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/homepage-immersive-musical-showcase" />
        <link rel="canonical" href="/homepage-immersive-musical-showcase" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          {/* Hero Section with Audio-Visual Experience */}
          <HeroSection />
          
          {/* Rotating Showcase - Heritage, Grammy, Collaborations */}
          <RotatingShowcase />

          {/* Musical Compositions Section */}
          <Songs />

          {/* Featured Achievements Section */}
          <AchievementsSection />
          
          {/* Social Proof and Industry Recognition */}
          {/* <SocialProofSection /> */}
          
          {/* Floating Audio Player */}
          {/* <FloatingAudioPlayer /> */}
        </main>

        {/* Footer */}
        <footer className="bg-foreground text-background py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Brand Section */}
              <div className="md:col-span-2 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">MB</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Muheet Bharti</h3>
                    <p className="text-accent text-sm">Grammy Nominated Singer</p>
                  </div>
                </div>
                <p className="text-background/80 max-w-md">
                  Bridging 18 generations of Senia Gharana tradition with contemporary global music. 
                  Experience the convergence of ancient wisdom and modern artistry.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold mb-4">Explore</h4>
                <ul className="space-y-2 text-background/80">
                  <li><a href="/journey" className="hover:text-accent musical-transition">Musical Journey</a></li>
                  {/* <li><a href="/collaborations" className="hover:text-accent musical-transition">Collaborations</a></li> */}
                  {/* <li><a href="/live-performances" className="hover:text-accent musical-transition">Live Experiences</a></li> */}
                  <li><a href="/recognition" className="hover:text-accent musical-transition">Recognition</a></li>
                </ul>
              </div>

              {/* Connect */}
              <div>
                <h4 className="font-semibold mb-4">Connect</h4>
                <div className="space-y-3">
                  <a href="https://open.spotify.com/artist/0HXiaOEvokxAkvyMIq88jJ?nd=1&dlsi=b6b61ecebd75459b" target='_blank' className="flex items-center space-x-2 text-background/80 hover:text-accent musical-transition">
                    <span>Spotify</span>
                  </a>
                  <a href="https://www.youtube.com/@MuheetBhartiOfficial" target='_blank' className="flex items-center space-x-2 text-background/80 hover:text-accent musical-transition">
                    <span>YouTube</span>
                  </a>
                  <a href="https://www.instagram.com/muheetbharti/" target='_blank' className="flex items-center space-x-2 text-background/80 hover:text-accent musical-transition">
                    <span>Instagram</span>
                  </a>
                  <a href="https://www.instagram.com/muheetbharti/" target='_blank' className="flex items-center space-x-2 text-background/80 hover:text-accent musical-transition">
                    <span>muheetbhart@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
              <p>&copy; {new Date()?.getFullYear()} Muheet Bharti. All rights reserved. | Grammy Nominated Artist</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomepageImmersiveMusicalShowcase;