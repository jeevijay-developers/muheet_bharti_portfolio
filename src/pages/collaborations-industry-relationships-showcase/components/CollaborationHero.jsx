import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CollaborationHero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-surface to-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 cultural-pattern opacity-30"></div>
      {/* Floating Musical Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center animate-pulse">
        <Icon name="Music" size={24} className="text-primary" />
      </div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center animate-pulse delay-1000">
        <Icon name="Users" size={20} className="text-accent" />
      </div>
      <div className="absolute bottom-40 left-20 w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center animate-pulse delay-2000">
        <Icon name="Heart" size={22} className="text-secondary" />
      </div>
      <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-primary/10 border border-primary/20 rounded-full mb-8 grammy-glow">
              <Icon name="Award" size={20} className="text-primary mr-3" />
              <span className="text-primary font-semibold text-sm tracking-wide">INDUSTRY COLLABORATIONS</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-headline md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Musical Partnerships That
              <span className="block text-primary mt-2">Define Excellence</span>
            </h1>

            {/* Subtitle */}
            <p className="text-body md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Discover the collaborative journey with music industry legends—from Grammy-nominated productions 
              to chart-topping compositions that bridge classical heritage with contemporary innovation.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-muted-foreground font-medium">Legendary Artists</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">50M+</div>
                <div className="text-sm text-muted-foreground font-medium">Streams Worldwide</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">15</div>
                <div className="text-sm text-muted-foreground font-medium">Chart Toppers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">8</div>
                <div className="text-sm text-muted-foreground font-medium">Award Winners</div>
              </div>
            </div>
          </div>

          {/* Featured Collaborators Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              {
                name: "Arijit Singh",
                image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=face",
                role: "Playback Singer",
                projects: "12 Songs"
              },
              {
                name: "Shankar Mahadevan",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
                role: "Composer",
                projects: "8 Albums"
              },
              {
                name: "Salim-Sulaiman",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
                role: "Music Directors",
                projects: "6 Films"
              },
              {
                name: "A.R. Rahman",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
                role: "Oscar Winner",
                projects: "4 Compositions"
              }
            ]?.map((collaborator, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl bg-card shadow-contemplative musical-hover">
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={collaborator?.image}
                      alt={collaborator?.name}
                      className="w-full h-full object-cover group-hover:scale-110 musical-transition"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-semibold text-sm mb-1">{collaborator?.name}</h3>
                    <p className="text-xs opacity-80 mb-1">{collaborator?.role}</p>
                    <p className="text-xs opacity-60">{collaborator?.projects}</p>
                  </div>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 musical-transition">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <Icon name="Play" size={20} color="white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-4">
              <button className="flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold musical-hover shadow-contemplative">
                <Icon name="Play" size={20} className="mr-3" />
                Listen to Collaborations
              </button>
              <button className="flex items-center px-8 py-4 border border-border rounded-lg font-semibold text-foreground musical-hover">
                <Icon name="ArrowDown" size={20} className="mr-3" />
                Explore Timeline
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationHero;