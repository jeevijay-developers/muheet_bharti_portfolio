import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TimelineSection = () => {
  const [activeEra, setActiveEra] = useState('roots');
  const [playingAudio, setPlayingAudio] = useState(null);

  const timelineData = [
    {
      id: 'roots',
      title: 'Ancestral Roots & Ustad Jamal Khan',
      subtitle: '1500s - 1900s',
      description: `The Senia Gharana tradition begins with Mian Tansen, one of the nine jewels of Emperor Akbar's court. Our family lineage carries forward this 500-year legacy through legendary figures like my great grandfather, Ustad Jamal Khan of Senia Gharana. A revered master who trained the legendary ghazal king Jagjit Singh in all prominent styles of Hindustani Classical vocal tradition including Khayal, Dhrupad, and Thumri, Ustad Jamal Khan's teachings shaped the voice that would later revolutionize ghazal music.`,
      image: '/assets/images/jamal4-3.jpg',
      audioSample: 'Raga Yaman - Traditional Alap',

    },
    {
      id: 'learning',
      title: 'Foundation Years',
      subtitle: '1990s - 2010s',
      description: `Growing up immersed in the sounds of tabla, sitar, and harmonium, I began my formal training at age 5 under the guidance of my grandfather, carrying forward the legacy of Ustad Jamal Khan. The rigorous discipline of classical training shaped not just my technique, but my understanding of music as a spiritual practice and cultural responsibility, following the same guru-shishya tradition that produced legends like Jagjit Singh.`,
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
      audioSample: 'Early Raga Studies - Bhairav',

      culturalTerms: [
        { term: 'Ustad', definition: 'A master or teacher, especially in music or other arts' },
        { term: 'Senia Gharana', definition: 'A musical lineage founded by Allauddin Khan, known for its rigorous training and versatility' },
        { term: 'Khayal', definition: 'The most prominent form of North Indian classical vocal music, emphasizing improvisation' },
        { term: 'Dhrupad', definition: 'The oldest surviving form of Hindustani classical music, known for its meditative quality' },
        { term: 'Thumri', definition: 'A semi-classical vocal form expressing romantic and devotional themes' }
      ]
    },
    {
      id: 'berklee',
      title: 'Berklee Precision',
      subtitle: '2010 - 2014',
      description: `At Berklee College of Music, I discovered how Western music theory could enhance rather than replace classical Indian traditions. This fusion of analytical precision with intuitive raga knowledge created a unique compositional voice that honors both worlds while creating something entirely new.`,
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
      audioSample: 'Fusion Composition - East Meets West',

      culturalTerms: [
        { term: 'Fusion', definition: 'A musical style that combines elements from different musical traditions' },
        { term: 'Composition', definition: 'The art of creating music through arrangement of sounds and silence' }
      ]
    },
    {
      id: 'evolution',
      title: 'Contemporary Evolution',
      subtitle: '2015 - Present',
      description: `The Grammy win for the album "Shuruaat" as a vocalist marked a pivotal moment where traditional Indian classical music gained global recognition through contemporary production. This achievement in the Best Global Music Album category at the 65th Grammy Awards in 2022 opened new pathways for cultural exchange through music.`,
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
      audioSample: 'Grammy Winner - Shuruaat Album',

      culturalTerms: [
        { term: 'Grammy', definition: 'Prestigious awards presented by The Recording Academy for achievements in the music industry' },
        { term: 'Resonance', definition: 'The quality of being deep, full, and reverberating in music' }
      ]
    }
  ];

  const handleAudioPlay = (audioId) => {
    if (playingAudio === audioId) {
      setPlayingAudio(null);
    } else {
      setPlayingAudio(audioId);
    }
  };

  const currentEra = timelineData?.find(era => era?.id === activeEra);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-surface/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-headline lg:text-5xl font-bold text-foreground mb-6">
            Musical Journey Through Time
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore the evolution of musical heritage across generations, from ancient court traditions 
            to Grammy-nominated contemporary fusion
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {timelineData?.map((era) => (
            <button
              key={era?.id}
              onClick={() => setActiveEra(era?.id)}
              className={`px-6 py-3 rounded-full musical-transition ${
                activeEra === era?.id
                  ? 'bg-primary text-primary-foreground shadow-contemplative'
                  : 'bg-surface text-muted-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              <span className="text-body font-medium">{era?.title}</span>
            </button>
          ))}
        </div>

        {/* Active Era Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Era Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-grandeur">
              <Image
                src={currentEra?.image}
                alt={currentEra?.title}
                className="w-full h-full object-cover heritage-morph"
              />
            </div>
            
            {/* Audio Player Overlay */}
            {/* <div className="absolute bottom-4 left-4 right-4 bg-background/95 backdrop-blur-md rounded-lg p-4 border border-border">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground mb-1">
                    {currentEra?.audioSample}
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      {[...Array(12)]?.map((_, i) => (
                        <div
                          key={i}
                          className={`w-1 bg-primary rounded-full waveform-bar ${
                            playingAudio === currentEra?.id ? 'animate-pulse' : ''
                          }`}
                          style={{
                            height: `${Math.random() * 20 + 10}px`,
                            animationDelay: `${i * 0.1}s`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleAudioPlay(currentEra?.id)}
                  iconName={playingAudio === currentEra?.id ? "Pause" : "Play"}
                  iconSize={16}
                  className="ml-4"
                />
              </div>
            </div> */}
          </div>

          {/* Era Details */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center grammy-glow">
                  <Icon name="Music" size={20} color="white" />
                </div>
                <div>
                  <h3 className="text-headline font-bold text-foreground">
                    {currentEra?.title}
                  </h3>
                  <p className="text-accent text-lg font-medium">
                    {currentEra?.subtitle}
                  </p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {currentEra?.description}
              </p>
            </div>

            {/* Cultural Terms */}
            {/* <div>
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Cultural Glossary
              </h4>
              <div className="space-y-3">
                {currentEra?.culturalTerms?.map((term, index) => (
                  <div key={index} className="group">
                    <div className="flex items-start space-x-3 p-3 rounded-lg bg-surface/50 hover:bg-surface musical-transition">
                      <Icon name="BookOpen" size={16} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <span className="text-body font-semibold text-primary">{term?.term}</span>
                        <p className="text-sm text-muted-foreground mt-1">{term?.definition}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>

        {/* Timeline Progress */}
        <div className="mt-16">
          <div className="flex items-center justify-center space-x-4">
            <div className="flex space-x-2">
              {timelineData?.map((era, index) => (
                <div key={era?.id} className="flex items-center">
                  <div
                    className={`w-4 h-4 rounded-full musical-transition ${
                      activeEra === era?.id
                        ? 'bg-primary shadow-lg'
                        : timelineData?.findIndex(e => e?.id === activeEra) > index
                        ? 'bg-accent' :'bg-border'
                    }`}
                  />
                  {index < timelineData?.length - 1 && (
                    <div
                      className={`w-16 h-0.5 mx-2 musical-transition ${
                        timelineData?.findIndex(e => e?.id === activeEra) > index
                          ? 'bg-accent' :'bg-border'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;