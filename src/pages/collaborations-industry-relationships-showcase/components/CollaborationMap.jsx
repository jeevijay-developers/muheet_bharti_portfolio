import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const CollaborationMap = () => {
  const [selectedRegion, setSelectedRegion] = useState('india');

  const collaborationData = {
    india: {
      name: "India",
      collaborations: 45,
      artists: ["Arijit Singh", "Shankar Mahadevan", "A.R. Rahman", "Vishal-Shekhar"],
      projects: ["Bollywood Films", "Classical Albums", "Fusion Projects"],
      coordinates: { x: 65, y: 45 }
    },
    usa: {
      name: "United States",
      collaborations: 12,
      artists: ["Grammy Artists", "Jazz Musicians", "World Music Producers"],
      projects: ["Grammy Submissions", "Jazz Fusion", "World Music"],
      coordinates: { x: 20, y: 35 }
    },
    uk: {
      name: "United Kingdom",
      collaborations: 8,
      artists: ["BBC Orchestra", "London Musicians", "Classical Ensembles"],
      projects: ["BBC Recordings", "Classical Crossover", "Cultural Exchange"],
      coordinates: { x: 45, y: 25 }
    },
    canada: {
      name: "Canada",
      collaborations: 6,
      artists: ["Toronto Symphony", "World Music Collective"],
      projects: ["Cultural Festivals", "Educational Programs"],
      coordinates: { x: 18, y: 28 }
    },
    australia: {
      name: "Australia",
      collaborations: 4,
      artists: ["Sydney Conservatorium", "Fusion Artists"],
      projects: ["Cultural Bridge Projects", "Music Education"],
      coordinates: { x: 80, y: 70 }
    }
  };

  const genreDistribution = [
    { genre: "Classical Fusion", percentage: 35, color: "bg-primary" },
    { genre: "Bollywood", percentage: 28, color: "bg-accent" },
    { genre: "World Music", percentage: 20, color: "bg-secondary" },
    { genre: "Jazz Fusion", percentage: 12, color: "bg-primary/70" },
    { genre: "Electronic", percentage: 5, color: "bg-accent/70" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-surface/30 to-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full mb-6">
              <Icon name="Globe" size={16} className="text-secondary mr-2" />
              <span className="text-secondary font-medium text-sm">GLOBAL REACH</span>
            </div>
            <h2 className="text-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
              Worldwide Musical Connections
            </h2>
            <p className="text-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover how Muheet's collaborations span across continents, creating a global network of musical excellence.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Interactive World Map */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-xl shadow-grandeur border border-border p-8">
                <h3 className="text-headline text-xl font-bold text-foreground mb-6 flex items-center">
                  <Icon name="MapPin" size={20} className="text-primary mr-3" />
                  Collaboration Network
                </h3>
                
                {/* SVG World Map */}
                <div className="relative bg-surface/30 rounded-lg p-8 aspect-video overflow-hidden">
                  <svg viewBox="0 0 100 60" className="w-full h-full">
                    {/* Simplified world map paths */}
                    <path
                      d="M15 20 L35 20 L35 45 L15 45 Z"
                      fill="currentColor"
                      className="text-muted/20"
                    />
                    <path
                      d="M40 15 L55 15 L55 40 L40 40 Z"
                      fill="currentColor"
                      className="text-muted/20"
                    />
                    <path
                      d="M60 25 L85 25 L85 55 L60 55 Z"
                      fill="currentColor"
                      className="text-muted/20"
                    />
                    
                    {/* Collaboration Points */}
                    {Object.entries(collaborationData)?.map(([key, region]) => (
                      <g key={key}>
                        {/* Connection Lines */}
                        <line
                          x1={collaborationData?.india?.coordinates?.x}
                          y1={collaborationData?.india?.coordinates?.y}
                          x2={region?.coordinates?.x}
                          y2={region?.coordinates?.y}
                          stroke="currentColor"
                          strokeWidth="0.5"
                          className="text-primary/30 harmony-connection"
                        />
                        
                        {/* Collaboration Points */}
                        <circle
                          cx={region?.coordinates?.x}
                          cy={region?.coordinates?.y}
                          r="3"
                          fill="currentColor"
                          className={`cursor-pointer musical-transition ${
                            selectedRegion === key ? 'text-primary' : 'text-accent'
                          }`}
                          onClick={() => setSelectedRegion(key)}
                        />
                        
                        {/* Pulse Animation */}
                        <circle
                          cx={region?.coordinates?.x}
                          cy={region?.coordinates?.y}
                          r="3"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                          className="text-primary/50 animate-ping"
                        />
                      </g>
                    ))}
                  </svg>
                  
                  {/* Legend */}
                  <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg p-3 border border-border">
                    <div className="flex items-center space-x-4 text-xs">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                        <span className="text-muted-foreground">Active Collaborations</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-0.5 bg-primary/30 mr-2"></div>
                        <span className="text-muted-foreground">Network Connections</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Selected Region Details */}
                <div className="mt-6 p-6 bg-surface/50 rounded-lg border border-border">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-foreground flex items-center">
                      <Icon name="MapPin" size={16} className="text-primary mr-2" />
                      {collaborationData?.[selectedRegion]?.name}
                    </h4>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      {collaborationData?.[selectedRegion]?.collaborations} Projects
                    </span>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-sm font-medium text-foreground mb-2">Key Artists</h5>
                      <div className="space-y-1">
                        {collaborationData?.[selectedRegion]?.artists?.map((artist, index) => (
                          <div key={index} className="text-sm text-muted-foreground">• {artist}</div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-foreground mb-2">Project Types</h5>
                      <div className="space-y-1">
                        {collaborationData?.[selectedRegion]?.projects?.map((project, index) => (
                          <div key={index} className="text-sm text-muted-foreground">• {project}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Genre Distribution & Stats */}
            <div className="space-y-8">
              {/* Genre Distribution */}
              <div className="bg-card rounded-xl shadow-grandeur border border-border p-6">
                <h3 className="text-headline text-lg font-bold text-foreground mb-6 flex items-center">
                  <Icon name="PieChart" size={18} className="text-accent mr-2" />
                  Genre Distribution
                </h3>
                
                <div className="space-y-4">
                  {genreDistribution?.map((genre, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-foreground font-medium">{genre?.genre}</span>
                        <span className="text-muted-foreground">{genre?.percentage}%</span>
                      </div>
                      <div className="w-full bg-surface rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${genre?.color} musical-transition`}
                          style={{ width: `${genre?.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Global Stats */}
              <div className="bg-card rounded-xl shadow-grandeur border border-border p-6">
                <h3 className="text-headline text-lg font-bold text-foreground mb-6 flex items-center">
                  <Icon name="BarChart3" size={18} className="text-secondary mr-2" />
                  Global Impact
                </h3>
                
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">75+</div>
                    <div className="text-sm text-muted-foreground">Total Collaborations</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-xl font-bold text-accent mb-1">5</div>
                      <div className="text-xs text-muted-foreground">Countries</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-secondary mb-1">25+</div>
                      <div className="text-xs text-muted-foreground">Artists</div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">150M+</div>
                      <div className="text-sm text-muted-foreground">Global Streams</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cultural Bridge */}
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20 p-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 grammy-glow">
                    <Icon name="Globe" size={24} className="text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Cultural Bridge</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Connecting Eastern classical traditions with Western contemporary music across continents.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationMap;