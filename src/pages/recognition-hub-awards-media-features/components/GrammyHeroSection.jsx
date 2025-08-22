import React from 'react';
import Icon from '../../../components/AppIcon';

import Button from '../../../components/ui/Button';

const GrammyHeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 lg:py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 cultural-pattern opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Section */}
          <div className="space-y-8">
            {/* Grammy Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/20 rounded-full grammy-glow">
              <Icon name="Award" size={20} className="text-accent mr-2" />
              <span className="text-accent font-semibold text-sm">Grammy Nominated Artist</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-headline text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                Grammy Recognition
                <span className="block text-primary">Excellence Acknowledged</span>
              </h1>
              <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed max-w-2xl">
                Grammy nominated vocalist for the album "Shuruaat" which won Best Global Music Album 
                at the 65th Grammy Awards in 2022, representing exceptional vocal artistry on the world's most prestigious musical stage.
              </p>
            </div>

            {/* Grammy Details */}
            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg border border-border shadow-contemplative">
                  <div className="flex items-center mb-3">
                    <Icon name="Music" size={20} className="text-primary mr-2" />
                    <h3 className="font-semibold text-foreground">Category</h3>
                  </div>
                  <p className="text-muted-foreground">Best Global Music Album</p>
                  <p className="text-sm text-accent font-medium mt-1">"Shuruaat" - Vocalist</p>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border shadow-contemplative">
                  <div className="flex items-center mb-3">
                    <Icon name="Calendar" size={20} className="text-primary mr-2" />
                    <h3 className="font-semibold text-foreground">Year</h3>
                  </div>
                  <p className="text-muted-foreground">65th Annual Grammy Awards</p>
                  <p className="text-sm text-accent font-medium mt-1">2022 Winner</p>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="bg-surface/50 p-6 rounded-lg border-l-4 border-primary">
                <p className="text-foreground italic text-lg leading-relaxed mb-4">
                  "Being part of the Grammy-winning album 'Shuruaat' as a vocalist represents the 
                  culmination of years of dedication to my craft. This achievement validates our 
                  ancestral musical heritage and its place on the world's most prestigious stage."
                </p>
                <cite className="text-muted-foreground font-medium">— Muheet Bharti</cite>
              </blockquote>
            </div>

            {/* Action Buttons */}
            {/* <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                className="musical-hover grammy-border"
                iconName="Play"
                iconPosition="left"
                iconSize={16}
              >
                Listen to Nominated Album
              </Button>
              <Button
                variant="outline"
                className="musical-hover"
                iconName="Download"
                iconPosition="left"
                iconSize={16}
              >
                Download Press Kit
              </Button>
            </div> */}
          </div>

          {/* Visual Section */}
          <div className="relative">
            <div className="relative bg-card rounded-2xl p-8 shadow-grandeur">
              {/* Grammy Certificate Mockup */}
              <img src='public/assets/images/grammy-certificate-new.jpg' className='w-full h-3/6' />

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center grammy-glow">
                <Icon name="Star" size={20} color="white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Music" size={16} color="white" />
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-8 right-8 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-8 left-8 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrammyHeroSection;