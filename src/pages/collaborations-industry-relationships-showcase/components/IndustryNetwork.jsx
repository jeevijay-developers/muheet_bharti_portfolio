import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const IndustryNetwork = () => {
  const [selectedConnection, setSelectedConnection] = useState("arijit");

  const networkConnections = {
    arijit: {
      name: "Arijit Singh",
      role: "Playback Singer & Music Director",
      image:
        "https://i.pinimg.com/736x/48/d0/a4/48d0a43a2f533bd999ce5de0a9bce629.jpg",
      relationship: "Primary Collaborator",
      projects: 12,
      years: "2020-2024",
      achievements: ["6x Filmfare Winner", "National Award", "50M+ Streams"],
      quote:
        "Muheet brings an extraordinary depth to every collaboration. His classical foundation elevates contemporary music.",
      collaborations: [
        "Raag Fusion Symphony",
        "Eternal Melodies",
        "Classical Crossroads",
        "Heritage Songs",
      ],
      connectionStrength: 95,
    },
    shankar: {
      name: "Shankar Mahadevan",
      role: "Composer & Vocalist",
      image:
        "https://i.pinimg.com/736x/1f/7a/4b/1f7a4b3396f57da0aede69bc49be1b97.jpg",
      relationship: "Creative Partner",
      projects: 8,
      years: "2019-2024",
      achievements: [
        "Grammy Nominated",
        "Padma Shri",
        "Multiple National Awards",
      ],
      quote:
        "Working with Muheet is like having access to centuries of musical wisdom in contemporary form.",
      collaborations: [
        "Heritage Echoes",
        "Fusion Experiments",
        "Cultural Bridge",
        "Modern Classics",
      ],
      connectionStrength: 88,
    },
    salim: {
      name: "Salim-Sulaiman",
      role: "Music Directors",
      image:
        "https://i.pinimg.com/736x/75/57/c2/7557c2ff4b32af050cb3c0cf13a5d764.jpg",
      relationship: "Production Partners",
      projects: 6,
      years: "2021-2024",
      achievements: [
        "IIFA Winners",
        "Filmfare Awards",
        "International Recognition",
      ],
      quote:
        "Muheet's sitar work transforms our compositions into something truly magical and authentic.",
      collaborations: [
        "Urban Ragas",
        "Film Score Mastery",
        "Electronic Fusion",
        "Bollywood Reimagined",
      ],
      connectionStrength: 82,
    },
    rahman: {
      name: "A.R. Rahman",
      role: "Oscar-Winning Composer",
      image:
        "https://i.pinimg.com/736x/80/d3/7a/80d37a93486d8d22209ab9b691909a76.jpg",
      relationship: "Mentor & Collaborator",
      projects: 4,
      years: "2022-2024",
      achievements: ["2x Oscar Winner", "Grammy Winner", "Padma Bhushan"],
      quote:
        "Muheet represents the future of Indian classical music in the global context.",
      collaborations: [
        "Timeless Melodies",
        "World Music Project",
        "Cultural Symphony",
        "Global Harmony",
      ],
      connectionStrength: 92,
    },
    vishal: {
      name: "Vishal-Shekhar",
      role: "Music Composer Duo",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      relationship: "Creative Collaborators",
      projects: 5,
      years: "2020-2023",
      achievements: [
        "Multiple Filmfare Awards",
        "Chart Toppers",
        "Youth Icons",
      ],
      quote:
        "Muheet's traditional expertise gives our modern compositions an authentic soul.",
      collaborations: [
        "Bollywood Classics Reimagined",
        "Youth Anthems",
        "Festival Hits",
        "Commercial Success",
      ],
      connectionStrength: 75,
    },
  };

  const industryStats = [
    { label: "Industry Connections", value: "50+", icon: "Users" },
    { label: "Active Collaborations", value: "25", icon: "Handshake" },
    { label: "Years in Industry", value: "15+", icon: "Calendar" },
    { label: "Awards Won", value: "12", icon: "Award" },
  ];

  const connectionTypes = [
    { type: "Primary Collaborators", count: 5, color: "bg-primary" },
    { type: "Creative Partners", count: 12, color: "bg-accent" },
    { type: "Industry Mentors", count: 8, color: "bg-secondary" },
    { type: "Emerging Artists", count: 15, color: "bg-primary/70" },
    { type: "International Artists", count: 10, color: "bg-accent/70" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-surface/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Icon name="Network" size={16} className="text-primary mr-2" />
              <span className="text-primary font-medium text-sm">
                INDUSTRY NETWORK
              </span>
            </div>
            <h2 className="text-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
              Musical Relationships That Matter
            </h2>
            <p className="text-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the deep professional relationships and creative
              partnerships that define Muheet's journey in the music industry.
            </p>
          </div>

          {/* Industry Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {industryStats?.map((stat, index) => (
              <div
                key={index}
                className="bg-card rounded-xl shadow-contemplative border border-border p-6 text-center musical-hover"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={stat?.icon} size={24} className="text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">
                  {stat?.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat?.label}
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Network Visualization */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-xl shadow-grandeur border border-border p-8">
                <h3 className="text-headline text-xl font-bold text-foreground mb-6 flex items-center">
                  <Icon
                    name="GitBranch"
                    size={20}
                    className="text-primary mr-3"
                  />
                  Collaboration Network
                </h3>

                {/* Connection Selector */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {Object.entries(networkConnections)?.map(
                    ([key, connection]) => (
                      <button
                        key={key}
                        onClick={() => setSelectedConnection(key)}
                        className={`flex items-center px-4 py-2 rounded-lg font-medium text-sm musical-transition ${
                          selectedConnection === key
                            ? "bg-primary text-primary-foreground shadow-contemplative"
                            : "bg-surface text-muted-foreground hover:text-primary hover:bg-primary/5 border border-border"
                        }`}
                      >
                        <div className="w-6 h-6 rounded-full overflow-hidden mr-2">
                          <Image
                            src={connection?.image}
                            alt={connection?.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {connection?.name?.split(" ")?.[0]}
                      </button>
                    )
                  )}
                </div>

                {/* Selected Connection Details */}
                <div className="bg-surface/50 rounded-lg p-6 border border-border">
                  <div className="flex items-start space-x-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden shadow-contemplative flex-shrink-0">
                      <Image
                        src={networkConnections?.[selectedConnection]?.image}
                        alt={networkConnections?.[selectedConnection]?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="text-headline text-lg font-bold text-foreground">
                            {networkConnections?.[selectedConnection]?.name}
                          </h4>
                          <p className="text-accent font-medium text-sm">
                            {networkConnections?.[selectedConnection]?.role}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-muted-foreground mb-1">
                            Connection Strength
                          </div>
                          <div className="flex items-center">
                            <div className="w-20 bg-surface rounded-full h-2 mr-2">
                              <div
                                className="h-2 bg-primary rounded-full"
                                style={{
                                  width: `${networkConnections?.[selectedConnection]?.connectionStrength}%`,
                                }}
                              ></div>
                            </div>
                            <span className="text-sm font-semibold text-primary">
                              {
                                networkConnections?.[selectedConnection]
                                  ?.connectionStrength
                              }
                              %
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">
                            Relationship
                          </div>
                          <div className="text-sm font-medium text-foreground">
                            {
                              networkConnections?.[selectedConnection]
                                ?.relationship
                            }
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">
                            Projects
                          </div>
                          <div className="text-sm font-medium text-foreground">
                            {networkConnections?.[selectedConnection]?.projects}{" "}
                            Collaborations
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">
                            Active Years
                          </div>
                          <div className="text-sm font-medium text-foreground">
                            {networkConnections?.[selectedConnection]?.years}
                          </div>
                        </div>
                      </div>

                      <blockquote className="text-sm text-foreground italic mb-4 border-l-4 border-primary pl-4">
                        "{networkConnections?.[selectedConnection]?.quote}"
                      </blockquote>

                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-foreground mb-2">
                          Key Achievements
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {networkConnections?.[
                            selectedConnection
                          ]?.achievements?.map((achievement, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded"
                            >
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h5 className="text-sm font-semibold text-foreground mb-2">
                          Notable Collaborations
                        </h5>
                        <div className="grid grid-cols-2 gap-2">
                          {networkConnections?.[
                            selectedConnection
                          ]?.collaborations?.map((collab, index) => (
                            <div
                              key={index}
                              className="text-xs text-muted-foreground"
                            >
                              • {collab}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Connection Types & Additional Info */}
            <div className="space-y-8">
              {/* Connection Types */}
              <div className="bg-card rounded-xl shadow-grandeur border border-border p-6">
                <h3 className="text-headline text-lg font-bold text-foreground mb-6 flex items-center">
                  <Icon name="Users" size={18} className="text-accent mr-2" />
                  Network Breakdown
                </h3>

                <div className="space-y-4">
                  {connectionTypes?.map((type, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-foreground font-medium">
                          {type?.type}
                        </span>
                        <span className="text-muted-foreground">
                          {type?.count}
                        </span>
                      </div>
                      <div className="w-full bg-surface rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${type?.color} musical-transition`}
                          style={{ width: `${(type?.count / 50) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industry Recognition */}
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20 p-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 grammy-glow">
                    <Icon name="Award" size={24} className="text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Industry Recognition
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Trusted by music industry legends for authentic classical
                    expertise and innovative fusion approaches.
                  </p>
                  <div className="text-xs text-primary font-medium">
                    "Most Sought-After Classical Collaborator 2024"
                  </div>
                </div>
              </div>

              {/* Upcoming Collaborations */}
              <div className="bg-card rounded-xl shadow-grandeur border border-border p-6">
                <h3 className="text-headline text-lg font-bold text-foreground mb-4 flex items-center">
                  <Icon
                    name="Calendar"
                    size={18}
                    className="text-secondary mr-2"
                  />
                  Upcoming Projects
                </h3>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-surface/50 rounded-lg">
                    <div>
                      <div className="text-sm font-medium text-foreground">
                        New Album
                      </div>
                      <div className="text-xs text-muted-foreground">
                        with Arijit Singh
                      </div>
                    </div>
                    <div className="text-xs text-primary font-medium">
                      Q2 2025
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-surface/50 rounded-lg">
                    <div>
                      <div className="text-sm font-medium text-foreground">
                        Film Score
                      </div>
                      <div className="text-xs text-muted-foreground">
                        International Project
                      </div>
                    </div>
                    <div className="text-xs text-accent font-medium">
                      Q3 2025
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-surface/50 rounded-lg">
                    <div>
                      <div className="text-sm font-medium text-foreground">
                        Live Concert
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Global Tour
                      </div>
                    </div>
                    <div className="text-xs text-secondary font-medium">
                      Q4 2025
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryNetwork;
