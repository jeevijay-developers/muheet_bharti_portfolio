import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

import Button from '../../../components/ui/Button';

const PressKitSection = () => {
  const [downloadStats, setDownloadStats] = useState({
    biography: 1247,
    photos: 892,
    audio: 634,
    factSheet: 456
  });

  const pressKitItems = [
    {
      id: 'biography',
      title: 'Official Biography',
      description: 'Comprehensive artist biography including career highlights, achievements, and background',
      icon: 'FileText',
      fileSize: '2.3 MB',
      format: 'PDF',
      downloads: downloadStats?.biography,
      color: 'primary',
      items: [
        'Full biographical narrative (2,500 words)',
        'Career timeline and milestones',
        'Educational background and training',
        'Awards and recognition summary',
        'Personal philosophy and artistic vision'
      ]
    },
    {
      id: 'photos',
      title: 'High-Resolution Photos',
      description: 'Professional photography collection for media use, including performance and portrait shots',
      icon: 'Camera',
      fileSize: '45.7 MB',
      format: 'ZIP',
      downloads: downloadStats?.photos,
      color: 'accent',
      items: [
        '20+ high-resolution performance photos',
        'Professional headshots and portraits',
        'Studio session photography',
        'Behind-the-scenes candid shots',
        'Album artwork and promotional images'
      ]
    },
    {
      id: 'audio',
      title: 'Audio Samples',
      description: 'Curated audio samples cleared for broadcast and media use',
      icon: 'Music',
      fileSize: '78.2 MB',
      format: 'ZIP',
      downloads: downloadStats?.audio,
      color: 'secondary',
      items: [
        'Grammy-nominated track excerpts',
        'Classical fusion compositions',
        'Live performance recordings',
        'Collaborative work samples',
        'Interview sound bites'
      ]
    },
    {
      id: 'factSheet',
      title: 'Media Fact Sheet',
      description: 'Quick reference guide with key facts, quotes, and contact information',
      icon: 'Info',
      fileSize: '1.1 MB',
      format: 'PDF',
      downloads: downloadStats?.factSheet,
      color: 'primary',
      items: [
        'Key achievements and awards',
        'Notable collaborations',
        'Media-ready quotes',
        'Technical specifications',
        'Contact information'
      ]
    }
  ];

  const handleDownload = (itemId) => {
    // Simulate download and update stats
    setDownloadStats(prev => ({
      ...prev,
      [itemId]: prev?.[itemId] + 1
    }));
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Icon name="Download" size={16} className="text-primary mr-2" />
            <span className="text-primary font-semibold text-sm">Media Resources</span>
          </div>
          <h2 className="text-headline text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Press Kit & Media Resources
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Comprehensive media resources for journalists, broadcasters, and industry professionals. 
            All materials are cleared for editorial use and regularly updated.
          </p>
        </div>

        {/* Press Kit Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {pressKitItems?.map((item) => (
            <div
              key={item?.id}
              className="bg-card rounded-2xl p-8 shadow-contemplative border border-border musical-hover group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 bg-${item?.color} rounded-full flex items-center justify-center group-hover:scale-110 musical-transition`}>
                    <Icon name={item?.icon} size={20} color="white" />
                  </div>
                  <div>
                    <h3 className="text-headline text-xl font-bold text-foreground mb-1">
                      {item?.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <Icon name="HardDrive" size={14} className="mr-1" />
                        {item?.fileSize}
                      </span>
                      <span className="flex items-center">
                        <Icon name="FileType" size={14} className="mr-1" />
                        {item?.format}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-foreground">{item?.downloads}</div>
                  <div className="text-xs text-muted-foreground">downloads</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {item?.description}
              </p>

              {/* Contents List */}
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Includes:</h4>
                <ul className="space-y-2">
                  {item?.items?.map((contentItem, index) => (
                    <li key={index} className="flex items-start text-sm text-muted-foreground">
                      <Icon name="Check" size={14} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                      {contentItem}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Download Button */}
              <Button
                variant="default"
                fullWidth
                className="musical-hover"
                iconName="Download"
                iconPosition="left"
                iconSize={16}
                onClick={() => handleDownload(item?.id)}
              >
                Download {item?.title}
              </Button>
            </div>
          ))}
        </div>

        {/* Usage Guidelines */}
        <div className="bg-surface/50 rounded-2xl p-8 border border-border mb-16">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
              <Icon name="Shield" size={20} color="white" />
            </div>
            <div className="flex-1">
              <h3 className="text-headline text-xl font-bold text-foreground mb-4">
                Usage Guidelines & Rights
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Permitted Use:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <Icon name="Check" size={14} className="text-primary mr-2 mt-0.5" />
                      Editorial and news coverage
                    </li>
                    <li className="flex items-start">
                      <Icon name="Check" size={14} className="text-primary mr-2 mt-0.5" />
                      Interview and feature articles
                    </li>
                    <li className="flex items-start">
                      <Icon name="Check" size={14} className="text-primary mr-2 mt-0.5" />
                      Radio and podcast segments
                    </li>
                    <li className="flex items-start">
                      <Icon name="Check" size={14} className="text-primary mr-2 mt-0.5" />
                      Educational and cultural content
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Attribution Required:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <Icon name="Info" size={14} className="text-accent mr-2 mt-0.5" />
                      Photo credit: "Courtesy of Muheet Bharti"
                    </li>
                    <li className="flex items-start">
                      <Icon name="Info" size={14} className="text-accent mr-2 mt-0.5" />
                      Audio samples: 30-second maximum
                    </li>
                    <li className="flex items-start">
                      <Icon name="Info" size={14} className="text-accent mr-2 mt-0.5" />
                      No commercial use without permission
                    </li>
                    <li className="flex items-start">
                      <Icon name="Info" size={14} className="text-accent mr-2 mt-0.5" />
                      Contact for extended usage rights
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card rounded-2xl p-6 shadow-contemplative border border-border text-center">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Mail" size={20} color="white" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Media Inquiries</h3>
            <p className="text-muted-foreground text-sm mb-4">
              For interviews, features, and press coverage
            </p>
            <Button
              variant="outline"
              size="sm"
              iconName="Mail"
              iconPosition="left"
              iconSize={14}
            >
              media@muheet.com
            </Button>
          </div>

          <div className="bg-card rounded-2xl p-6 shadow-contemplative border border-border text-center">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Calendar" size={20} color="white" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Booking & Events</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Performance bookings and event appearances
            </p>
            <Button
              variant="outline"
              size="sm"
              iconName="Calendar"
              iconPosition="left"
              iconSize={14}
            >
              booking@muheet.com
            </Button>
          </div>

          <div className="bg-card rounded-2xl p-6 shadow-contemplative border border-border text-center">
            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" size={20} color="white" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Collaborations</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Musical collaborations and partnerships
            </p>
            <Button
              variant="outline"
              size="sm"
              iconName="Users"
              iconPosition="left"
              iconSize={14}
            >
              collaborate@muheet.com
            </Button>
          </div>
        </div>

        {/* Download Statistics */}
        <div className="mt-16 text-center">
          <h3 className="text-headline text-2xl font-bold text-foreground mb-8">
            Press Kit Usage Statistics
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-card rounded-lg border border-border">
              <Icon name="Download" size={24} className="text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground mb-1">3,229</div>
              <div className="text-sm text-muted-foreground">Total Downloads</div>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <Icon name="Users" size={24} className="text-accent mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground mb-1">847</div>
              <div className="text-sm text-muted-foreground">Media Professionals</div>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <Icon name="Globe" size={24} className="text-secondary mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground mb-1">52</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <Icon name="TrendingUp" size={24} className="text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground mb-1">+23%</div>
              <div className="text-sm text-muted-foreground">Monthly Growth</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressKitSection;