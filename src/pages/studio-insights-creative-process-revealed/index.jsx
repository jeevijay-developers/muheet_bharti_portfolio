import React from 'react';
import Header from '../../components/ui/Header';
import StudioHero from './components/StudioHero';
import ProcessBreakdown from './components/ProcessBreakdown';
import StudioTour from './components/StudioTour';
import AudioComparisons from './components/AudioComparisons';
import MasterclassSection from './components/MasterclassSection';
import EquipmentShowcase from './components/EquipmentShowcase';

const StudioInsightsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <StudioHero />
      {/* Process Breakdown */}
      <ProcessBreakdown />
      {/* Studio Tour */}
      <StudioTour />
      {/* Audio Comparisons */}
      <AudioComparisons />
      {/* Masterclass Section */}
      <MasterclassSection />
      {/* Equipment Showcase */}
      <EquipmentShowcase />
      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">MB</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Muheet Bharti</h3>
                  <p className="text-background/70 text-sm">Grammy Nominated Musician</p>
                </div>
              </div>
              
              <p className="text-background/80 leading-relaxed max-w-md">
                Bridging 500 years of Senia Gharana tradition with contemporary global music, 
                creating Grammy-nominated compositions that honor heritage while embracing innovation.
              </p>
              
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary musical-transition cursor-pointer">
                  <span className="text-xs">🎵</span>
                </div>
                <div className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary musical-transition cursor-pointer">
                  <span className="text-xs">📱</span>
                </div>
                <div className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary musical-transition cursor-pointer">
                  <span className="text-xs">🎬</span>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Studio Insights</h4>
              <div className="space-y-2 text-sm">
                <div className="text-background/70 hover:text-primary cursor-pointer musical-transition">Creative Process</div>
                <div className="text-background/70 hover:text-primary cursor-pointer musical-transition">Equipment Collection</div>
                <div className="text-background/70 hover:text-primary cursor-pointer musical-transition">Masterclasses</div>
                <div className="text-background/70 hover:text-primary cursor-pointer musical-transition">Audio Comparisons</div>
              </div>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="space-y-2 text-sm">
                <div className="text-background/70">Collaboration Inquiries</div>
                <div className="text-background/70">Press & Media</div>
                <div className="text-background/70">Masterclass Bookings</div>
                <div className="text-background/70">Studio Sessions</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-12 pt-8 text-center">
            <p className="text-background/60 text-sm">
              © {new Date()?.getFullYear()} Muheet Bharti. All rights reserved. | Grammy-Nominated Excellence in Musical Heritage
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StudioInsightsPage;