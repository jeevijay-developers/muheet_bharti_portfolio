import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const ProjectShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = [
    { id: "all", name: "All Projects", icon: "Grid3X3" },
    { id: "film", name: "Film Scores", icon: "Film" },
    { id: "album", name: "Albums", icon: "Disc" },
    { id: "single", name: "Singles", icon: "Music" },
    { id: "live", name: "Live Recordings", icon: "Mic" },
  ];

  const projects = [
    {
      id: 1,
      title: "Raag Fusion Symphony",
      artist: "Arijit Singh",
      category: "album",
      image:
        "https://i.pinimg.com/736x/48/d0/a4/48d0a43a2f533bd999ce5de0a9bce629.jpg",
      year: "2024",
      duration: "52:34",
      tracks: 12,
      streams: "50M+",
      awards: ["Grammy Nominated", "Filmfare Winner"],
      description:
        "A groundbreaking fusion album that seamlessly blends classical Indian ragas with contemporary production.",
      role: "Lead Sitar, Composition, Arrangement",
      chartPosition: "#1 iTunes India",
      genre: "Classical Fusion",
    },
    {
      id: 2,
      title: "Heritage Echoes",
      artist: "Shankar Mahadevan",
      category: "film",
      image:
        "https://i.pinimg.com/736x/1f/7a/4b/1f7a4b3396f57da0aede69bc49be1b97.jpg",
      year: "2024",
      duration: "45:22",
      tracks: 8,
      streams: "25M+",
      awards: ["IIFA Best Music", "Critics Choice"],
      description:
        "Emotional film score that captures the essence of cultural heritage through modern orchestration.",
      role: "Classical Arrangements, Sitar Solos",
      chartPosition: "Top 5 Film Music",
      genre: "Film Score",
    },
    {
      id: 3,
      title: "Urban Ragas",
      artist: "Salim-Sulaiman",
      category: "album",
      image:
        "https://i.pinimg.com/736x/6d/de/81/6dde8142d2b4c83802abc6fe2e4b002e.jpg",
      year: "2023",
      duration: "38:45",
      tracks: 10,
      streams: "35M+",
      awards: ["MTV Music Award", "Platinum Certified"],
      description:
        "Contemporary interpretation of traditional ragas with electronic elements and urban beats.",
      role: "Traditional Elements, Creative Direction",
      chartPosition: "#2 World Music Charts",
      genre: "Electronic Fusion",
    },
    {
      id: 4,
      title: "Timeless Melodies",
      artist: "A.R. Rahman",
      category: "single",
      image:
        "https://i.pinimg.com/736x/80/d3/7a/80d37a93486d8d22209ab9b691909a76.jpg",
      year: "2023",
      duration: "6:18",
      tracks: 1,
      streams: "22M+",
      awards: ["Oscar Consideration", "Global Recognition"],
      description:
        "A masterpiece collaboration showcasing the perfect blend of Rahman's vision and classical expertise.",
      role: "Featured Artist, Classical Composition",
      chartPosition: "International Success",
      genre: "World Music",
    },
    {
      id: 5,
      title: "Live at Royal Albert Hall",
      artist: "Muheet Bharti Ensemble",
      category: "live",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
      year: "2023",
      duration: "78:30",
      tracks: 15,
      streams: "12M+",
      awards: ["Live Performance Excellence", "Cultural Bridge Award"],
      description:
        "Historic live recording featuring collaborations with international artists at the prestigious venue.",
      role: "Lead Performance, Artistic Direction",
      chartPosition: "Live Album Charts",
      genre: "Live Classical Fusion",
    },
    {
      id: 6,
      title: "Bollywood Reimagined",
      artist: "Vishal-Shekhar",
      category: "album",
      image:
        "https://i.pinimg.com/736x/75/57/c2/7557c2ff4b32af050cb3c0cf13a5d764.jpg",
      year: "2022",
      duration: "42:15",
      tracks: 9,
      streams: "18M+",
      awards: ["Youth Choice Award", "Viral Success"],
      description:
        "Fresh interpretations of Bollywood classics with traditional instruments and modern production.",
      role: "Traditional Arrangements, Sitar Features",
      chartPosition: "Bollywood Charts Topper",
      genre: "Bollywood Fusion",
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects?.filter((project) => project?.category === selectedCategory);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
              <Icon name="Star" size={16} className="text-accent mr-2" />
              <span className="text-accent font-medium text-sm">
                PROJECT SHOWCASE
              </span>
            </div>
            <h2 className="text-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
              Collaborative Masterpieces
            </h2>
            <p className="text-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the diverse portfolio of collaborative works that showcase
              the fusion of traditional artistry with contemporary innovation.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories?.map((category) => (
              <button
                key={category?.id}
                onClick={() => setSelectedCategory(category?.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium musical-transition ${
                  selectedCategory === category?.id
                    ? "bg-primary text-primary-foreground shadow-contemplative"
                    : "bg-surface text-muted-foreground hover:text-primary hover:bg-primary/5 border border-border"
                }`}
              >
                <Icon name={category?.icon} size={16} className="mr-2" />
                {category?.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects?.map((project) => (
              <div
                key={project?.id}
                className="group bg-card rounded-xl shadow-grandeur border border-border overflow-hidden musical-hover"
                onMouseEnter={() => setHoveredProject(project?.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden aspect-square">
                  <Image
                    src={project?.image}
                    alt={project?.title}
                    width={400}
                    height={400}
                    className="w-full max-h-[400px] object-contain group-hover:scale-110 musical-transition"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 musical-transition"></div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 musical-transition">
                    <div className="w-16 h-16 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                      <Icon name="Play" size={24} color="white" />
                    </div>
                  </div>

                  {/* Awards Badge */}
                  {project?.awards?.length > 0 && (
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center px-2 py-1 bg-accent/90 text-accent-foreground text-xs font-semibold rounded-full">
                        <Icon name="Award" size={12} className="mr-1" />
                        {project?.awards?.[0]}
                      </div>
                    </div>
                  )}

                  {/* Year Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 bg-black/60 text-white text-xs font-medium rounded">
                      {project?.year}
                    </span>
                  </div>

                  {/* Hover Info */}
                  {hoveredProject === project?.id && (
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="flex items-center">
                            <Icon name="Clock" size={14} className="mr-1" />
                            {project?.duration}
                          </span>
                          <span className="flex items-center">
                            <Icon name="Music" size={14} className="mr-1" />
                            {project?.tracks} tracks
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="flex items-center">
                            <Icon name="Play" size={14} className="mr-1" />
                            {project?.streams}
                          </span>
                          <span className="text-accent font-medium">
                            {project?.chartPosition}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                      {project?.genre}
                    </span>
                    <div className="flex items-center text-muted-foreground">
                      <Icon name="TrendingUp" size={14} className="mr-1" />
                      <span className="text-xs">{project?.streams}</span>
                    </div>
                  </div>

                  <h3 className="text-headline text-lg font-bold text-foreground mb-2">
                    {project?.title}
                  </h3>

                  <p className="text-accent font-semibold text-sm mb-3">
                    with {project?.artist}
                  </p>

                  <p className="text-body text-sm text-muted-foreground leading-relaxed mb-4">
                    {project?.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-foreground mb-1">
                      Muheet's Role:
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {project?.role}
                    </p>
                  </div>

                  {/* Awards */}
                  {project?.awards?.length > 1 && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {project?.awards?.slice(1)?.map((award, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-surface border border-border rounded text-xs text-foreground"
                          >
                            {award}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex items-center space-x-3">
                    <button className="flex-1 flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm musical-hover">
                      <Icon name="Play" size={14} className="mr-2" />
                      Listen
                    </button>
                    <button className="flex items-center justify-center px-4 py-2 border border-border rounded-lg font-medium text-sm text-foreground musical-hover">
                      <Icon name="Info" size={14} />
                    </button>
                    <button className="flex items-center justify-center px-4 py-2 border border-border rounded-lg font-medium text-sm text-foreground musical-hover">
                      <Icon name="Share" size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-16">
            <button className="inline-flex items-center px-8 py-4 bg-surface border border-border rounded-lg font-semibold text-foreground musical-hover shadow-contemplative">
              <Icon name="Plus" size={20} className="mr-3" />
              Load More Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
