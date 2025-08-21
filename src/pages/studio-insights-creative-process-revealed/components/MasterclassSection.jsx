import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const MasterclassSection = () => {
  const [selectedMasterclass, setSelectedMasterclass] = useState(0);

  const masterclasses = [
    {
      id: 1,
      title: "Classical Raga Fundamentals",
      subtitle: "Understanding the Soul of Indian Music",
      description: "Deep dive into the theoretical and practical aspects of classical ragas, their emotional expressions, and how they form the foundation of all Indian music.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      duration: "45 minutes",
      level: "Beginner to Intermediate",
      topics: [
        "Raga structure and theory",
        "Microtonal ornamentations (meend, gamak)",
        "Emotional expression through ragas",
        "Time theory (raga-time associations)"
      ],
      keyLearnings: [
        "Identify major ragas by their characteristic phrases",
        "Understand the emotional impact of different ragas",
        "Apply classical principles to contemporary music"
      ]
    },
    {
      id: 2,
      title: "Modern Production Techniques",
      subtitle: "Bridging Traditional and Contemporary",
      description: "Learn how to integrate classical Indian instruments and concepts into modern production workflows while maintaining authenticity.",
      image: "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?w=600&h=400&fit=crop",
      duration: "60 minutes",
      level: "Intermediate to Advanced",
      topics: [
        "Recording classical instruments for modern production",
        "MIDI programming with Indian classical elements",
        "Mixing traditional and electronic sounds",
        "Grammy-standard production techniques"
      ],
      keyLearnings: [
        "Record and process traditional instruments professionally",
        "Create authentic-sounding MIDI arrangements",
        "Balance traditional and modern elements effectively"
      ]
    },
    {
      id: 3,
      title: "Collaborative Music Creation",
      subtitle: "Working with Industry Legends",
      description: "Insights from collaborations with Arijit Singh, Shankar Mahadevan, and other renowned artists, including preparation, communication, and creative processes.",
      image: "https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg?w=600&h=400&fit=crop",
      duration: "50 minutes",
      level: "All Levels",
      topics: [
        "Preparing for high-profile collaborations",
        "Communication strategies with artists",
        "Managing creative differences",
        "Building long-term professional relationships"
      ],
      keyLearnings: [
        "Approach collaborations with confidence and preparation",
        "Navigate creative discussions professionally",
        "Build lasting relationships in the music industry"
      ]
    },
    {
      id: 4,
      title: "Cultural Bridge Building",
      subtitle: "Making Indian Music Global",
      description: "Strategies for presenting Indian classical music to international audiences while maintaining cultural authenticity and educational value.",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=400&fit=crop",
      duration: "40 minutes",
      level: "All Levels",
      topics: [
        "Cultural sensitivity in global presentations",
        "Educational approaches for international audiences",
        "Maintaining authenticity while being accessible",
        "Building cross-cultural musical connections"
      ],
      keyLearnings: [
        "Present Indian music concepts to global audiences",
        "Balance authenticity with accessibility",
        "Create meaningful cultural exchanges through music"
      ]
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
              <Icon name="GraduationCap" size={20} color="white" />
            </div>
            <span className="text-primary font-semibold text-lg">Musical Education</span>
          </div>
          
          <h2 className="text-headline text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Exclusive
            <span className="text-accent block">Masterclass Series</span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Learn directly from Grammy-nominated expertise through comprehensive masterclasses that bridge 
            traditional Indian classical music with contemporary global production techniques.
          </p>
        </div>

        {/* Masterclass Selection */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-12">
          {masterclasses?.map((masterclass, index) => (
            <button
              key={masterclass?.id}
              onClick={() => setSelectedMasterclass(index)}
              className={`p-4 rounded-lg text-left musical-transition ${
                selectedMasterclass === index
                  ? 'bg-primary text-white shadow-grammy'
                  : 'bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-3 text-sm font-bold ${
                selectedMasterclass === index ? 'bg-white text-primary' : 'bg-primary/20'
              }`}>
                {masterclass?.id}
              </div>
              <h3 className="font-semibold text-sm mb-1">{masterclass?.title}</h3>
              <p className="text-xs opacity-75 mb-2">{masterclass?.subtitle}</p>
              <div className="flex items-center space-x-2 text-xs">
                <Icon name="Clock" size={12} />
                <span>{masterclass?.duration}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Masterclass Details */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Masterclass Image and Info */}
          <div className="space-y-6">
            <div className="relative group">
              <div className="aspect-[4/3] bg-card rounded-2xl overflow-hidden shadow-grandeur">
                <Image
                  src={masterclasses?.[selectedMasterclass]?.image}
                  alt={masterclasses?.[selectedMasterclass]?.title}
                  className="w-full h-full object-cover group-hover:scale-105 musical-transition"
                />
                
                {/* Play Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 musical-transition">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center grammy-glow cursor-pointer">
                    <Icon name="Play" size={32} color="white" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                  <Icon name="Clock" size={14} className="inline mr-1" />
                  {masterclasses?.[selectedMasterclass]?.duration}
                </div>

                {/* Level Badge */}
                <div className="absolute top-4 left-4 bg-accent/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {masterclasses?.[selectedMasterclass]?.level}
                </div>
              </div>
            </div>

            {/* Masterclass Info */}
            <div className="space-y-4">
              <div>
                <h3 className="text-headline text-2xl font-bold text-foreground mb-2">
                  {masterclasses?.[selectedMasterclass]?.title}
                </h3>
                <p className="text-primary font-semibold mb-3">
                  {masterclasses?.[selectedMasterclass]?.subtitle}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {masterclasses?.[selectedMasterclass]?.description}
                </p>
              </div>

              {/* Action Buttons */}
              {/* <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="default"
                  size="lg"
                  className="musical-hover grammy-border"
                  iconName="Play"
                  iconPosition="left"
                  iconSize={20}
                >
                  Start Masterclass
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="musical-hover"
                  iconName="Download"
                  iconPosition="left"
                  iconSize={20}
                >
                  Download Materials
                </Button>
              </div> */}
            </div>
          </div>

          {/* Masterclass Content */}
          <div className="space-y-8">
            {/* Topics Covered */}
            <div className="bg-card p-6 rounded-lg shadow-contemplative">
              <h4 className="font-semibold text-foreground mb-4 flex items-center">
                <Icon name="BookOpen" size={16} className="mr-2 text-primary" />
                Topics Covered
              </h4>
              <div className="space-y-3">
                {masterclasses?.[selectedMasterclass]?.topics?.map((topic, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary text-xs font-bold">{index + 1}</span>
                    </div>
                    <span className="text-muted-foreground">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Learnings */}
            <div className="bg-card p-6 rounded-lg shadow-contemplative">
              <h4 className="font-semibold text-foreground mb-4 flex items-center">
                <Icon name="Target" size={16} className="mr-2 text-accent" />
                Key Learnings
              </h4>
              <div className="space-y-3">
                {masterclasses?.[selectedMasterclass]?.keyLearnings?.map((learning, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{learning}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Instructor Note */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg border border-accent/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="User" size={20} color="white" />
                </div>
                <div>
                  <h5 className="font-semibold text-foreground mb-2">Personal Note from Muheet</h5>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    "Each masterclass represents decades of learning from the Senia Gharana tradition 
                    combined with contemporary insights gained through Grammy-nominated work. My goal is to 
                    share not just techniques, but the deeper understanding that bridges cultures through music."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Masterclass Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-card rounded-lg shadow-contemplative">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Users" size={20} className="text-primary" />
            </div>
            <div className="text-2xl font-bold text-primary mb-1">5,000+</div>
            <div className="text-sm text-muted-foreground">Students Worldwide</div>
          </div>
          
          <div className="text-center p-6 bg-card rounded-lg shadow-contemplative">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Star" size={20} className="text-accent" />
            </div>
            <div className="text-2xl font-bold text-accent mb-1">4.9</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          
          <div className="text-center p-6 bg-card rounded-lg shadow-contemplative">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Clock" size={20} className="text-secondary" />
            </div>
            <div className="text-2xl font-bold text-secondary mb-1">200+</div>
            <div className="text-sm text-muted-foreground">Hours of Content</div>
          </div>
          
          <div className="text-center p-6 bg-card rounded-lg shadow-contemplative">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Award" size={20} className="text-primary" />
            </div>
            <div className="text-2xl font-bold text-primary mb-1">95%</div>
            <div className="text-sm text-muted-foreground">Completion Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterclassSection;