import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Web3ContactForm from './Web3ContactForm';

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
      year: '2022',
      title: 'Grammy nomination',
      subtitle: 'Best Global Music Album - "Shuruaat" (Vocalist)',
      description: `Nominee of the prestigious Grammy Award for Best Global Music Album at the 65th Grammy Awards (2022). 
      The album "Shuruaat" represents a masterful collaboration where traditional Indian classical vocal artistry 
      meets contemporary production techniques.`,
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
      subtitle: 'Awarded excellence in Audio Engineering for Doob jaa - Bhoomi 2022',
      description: `Honored by the Indian Recording Arts Academy for outstanding contribution to classical fusion music. 
      This recognition celebrates the innovative approach to preserving and evolving traditional Indian classical music.`,
      significance: 'Premier recognition in Indian music industry',
      image: '/assets/images/irra.jpg',
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
      significance: 'Academic excellence recognition',
      image: '/assets/images/college.jpg',
      icon: 'GraduationCap',
      color: 'accent'
    },
    {
      id: 7,
      category: 'industry',
      year: '2021',
      title: 'Music India Award',
      subtitle: 'Classical Musician of the Year',
      description: `Honored with the Classical Musician of the Year award for outstanding contribution 
      to preserving and innovating within the Senia Gharana tradition, and for exceptional performances 
      that bridge classical and contemporary music.`,
      significance: 'National industry recognition',
      image: '/assets/banners/billboards.jpg',
      icon: 'Award',
      color: 'accent'
    },
  ];

  const filteredAchievements = activeCategory === 'all' 
    ? achievements 
    : achievements?.filter(achievement => achievement?.category === activeCategory);

  return (
    <>
    <section className="py-12 md:py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4">
            Achievement Timeline
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl lg:max-w-3xl mx-auto px-4">
            A comprehensive journey through recognition, awards, and acknowledgments that mark 
            significant milestones in artistic and cultural contribution.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 lg:mb-12 px-4">
          {categories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => setActiveCategory(category?.id)}
              className={`flex items-center px-3 md:px-4 py-2 rounded-full musical-transition text-xs md:text-sm ${
                activeCategory === category?.id
                  ? 'bg-primary text-primary-foreground shadow-contemplative'
                  : 'bg-surface text-muted-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              <Icon name={category?.icon} size={14} className="mr-1 md:mr-2" />
              <span className="font-medium whitespace-nowrap">{category?.name}</span>
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            {filteredAchievements?.map((achievement, index) => (
              <div
                key={achievement?.id}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 md:w-5 md:h-5 bg-primary rounded-full border-2 md:border-4 border-background shadow-contemplative z-10 top-6"></div>

                {/* Content Card */}
                <div className={`flex-1 ml-8 md:ml-0 ${
                  index % 2 === 0 
                    ? 'md:pr-6 lg:pr-12 xl:pr-16' 
                    : 'md:pl-6 lg:pl-12 xl:pl-16'
                }`}>
                  <div className="bg-card rounded-xl lg:rounded-2xl p-4 md:p-5 lg:p-6 shadow-contemplative border border-border musical-hover group max-w-2xl mx-auto md:max-w-lg lg:max-w-xl xl:max-w-2xl">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 md:mb-6 gap-3">
                      <div className="flex items-start space-x-3 md:space-x-4">
                        <div className={`w-10 h-10 md:w-12 md:h-12 bg-${achievement?.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                          <Icon name={achievement?.icon} size={18} color="white" className="md:w-5 md:h-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 mb-1 gap-1">
                            <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight">
                              {achievement?.title}
                            </h3>
                            <span className="px-2 md:px-3 py-1 bg-accent/10 text-accent text-xs md:text-sm font-medium rounded-full w-fit">
                              {achievement?.year}
                            </span>
                          </div>
                          <p className="text-primary font-medium text-sm md:text-base">{achievement?.subtitle}</p>
                        </div>
                      </div>
                    </div>

                    {/* Image */}
                    <div className="mb-4 md:mb-5 overflow-hidden rounded-lg">
                      <Image
                        src={achievement?.image}
                        alt={achievement?.title}
                        className="w-full h-40 md:h-44 lg:h-48 xl:h-52 object-cover group-hover:scale-105 musical-transition"
                      />
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-3 md:mb-4 text-sm md:text-base">
                      {achievement?.description}
                    </p>

                    {/* Significance Badge */}
                    <div className="inline-flex items-center px-3 py-1 bg-surface rounded-full">
                      <Icon name="Star" size={12} className="text-accent mr-2 md:w-3.5 md:h-3.5" />
                      <span className="text-xs md:text-sm font-medium text-foreground">
                        {achievement?.significance}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Summary */}
        <div className="mt-12 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 px-4">
          <div className="text-center p-4 md:p-6 bg-card rounded-lg border border-border">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3 grammy-glow">
              <Icon name="Award" size={16} color="white" className="md:w-5 md:h-5" />
            </div>
            <div className="text-xl md:text-2xl font-bold text-foreground mb-1">8+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Major Awards</div>
          </div>
          <div className="text-center p-4 md:p-6 bg-card rounded-lg border border-border">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3">
              <Icon name="Newspaper" size={16} color="white" className="md:w-5 md:h-5" />
            </div>
            <div className="text-xl md:text-2xl font-bold text-foreground mb-1">25+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Media Features</div>
          </div>
          <div className="text-center p-4 md:p-6 bg-card rounded-lg border border-border">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3">
              <Icon name="Globe" size={16} color="white" className="md:w-5 md:h-5" />
            </div>
            <div className="text-xl md:text-2xl font-bold text-foreground mb-1">15+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Countries Reached</div>
          </div>
          <div className="text-center p-4 md:p-6 bg-card rounded-lg border border-border">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3">
              <Icon name="Users" size={16} color="white" className="md:w-5 md:h-5" />
            </div>
            <div className="text-xl md:text-2xl font-bold text-foreground mb-1">1M+</div>
            <div className="text-xs md:text-sm text-muted-foreground">People Reached</div>
          </div>
        </div>
      </div>
    </section>

    {/* Web3 Contact Form Section */}
    <Web3ContactForm />
    </>
  );
};

export default AchievementTimeline;