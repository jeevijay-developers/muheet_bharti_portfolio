import React from 'react';
import Header from '../../components/ui/Header';
import HeritageHero from './components/HeritageHero';
import TimelineSection from './components/TimelineSection';
import AudioComparison from './components/AudioComparison';
import CollaboratorTestimonials from './components/CollaboratorTestimonials';

const MusicalJourneyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <HeritageHero />
      
      {/* Interactive Timeline */}
      <TimelineSection />
      
      {/* Audio Evolution Comparison */}
      {/* <AudioComparison /> */}
      
      {/* Industry Testimonials */}
      {/* <CollaboratorTestimonials /> */}
      
      {/* Cultural Bridge Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6 md:mb-8">
              A Living Bridge Between Worlds
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8 md:mb-12 max-w-3xl mx-auto">
              Muheet Bharti's musical journey represents more than personal achievement—it's a cultural bridge 
              that connects the profound wisdom of ancient Indian classical traditions with the innovative 
              possibilities of contemporary global music. Through Grammy-winning artistry and collaborations 
              with industry legends, this journey continues to evolve, creating new pathways for musical 
              expression while honoring the sacred heritage of 18 generations.
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 grammy-glow">
                  <span className="text-xl md:text-2xl font-bold text-white">🎵</span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                  Heritage Preservation
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Safeguarding 500 years of Senia Gharana tradition for future generations
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 grammy-glow">
                  <span className="text-xl md:text-2xl font-bold text-white">🌍</span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                  Global Innovation
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Creating contemporary music that speaks to audiences worldwide
                </p>
              </div>
              
              <div className="text-center sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 grammy-glow">
                  <span className="text-xl md:text-2xl font-bold text-white">🏆</span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                  Industry Recognition
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Grammy wins and collaborations with music legends
                </p>
              </div>
            </div>
            
            <div className="bg-background/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 border border-border shadow-grandeur">
              <blockquote className="text-base md:text-lg lg:text-xl xl:text-2xl text-foreground italic leading-relaxed">
                "Music is the universal language that transcends all boundaries. My journey is about 
                ensuring that the profound wisdom of our ancestors continues to resonate in the hearts 
                of future generations, while embracing the infinite possibilities that lie ahead."
              </blockquote>
              <div className="mt-4 md:mt-6 flex items-center justify-center space-x-3 md:space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary to-accent rounded-full overflow-hidden flex items-center justify-center">
                  <img src='/assets/banners/onStage.jpg' className='rounded-full w-full h-full object-cover' alt="Muheet Bharti" />
                </div>
                <div className="text-left">
                  <p className="text-sm md:text-base font-semibold text-foreground">Muheet Bharti</p>
                  <p className="text-xs md:text-sm text-muted-foreground">Grammy Winning Artist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MusicalJourneyPage;