import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const MediaCoverageGallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState(null);

  const mediaTypes = [
    { id: 'all', name: 'All Media', icon: 'Globe' },
    { id: 'print', name: 'Print & Digital', icon: 'Newspaper' },
    { id: 'radio', name: 'Radio', icon: 'Radio' },
    { id: 'television', name: 'Television', icon: 'Tv' },
    { id: 'podcast', name: 'Podcasts', icon: 'Headphones' }
  ];

  const mediaFeatures = [
    {
      id: 1,
      type: 'print',
      publication: 'Rolling Stone India',
      title: 'The Classical Renaissance: Artists Bridging Tradition and Innovation',
      date: 'March 2023',
      description: `In-depth feature exploring how contemporary artists like Muheet Bharti are revolutionizing 
      classical music for modern audiences while maintaining authentic traditional roots.`,
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop',
      logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop',
      readTime: '8 min read',
      category: 'Feature Article',
      link: '#',
      excerpt: `"Muheet represents a new generation of artists who understand that tradition is not a museum piece, 
      but a living, breathing art form that must evolve to survive."`
    },
    {
      id: 2,
      type: 'television',
      publication: 'BBC World Service',
      title: 'Global Music Spotlight: Indian Classical Fusion',
      date: 'February 2023',
      description: `Live television interview discussing the global impact of Indian classical music and 
      its fusion with contemporary genres, reaching audiences across 40 countries.`,
      image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&h=400&fit=crop',
      logo: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=120&h=60&fit=crop',
      duration: '25 min',
      category: 'Live Interview',
      link: '#',
      excerpt: `"The conversation revealed deep insights into how classical traditions can inform and enrich 
      contemporary musical expression without losing their essential character."`
    },
    {
      id: 3,
      type: 'radio',
      publication: 'NPR Music',
      title: 'Tiny Desk Concert: Senia Gharana Traditions',
      date: 'January 2023',
      description: `Intimate acoustic performance showcasing the beauty of Senia Gharana ragas in a 
      contemporary setting, demonstrating the timeless appeal of classical Indian music.`,
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
      logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop',
      duration: '15 min',
      category: 'Performance',
      link: '#',
      excerpt: `"A masterclass in how traditional music can speak directly to contemporary hearts without compromising its authentic voice."`
    },
    {
      id: 4,
      type: 'podcast',
      publication: 'Song Exploder',
      title: 'Deconstructing "Raga Resonance"',
      date: 'December 2022',
      description: `Deep dive into the creative process behind the Grammy-nominated track, exploring 
      the intricate layering of traditional instruments with modern production techniques.`,
      image: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=600&h=400&fit=crop',
      logo: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=120&h=60&fit=crop',
      duration: '32 min',
      category: 'Creative Process',
      link: '#',
      excerpt: `"The episode provided unprecedented insight into how centuries-old musical principles can be translated into contemporary recording techniques."`
    },
    {
      id: 5,
      type: 'print',
      publication: 'The Hindu',
      title: 'Grammy Nomination: A Milestone for Indian Classical Music',
      date: 'November 2022',
      description: `Comprehensive coverage of the Grammy nomination and its significance for Indian 
      classical music on the global stage, including reactions from music industry veterans.`,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop',
      readTime: '6 min read',
      category: 'News Coverage',
      link: '#',
      excerpt: `"This nomination represents not just individual achievement, but recognition of Indian classical music's rightful place in global contemporary culture."`
    },
    {
      id: 6,
      type: 'television',
      publication: 'MTV Unplugged India',
      title: 'Classical Meets Contemporary',
      date: 'October 2022',
      description: `Special episode featuring acoustic arrangements of classical compositions, 
      demonstrating the versatility and emotional depth of traditional Indian music.`,
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop',
      logo: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=120&h=60&fit=crop',
      duration: '45 min',
      category: 'Music Special',
      link: '#',
      excerpt: `"A beautiful exploration of how classical ragas can be reimagined for contemporary 
      audiences without losing their spiritual and emotional essence."`
    }
  ];

  const filteredMedia = activeFilter === 'all' 
    ? mediaFeatures 
    : mediaFeatures?.filter(media => media?.type === activeFilter);

  const openMediaModal = (media) => {
    setSelectedMedia(media);
  };

  const closeMediaModal = () => {
    setSelectedMedia(null);
  };

  return (
    <section className="py-16 lg:py-24 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-headline text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Media Coverage & Features
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Comprehensive media coverage showcasing recognition from leading publications, 
            broadcasters, and digital platforms worldwide.
          </p>
        </div>

        {/* Media Type Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {mediaTypes?.map((type) => (
            <button
              key={type?.id}
              onClick={() => setActiveFilter(type?.id)}
              className={`flex items-center px-4 py-2 rounded-full musical-transition ${
                activeFilter === type?.id
                  ? 'bg-primary text-primary-foreground shadow-contemplative'
                  : 'bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary border border-border'
              }`}
            >
              <Icon name={type?.icon} size={16} className="mr-2" />
              <span className="text-sm font-medium">{type?.name}</span>
            </button>
          ))}
        </div>

        {/* Media Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMedia?.map((media) => (
            <div
              key={media?.id}
              className="bg-card rounded-2xl overflow-hidden shadow-contemplative border border-border musical-hover group cursor-pointer"
              onClick={() => openMediaModal(media)}
            >
              {/* Media Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={media?.image}
                  alt={media?.title}
                  className="w-full h-48 object-cover group-hover:scale-105 musical-transition"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium rounded-full">
                    {media?.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Icon name="ExternalLink" size={14} color="white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Publication Info */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Image
                      src={media?.logo}
                      alt={media?.publication}
                      className="w-8 h-8 rounded object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">{media?.publication}</h4>
                      <p className="text-xs text-muted-foreground">{media?.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Icon name="Clock" size={12} className="mr-1" />
                    {media?.readTime || media?.duration}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-headline font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary musical-transition">
                  {media?.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {media?.description}
                </p>

                {/* Excerpt */}
                <blockquote className="text-xs italic text-primary bg-primary/5 p-3 rounded-lg border-l-2 border-primary">
                  {media?.excerpt}
                </blockquote>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="musical-hover"
            iconName="Plus"
            iconPosition="left"
            iconSize={16}
          >
            Load More Coverage
          </Button>
        </div>

        {/* Media Statistics */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-card rounded-lg border border-border">
            <Icon name="Newspaper" size={24} className="text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground mb-1">25+</div>
            <div className="text-sm text-muted-foreground">Publications</div>
          </div>
          <div className="text-center p-6 bg-card rounded-lg border border-border">
            <Icon name="Radio" size={24} className="text-accent mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground mb-1">15+</div>
            <div className="text-sm text-muted-foreground">Radio Shows</div>
          </div>
          <div className="text-center p-6 bg-card rounded-lg border border-border">
            <Icon name="Tv" size={24} className="text-secondary mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground mb-1">8+</div>
            <div className="text-sm text-muted-foreground">TV Appearances</div>
          </div>
          <div className="text-center p-6 bg-card rounded-lg border border-border">
            <Icon name="Globe" size={24} className="text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground mb-1">40+</div>
            <div className="text-sm text-muted-foreground">Countries Reached</div>
          </div>
        </div>
      </div>
      {/* Media Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-grandeur">
            {/* Modal Header */}
            <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Image
                  src={selectedMedia?.logo}
                  alt={selectedMedia?.publication}
                  className="w-10 h-10 rounded object-cover"
                />
                <div>
                  <h3 className="font-semibold text-foreground">{selectedMedia?.publication}</h3>
                  <p className="text-sm text-muted-foreground">{selectedMedia?.date}</p>
                </div>
              </div>
              <button
                onClick={closeMediaModal}
                className="p-2 hover:bg-surface rounded-lg musical-transition"
              >
                <Icon name="X" size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <Image
                src={selectedMedia?.image}
                alt={selectedMedia?.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h2 className="text-headline text-2xl font-bold text-foreground mb-4">
                {selectedMedia?.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {selectedMedia?.description}
              </p>
              <blockquote className="text-primary bg-primary/5 p-4 rounded-lg border-l-4 border-primary mb-6">
                {selectedMedia?.excerpt}
              </blockquote>
              <div className="flex gap-4">
                <Button
                  variant="default"
                  iconName="ExternalLink"
                  iconPosition="left"
                  iconSize={16}
                >
                  Read Full Article
                </Button>
                <Button
                  variant="outline"
                  iconName="Share"
                  iconPosition="left"
                  iconSize={16}
                >
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MediaCoverageGallery;