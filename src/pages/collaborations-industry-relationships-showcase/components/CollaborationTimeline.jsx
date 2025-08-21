import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const CollaborationTimeline = () => {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [playingAudio, setPlayingAudio] = useState(null);

  const timelineData = {
    2024: [
      {
        id: 1,
        artist: "Arijit Singh",
        project: "Raag Fusion Symphony",
        type: "Album",
        image:
          "https://i.pinimg.com/736x/48/d0/a4/48d0a43a2f533bd999ce5de0a9bce629.jpg",
        description:
          "A groundbreaking fusion of classical ragas with contemporary arrangements, featuring Muheet's sitar compositions.",
        achievements: [
          "#1 on iTunes India",
          "50M+ Streams",
          "Critics' Choice Award",
        ],
        genre: "Classical Fusion",
        duration: "3:45",
        streams: "12.5M",
      },
      {
        id: 2,
        artist: "Shankar Mahadevan",
        project: "Heritage Echoes",
        type: "Film Score",
        image:
          "https://i.pinimg.com/736x/1f/7a/4b/1f7a4b3396f57da0aede69bc49be1b97.jpg",
        description:
          "Emotional film score blending traditional Indian instruments with orchestral arrangements.",
        achievements: ["Filmfare Nomination", "IIFA Best Music", "25M+ Views"],
        genre: "Film Music",
        duration: "4:12",
        streams: "8.3M",
      },
    ],
    2023: [
      {
        id: 3,
        artist: "Salim-Sulaiman",
        project: "Urban Ragas",
        type: "Commercial Album",
        image:
          "https://i.pinimg.com/736x/6d/de/81/6dde8142d2b4c83802abc6fe2e4b002e.jpg",
        description:
          "Modern interpretation of classical ragas for contemporary audiences, featuring electronic elements.",
        achievements: [
          "Platinum Certification",
          "MTV Award",
          "International Recognition",
        ],
        genre: "Electronic Fusion",
        duration: "5:23",
        streams: "15.7M",
      },
      {
        id: 4,
        artist: "A.R. Rahman",
        project: "Timeless Melodies",
        type: "Soundtrack",
        image:
          "https://i.pinimg.com/736x/80/d3/7a/80d37a93486d8d22209ab9b691909a76.jpg",
        description:
          "Collaborative soundtrack featuring Muheet's classical expertise in Rahman's signature style.",
        achievements: [
          "Oscar Consideration",
          "Grammy Nomination",
          "Global Release",
        ],
        genre: "World Music",
        duration: "6:18",
        streams: "22.1M",
      },
    ],
    2022: [
      {
        id: 5,
        artist: "Vishal-Shekhar",
        project: "Bollywood Classics Reimagined",
        type: "Remix Album",
        image:
          "https://i.pinimg.com/736x/e6/83/0d/e6830d353a683958bdd3c0b9551d6b8e.jpg",
        description:
          "Fresh take on Bollywood classics with traditional instruments and modern production.",
        achievements: ["Chart Topper", "Youth Choice Award", "Viral Success"],
        genre: "Bollywood Fusion",
        duration: "4:56",
        streams: "18.9M",
      },
    ],
  };

  const years = Object.keys(timelineData)?.sort((a, b) => b - a);

  const handleAudioToggle = (id) => {
    setPlayingAudio(playingAudio === id ? null : id);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Icon name="Clock" size={16} className="text-primary mr-2" />
              <span className="text-primary font-medium text-sm">
                COLLABORATION TIMELINE
              </span>
            </div>
            <h2 className="text-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
              Journey Through Musical Partnerships
            </h2>
            <p className="text-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the evolution of collaborative masterpieces that have
              shaped the contemporary music landscape.
            </p>
          </div>

          {/* Year Selector */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-surface rounded-lg p-1 border border-border">
              {years?.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-6 py-3 rounded-md font-semibold text-sm musical-transition ${
                    selectedYear === year
                      ? "bg-primary text-primary-foreground shadow-contemplative"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          {/* Timeline Content */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary opacity-30"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {timelineData?.[selectedYear]?.map((collaboration, index) => (
                <div
                  key={collaboration?.id}
                  className="relative flex items-start"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-contemplative grammy-glow"></div>

                  {/* Content Card */}
                  <div className="ml-20 w-full">
                    <div className="bg-card rounded-xl shadow-grandeur border border-border overflow-hidden musical-hover">
                      <div className="grid lg:grid-cols-3 gap-0">
                        {/* Image Section */}
                        <div className="relative overflow-hidden">
                          <Image
                            src={collaboration?.image}
                            alt={collaboration?.project}
                            className="w-full h-64 lg:h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                          {/* Play Button */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <button
                              onClick={() =>
                                handleAudioToggle(collaboration?.id)
                              }
                              className="w-16 h-16 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center musical-hover shadow-lg"
                            >
                              <Icon
                                name={
                                  playingAudio === collaboration?.id
                                    ? "Pause"
                                    : "Play"
                                }
                                size={24}
                                color="white"
                              />
                            </button>
                          </div>

                          {/* Genre Badge */}
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-accent/90 text-accent-foreground text-xs font-semibold rounded-full">
                              {collaboration?.genre}
                            </span>
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="lg:col-span-2 p-8">
                          <div className="flex items-start justify-between mb-6">
                            <div>
                              <div className="flex items-center mb-2">
                                <h3 className="text-headline text-xl font-bold text-foreground mr-3">
                                  {collaboration?.project}
                                </h3>
                                <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                                  {collaboration?.type}
                                </span>
                              </div>
                              <p className="text-accent font-semibold mb-2">
                                with {collaboration?.artist}
                              </p>
                              <p className="text-body text-muted-foreground leading-relaxed mb-6">
                                {collaboration?.description}
                              </p>
                            </div>
                          </div>

                          {/* Achievements */}
                          <div className="mb-6">
                            <h4 className="font-semibold text-foreground mb-3 flex items-center">
                              <Icon
                                name="Trophy"
                                size={16}
                                className="text-accent mr-2"
                              />
                              Key Achievements
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {collaboration?.achievements?.map(
                                (achievement, i) => (
                                  <span
                                    key={i}
                                    className="px-3 py-1 bg-surface border border-border rounded-full text-xs font-medium text-foreground"
                                  >
                                    {achievement}
                                  </span>
                                )
                              )}
                            </div>
                          </div>

                          {/* Stats */}
                          <div className="grid grid-cols-2 gap-6 mb-6">
                            <div className="flex items-center">
                              <Icon
                                name="Clock"
                                size={16}
                                className="text-muted-foreground mr-2"
                              />
                              <span className="text-sm text-muted-foreground">
                                Duration: {collaboration?.duration}
                              </span>
                            </div>
                            <div className="flex items-center">
                              <Icon
                                name="Play"
                                size={16}
                                className="text-muted-foreground mr-2"
                              />
                              <span className="text-sm text-muted-foreground">
                                Streams: {collaboration?.streams}
                              </span>
                            </div>
                          </div>

                          {/* Audio Waveform */}
                          {playingAudio === collaboration?.id && (
                            <div className="bg-surface/50 rounded-lg p-4 border border-border">
                              <div className="flex items-center space-x-1 h-8 mb-2">
                                {Array.from({ length: 30 })?.map((_, i) => (
                                  <div
                                    key={i}
                                    className="waveform-bar w-1 bg-primary/60 rounded-full animate-pulse"
                                    style={{
                                      height: `${Math.random() * 100 + 20}%`,
                                      animationDelay: `${i * 0.1}s`,
                                    }}
                                  ></div>
                                ))}
                              </div>
                              <div className="flex items-center justify-between text-xs text-muted-foreground">
                                <span>Now Playing</span>
                                <span>{collaboration?.duration}</span>
                              </div>
                            </div>
                          )}

                          {/* Action Buttons */}
                          <div className="flex items-center space-x-4 mt-6">
                            <button className="flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium musical-hover">
                              <Icon
                                name="ExternalLink"
                                size={16}
                                className="mr-2"
                              />
                              Listen Full Track
                            </button>
                            <button className="flex items-center px-4 py-2 border border-border rounded-lg font-medium text-foreground musical-hover">
                              <Icon name="Info" size={16} className="mr-2" />
                              Behind the Scenes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Load More */}
          <div className="text-center mt-16">
            <button className="inline-flex items-center px-8 py-4 bg-surface border border-border rounded-lg font-semibold text-foreground musical-hover">
              <Icon name="Plus" size={20} className="mr-3" />
              Load More Collaborations
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationTimeline;
