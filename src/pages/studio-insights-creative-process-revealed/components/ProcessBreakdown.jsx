import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProcessBreakdown = () => {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      id: 1,
      title: "Raga Foundation",
      subtitle: "Classical Roots",
      description: "Every composition begins with deep meditation on traditional ragas, understanding their emotional essence and historical context from the Senia Gharana tradition.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      duration: "2-3 hours",
      tools: ["Tanpura", "Tabla", "Voice", "Meditation"],
      insights: [
        "Selecting the perfect raga for emotional expression",
        "Understanding microtonal nuances and ornamentations",
        "Connecting with ancestral musical wisdom"
      ]
    },
    {
      id: 2,
      title: "Modern Arrangement",
      subtitle: "Contemporary Adaptation",
      description: "Traditional melodies are carefully adapted using modern production techniques while preserving their authentic essence and cultural integrity.",
      image: "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?w=600&h=400&fit=crop",
      duration: "4-6 hours",
      tools: ["Logic Pro X", "Native Instruments", "Synthesizers", "MIDI Controllers"],
      insights: [
        "Translating classical ornaments to modern instruments",
        "Maintaining rhythmic complexity in contemporary formats",
        "Balancing tradition with innovation"
      ]
    },
    {
      id: 3,
      title: "Collaborative Recording",
      subtitle: "Artist Integration",
      description: "Working with renowned artists like Arijit Singh and Shankar Mahadevan to blend their unique styles with classical foundations.",
      image: "https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg?w=600&h=400&fit=crop",
      duration: "8-12 hours",
      tools: ["Pro Tools", "Neumann Microphones", "SSL Console", "Live Room"],
      insights: [
        "Creating comfortable space for artistic expression",
        "Guiding artists through classical nuances",
        "Capturing spontaneous magical moments"
      ]
    },
    {
      id: 4,
      title: "Production Mastery",
      subtitle: "Final Polish",
      description: "Meticulous mixing and mastering process that honors both classical dynamics and contemporary production standards for global audiences.",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=400&fit=crop",
      duration: "6-8 hours",
      tools: ["Waves Plugins", "Izotope Ozone", "Analog Gear", "Reference Monitors"],
      insights: [
        "Preserving classical instrument authenticity",
        "Achieving Grammy-level production quality",
        "Optimizing for various playback systems"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
              <Icon name="Layers" size={20} color="white" />
            </div>
            <span className="text-primary font-semibold text-lg">Creative Methodology</span>
          </div>
          
          <h2 className="text-headline text-3xl lg:text-5xl font-bold text-foreground mb-6">
            From Tradition to
            <span className="text-accent block">Grammy Recognition</span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Discover the meticulous four-stage process that transforms ancient ragas into contemporary masterpieces, 
            bridging 500 years of musical heritage with modern production excellence.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 lg:space-x-4">
            {processSteps?.map((step, index) => (
              <div key={step?.id} className="flex items-center">
                <button
                  onClick={() => setActiveStep(index)}
                  className={`flex items-center space-x-3 p-4 rounded-lg musical-transition ${
                    activeStep === index
                      ? 'bg-primary text-white shadow-grammy'
                      : 'bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    activeStep === index ? 'bg-white text-primary' : 'bg-primary/20'
                  }`}>
                    {step?.id}
                  </div>
                  <div className="text-left hidden sm:block">
                    <div className="font-semibold text-sm">{step?.title}</div>
                    <div className="text-xs opacity-75">{step?.subtitle}</div>
                  </div>
                </button>
                
                {index < processSteps?.length - 1 && (
                  <div className="hidden lg:block w-8 h-0.5 bg-border mx-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Active Step Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Step Image */}
          <div className="relative group">
            <div className="aspect-[4/3] bg-card rounded-2xl overflow-hidden shadow-grandeur">
              <Image
                src={processSteps?.[activeStep]?.image}
                alt={processSteps?.[activeStep]?.title}
                className="w-full h-full object-cover group-hover:scale-105 musical-transition"
              />
              
              {/* Duration Badge */}
              <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                <Icon name="Clock" size={14} className="inline mr-1" />
                {processSteps?.[activeStep]?.duration}
              </div>
            </div>

            {/* Tools Used */}
            <div className="mt-6">
              <h4 className="font-semibold text-foreground mb-3 flex items-center">
                <Icon name="Tool" size={16} className="mr-2 text-primary" />
                Tools & Equipment
              </h4>
              <div className="flex flex-wrap gap-2">
                {processSteps?.[activeStep]?.tools?.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Step Details */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center grammy-glow">
                  <span className="text-white font-bold text-lg">{processSteps?.[activeStep]?.id}</span>
                </div>
                <div>
                  <h3 className="text-headline text-2xl font-bold text-foreground">
                    {processSteps?.[activeStep]?.title}
                  </h3>
                  <p className="text-primary font-medium">{processSteps?.[activeStep]?.subtitle}</p>
                </div>
              </div>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                {processSteps?.[activeStep]?.description}
              </p>
            </div>

            {/* Key Insights */}
            <div>
              <h4 className="font-semibold text-foreground mb-4 flex items-center">
                <Icon name="Lightbulb" size={16} className="mr-2 text-accent" />
                Key Insights
              </h4>
              <div className="space-y-3">
                {processSteps?.[activeStep]?.insights?.map((insight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">{insight}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                className="musical-hover"
                iconName="Play"
                iconPosition="left"
                iconSize={16}
              >
                Watch This Process
              </Button>
              <Button
                variant="outline"
                className="musical-hover"
                iconName="Download"
                iconPosition="left"
                iconSize={16}
              >
                Download Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessBreakdown;