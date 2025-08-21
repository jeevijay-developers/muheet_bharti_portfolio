import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const StudioTour = () => {
  const [activeArea, setActiveArea] = useState(0);

  const studioAreas = [
    {
      id: 1,
      name: "Main Recording Room",
      description: "Acoustically treated space where the magic happens, featuring traditional instruments alongside modern recording equipment.",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop",
      equipment: [
        "Neumann U87 Microphones",
        "SSL 4000 Series Console",
        "Pro Tools HDX System",
        "Yamaha C7 Grand Piano"
      ],
      specialFeatures: [
        "Variable acoustics system",
        "Isolation booths for multiple artists",
        "Traditional instrument storage",
        "Natural lighting for comfort"
      ]
    },
    {
      id: 2,
      name: "Classical Instrument Collection",
      description: "Curated collection of traditional Indian instruments, each with its own story and unique tonal characteristics.",
      image: "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?w=800&h=600&fit=crop",
      equipment: [
        "Sitar (18th Century)",
        "Tabla Set (Banaras Gharana)",
        "Tanpura (Concert Quality)",
        "Sarod (Master Crafted)"
      ],
      specialFeatures: [
        "Climate-controlled storage",
        "Regular maintenance by experts",
        "Historical documentation",
        "Performance-ready condition"
      ]
    },
    {
      id: 3,
      name: "Production Suite",
      description: "State-of-the-art mixing and mastering facility where traditional recordings meet contemporary production standards.",
      image: "/assets/images/suite.webp",
      equipment: [
        "Logic Pro X & Pro Tools",
        "Native Instruments Komplete",
        "Waves Mercury Bundle",
        "Genelec Monitoring System"
      ],
      specialFeatures: [
        "Grammy-standard acoustics",
        "Multiple monitoring options",
        "Analog outboard gear",
        "Real-time collaboration tools"
      ]
    },
    {
      id: 4,
      name: "Collaboration Space",
      description: "Comfortable environment designed for creative discussions and collaborative sessions with visiting artists.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
      equipment: [
        "Comfortable Seating Area",
        "Reference Playback System",
        "Digital Whiteboard",
        "Tea & Coffee Station"
      ],
      specialFeatures: [
        "Relaxed creative atmosphere",
        "Cultural artifact displays",
        "Natural lighting",
        "Inspiring artwork collection"
      ]
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
              <Icon name="Home" size={20} color="white" />
            </div>
            <span className="text-accent font-semibold text-lg">Sacred Creative Space</span>
          </div>
          
          <h2 className="text-headline text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Virtual Studio
            <span className="text-primary block">Tour Experience</span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Step inside the intimate creative sanctuary where Grammy-nominated compositions come to life, 
            blending traditional craftsmanship with cutting-edge technology.
          </p>
        </div>

        {/* Studio Navigation */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {studioAreas?.map((area, index) => (
            <button
              key={area?.id}
              onClick={() => setActiveArea(index)}
              className={`p-4 rounded-lg text-left musical-transition ${
                activeArea === index
                  ? 'bg-primary text-white shadow-grammy'
                  : 'bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 text-sm font-bold ${
                activeArea === index ? 'bg-white text-primary' : 'bg-primary/20'
              }`}>
                {area?.id}
              </div>
              <h3 className="font-semibold text-sm mb-1">{area?.name}</h3>
              <p className="text-xs opacity-75 line-clamp-2">{area?.description}</p>
            </button>
          ))}
        </div>

        {/* Active Area Display */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Image */}
          <div className="lg:col-span-2">
            <div className="relative group">
              <div className="aspect-[16/10] bg-card rounded-2xl overflow-hidden shadow-grandeur">
                <Image
                  src={studioAreas?.[activeArea]?.image}
                  alt={studioAreas?.[activeArea]?.name}
                  className="w-full h-full object-cover group-hover:scale-105 musical-transition"
                />
                
                {/* Interactive Hotspots */}
                <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-accent rounded-full grammy-glow animate-pulse cursor-pointer"></div>
                <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-primary rounded-full grammy-glow animate-pulse cursor-pointer"></div>
                <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-secondary rounded-full grammy-glow animate-pulse cursor-pointer"></div>
              </div>

              {/* Area Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-2xl font-bold mb-2">
                  {studioAreas?.[activeArea]?.name}
                </h3>
                <p className="text-white/90 text-sm">
                  {studioAreas?.[activeArea]?.description}
                </p>
              </div>
            </div>
          </div>

          {/* Area Details */}
          <div className="space-y-6">
            {/* Equipment List */}
            <div className="bg-card p-6 rounded-lg shadow-contemplative">
              <h4 className="font-semibold text-foreground mb-4 flex items-center">
                <Icon name="Settings" size={16} className="mr-2 text-primary" />
                Key Equipment
              </h4>
              <div className="space-y-2">
                {studioAreas?.[activeArea]?.equipment?.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Features */}
            <div className="bg-card p-6 rounded-lg shadow-contemplative">
              <h4 className="font-semibold text-foreground mb-4 flex items-center">
                <Icon name="Star" size={16} className="mr-2 text-accent" />
                Special Features
              </h4>
              <div className="space-y-2">
                {studioAreas?.[activeArea]?.specialFeatures?.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            {/* <div className="space-y-3">
              <Button
                variant="default"
                fullWidth
                className="musical-hover"
                iconName="Camera"
                iconPosition="left"
                iconSize={16}
              >
                360° Virtual Tour
              </Button>
              <Button
                variant="outline"
                fullWidth
                className="musical-hover"
                iconName="Headphones"
                iconPosition="left"
                iconSize={16}
              >
                Listen to Room Tone
              </Button>
            </div> */}
          </div>
        </div>

        {/* Studio Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-card rounded-lg shadow-contemplative">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Music" size={20} className="text-primary" />
            </div>
            <div className="text-2xl font-bold text-primary mb-1">25+</div>
            <div className="text-sm text-muted-foreground">Traditional Instruments</div>
          </div>
          
          <div className="text-center p-6 bg-card rounded-lg shadow-contemplative">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Award" size={20} className="text-accent" />
            </div>
            <div className="text-2xl font-bold text-accent mb-1">500+</div>
            <div className="text-sm text-muted-foreground">Recording Hours</div>
          </div>
          
          <div className="text-center p-6 bg-card rounded-lg shadow-contemplative">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Users" size={20} className="text-secondary" />
            </div>
            <div className="text-2xl font-bold text-secondary mb-1">50+</div>
            <div className="text-sm text-muted-foreground">Artist Collaborations</div>
          </div>
          
          <div className="text-center p-6 bg-card rounded-lg shadow-contemplative">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Clock" size={20} className="text-primary" />
            </div>
            <div className="text-2xl font-bold text-primary mb-1">24/7</div>
            <div className="text-sm text-muted-foreground">Creative Access</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudioTour;