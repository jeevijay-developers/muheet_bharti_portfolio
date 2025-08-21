import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const PerformanceHero = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const featuredPerformance = {
    title: "Grammy Nomination Performance",
    venue: "Lincoln Center, New York",
    date: "March 15, 2024",
    description: `A transcendent evening where 500 years of Senia Gharana tradition met contemporary Grammy-nominated artistry. This performance showcased the seamless fusion of classical Indian ragas with modern orchestration, creating an unforgettable sonic journey that captivated audiences and critics alike.`,
    videoThumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=600&fit=crop",
    duration: "2:45:30",
    audience: "2,500",
    genre: "Classical Fusion"
  };

  const handlePlayVideo = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-surface to-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 cultural-pattern opacity-30"></div>
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center grammy-glow">
                  <Icon name="Music" size={24} color="white" />
                </div>
                <div>
                  <p className="text-accent font-semibold text-sm tracking-wide uppercase">Live Experiences</p>
                  <p className="text-muted-foreground text-xs">Performance Gallery</p>
                </div>
              </div>
              
              <h1 className="text-headline text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Where Music
                <span className="text-primary block">Comes Alive</span>
              </h1>
              
              <p className="text-body text-lg text-muted-foreground leading-relaxed max-w-xl">
                Experience the magic of live performance where centuries-old traditions meet contemporary innovation. From intimate classical recitals to grand fusion concerts, witness the power of music that transcends boundaries.
              </p>
            </div>

            {/* Performance Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">150+</div>
                <div className="text-sm text-muted-foreground">Live Shows</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">25</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500K+</div>
                <div className="text-sm text-muted-foreground">Audience</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                className="musical-hover grammy-border"
                iconName="Calendar"
                iconPosition="left"
                iconSize={18}
              >
                Book Performance
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="musical-hover"
                iconName="Download"
                iconPosition="left"
                iconSize={18}
              >
                Technical Rider
              </Button>
            </div>
          </div>

          {/* Right Content - Featured Video */}
          <div className="relative">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-grandeur">
              <Image
                src={featuredPerformance?.videoThumbnail}
                alt={featuredPerformance?.title}
                className="w-full h-full object-cover"
              />
              
              {/* Video Overlay */}
              {/* <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <button
                  onClick={handlePlayVideo}
                  className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center musical-hover group shadow-lg"
                  aria-label="Play video"
                >
                  <Icon 
                    name={isPlaying ? "Pause" : "Play"} 
                    size={32} 
                    className="text-primary ml-1 group-hover:scale-110 musical-transition" 
                  />
                </button>
              </div> */}

              {/* Video Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">{featuredPerformance?.title}</h3>
                  <div className="flex items-center space-x-4 text-sm opacity-90">
                    <span className="flex items-center">
                      <Icon name="MapPin" size={14} className="mr-1" />
                      {featuredPerformance?.venue}
                    </span>
                    <span className="flex items-center">
                      <Icon name="Calendar" size={14} className="mr-1" />
                      {featuredPerformance?.date}
                    </span>
                    <span className="flex items-center">
                      <Icon name="Clock" size={14} className="mr-1" />
                      {featuredPerformance?.duration}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Details Card */}
            <div className="absolute -bottom-8 -left-8 bg-card border border-border rounded-xl p-6 shadow-contemplative max-w-sm">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">Featured Performance</span>
                  <div className="w-2 h-2 bg-accent rounded-full grammy-glow"></div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Audience</span>
                    <div className="font-semibold text-foreground">{featuredPerformance?.audience}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Genre</span>
                    <div className="font-semibold text-foreground">{featuredPerformance?.genre}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Floating Elements */}
      <div className="absolute top-1/4 right-8 w-16 h-16 bg-accent/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/4 left-8 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
    </section>
  );
};

export default PerformanceHero;