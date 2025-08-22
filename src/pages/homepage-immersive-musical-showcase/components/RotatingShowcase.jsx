import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const RotatingShowcase = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  const showcaseSections = [
    {
      id: 'gurdas-maan',
      title: 'Gurdas Maan — Punjabi Folk Legend',
      subtitle: 'Iconic voice of Punjab, singer–songwriter and actor',
      description: `Widely regarded as a pioneer of Punjabi music with classics like "Dil Da Mamla Hai". National Award winner and cultural icon, he continues to inspire generations.`,
      image: '/assets/celebs/gurdas.jpg',
      icon: 'Crown',
      color: 'primary',
      link: '/collaborations',
      stats: [
        { label: 'Genre', value: 'Punjabi folk/Bhangra' },
        { label: 'Years Active', value: '1979–present' },
        { label: 'Notable', value: 'Ki Banu Duniya Da' }
      ]
    },
    {
      id: 'sidhu-moose-wala',
      title: 'Sidhu Moose Wala — Hip-Hop Trailblazer',
      subtitle: 'Global Punjabi rap icon and record-breaking artist',
      description: `Rose to fame with "So High" and albums like PBX 1 and Moosetape. First Indian to perform at Wireless Festival, with multiple international charting tracks.`,
      image: '/assets/celebs/siddhu.jpg',
      icon: 'Award',
      color: 'accent',
      link: '/recognition',
      stats: [
        { label: 'Genre', value: 'Hip hop/Desi rap' },
        { label: 'Milestone', value: 'Wireless Festival' },
        { label: 'Years Active', value: '2016–2022' }
      ]
    },
    {
      id: 'salim-sulaiman',
      title: 'Salim–Sulaiman — Bollywood Composer Duo',
      subtitle: 'Celebrated music directors behind iconic film scores',
      description: `Acclaimed for scores and songs in films like Chak De! India, Rab Ne Bana Di Jodi and Fashion, with global collaborations and major awards.`,
      image: '/assets/celebs/salim.jpg',
      icon: 'Users',
      color: 'secondary',
      link: '/collaborations',
      stats: [
        { label: 'Role', value: 'Composers/Producers' },
        { label: 'Notable', value: 'Chak De! India' },
        { label: 'Years Active', value: '1993–present' }
      ]
    }
  ];

  useEffect(() => {
    if (!isAutoRotating) return;

    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % showcaseSections?.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoRotating, showcaseSections?.length]);

  const handleSectionChange = (index) => {
    setActiveSection(index);
    setIsAutoRotating(false);
    
    // Resume auto-rotation after 10 seconds
    setTimeout(() => {
      setIsAutoRotating(true);
    }, 10000);
  };

  const currentSection = showcaseSections?.[activeSection];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-0.5 bg-primary mr-4"></div>
            <Icon name="Sparkles" size={24} className="text-primary" />
            <div className="w-12 h-0.5 bg-primary ml-4"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Musical Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the three pillars that define Muheet Bharti's extraordinary musical journey
          </p>
        </div>

        {/* Main Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content Side */}
          <div className="space-y-8">
            {/* Section Indicator */}
            <div className="flex items-center space-x-3">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-${currentSection?.color}/10 border-2 border-${currentSection?.color}/20`}>
                <Icon 
                  name={currentSection?.icon} 
                  size={24} 
                  className={`text-${currentSection?.color}`}
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  {currentSection?.title}
                </h3>
                <p className="text-accent font-accent text-lg">
                  {currentSection?.subtitle}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              {currentSection?.description}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6">
              {currentSection?.stats?.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className={`text-2xl font-bold text-${currentSection?.color}`}>
                    {stat?.value}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {stat?.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link to={currentSection?.link}>
                <Button
                  variant="outline"
                  size="lg"
                  className="musical-hover"
                  iconName="ArrowRight"
                  iconPosition="right"
                  iconSize={20}
                >
                  Explore {currentSection?.title}
                </Button>
              </Link>
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-grandeur">
              <Image
                src={currentSection?.image}
                alt={currentSection?.title}
                className="w-full h-96 object-cover heritage-morph"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              
              {/* Overlay Content */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-card/90 backdrop-blur-md rounded-lg p-4 border border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-white/80">
                        {currentSection?.title}
                      </p>
                      <p className="text-sm text-white/70">
                        {currentSection?.subtitle}
                      </p>
                    </div>
                    <div className={`w-10 h-10 rounded-full bg-${currentSection?.color} flex items-center justify-center grammy-glow`}>
                      <Icon 
                        name={currentSection?.icon} 
                        size={20} 
                        color="white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-4">
          {showcaseSections?.map((section, index) => (
            <button
              key={section?.id}
              onClick={() => handleSectionChange(index)}
              className={`group flex items-center space-x-3 px-4 py-2 rounded-full musical-transition ${
                activeSection === index
                  ? 'bg-primary/10 border-2 border-primary/20' :'bg-muted/50 hover:bg-muted border-2 border-transparent'
              }`}
            >
              <div className={`w-3 h-3 rounded-full musical-transition ${
                activeSection === index ? 'bg-primary' : 'bg-muted-foreground'
              }`}></div>
              <span className={`text-sm font-medium hidden sm:block ${
                activeSection === index ? 'text-primary' : 'text-muted-foreground'
              }`}>
                {section?.title}
              </span>
            </button>
          ))}
        </div>

        {/* Auto-rotation Indicator */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Icon 
              name={isAutoRotating ? "Play" : "Pause"} 
              size={16} 
              className={isAutoRotating ? "animate-pulse" : ""}
            />
            <span className="text-sm">
              {isAutoRotating ? "Auto-rotating" : "Paused"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RotatingShowcase;