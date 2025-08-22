import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';

const HeritageHero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const ancestralImages = [
    {
      src: '/assets/images/classic_musicians.jpg',
      alt: 'Ancient Indian classical musician with traditional instruments',
      era: '1500s - Court of Akbar',
      description: 'Mian Tansen, the legendary founder of Senia Gharana'
    },
    {
      src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=800&fit=crop',
      alt: 'Traditional Indian classical music performance',
      era: '1800s - Heritage Preservation',
      description: 'Generations of masters preserving the sacred tradition'
    },
    {
      src: '/assets/images/concert.jpg',
      alt: 'Modern studio with traditional instruments',
      era: '2020s - Contemporary Fusion',
      description: 'Muheet Bharti - Grammy nominated innovation'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % ancestralImages?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // const handlePlayAmbient = () => {
  //   setIsPlaying(!isPlaying);
  // };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden cultural-pattern">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {ancestralImages?.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 musical-transition duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image?.src}
              alt={image?.alt}
              className="w-full h-full object-cover heritage-morph"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/90" />
          </div>
        ))}
      </div>
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Era Indicator */}
          {/* <div className="inline-flex items-center space-x-3 bg-surface/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-border">
            <div className="w-3 h-3 bg-accent rounded-full grammy-glow" />
            <span className="text-accent font-medium">
              {ancestralImages?.[currentImageIndex]?.era}
            </span>
          </div> */}

          {/* Main Heading */}
          <h1 className="mt-20 text-headline lg:text-7xl font-bold text-white mb-6 leading-tight">
            Where Centuries of
            <span className="block text-primary ">
              Tradition Meet
            </span>
            <span className="block text-accent">
              Grammy Innovation
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-white/80 mb-8 leading-relaxed max-w-3xl mx-auto">
            {ancestralImages?.[currentImageIndex]?.description}
          </p>

          {/* Heritage Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-headline lg:text-5xl font-bold text-primary mb-2">
                500+
              </div>
              <p className="text-body text-white/80">Years of Heritage</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">
                18
              </div>
              <p className="text-body text-white/80">Generations</p>
            </div>
            <div className="text-center">
              <div className="text-headline lg:text-5xl font-bold text-accent mb-2">
                1
              </div>
              <p className="text-body text-white/80">Grammy Nomination</p>
            </div>
          </div>

          {/* Action Buttons */}
          {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              variant="default"
              size="lg"
              className="musical-hover grammy-border"
              iconName="Play"
              iconPosition="left"
              iconSize={20}
              onClick={handlePlayAmbient}
            >
              {isPlaying ? 'Pause Heritage' : 'Experience Heritage'}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="musical-hover text-white/80"
              iconName="ArrowDown"
              iconPosition="right"
              iconSize={20}
            >
              Explore Journey
            </Button>
          </div> */}

          {/* Ambient Audio Visualizer */}
          {/* {isPlaying && (
            <div className="flex items-center justify-center space-x-2 mb-8">
              <Icon name="Music" size={16} className="text-primary" />
              <div className="flex space-x-1">
                {[...Array(20)]?.map((_, i) => (
                  <div
                    key={i}
                    className="w-1 bg-primary rounded-full waveform-bar"
                    style={{
                      height: `${Math.random() * 30 + 10}px`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  />
                ))}
              </div>
              <span className="text-sm text-white/80">Senia Gharana Ambience</span>
            </div>
          )} */}
        </div>
      </div>
      {/* Image Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex space-x-3">
          {ancestralImages?.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full musical-transition ${
                index === currentImageIndex
                  ? 'bg-primary shadow-lg'
                  : 'bg-surface/50 hover:bg-surface'
              }`}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>
      </div>
      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 right-8 z-10 hidden lg:block">
        <div className="flex flex-col items-center space-y-2 text-white/80">
          <span className="text-sm rotate-90 origin-center whitespace-nowrap">Scroll to explore</span>
          <div className="w-px h-12 bg-border">
            <div className="w-px h-6 bg-primary animate-pulse" />
          </div>
        </div>
      </div> */}
      {/* Cultural Pattern Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B8860B' fill-opacity='1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
    </section>
  );
};

export default HeritageHero;