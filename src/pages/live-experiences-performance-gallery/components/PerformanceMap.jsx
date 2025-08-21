import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const PerformanceMap = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const performanceLocations = [
    {
      id: 1,
      city: "New York",
      country: "United States",
      venue: "Lincoln Center",
      coordinates: { lat: 40.7722, lng: -73.9838 },
      performances: 8,
      lastPerformance: "2024-07-20",
      category: "fusion",
      description: "Home to Grammy nomination celebration and multiple classical fusion performances."
    },
    {
      id: 2,
      city: "London",
      country: "United Kingdom",
      venue: "Royal Albert Hall",
      coordinates: { lat: 51.5009, lng: -0.1773 },
      performances: 5,
      lastPerformance: "2024-04-18",
      category: "classical",
      description: "Prestigious debut showcasing classical Indian music to international audiences."
    },
    {
      id: 3,
      city: "Mumbai",
      country: "India",
      venue: "NCPA",
      coordinates: { lat: 18.9220, lng: 72.8347 },
      performances: 12,
      lastPerformance: "2024-05-25",
      category: "collaborative",
      description: "Cultural home featuring collaborations with Bollywood legends and classical masters."
    },
    {
      id: 4,
      city: "Sydney",
      country: "Australia",
      venue: "Opera House",
      coordinates: { lat: -33.8568, lng: 151.2153 },
      performances: 3,
      lastPerformance: "2024-03-10",
      category: "world-music",
      description: "Iconic venue showcasing the global appeal of Indian classical fusion."
    },
    {
      id: 5,
      city: "Boston",
      country: "United States",
      venue: "Berklee Performance Center",
      coordinates: { lat: 42.3467, lng: -71.0972 },
      performances: 6,
      lastPerformance: "2024-06-10",
      category: "contemporary",
      description: "Educational hub featuring contemporary arrangements and student collaborations."
    },
    {
      id: 6,
      city: "Los Angeles",
      country: "United States",
      venue: "Walt Disney Concert Hall",
      coordinates: { lat: 34.0555, lng: -118.2467 },
      performances: 4,
      lastPerformance: "2024-02-15",
      category: "fusion",
      description: "West Coast showcase of Grammy-nominated compositions and new works."
    }
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'classical':
        return 'bg-primary';
      case 'fusion':
        return 'bg-accent';
      case 'contemporary':
        return 'bg-secondary';
      case 'collaborative':
        return 'bg-success';
      case 'world-music':
        return 'bg-warning';
      default:
        return 'bg-muted';
    }
  };

  const getCategoryLabel = (category) => {
    switch (category) {
      case 'classical':
        return 'Classical';
      case 'fusion':
        return 'Fusion';
      case 'contemporary':
        return 'Contemporary';
      case 'collaborative':
        return 'Collaborative';
      case 'world-music':
        return 'World Music';
      default:
        return 'Other';
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center grammy-glow">
              <Icon name="Globe" size={24} color="white" />
            </div>
          </div>
          <h2 className="text-headline text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Global Performance Journey
          </h2>
          <p className="text-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the worldwide reach of live performances across prestigious venues, from intimate classical halls to grand contemporary stages spanning multiple continents.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Map Section */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-contemplative">
              
              {/* Map Header */}
              <div className="p-6 border-b border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-headline text-xl font-semibold text-foreground mb-1">
                      Performance Locations
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {performanceLocations?.length} cities • {performanceLocations?.reduce((sum, loc) => sum + loc?.performances, 0)} total performances
                    </p>
                  </div>
                  
                  {/* Legend */}
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <span className="text-xs text-muted-foreground">Classical</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-accent rounded-full"></div>
                      <span className="text-xs text-muted-foreground">Fusion</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-secondary rounded-full"></div>
                      <span className="text-xs text-muted-foreground">Contemporary</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Map */}
              <div className="relative h-96 bg-surface/30">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title="Global Performance Locations"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=40.7722,-73.9838&z=2&output=embed"
                  className="w-full h-full"
                />
                
                {/* Location Markers Overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  {performanceLocations?.map((location, index) => (
                    <div
                      key={location?.id}
                      className="absolute pointer-events-auto cursor-pointer"
                      style={{
                        left: `${20 + (index * 15)}%`,
                        top: `${30 + (index * 10)}%`
                      }}
                      onClick={() => setSelectedLocation(location)}
                    >
                      <div className={`w-4 h-4 ${getCategoryColor(location?.category)} rounded-full shadow-lg animate-pulse hover:scale-125 musical-transition`}>
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Selected Location Details */}
              {selectedLocation && (
                <div className="p-6 bg-surface/50 border-t border-border">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className={`w-3 h-3 ${getCategoryColor(selectedLocation?.category)} rounded-full`}></div>
                        <span className="text-sm font-medium text-primary">
                          {getCategoryLabel(selectedLocation?.category)}
                        </span>
                      </div>
                      <h4 className="text-headline text-lg font-semibold text-foreground mb-1">
                        {selectedLocation?.venue}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {selectedLocation?.city}, {selectedLocation?.country}
                      </p>
                      <p className="text-body text-sm text-muted-foreground">
                        {selectedLocation?.description}
                      </p>
                    </div>
                    
                    <button
                      onClick={() => setSelectedLocation(null)}
                      className="w-8 h-8 bg-muted/50 text-muted-foreground rounded-full flex items-center justify-center hover:bg-muted musical-transition"
                    >
                      <Icon name="X" size={16} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Location List */}
          <div className="space-y-4">
            <h3 className="text-headline text-xl font-semibold text-foreground mb-6">
              Performance Venues
            </h3>
            
            {performanceLocations?.map((location) => (
              <div
                key={location?.id}
                className={`bg-card border border-border rounded-lg p-4 cursor-pointer musical-hover ${
                  selectedLocation?.id === location?.id ? 'ring-2 ring-primary/20 bg-primary/5' : ''
                }`}
                onClick={() => setSelectedLocation(location)}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <div className={`w-3 h-3 ${getCategoryColor(location?.category)} rounded-full`}></div>
                      <span className="text-sm font-medium text-foreground">
                        {location?.venue}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {location?.city}, {location?.country}
                    </p>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-sm font-semibold text-primary">
                      {location?.performances} shows
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Last: {new Date(location.lastPerformance)?.toLocaleDateString()}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className={`px-2 py-1 text-xs font-medium rounded ${getCategoryColor(location?.category)} text-white`}>
                    {getCategoryLabel(location?.category)}
                  </span>
                  
                  <Icon 
                    name="ArrowRight" 
                    size={16} 
                    className={`text-muted-foreground musical-transition ${
                      selectedLocation?.id === location?.id ? 'text-primary' : ''
                    }`} 
                  />
                </div>
              </div>
            ))}

            {/* Performance Statistics */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6 border border-accent/20 mt-8">
              <h4 className="text-headline text-lg font-semibold text-foreground mb-4">
                Global Reach Statistics
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-body text-muted-foreground">Total Performances</span>
                  <span className="text-lg font-bold text-primary">
                    {performanceLocations?.reduce((sum, loc) => sum + loc?.performances, 0)}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-body text-muted-foreground">Countries Visited</span>
                  <span className="text-lg font-bold text-primary">
                    {new Set(performanceLocations.map(loc => loc.country))?.size}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-body text-muted-foreground">Prestigious Venues</span>
                  <span className="text-lg font-bold text-primary">
                    {performanceLocations?.length}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-body text-muted-foreground">Continents</span>
                  <span className="text-lg font-bold text-primary">4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceMap;