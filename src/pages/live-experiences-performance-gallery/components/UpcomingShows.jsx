import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const UpcomingShows = () => {
  const [selectedShow, setSelectedShow] = useState(null);

  const upcomingShows = [
    {
      id: 1,
      title: "Classical Fusion Masterclass",
      venue: "Carnegie Hall",
      location: "New York, NY",
      date: "2024-09-15",
      time: "8:00 PM",
      category: "Classical Fusion",
      price: "$75 - $250",
      status: "available",
      description: `An intimate evening exploring the intersection of classical Indian ragas and contemporary orchestration. This masterclass performance will feature rare compositions from the Senia Gharana tradition alongside Grammy-nominated fusion pieces.`,
      duration: "2 hours 30 minutes",
      capacity: "2,800",
      ticketUrl: "#",
      highlights: ["Rare Senia Gharana Compositions", "Contemporary Fusion", "Q&A Session"],
      collaborators: ["New York Philharmonic Chamber Ensemble"]
    },
    {
      id: 2,
      title: "Heritage & Innovation Concert",
      venue: "Sydney Opera House",
      location: "Sydney, Australia",
      date: "2024-10-22",
      time: "7:30 PM",
      category: "World Music",
      price: "$85 - $300",
      status: "selling-fast",
      description: `A spectacular showcase of musical heritage meeting modern innovation. This performance will take audiences on a journey through 18 generations of musical tradition while exploring contemporary possibilities.`,
      duration: "3 hours",
      capacity: "2,700",
      ticketUrl: "#",
      highlights: ["18 Generations of Music", "Cultural Storytelling", "Visual Projections"],
      collaborators: ["Sydney Symphony Orchestra"]
    },
    {
      id: 3,
      title: "Collaborative Fusion Experience",
      venue: "Royal Festival Hall",
      location: "London, UK",
      date: "2024-11-08",
      time: "8:00 PM",
      category: "Collaborative",
      price: "$65 - $200",
      status: "available",
      description: `A unique collaborative experience featuring special guest artists and cross-cultural musical exploration. This performance celebrates the universal language of music through diverse artistic partnerships.`,
      duration: "2 hours 15 minutes",
      capacity: "2,900",
      ticketUrl: "#",
      highlights: ["Special Guest Artists", "Cross-Cultural Fusion", "Interactive Elements"],
      collaborators: ["London Symphony Orchestra", "Special International Artists"]
    },
    {
      id: 4,
      title: "Grammy Celebration Tour",
      venue: "Walt Disney Concert Hall",
      location: "Los Angeles, CA",
      date: "2024-12-03",
      time: "8:30 PM",
      category: "Contemporary",
      price: "$90 - $350",
      status: "nearly-sold-out",
      description: `A celebration of Grammy recognition featuring the nominated compositions alongside new works. This performance showcases the evolution of traditional music in contemporary contexts.`,
      duration: "2 hours 45 minutes",
      capacity: "2,265",
      ticketUrl: "#",
      highlights: ["Grammy Nominated Pieces", "New Compositions", "Behind-the-Music Stories"],
      collaborators: ["Los Angeles Philharmonic"]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'available':
        return 'text-success bg-success/10 border-success/20';
      case 'selling-fast':
        return 'text-warning bg-warning/10 border-warning/20';
      case 'nearly-sold-out':
        return 'text-error bg-error/10 border-error/20';
      default:
        return 'text-muted-foreground bg-muted border-border';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'available':
        return 'Tickets Available';
      case 'selling-fast':
        return 'Selling Fast';
      case 'nearly-sold-out':
        return 'Nearly Sold Out';
      default:
        return 'Check Availability';
    }
  };

  const openShowModal = (show) => {
    setSelectedShow(show);
  };

  const closeShowModal = () => {
    setSelectedShow(null);
  };

  return (
    <section className="py-20 bg-surface/30">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center grammy-glow">
              <Icon name="Calendar" size={24} color="white" />
            </div>
          </div>
          <h2 className="text-headline text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Upcoming Shows
          </h2>
          <p className="text-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience live performances across prestigious venues worldwide. From intimate classical recitals to grand fusion concerts, secure your seats for unforgettable musical journeys.
          </p>
        </div>

        {/* Shows Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {upcomingShows?.map((show) => (
            <div
              key={show?.id}
              className="bg-card border border-border rounded-xl p-8 shadow-contemplative musical-hover group cursor-pointer"
              onClick={() => openShowModal(show)}
            >
              
              {/* Show Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(show?.status)}`}>
                      {getStatusText(show?.status)}
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {show?.category}
                    </span>
                  </div>
                  <h3 className="text-headline text-xl font-bold text-foreground mb-2 group-hover:text-primary musical-transition">
                    {show?.title}
                  </h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Icon name="MapPin" size={14} className="mr-2" />
                      <span>{show?.venue}, {show?.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Calendar" size={14} className="mr-2" />
                      <span>{new Date(show.date)?.toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Clock" size={14} className="mr-2" />
                      <span>{show?.time} • {show?.duration}</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-lg font-bold text-primary mb-1">{show?.price}</div>
                  <div className="text-xs text-muted-foreground">{show?.capacity} capacity</div>
                </div>
              </div>

              {/* Show Description */}
              <p className="text-body text-muted-foreground mb-6 line-clamp-2">
                {show?.description}
              </p>

              {/* Highlights */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {show?.highlights?.slice(0, 3)?.map((highlight, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-accent/10 text-accent text-xs rounded"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button
                  variant="default"
                  className="flex-1 grammy-border"
                  iconName="Ticket"
                  iconPosition="left"
                  iconSize={16}
                >
                  Get Tickets
                </Button>
                <Button
                  variant="outline"
                  size="default"
                  iconName="Info"
                  iconSize={16}
                >
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Show Details Modal */}
        {selectedShow && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-card border border-border rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              
              {/* Modal Header */}
              <div className="p-8 border-b border-border">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(selectedShow?.status)}`}>
                        {getStatusText(selectedShow?.status)}
                      </span>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        {selectedShow?.category}
                      </span>
                    </div>
                    <h3 className="text-headline text-2xl font-bold text-foreground mb-3">
                      {selectedShow?.title}
                    </h3>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex items-center">
                        <Icon name="MapPin" size={16} className="mr-3" />
                        <span>{selectedShow?.venue}, {selectedShow?.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="Calendar" size={16} className="mr-3" />
                        <span>{new Date(selectedShow.date)?.toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="Clock" size={16} className="mr-3" />
                        <span>{selectedShow?.time} • {selectedShow?.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={closeShowModal}
                    className="w-10 h-10 bg-muted/50 text-muted-foreground rounded-full flex items-center justify-center hover:bg-muted musical-transition"
                  >
                    <Icon name="X" size={20} />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="text-headline text-lg font-semibold text-foreground mb-3">About This Performance</h4>
                  <p className="text-body text-muted-foreground leading-relaxed">
                    {selectedShow?.description}
                  </p>
                </div>

                {/* Performance Highlights */}
                <div className="mb-6">
                  <h4 className="text-headline text-lg font-semibold text-foreground mb-3">Performance Highlights</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {selectedShow?.highlights?.map((highlight, index) => (
                      <div key={index} className="flex items-center">
                        <Icon name="Check" size={16} className="text-primary mr-3" />
                        <span className="text-body text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Collaborators */}
                <div className="mb-8">
                  <h4 className="text-headline text-lg font-semibold text-foreground mb-3">Featured Artists</h4>
                  <div className="space-y-2">
                    {selectedShow?.collaborators?.map((collaborator, index) => (
                      <div key={index} className="flex items-center">
                        <Icon name="Users" size={16} className="text-accent mr-3" />
                        <span className="text-body text-muted-foreground">{collaborator}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing & Booking */}
                <div className="bg-surface/50 rounded-lg p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-lg font-bold text-primary">{selectedShow?.price}</div>
                      <div className="text-sm text-muted-foreground">Ticket prices vary by seating</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Venue Capacity</div>
                      <div className="font-semibold text-foreground">{selectedShow?.capacity}</div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="default"
                    className="flex-1 grammy-border"
                    iconName="Ticket"
                    iconPosition="left"
                    iconSize={16}
                  >
                    Purchase Tickets
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1"
                    iconName="Share2"
                    iconPosition="left"
                    iconSize={16}
                  >
                    Share Event
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 text-center border border-accent/20">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-headline text-2xl font-bold text-foreground mb-4">
              Never Miss a Performance
            </h3>
            <p className="text-body text-muted-foreground mb-6">
              Subscribe to receive early access to tickets, exclusive behind-the-scenes content, and updates on new show announcements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <Button
                variant="default"
                className="grammy-border"
                iconName="Bell"
                iconPosition="left"
                iconSize={16}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingShows;