import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import GrammyHeroSection from './components/GrammyHeroSection';
import AchievementTimeline from './components/AchievementTimeline';
import MediaCoverageGallery from './components/MediaCoverageGallery';
import PressKitSection from './components/PressKitSection';

const RecognitionHub = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Recognition Hub - Awards & Media Features | Muheet Bharti';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content */}
      <main className="pt-16">
        {/* Grammy Hero Section */}
        <GrammyHeroSection />
        
        {/* Achievement Timeline */}
        <AchievementTimeline />
        
        {/* Media Coverage Gallery */}
        <MediaCoverageGallery />
        
        {/* Press Kit Section */}
        <PressKitSection />
      </main>
    </div>
  );
};

export default RecognitionHub;