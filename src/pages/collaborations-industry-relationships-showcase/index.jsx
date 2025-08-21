import React from 'react';
import Header from '../../components/ui/Header';
import CollaborationHero from './components/CollaborationHero';
import FeaturedTestimonial from './components/FeaturedTestimonial';
import CollaborationTimeline from './components/CollaborationTimeline';
import CollaborationMap from './components/CollaborationMap';
import ProjectShowcase from './components/ProjectShowcase';
import IndustryNetwork from './components/IndustryNetwork';

const CollaborationsShowcase = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <CollaborationHero />
        <FeaturedTestimonial />
        <CollaborationTimeline />
        <ProjectShowcase />
        <CollaborationMap />
        <IndustryNetwork />
      </main>
    </div>
  );
};

export default CollaborationsShowcase;