import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const AchievementTimeline = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Achievements', icon: 'Award' },
    { id: 'industry', name: 'Industry Awards', icon: 'Trophy' },
    { id: 'media', name: 'Media Recognition', icon: 'Newspaper' },
    { id: 'education', name: 'Educational Honors', icon: 'GraduationCap' },
    { id: 'cultural', name: 'Cultural Acknowledgments', icon: 'Globe' }
  ];

  const achievements = [
    {
      id: 1,
      category: 'industry',
      year: '2023',
      title: 'Grammy Nomination',
      subtitle: 'Best World Music Album - "Senia Resonance"',
      description: `Nominated for the prestigious Grammy Award, recognizing exceptional artistry in world music. 
      The album "Senia Resonance" represents a masterful fusion of 500-year-old Senia Gharana traditions 
      with contemporary production techniques.`,
      significance: 'Highest honor in the music industry',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
      icon: 'Award',
      color: 'accent'
    },
    {
      id: 2,
      category: 'industry',
      year: '2022',
      title: 'IRAA Award Winner',
      subtitle: 'Best Classical Fusion Artist',
      description: `Honored by the Indian Recording Arts Academy for outstanding contribution to classical fusion music. 
      This recognition celebrates the innovative approach to preserving and evolving traditional Indian classical music.`,
      significance: 'Premier recognition in Indian music industry',
      image: '/assets/banners/irraawards.jpg',
      icon: 'Trophy',
      color: 'primary'
    },
    {
      id: 3,
      category: 'media',
      year: '2023',
      title: 'Rolling Stone India Feature',
      subtitle: 'Artist to Watch - Classical Renaissance',
      description: `Featured as one of the artists leading the classical music renaissance in India. 
      The article highlighted the unique approach to bridging generational gaps in music appreciation 
      and bringing classical music to contemporary audiences.`,
      significance: 'Major music publication recognition',
      image: '/assets/banners/banner1.jpg',
      icon: 'Newspaper',
      color: 'secondary'
    },
    {
      id: 4,
      category: 'education',
      year: '2021',
      title: 'Berklee College of Music',
      subtitle: 'Outstanding Alumni Achievement Award',
      description: `Recognized by Berklee College of Music for exceptional achievement in world music fusion 
      and for representing the institution's values of musical innovation and cultural bridge-building 
      on the global stage.`,
      significance: 'Academic excellence recognition',image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=400&h=300&fit=crop',icon: 'GraduationCap',color: 'accent'
    },
    {
      id: 5,
      category: 'cultural',year: '2022',title: 'Sangeet Natak Akademi Recognition',subtitle: 'Young Artist Fellowship',
      description: `Selected for the prestigious Young Artist Fellowship by India's National Academy of Music, 
      Dance & Drama. This recognition acknowledges exceptional talent in preserving and promoting 
      Indian classical music traditions.`,
      significance: 'National cultural institution honor',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
      icon: 'Globe',
      color: 'primary'
    },
    {
      id: 6,
      category: 'media',
      year: '2023',
      title: 'BBC World Service Interview',
      subtitle: 'Global Music Spotlight',
      description: `Featured in BBC World Service's Global Music program, discussing the evolution of Indian 
      classical music and its influence on contemporary world music. The interview reached audiences 
      across 40 countries.`,
      significance: 'International media platform',image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=300&fit=crop',icon: 'Radio',color: 'secondary'
    },
    {
      id: 7,
      category: 'industry',year: '2021',title: 'Filmfare Award Nomination',subtitle: 'Best Background Score - "Raag Reimagined"',
      description: `Nominated for Filmfare Award for the innovative background score that seamlessly blended 
      classical ragas with cinematic orchestration. The work was praised for its emotional depth 
      and technical excellence.`,
      significance: 'Film industry recognition',image: 'https://images.unsplash.com/photo-1489599162946-648229acc58f?w=400&h=300&fit=crop',icon: 'Film',color: 'accent'
    },
    {
      id: 8,
      category: 'cultural',year: '2020',title: 'UNESCO Cultural Ambassador',subtitle: 'Music for Peace Initiative',
      description: `Appointed as Cultural Ambassador for UNESCO's Music for Peace initiative, promoting 
      cross-cultural understanding through music. The role involves creating musical bridges 
      between diverse communities worldwide.`,
      significance: 'International cultural diplomacy',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop',
      icon: 'Heart',
      color: 'primary'
    }
  ];

  const filteredAchievements = activeCategory === 'all' 
    ? achievements 
    : achievements?.filter(achievement => achievement?.category === activeCategory);

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-headline text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Achievement Timeline
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            A comprehensive journey through recognition, awards, and acknowledgments that mark 
            significant milestones in artistic and cultural contribution.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => setActiveCategory(category?.id)}
              className={`flex items-center px-4 py-2 rounded-full musical-transition ${
                activeCategory === category?.id
                  ? 'bg-primary text-primary-foreground shadow-contemplative'
                  : 'bg-surface text-muted-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              <Icon name={category?.icon} size={16} className="mr-2" />
              <span className="text-sm font-medium">{category?.name}</span>
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden lg:block"></div>

          <div className="space-y-12">
            {filteredAchievements?.map((achievement, index) => (
              <div
                key={achievement?.id}
                className={`relative flex flex-col lg:flex-row gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden lg:flex absolute left-6 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-contemplative z-10"></div>

                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                  <div className="bg-card rounded-2xl p-8 shadow-contemplative border border-border musical-hover group">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 bg-${achievement?.color} rounded-full flex items-center justify-center`}>
                          <Icon name={achievement?.icon} size={20} color="white" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-3 mb-1">
                            <h3 className="text-headline text-xl font-bold text-foreground">
                              {achievement?.title}
                            </h3>
                            <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                              {achievement?.year}
                            </span>
                          </div>
                          <p className="text-primary font-medium">{achievement?.subtitle}</p>
                        </div>
                      </div>
                    </div>

                    {/* Image */}
                    <div className="mb-6 overflow-hidden rounded-lg">
                      <Image
                        src={achievement?.image}
                        alt={achievement?.title}
                        className="w-full h-48 object-cover group-hover:scale-105 musical-transition"
                      />
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {achievement?.description}
                    </p>

                    {/* Significance Badge */}
                    <div className="inline-flex items-center px-3 py-1 bg-surface rounded-full">
                      <Icon name="Star" size={14} className="text-accent mr-2" />
                      <span className="text-sm font-medium text-foreground">
                        {achievement?.significance}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Year Badge (Mobile) */}
                <div className="lg:hidden flex justify-center">
                  <div className="px-4 py-2 bg-primary text-primary-foreground rounded-full font-bold">
                    {achievement?.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Summary */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-card rounded-lg border border-border">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-3 grammy-glow">
              <Icon name="Award" size={20} color="white" />
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">8+</div>
            <div className="text-sm text-muted-foreground">Major Awards</div>
          </div>
          <div className="text-center p-6 bg-card rounded-lg border border-border">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Newspaper" size={20} color="white" />
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">25+</div>
            <div className="text-sm text-muted-foreground">Media Features</div>
          </div>
          <div className="text-center p-6 bg-card rounded-lg border border-border">
            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Globe" size={20} color="white" />
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">15+</div>
            <div className="text-sm text-muted-foreground">Countries Reached</div>
          </div>
          <div className="text-center p-6 bg-card rounded-lg border border-border">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Users" size={20} color="white" />
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">1M+</div>
            <div className="text-sm text-muted-foreground">People Reached</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementTimeline;