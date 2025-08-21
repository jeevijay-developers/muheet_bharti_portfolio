import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const FeaturedTestimonial = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayToggle = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
              <Icon name="Quote" size={16} className="text-accent mr-2" />
              <span className="text-accent font-medium text-sm">FEATURED TESTIMONIAL</span>
            </div>
            <h2 className="text-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
              Words from Industry Legends
            </h2>
          </div>

          {/* Main Testimonial Card */}
          <div className="relative bg-card rounded-2xl shadow-grandeur overflow-hidden border border-border">
            {/* Background Pattern */}
            <div className="absolute inset-0 cultural-pattern opacity-20"></div>
            
            <div className="relative z-10 p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Testimonial Content */}
                <div className="order-2 lg:order-1">
                  {/* Quote Icon */}
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-8 grammy-glow">
                    <Icon name="Quote" size={32} className="text-primary" />
                  </div>

                  {/* Quote Text */}
                  <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-accent">
                    "Muheet brings an extraordinary depth to every collaboration. His ability to seamlessly blend classical Indian traditions with contemporary sounds is unmatched. Working with him on our recent projects has been nothing short of magical—he doesn't just play music, he creates emotional landscapes."
                  </blockquote>

                  {/* Attribution */}
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 shadow-contemplative">
                      <Image
                        src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop&crop=face"
                        alt="Arijit Singh"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-foreground">Arijit Singh</h4>
                      <p className="text-muted-foreground text-sm">Playback Singer & Music Director</p>
                      <div className="flex items-center mt-1">
                        <Icon name="Award" size={14} className="text-accent mr-1" />
                        <span className="text-xs text-accent font-medium">6x Filmfare Winner</span>
                      </div>
                    </div>
                  </div>

                  {/* Audio Player */}
                  <div className="bg-surface/50 rounded-lg p-6 border border-border">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h5 className="font-semibold text-foreground mb-1">Exclusive Audio Message</h5>
                        <p className="text-sm text-muted-foreground">Personal testimonial from Arijit Singh</p>
                      </div>
                      <button
                        onClick={handlePlayToggle}
                        className="w-12 h-12 bg-primary rounded-full flex items-center justify-center musical-hover shadow-contemplative"
                      >
                        <Icon 
                          name={isPlaying ? "Pause" : "Play"} 
                          size={20} 
                          color="white" 
                        />
                      </button>
                    </div>
                    
                    {/* Waveform Visualization */}
                    <div className="flex items-center space-x-1 h-8">
                      {Array.from({ length: 40 })?.map((_, i) => (
                        <div
                          key={i}
                          className={`waveform-bar w-1 bg-primary/30 rounded-full ${
                            isPlaying ? 'animate-pulse' : ''
                          }`}
                          style={{
                            height: `${Math.random() * 100 + 20}%`,
                            animationDelay: `${i * 0.1}s`
                          }}
                        ></div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground">
                      <span>0:00</span>
                      <span>2:34</span>
                    </div>
                  </div>
                </div>

                {/* Visual Content */}
                <div className="order-1 lg:order-2">
                  <div className="relative">
                    {/* Main Image */}
                    <div className="relative overflow-hidden rounded-xl shadow-grandeur">
                      <Image
                        src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop"
                        alt="Arijit Singh and Muheet Bharti collaboration"
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                      
                      {/* Overlay Content */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center justify-between">
                          <div className="text-white">
                            <h4 className="font-semibold mb-1">Studio Session 2024</h4>
                            <p className="text-sm opacity-80">Recording "Raag Fusion Symphony"</p>
                          </div>
                          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <Icon name="Camera" size={20} color="white" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Stats */}
                    <div className="absolute -top-4 -right-4 bg-card rounded-lg shadow-contemplative p-4 border border-border">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">12</div>
                        <div className="text-xs text-muted-foreground">Collaborations</div>
                      </div>
                    </div>

                    <div className="absolute -bottom-4 -left-4 bg-card rounded-lg shadow-contemplative p-4 border border-border">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-accent mb-1">50M+</div>
                        <div className="text-xs text-muted-foreground">Streams</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Testimonials Preview */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {[
              {
                name: "Shankar Mahadevan",
                role: "Composer & Singer",
                quote: "Muheet's classical foundation brings authenticity to every modern arrangement.",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
              },
              {
                name: "Salim Merchant",
                role: "Music Director",
                quote: "His sitar work on our film scores added an emotional depth we never expected.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
              },
              {
                name: "Sulaiman Merchant",
                role: "Music Director",
                quote: "Collaborating with Muheet is like having access to 500 years of musical wisdom.",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
              }
            ]?.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-contemplative border border-border musical-hover">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                    <Image
                      src={testimonial?.image}
                      alt={testimonial?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-foreground">{testimonial?.name}</h4>
                    <p className="text-xs text-muted-foreground">{testimonial?.role}</p>
                  </div>
                </div>
                <p className="text-sm text-foreground leading-relaxed italic">"{testimonial?.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTestimonial;