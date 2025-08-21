import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const PerformanceGallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedPerformance, setSelectedPerformance] = useState(null);

  const filters = [
    { id: 'all', label: 'All Performances', icon: 'Music' },
    { id: 'classical', label: 'Classical', icon: 'Music2' },
    { id: 'fusion', label: 'Fusion', icon: 'Zap' },
    { id: 'contemporary', label: 'Contemporary', icon: 'Radio' },
    { id: 'collaborative', label: 'Collaborations', icon: 'Users' }
  ];

  const performances = [
    {
      id: 1,
      title: "Senia Gharana Legacy Concert",
      venue: "Kennedy Center, Washington DC",
      date: "2024-08-15",
      category: "classical",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
      duration: "2:30:00",
      audience: "1,800",
      description: `A profound exploration of the 500-year-old Senia Gharana tradition, featuring rare ragas and compositions passed down through 18 generations. This intimate performance showcased the depth and complexity of classical Indian music.`,
      highlights: ["Rare Raga Yaman Kalyan", "18th Generation Compositions", "Traditional Instruments"],
      testimonial: "Absolutely mesmerizing. Muheet\'s mastery of classical tradition is unparalleled.",
      reviewer: "Washington Post"
    },
    {
      id: 2,
      title: "Grammy Nomination Celebration",
      venue: "Lincoln Center, New York",
      date: "2024-07-20",
      category: "fusion",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop",
      duration: "3:00:00",
      audience: "2,500",
      description: `A triumphant celebration of Grammy recognition, blending classical Indian ragas with contemporary orchestration. This performance demonstrated the seamless fusion of tradition and innovation.`,
      highlights: ["Grammy Nominated Pieces", "Full Orchestra", "Standing Ovation"],
      testimonial: "A masterclass in musical fusion that bridges cultures beautifully.",
      reviewer: "New York Times"
    },
    {
      id: 3,
      title: "Berklee Alumni Showcase",
      venue: "Berklee Performance Center, Boston",
      date: "2024-06-10",
      category: "contemporary",
      image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&h=600&fit=crop",
      duration: "1:45:00",
      audience: "1,200",
      description: `A contemporary showcase featuring modern compositions and innovative arrangements. This performance highlighted the evolution of traditional music in contemporary contexts.`,
      highlights: ["Modern Arrangements", "Electronic Elements", "Student Collaboration"],
      testimonial: "Innovative and inspiring. Muheet pushes boundaries while honoring tradition.",
      reviewer: "Berklee Today"
    },
    {
      id: 4,
      title: "Collaboration with Arijit Singh",
      venue: "Mumbai Music Festival",
      date: "2024-05-25",
      category: "collaborative",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
      duration: "2:15:00",
      audience: "15,000",
      description: `An unforgettable collaboration with Bollywood legend Arijit Singh, featuring classical-contemporary fusion pieces that captivated a massive audience.`,
      highlights: ["Arijit Singh Duets", "Bollywood Fusion", "Massive Audience"],
      testimonial: "The chemistry between these artists is magical. Pure musical brilliance.",
      reviewer: "Times of India"
    },
    {
      id: 5,
      title: "Royal Albert Hall Debut",
      venue: "Royal Albert Hall, London",
      date: "2024-04-18",
      category: "classical",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop",
      duration: "2:00:00",
      audience: "3,000",
      description: `A prestigious debut at the iconic Royal Albert Hall, presenting classical Indian music to an international audience with exceptional artistry and cultural authenticity.`,
      highlights: ["International Debut", "Cultural Exchange", "Historic Venue"],
      testimonial: "A transcendent performance that introduced many to the beauty of Indian classical music.",
      reviewer: "The Guardian"
    },
    {
      id: 6,
      title: "Fusion Experiment Series",
      venue: "Blue Note, New York",
      date: "2024-03-30",
      category: "fusion",
      image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&h=600&fit=crop",
      duration: "1:30:00",
      audience: "300",
      description: `An intimate experimental performance exploring the boundaries between jazz, classical Indian music, and contemporary sounds in the legendary Blue Note setting.`,
      highlights: ["Jazz Fusion", "Intimate Setting", "Musical Experimentation"],
      testimonial: "Bold, innovative, and deeply moving. A true artist at work.",
      reviewer: "Jazz Times"
    }
  ];

  const filteredPerformances = activeFilter === 'all' 
    ? performances 
    : performances?.filter(p => p?.category === activeFilter);

  const openPerformanceModal = (performance) => {
    setSelectedPerformance(performance);
  };

  const closePerformanceModal = () => {
    setSelectedPerformance(null);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-headline text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Performance Gallery
          </h2>
          <p className="text-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore a curated collection of live performances spanning classical traditions, contemporary innovations, and collaborative masterpieces across prestigious venues worldwide.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters?.map((filter) => (
            <button
              key={filter?.id}
              onClick={() => setActiveFilter(filter?.id)}
              className={`flex items-center px-6 py-3 rounded-full musical-transition ${
                activeFilter === filter?.id
                  ? 'bg-primary text-primary-foreground shadow-cultural'
                  : 'bg-surface text-muted-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              <Icon name={filter?.icon} size={16} className="mr-2" />
              <span className="text-sm font-medium">{filter?.label}</span>
            </button>
          ))}
        </div>

        {/* Performance Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPerformances?.map((performance) => (
            <div
              key={performance?.id}
              className="group bg-card border border-border rounded-xl overflow-hidden shadow-contemplative musical-hover cursor-pointer"
              onClick={() => openPerformanceModal(performance)}
            >
              {/* Performance Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={performance?.image}
                  alt={performance?.title}
                  className="w-full h-full object-cover group-hover:scale-105 musical-transition"
                />
                
                {/* Play Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 musical-transition flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <Icon name="Play" size={24} className="text-primary ml-1" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full capitalize">
                    {performance?.category}
                  </span>
                </div>

                {/* Duration */}
                <div className="absolute bottom-4 right-4">
                  <span className="px-2 py-1 bg-black/70 text-white text-xs rounded">
                    {performance?.duration}
                  </span>
                </div>
              </div>

              {/* Performance Info */}
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-headline text-lg font-semibold text-foreground mb-2 group-hover:text-primary musical-transition">
                    {performance?.title}
                  </h3>
                  <div className="flex items-center text-sm text-muted-foreground space-x-4">
                    <span className="flex items-center">
                      <Icon name="MapPin" size={14} className="mr-1" />
                      {performance?.venue?.split(',')?.[0]}
                    </span>
                    <span className="flex items-center">
                      <Icon name="Calendar" size={14} className="mr-1" />
                      {new Date(performance.date)?.toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <p className="text-body text-sm text-muted-foreground mb-4 line-clamp-2">
                  {performance?.description}
                </p>

                {/* Performance Stats */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <span className="flex items-center">
                      <Icon name="Users" size={12} className="mr-1" />
                      {performance?.audience}
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="ArrowRight"
                    iconPosition="right"
                    iconSize={14}
                    className="text-primary hover:text-primary/80"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Performance Modal */}
        {selectedPerformance && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-card border border-border rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              
              {/* Modal Header */}
              <div className="relative">
                <Image
                  src={selectedPerformance?.image}
                  alt={selectedPerformance?.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={closePerformanceModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 musical-transition"
                >
                  <Icon name="X" size={20} />
                </button>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center musical-hover">
                    <Icon name="Play" size={32} className="text-primary ml-1" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-headline text-2xl font-bold text-foreground mb-2">
                    {selectedPerformance?.title}
                  </h3>
                  <div className="flex items-center space-x-6 text-muted-foreground">
                    <span className="flex items-center">
                      <Icon name="MapPin" size={16} className="mr-2" />
                      {selectedPerformance?.venue}
                    </span>
                    <span className="flex items-center">
                      <Icon name="Calendar" size={16} className="mr-2" />
                      {new Date(selectedPerformance.date)?.toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <Icon name="Users" size={16} className="mr-2" />
                      {selectedPerformance?.audience} audience
                    </span>
                  </div>
                </div>

                <p className="text-body text-muted-foreground mb-6 leading-relaxed">
                  {selectedPerformance?.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-headline text-lg font-semibold text-foreground mb-3">Performance Highlights</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedPerformance?.highlights?.map((highlight, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-surface/50 rounded-lg p-6 mb-6">
                  <blockquote className="text-body text-foreground italic mb-2">
                    "{selectedPerformance?.testimonial}"
                  </blockquote>
                  <cite className="text-sm text-muted-foreground">— {selectedPerformance?.reviewer}</cite>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="default"
                    className="flex-1 grammy-border"
                    iconName="Calendar"
                    iconPosition="left"
                    iconSize={16}
                  >
                    Book Similar Performance
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1"
                    iconName="Share2"
                    iconPosition="left"
                    iconSize={16}
                  >
                    Share Performance
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PerformanceGallery;