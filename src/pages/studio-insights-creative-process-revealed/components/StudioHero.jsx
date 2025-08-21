import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const StudioHero = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  const studioVideos = [
    {
      id: 1,
      title: "Grammy-Nominated Track Creation",
      description: "Behind the scenes of \'Eternal Resonance\' - from concept to Grammy nomination",
      thumbnail: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=450&fit=crop",
      duration: "12:45",
      category: "Production Process"
    },
    {
      id: 2,
      title: "Classical Meets Contemporary",
      description: "Blending 500-year-old ragas with modern production techniques",
      thumbnail: "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?w=800&h=450&fit=crop",
      duration: "8:30",
      category: "Fusion Techniques"
    },
    {
      id: 3,
      title: "Collaboration with Arijit Singh",
      description: "Recording session insights from our acclaimed collaboration",
      thumbnail: "https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg?w=800&h=450&fit=crop",
      duration: "15:20",
      category: "Artist Collaboration"
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-surface to-muted overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 cultural-pattern opacity-30"></div>
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center grammy-glow">
                  <Icon name="Camera" size={24} color="white" />
                </div>
                <span className="text-accent font-semibold text-lg">Behind the Music</span>
              </div>
              
              <h1 className="text-headline text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Studio Insights &
                <span className="text-primary block">Creative Process</span>
              </h1>
              
              <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed max-w-2xl">
                Step into the sacred space where centuries-old traditions merge with Grammy-nominated innovation. Discover the meticulous craft behind each composition, from initial raga exploration to final production mastery.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-card rounded-lg shadow-contemplative">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Hours Recorded</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg shadow-contemplative">
                <div className="text-2xl font-bold text-accent">25+</div>
                <div className="text-sm text-muted-foreground">Instruments Used</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg shadow-contemplative">
                <div className="text-2xl font-bold text-secondary">18</div>
                <div className="text-sm text-muted-foreground">Generations Legacy</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                className="musical-hover grammy-border"
                iconName="Play"
                iconPosition="left"
                iconSize={20}
              >
                Watch Process Videos
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="musical-hover"
                iconName="Headphones"
                iconPosition="left"
                iconSize={20}
              >
                Listen to Raw Sessions
              </Button>
            </div>
          </div>

          {/* Right Content - Video Showcase */}
          <div className="space-y-6">
            {/* Main Video Display */}
            <div className="relative group">
              <div className="aspect-video bg-card rounded-2xl overflow-hidden shadow-grandeur">
                <Image
                  src={studioVideos?.[currentVideo]?.thumbnail}
                  alt={studioVideos?.[currentVideo]?.title}
                  className="w-full h-full object-cover group-hover:scale-105 musical-transition"
                />
                
                {/* Play Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 musical-transition">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center grammy-glow musical-hover cursor-pointer">
                    <Icon name="Play" size={32} color="white" />
                  </div>
                </div>

                {/* Video Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <h3 className="font-semibold text-lg">{studioVideos?.[currentVideo]?.title}</h3>
                      <p className="text-sm opacity-90">{studioVideos?.[currentVideo]?.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="bg-primary/20 px-3 py-1 rounded-full text-sm">
                        {studioVideos?.[currentVideo]?.duration}
                      </div>
                      <div className="text-xs mt-1 opacity-75">
                        {studioVideos?.[currentVideo]?.category}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Navigation */}
            <div className="grid grid-cols-3 gap-4">
              {studioVideos?.map((video, index) => (
                <button
                  key={video?.id}
                  onClick={() => setCurrentVideo(index)}
                  className={`relative aspect-video rounded-lg overflow-hidden musical-transition ${
                    currentVideo === index 
                      ? 'ring-2 ring-primary shadow-grammy' 
                      : 'hover:ring-1 hover:ring-accent/50'
                  }`}
                >
                  <Image
                    src={video?.thumbnail}
                    alt={video?.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <Icon 
                      name="Play" 
                      size={16} 
                      color="white" 
                      className={currentVideo === index ? 'animate-sitar-vibrate' : ''} 
                    />
                  </div>
                  <div className="absolute bottom-1 right-1 bg-black/60 text-white text-xs px-2 py-1 rounded">
                    {video?.duration}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-accent rounded-full grammy-glow animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-1/3 right-20 w-6 h-6 bg-primary/30 rounded-full animate-bounce hidden lg:block"></div>
      <div className="absolute top-1/2 right-10 w-3 h-3 bg-secondary rounded-full animate-pulse hidden lg:block"></div>
    </section>
  );
};

export default StudioHero;