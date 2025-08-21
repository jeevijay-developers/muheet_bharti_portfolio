import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AudioComparison = () => {
  const [activeComparison, setActiveComparison] = useState('raga-yaman');
  const [playingTrack, setPlayingTrack] = useState(null);

  const comparisons = [
    {
      id: 'raga-yaman',
      title: 'Raga Yaman Evolution',
      description: 'Experience how the classical Raga Yaman transforms through contemporary interpretation while maintaining its spiritual essence',
      traditional: {
        title: 'Traditional Alap',
        description: 'Pure classical rendition as passed down through 18 generations of Senia Gharana masters',
        duration: '4:32',
        instrument: 'Sitar & Tabla',
        characteristics: ['Meditative pace', 'Spiritual depth', 'Traditional ornaments', 'Guru-shishya style']
      },
      contemporary: {
        title: 'Grammy Fusion',
        description: 'Contemporary interpretation featuring electronic elements and Western harmonies',
        duration: '3:45',
        instrument: 'Sitar, Synthesizer & Orchestra',
        characteristics: ['Dynamic arrangement', 'Global appeal', 'Electronic textures', 'Cross-cultural harmony']
      }
    },
    {
      id: 'taal-teental',
      title: 'Taal Teental Progression',
      description: 'Discover how rhythmic patterns evolve from classical 16-beat cycles to contemporary time signatures',
      traditional: {
        title: 'Classical Teental',
        description: 'Traditional 16-beat cycle with authentic tabla compositions and classical improvisation',
        duration: '5:18',
        instrument: 'Tabla & Harmonium',
        characteristics: ['16-beat cycle', 'Classical improvisation', 'Traditional bols', 'Meditative rhythm']
      },
      contemporary: {
        title: 'Fusion Rhythms',
        description: 'Modern interpretation blending Teental with jazz and electronic rhythmic elements',
        duration: '4:02',
        instrument: 'Tabla, Drums & Electronic',
        characteristics: ['Hybrid time signatures', 'Jazz influences', 'Electronic layers', 'Contemporary groove']
      }
    },
    {
      id: 'composition-style',
      title: 'Compositional Approach',
      description: 'Compare traditional bandish composition with contemporary songwriting techniques',
      traditional: {
        title: 'Classical Bandish',
        description: 'Traditional composition structure with authentic lyrical content and classical progression',
        duration: '6:25',
        instrument: 'Vocal, Sitar & Tabla',
        characteristics: ['Sanskrit lyrics', 'Classical structure', 'Devotional theme', 'Traditional progression']
      },
      contemporary: {
        title: 'Modern Composition',
        description: 'Contemporary songwriting incorporating classical elements with modern production',
        duration: '3:58',
        instrument: 'Multi-layered Production',
        characteristics: ['Multilingual lyrics', 'Modern structure', 'Universal themes', 'Global production']
      }
    }
  ];

  const handlePlayTrack = (trackType) => {
    const trackId = `${activeComparison}-${trackType}`;
    if (playingTrack === trackId) {
      setPlayingTrack(null);
    } else {
      setPlayingTrack(trackId);
    }
  };

  const currentComparison = comparisons?.find(comp => comp?.id === activeComparison);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-surface/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-accent/10 rounded-full px-6 py-3 mb-6">
            <Icon name="Headphones" size={20} className="text-accent" />
            <span className="text-accent font-medium">Audio Evolution</span>
          </div>
          <h2 className="text-headline text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Traditional vs Contemporary
          </h2>
          <p className="text-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Listen to the evolution of classical Indian music through side-by-side comparisons 
            that showcase how tradition transforms into innovation
          </p>
        </div>

        {/* Comparison Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {comparisons?.map((comparison) => (
            <button
              key={comparison?.id}
              onClick={() => setActiveComparison(comparison?.id)}
              className={`px-6 py-3 rounded-full musical-transition ${
                activeComparison === comparison?.id
                  ? 'bg-accent text-accent-foreground shadow-contemplative'
                  : 'bg-surface text-muted-foreground hover:bg-accent/10 hover:text-accent'
              }`}
            >
              <span className="text-body font-medium">{comparison?.title}</span>
            </button>
          ))}
        </div>

        {/* Current Comparison */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-headline text-2xl font-bold text-foreground mb-4">
              {currentComparison?.title}
            </h3>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              {currentComparison?.description}
            </p>
          </div>

          {/* Audio Comparison Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Traditional Version */}
            <div className="bg-background rounded-2xl p-8 border border-border shadow-contemplative">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center">
                    <Icon name="Music" size={20} color="white" />
                  </div>
                  <div>
                    <h4 className="text-headline text-xl font-bold text-foreground">
                      Traditional
                    </h4>
                    <p className="text-sm text-muted-foreground">Heritage Style</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-foreground">
                    {currentComparison?.traditional?.duration}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {currentComparison?.traditional?.instrument}
                  </p>
                </div>
              </div>

              <h5 className="text-body font-semibold text-foreground mb-2">
                {currentComparison?.traditional?.title}
              </h5>
              <p className="text-sm text-muted-foreground mb-6">
                {currentComparison?.traditional?.description}
              </p>

              {/* Audio Player */}
              <div className="bg-surface/50 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between mb-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handlePlayTrack('traditional')}
                    iconName={playingTrack === `${activeComparison}-traditional` ? "Pause" : "Play"}
                    iconSize={16}
                  />
                  <div className="flex-1 mx-4">
                    <div className="flex space-x-1 items-end h-8">
                      {[...Array(20)]?.map((_, i) => (
                        <div
                          key={i}
                          className={`w-1 bg-secondary rounded-full waveform-bar ${
                            playingTrack === `${activeComparison}-traditional` ? 'animate-pulse' : ''
                          }`}
                          style={{
                            height: `${Math.random() * 24 + 8}px`,
                            animationDelay: `${i * 0.1}s`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <Icon name="Volume2" size={16} className="text-muted-foreground" />
                </div>
              </div>

              {/* Characteristics */}
              <div>
                <h6 className="text-body font-medium text-foreground mb-3">Key Characteristics</h6>
                <div className="space-y-2">
                  {currentComparison?.traditional?.characteristics?.map((char, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                      <span className="text-sm text-muted-foreground">{char}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contemporary Version */}
            <div className="bg-background rounded-2xl p-8 border border-border shadow-contemplative">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center grammy-glow">
                    <Icon name="Zap" size={20} color="white" />
                  </div>
                  <div>
                    <h4 className="text-headline text-xl font-bold text-foreground">
                      Contemporary
                    </h4>
                    <p className="text-sm text-muted-foreground">Innovation Style</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-foreground">
                    {currentComparison?.contemporary?.duration}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {currentComparison?.contemporary?.instrument}
                  </p>
                </div>
              </div>

              <h5 className="text-body font-semibold text-foreground mb-2">
                {currentComparison?.contemporary?.title}
              </h5>
              <p className="text-sm text-muted-foreground mb-6">
                {currentComparison?.contemporary?.description}
              </p>

              {/* Audio Player */}
              <div className="bg-surface/50 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between mb-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handlePlayTrack('contemporary')}
                    iconName={playingTrack === `${activeComparison}-contemporary` ? "Pause" : "Play"}
                    iconSize={16}
                  />
                  <div className="flex-1 mx-4">
                    <div className="flex space-x-1 items-end h-8">
                      {[...Array(20)]?.map((_, i) => (
                        <div
                          key={i}
                          className={`w-1 bg-accent rounded-full waveform-bar ${
                            playingTrack === `${activeComparison}-contemporary` ? 'animate-pulse' : ''
                          }`}
                          style={{
                            height: `${Math.random() * 24 + 8}px`,
                            animationDelay: `${i * 0.1}s`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <Icon name="Volume2" size={16} className="text-muted-foreground" />
                </div>
              </div>

              {/* Characteristics */}
              <div>
                <h6 className="text-body font-medium text-foreground mb-3">Key Characteristics</h6>
                <div className="space-y-2">
                  {currentComparison?.contemporary?.characteristics?.map((char, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      <span className="text-sm text-muted-foreground">{char}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Educational Note */}
        <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
              <Icon name="BookOpen" size={20} color="white" />
            </div>
            <div>
              <h4 className="text-headline text-xl font-semibold text-foreground mb-3">
                Understanding the Evolution
              </h4>
              <p className="text-body text-muted-foreground leading-relaxed">
                These comparisons demonstrate how classical Indian music can evolve without losing its essence. 
                The traditional versions preserve the spiritual and technical depth of centuries-old practices, 
                while contemporary interpretations make these profound musical concepts accessible to global audiences. 
                This approach has earned recognition including Grammy nominations, proving that innovation and tradition 
                can coexist beautifully.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudioComparison;