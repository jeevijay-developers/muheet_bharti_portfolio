import React from 'react';
import Header from '../../components/ui/Header';
import PerformanceHero from './components/PerformanceHero';
import PerformanceGallery from './components/PerformanceGallery';
import UpcomingShows from './components/UpcomingShows';
import PerformanceMap from './components/PerformanceMap';
import BookingInquiry from './components/BookingInquiry';

const LiveExperiencesPerformanceGallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <PerformanceHero />
      {/* Performance Gallery */}
      <PerformanceGallery />
      {/* Upcoming Shows */}
      {/* <UpcomingShows /> */}
      {/* Global Performance Map */}
      <PerformanceMap />
      {/* Booking Inquiry */}
      {/* <BookingInquiry /> */}
      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Brand Section */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">MB</span>
                </div>
                <div>
                  <h3 className="text-headline text-lg font-bold">Muheet Bharti</h3>
                  <p className="text-xs text-background/70">Grammy Nominated Artist</p>
                </div>
              </div>
              <p className="text-sm text-background/80 leading-relaxed">
                Where 500 years of Senia Gharana tradition meets contemporary Grammy-nominated innovation, creating timeless musical experiences that transcend cultural boundaries.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-headline font-semibold mb-4">Performance Services</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>Classical Recitals</li>
                <li>Fusion Concerts</li>
                <li>Contemporary Shows</li>
                <li>Collaborative Performances</li>
                <li>Masterclasses</li>
                <li>Private Events</li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="text-headline font-semibold mb-4">Booking Information</h4>
              <div className="space-y-2 text-sm text-background/80">
                <p>bookings@muheetbharti.com</p>
                <p>+1 (555) 123-4567</p>
                <p>Response within 24 hours</p>
                <p className="text-xs text-background/60 mt-4">
                  Technical rider and performance requirements available upon request.
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center">
            <p className="text-sm text-background/60">
              © {new Date()?.getFullYear()} Muheet Bharti. All rights reserved. | Grammy Nominated Classical Fusion Artist
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LiveExperiencesPerformanceGallery;