import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const SocialProofSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const industryEndorsements = [
    {
      id: 1,
      name: "Arijit Singh",
      title: "Playback Singer & Music Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      quote: `Muheet's ability to blend classical Indian music with contemporary sounds is extraordinary. 
      His Grammy nomination is well-deserved recognition of his innovative artistry.`,
      collaboration: "Collaborated on \'Raag Reimagined\' album"
    },
    {
      id: 2,
      name: "Shankar Mahadevan",
      title: "Music Composer & Singer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      quote: `Working with Muheet has been a revelation. His deep understanding of Senia Gharana traditions 
      combined with modern production techniques creates magic.`,
      collaboration: "Joint performance at Mumbai Music Festival 2023"
    },
    {
      id: 3,
      name: "Salim Merchant",
      title: "Music Director (Salim-Sulaiman)",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      quote: `Muheet represents the future of Indian classical music. His Grammy nomination opens doors 
      for traditional artists to reach global audiences.`,
      collaboration: "Co-produced \'East Meets West\' fusion series"
    }
  ];

  const streamingStats = [
    {
      platform: "Spotify",
      icon: "Music",
      followers: "1.2M",
      monthlyListeners: "2.8M",
      color: "text-green-500"
    },
    {
      platform: "Apple Music",
      icon: "Play",
      followers: "850K",
      monthlyListeners: "1.9M",
      color: "text-gray-600"
    },
    {
      platform: "YouTube",
      icon: "Video",
      followers: "3.4M",
      monthlyListeners: "5.2M",
      color: "text-red-500"
    },
    {
      platform: "Amazon Music",
      icon: "Headphones",
      followers: "650K",
      monthlyListeners: "1.1M",
      color: "text-blue-500"
    }
  ];

  const mediaFeatures = [
    {
      outlet: "Nominated awards",
      headline: "The Grammy-Nominated Sitarist Bridging Centuries",
      date: "March 2024",
      image: "/assets/banners/awards.jpg"
    },
    {
      outlet: "Billboard",
      headline: "Senia Gharana Tradition Meets Modern Innovation",
      date: "February 2024",
      image: "/assets/banners/billboards.jpg"
    },
    {
      outlet: "The Hindu",
      headline: "18 Generations of Musical Excellence",
      date: "January 2024",
      image: "/assets/banners/onStage.jpg"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % industryEndorsements?.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + industryEndorsements?.length) % industryEndorsements?.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-surface to-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-0.5 bg-accent mr-4"></div>
            <Icon name="Star" size={24} className="text-accent" />
            <div className="w-12 h-0.5 bg-accent ml-4"></div>
          </div>
          <h2 className="text-headline text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Industry Recognition
          </h2>
          <p className="text-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Endorsed by music legends and celebrated by global audiences
          </p>
        </div>

        {/* Industry Endorsements */}
        <div className="mb-20">
          <div className="bg-card rounded-2xl p-8 shadow-grandeur border border-border">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Testimonial Content */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Image
                    src={industryEndorsements?.[activeTestimonial]?.image}
                    alt={industryEndorsements?.[activeTestimonial]?.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-headline text-xl font-bold text-foreground">
                      {industryEndorsements?.[activeTestimonial]?.name}
                    </h3>
                    <p className="text-accent font-accent">
                      {industryEndorsements?.[activeTestimonial]?.title}
                    </p>
                  </div>
                </div>

                <blockquote className="text-body text-lg text-muted-foreground leading-relaxed italic">
                  "{industryEndorsements?.[activeTestimonial]?.quote}"
                </blockquote>

                <div className="flex items-center space-x-2 text-sm text-primary">
                  <Icon name="Music" size={16} />
                  <span>{industryEndorsements?.[activeTestimonial]?.collaboration}</span>
                </div>

                {/* Navigation */}
                <div className="flex items-center space-x-4 pt-4">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 rounded-full border border-border hover:border-primary musical-transition"
                  >
                    <Icon name="ChevronLeft" size={20} />
                  </button>
                  
                  <div className="flex space-x-2">
                    {industryEndorsements?.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTestimonial(index)}
                        className={`w-2 h-2 rounded-full musical-transition ${
                          activeTestimonial === index ? 'bg-primary' : 'bg-muted'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <button
                    onClick={nextTestimonial}
                    className="p-2 rounded-full border border-border hover:border-primary musical-transition"
                  >
                    <Icon name="ChevronRight" size={20} />
                  </button>
                </div>
              </div>

              {/* Visual Element */}
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 text-center">
                  <Icon name="Quote" size={48} className="text-primary/30 mx-auto mb-4" />
                  <p className="text-headline text-2xl font-bold text-foreground mb-2">
                    Industry Legends
                  </p>
                  <p className="text-muted-foreground">
                    Collaborating with the best in music
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Streaming Platform Stats */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-headline text-3xl font-bold text-foreground mb-4">
              Global Reach
            </h3>
            <p className="text-body text-lg text-muted-foreground">
              Streaming across all major platforms worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {streamingStats?.map((platform, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 text-center shadow-contemplative border border-border musical-hover"
              >
                <div className={`w-12 h-12 rounded-full bg-muted/20 flex items-center justify-center mx-auto mb-4 ${platform?.color}`}>
                  <Icon name={platform?.icon} size={24} />
                </div>
                <h4 className="font-bold text-foreground mb-2">{platform?.platform}</h4>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-primary">{platform?.followers}</p>
                  <p className="text-xs text-muted-foreground">Followers</p>
                  <p className="text-lg font-semibold text-accent">{platform?.monthlyListeners}</p>
                  <p className="text-xs text-muted-foreground">Monthly Listeners</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Features */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h3 className="text-headline text-3xl font-bold text-foreground mb-4">
              Media Coverage
            </h3>
            <p className="text-body text-lg text-muted-foreground">
              Featured in leading music publications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {mediaFeatures?.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-xl overflow-hidden shadow-contemplative border border-border musical-hover group"
              >
                <div className="relative">
                  <Image
                    src={feature?.image}
                    alt={feature?.headline}
                    className="w-full h-48 object-cover group-hover:scale-105 musical-transition"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold text-sm">
                      {feature?.outlet}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-foreground mb-2 line-clamp-2">
                    {feature?.headline}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {feature?.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-headline text-2xl font-bold text-foreground mb-4">
              Join the Musical Journey
            </h3>
            <p className="text-body text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Experience the fusion of tradition and innovation. Follow Muheet Bharti across all platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                className="musical-hover grammy-border"
                iconName="Play"
                iconPosition="left"
                iconSize={20}
              >
                Listen on Spotify
              </Button>
              <Link to="/collaborations-industry-relationships-showcase">
                <Button
                  variant="outline"
                  size="lg"
                  className="musical-hover w-full sm:w-auto"
                  iconName="Users"
                  iconPosition="left"
                  iconSize={20}
                >
                  View All Collaborations
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;