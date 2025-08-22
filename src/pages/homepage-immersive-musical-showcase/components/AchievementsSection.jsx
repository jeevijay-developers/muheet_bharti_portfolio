import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const AchievementsSection = () => {
  const achievements = [
    {
      id: 1,
      title: "Performance with Ustad Zakir Hussain",
      subtitle: "Harvard Business Centre, Boston",
      description: "An extraordinary collaboration with the legendary tabla maestro Ustad Zakir Hussain at the prestigious Harvard Business Centre in Boston. This historic performance showcased the fusion of Senia Gharana traditions with contemporary percussion mastery.",
      image: "/assets/images/zakir.jpg", // You can replace this with actual image
      icon: "Users",
      color: "primary",
      venue: "Harvard Business Centre",
      location: "Boston, USA",
      category: "Collaboration",
      year: "2023"
    },
    {
      id: 2,
      title: "Netflix Original Soundtrack",
      subtitle: "Chanchal - Dhoom Dhaam",
      description: "Composed and performed the captivating song 'Chanchal' for the Netflix movie 'Dhoom Dhaam'. This track represents a perfect blend of traditional Indian classical music with modern cinematic storytelling, reaching global audiences through the streaming platform.",
      image: "/assets/thumbnail/chanchal.jpg", // You can replace this with actual image
      icon: "Film",
      color: "accent",
      platform: "Netflix",
      movie: "Dhoom Dhaam",
      category: "Film Score",
      year: "2023"
    },
    {
      id: 3,
      title: "Telugu Movie Hit",
      subtitle: "Edho Cherukundi Nalo - Vellipomakey",
      description: "A breakthrough moment at the age of just 15, singing the melodious Telugu song 'Edho Cherukundi Nalo' for the movie 'Vellipomakey'. This early career achievement showcased exceptional vocal maturity and musical understanding, marking the beginning of a remarkable journey in playback singing.",
      image: "/assets/thumbnail/Edho-cherukundi-nalo.jpg",
      icon: "Mic",
      color: "secondary",
      language: "Telugu",
      movie: "Vellipomakey",
      category: "Playback Singing",
      year: "Early Career",
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-surface via-background to-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Trophy" size={16} />
            Featured Achievements
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4">
            Landmark Performances
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl lg:max-w-3xl mx-auto">
            Celebrating milestone collaborations and breakthrough moments that define 
            artistic excellence and global recognition.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.id}
              className={`group relative bg-card rounded-2xl overflow-hidden border border-border shadow-contemplative hover:shadow-grandeur musical-transition`}
            >
              {/* Image Section */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                {achievement.id === 3 ? (<Image
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 musical-transition"
                />): (<Image
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-full object-cover group-hover:scale-110 musical-transition"
                />)}
                
                {/* Category Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-lg ${
                  achievement.color === 'primary' 
                    ? 'bg-gradient-to-r from-primary to-primary/80' 
                    : achievement.color === 'accent'
                    ? 'bg-gradient-to-r from-accent to-accent/80'
                    : 'bg-gradient-to-r from-secondary to-secondary/80'
                }`}>
                  <Icon name={achievement.icon} size={12} className="inline mr-1" />
                  {achievement.category}
                </div>

                {/* Year Badge */}
                <div className="absolute top-4 right-4 bg-black/60 text-white px-2 py-1 rounded-full text-xs font-medium">
                  {achievement.year}
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-8">
                <div className="space-y-4">
                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary musical-transition">
                      {achievement.title}
                    </h3>
                    <p className="text-primary font-semibold text-sm md:text-base">
                      {achievement.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Details */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    {achievement.venue && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="MapPin" size={14} className="text-primary" />
                        <span>{achievement.venue}</span>
                      </div>
                    )}
                    {achievement.location && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Globe" size={14} className="text-primary" />
                        <span>{achievement.location}</span>
                      </div>
                    )}
                    {achievement.platform && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Monitor" size={14} className="text-accent" />
                        <span>{achievement.platform}</span>
                      </div>
                    )}
                    {achievement.movie && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Film" size={14} className="text-accent" />
                        <span>{achievement.movie}</span>
                      </div>
                    )}
                    {achievement.language && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Languages" size={14} className="text-secondary" />
                        <span>{achievement.language}</span>
                      </div>
                    )}
                  </div>

                  {/* Call to Action */}
                  {/* <div className="pt-4">
                    <button className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm musical-transition">
                      <span>Learn More</span>
                      <Icon name="ArrowRight" size={14} />
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-12 lg:mt-16">
          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-muted-foreground">
              These achievements represent just a glimpse of an ongoing musical journey 
              that continues to break boundaries and inspire audiences worldwide.
            </p>
            <button className="bg-primary text-primary-foreground px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-primary/90 musical-transition inline-flex items-center gap-2">
              <Icon name="Star" size={20} />
              View All Achievements
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AchievementsSection;
