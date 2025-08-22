import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [currentTrack, setCurrentTrack] = useState(0);

  const featuredTracks = [
    {
      id: 1,
      title: "Raga Yaman - Grammy Nominated Performance",
      artist: "Muheet Bharti",
      duration: "7:42",
      image: "/assets/banners/muheet.webp"
    },
    {
      id: 2,
      title: "Senia Gharana Legacy",
      artist: "Muheet Bharti",
      duration: "5:28",
      image: "https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "Contemporary Fusion",
      artist: "Muheet Bharti ft. Arijit Singh",
      duration: "4:15",
      image: "https://images.pixabay.com/photo/2016/11/23/15/48/audience-1853662_1280.jpg?w=800&h=600&fit=crop"
    }
  ];

  useEffect(() => {
    // Auto-start ambient soundscape at low volume
    const timer = setTimeout(() => {
      setIsPlaying(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    setVolume(e?.target?.value / 100);
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % featuredTracks?.length);
  };

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + featuredTracks?.length) % featuredTracks?.length);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-surface to-muted overflow-hidden cultural-pattern">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/banners/muheet.jpg"
          alt="Muheet Bharti performing with sitar"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"></div>
      </div>
      {/* Grammy Nomination Graphics */}
      <div className="absolute top-2 right-8 z-10 hidden lg:block">
        <div className="bg-card/90 backdrop-blur-md rounded-lg p-4 border border-accent/20 grammy-glow">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
              <Icon name="Award" size={24} color="white" />
            </div>
            <div>
              <p className="text-sm font-bold text-primary">Grammy Nominated</p>
              <p className="text-xs text-muted-foreground">Best World Music Album</p>
            </div>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="relative z-20 flex flex-col justify-center min-h-screen px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Main Heading */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-2 h-16 bg-primary rounded-full"></div>
                  <div>
                    <p className="text-accent font-accent text-lg">18 Generations of Musical Heritage</p>
                    <p className="text-muted-foreground text-sm">Senia Gharana Tradition</p>
                  </div>
                </div>
                
                <h1 className="text-headline lg:text-7xl font-bold text-foreground leading-tight">
                  Where Centuries
                  <span className="block text-primary">Meet Innovation</span>
                </h1>
                
                <p className="text-body text-muted-foreground max-w-2xl leading-relaxed">
                  Grammy-nominated sitarist bridging ancient Senia Gharana traditions with contemporary global music. 
                  Experience the convergence of 500-year-old wisdom and modern artistry.
                </p>
              </div>
              {/* CTA Buttons */}
              {/* <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="default"
                  size="lg"
                  className="musical-hover grammy-border"
                  iconName="Play"
                  iconPosition="left"
                  iconSize={20}
                >
                  Experience the Music
                </Button>
                
                <Link to="/collaborations">
                  <Button
                    variant="outline"
                    size="lg"
                    className="musical-hover w-full sm:w-auto"
                    iconName="Users"
                    iconPosition="left"
                    iconSize={20}
                  >
                    View Collaborations
                  </Button>
                </Link>
              </div> */}

              {/* Social Proof Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">2.5M+</p>
                  <p className="text-sm text-muted-foreground">Streams Worldwide</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">50+</p>
                  <p className="text-sm text-muted-foreground">Collaborations</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">18</p>
                  <p className="text-sm text-muted-foreground">Generations</p>
                </div>
              </div>
            </div>

            {/* Right Content - Audio Player */}
            <div className="space-y-6">
              {/* Featured Track Display */}
              <div className="bg-card/90 backdrop-blur-md rounded-2xl p-6 border border-border shadow-grandeur">
                <div className="space-y-4">
                  {/* Track Image */}
                  <div className="relative">
                    <Image
                      src={featuredTracks?.[currentTrack]?.image}
                      alt={featuredTracks?.[currentTrack]?.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                    
                    {/* Play Button Overlay */}
                    {/* <button
                      onClick={togglePlayback}
                      className="absolute inset-0 flex items-center justify-center group"
                    >
                      <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center group-hover:bg-primary musical-transition grammy-glow">
                        <Icon 
                          name={isPlaying ? "Pause" : "Play"} 
                          size={24} 
                          color="white" 
                          className="ml-1"
                        />
                      </div>
                    </button> */}
                  </div>

                  {/* Track Info */}
                  {/* <div className="space-y-2">
                    <h3 className="text-headline text-lg font-semibold text-foreground">
                      {featuredTracks?.[currentTrack]?.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {featuredTracks?.[currentTrack]?.artist} • {featuredTracks?.[currentTrack]?.duration}
                    </p>
                  </div> */}

                  {/* Progress Bar */}
                  {/* <div className="space-y-2">
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full musical-transition"
                        style={{ width: isPlaying ? '45%' : '0%' }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>2:15</span>
                      <span>{featuredTracks?.[currentTrack]?.duration}</span>
                    </div>
                  </div> */}

                  {/* Controls */}
                  <div className="flex items-center justify-between">
                    {/* <div className="flex items-center space-x-4">
                      <button
                        onClick={prevTrack}
                        className="p-2 rounded-full hover:bg-muted musical-transition"
                      >
                        <Icon name="SkipBack" size={20} />
                      </button>
                      
                      <button
                        onClick={togglePlayback}
                        className="p-3 bg-primary rounded-full hover:bg-primary/90 musical-transition"
                      >
                        <Icon 
                          name={isPlaying ? "Pause" : "Play"} 
                          size={20} 
                          color="white"
                          className="ml-0.5"
                        />
                      </button>
                      
                      <button
                        onClick={nextTrack}
                        className="p-2 rounded-full hover:bg-muted musical-transition"
                      >
                        <Icon name="SkipForward" size={20} />
                      </button>
                    </div> */}

                    {/* Volume Control */}
                    {/* <div className="flex items-center space-x-2">
                      <Icon name="Volume2" size={16} className="text-muted-foreground" />
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={volume * 100}
                        onChange={handleVolumeChange}
                        className="w-20 h-1 bg-muted rounded-full appearance-none slider"
                      />
                    </div> */}
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="grid grid-cols-2 gap-4">
                <Link 
                  to="/journey"
                  className="group p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-border hover:border-primary/50 musical-transition"
                >
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" size={20} className="text-primary group-hover:animate-sitar-vibrate" />
                    <div>
                      <p className="font-semibold text-sm">Musical Journey</p>
                      <p className="text-xs text-muted-foreground">Heritage Story</p>
                    </div>
                  </div>
                </Link>

                <Link 
                  to="/live-performances"
                  className="group p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-border hover:border-primary/50 musical-transition"
                >
                  <div className="flex items-center space-x-3">
                    <Icon name="Music" size={20} className="text-primary group-hover:animate-sitar-vibrate" />
                    <div>
                      <p className="font-semibold text-sm">Live Shows</p>
                      <p className="text-xs text-muted-foreground">Performances</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center space-y-2 text-muted-foreground">
          <p className="text-sm">Discover More</p>
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;