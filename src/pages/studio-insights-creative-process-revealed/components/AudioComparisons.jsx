import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const AudioComparisons = () => {
  const [activeComparison, setActiveComparison] = useState(0);
  const [playingTrack, setPlayingTrack] = useState(null);

  const audioComparisons = [
    {
      id: 1,
      title: "Eternal Resonance",
      subtitle: "Grammy-Nominated Track Evolution",
      description: "Experience the transformation from raw classical recording to Grammy-nominated production masterpiece.",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=400&fit=crop",
      rawVersion: {
        title: "Raw Classical Recording",
        description: "Pure sitar and tabla recording in traditional style",
        duration: "4:32",
        waveform: [20, 45, 60, 35, 80, 25, 70, 40, 55, 30, 65, 50, 75, 45, 60, 35, 80, 25, 70, 40]
      },
      finalVersion: {
        title: "Grammy-Nominated Production",
        description: "Full orchestration with contemporary elements",
        duration: "4:28",
        waveform: [40, 65, 80, 55, 90, 45, 85, 60, 75, 50, 85, 70, 95, 65, 80, 55, 90, 45, 85, 60]
      },
      productionNotes: [
        "Added subtle string arrangements to enhance emotional depth",
        "Incorporated modern percussion while preserving tabla authenticity",
        "Applied Grammy-standard mixing and mastering techniques",
        "Balanced traditional microtones with contemporary harmonic structure"
      ]
    },
    {
      id: 2,
      title: "Raga Fusion Experiment",
      subtitle: "Classical Meets Electronic",
      description: "Witness how ancient Raga Yaman transforms into a contemporary electronic fusion piece.",
      image: "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?w=600&h=400&fit=crop",
      rawVersion: {
        title: "Traditional Raga Yaman",
        description: "Classical sitar improvisation in pure form",
        duration: "6:15",
        waveform: [15, 35, 50, 25, 70, 20, 60, 30, 45, 25, 55, 40, 65, 35, 50, 25, 70, 20, 60, 30]
      },
      finalVersion: {
        title: "Electronic Fusion Version",
        description: "Raga Yaman with electronic elements and modern production",
        duration: "5:42",
        waveform: [35, 55, 70, 45, 85, 40, 75, 50, 65, 40, 75, 60, 85, 55, 70, 45, 85, 40, 75, 50]
      },
      productionNotes: [
        "Layered synthesized pads to support traditional melody",
        "Added rhythmic electronic elements while maintaining raga structure",
        "Used spatial audio techniques for immersive experience",
        "Preserved classical ornamentations in electronic context"
      ]
    },
    {
      id: 3,
      title: "Collaborative Magic",
      subtitle: "Arijit Singh Session",
      description: "From initial vocal recording to the final polished collaboration with Arijit Singh.",
      image: "https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg?w=600&h=400&fit=crop",
      rawVersion: {
        title: "Initial Vocal Take",
        description: "Arijit\'s raw vocal performance with basic accompaniment",
        duration: "3:48",
        waveform: [25, 40, 55, 30, 75, 25, 65, 35, 50, 30, 60, 45, 70, 40, 55, 30, 75, 25, 65, 35]
      },
      finalVersion: {
        title: "Polished Collaboration",
        description: "Full production with orchestration and vocal harmonies",
        duration: "3:52",
        waveform: [45, 60, 75, 50, 90, 45, 80, 55, 70, 50, 80, 65, 90, 60, 75, 50, 90, 45, 80, 55]
      },
      productionNotes: [
        "Enhanced vocal presence with subtle reverb and compression",
        "Added backing vocals and harmonies for richness",
        "Integrated classical instruments seamlessly with vocals",
        "Applied professional mixing techniques for radio-ready sound"
      ]
    }
  ];

  const handlePlayPause = (trackType) => {
    if (playingTrack === trackType) {
      setPlayingTrack(null);
    } else {
      setPlayingTrack(trackType);
    }
  };

  const WaveformVisualizer = ({ waveform, isPlaying, title }) => (
    <div className="bg-card p-4 rounded-lg">
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-semibold text-foreground text-sm">{title}</h4>
        <div className="text-xs text-muted-foreground">
          {audioComparisons?.[activeComparison]?.[title?.includes('Raw') ? 'rawVersion' : 'finalVersion']?.duration}
        </div>
      </div>
      
      <div className="flex items-end space-x-1 h-16 mb-3">
        {waveform?.map((height, index) => (
          <div
            key={index}
            className={`flex-1 rounded-t transition-all duration-300 ${
              isPlaying ? 'bg-primary animate-pulse' : 'bg-muted'
            }`}
            style={{ height: `${height}%` }}
          ></div>
        ))}
      </div>
      
      <p className="text-xs text-muted-foreground">
        {audioComparisons?.[activeComparison]?.[title?.includes('Raw') ? 'rawVersion' : 'finalVersion']?.description}
      </p>
    </div>
  );

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Icon name="Volume2" size={20} color="white" />
            </div>
            <span className="text-accent font-semibold text-lg">Audio Evolution</span>
          </div>
          
          <h2 className="text-headline lg:text-5xl font-bold text-foreground mb-6">
            Raw to
            <span className="text-primary block">Grammy Standard</span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Listen to the remarkable transformation of compositions from initial recordings to final productions, 
            showcasing the meticulous craft behind Grammy-nominated quality.
          </p>
        </div>

        {/* Comparison Navigation */}
        <div className="flex flex-col lg:flex-row justify-center space-y-4 lg:space-y-0 lg:space-x-4 mb-12">
          {audioComparisons?.map((comparison, index) => (
            <button
              key={comparison?.id}
              onClick={() => setActiveComparison(index)}
              className={`p-4 rounded-lg text-left musical-transition ${
                activeComparison === index
                  ? 'bg-primary text-white shadow-grammy'
                  : 'bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              <div className="font-semibold text-sm mb-1">{comparison?.title}</div>
              <div className="text-xs opacity-75">{comparison?.subtitle}</div>
            </button>
          ))}
        </div>

        {/* Active Comparison */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Comparison Image */}
          <div className="lg:col-span-1">
            <div className="relative group">
              <div className="aspect-square bg-card rounded-2xl overflow-hidden shadow-grandeur">
                <Image
                  src={audioComparisons?.[activeComparison]?.image}
                  alt={audioComparisons?.[activeComparison]?.title}
                  className="w-full h-full object-cover group-hover:scale-105 musical-transition"
                />
                
                {/* Play Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 musical-transition">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center grammy-glow">
                    <Icon name="Play" size={24} color="white" />
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <h3 className="text-headline font-bold text-foreground mb-2">
                  {audioComparisons?.[activeComparison]?.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {audioComparisons?.[activeComparison]?.description}
                </p>
              </div>
            </div>
          </div>

          {/* Audio Comparisons */}
          <div className="lg:col-span-2 space-y-6">
            {/* Raw Version */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-foreground flex items-center">
                  <Icon name="Mic" size={16} className="mr-2 text-secondary" />
                  Raw Recording
                </h4>
                <Button
                  variant={playingTrack === 'raw' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handlePlayPause('raw')}
                  iconName={playingTrack === 'raw' ? 'Pause' : 'Play'}
                  iconPosition="left"
                  iconSize={14}
                >
                  {playingTrack === 'raw' ? 'Pause' : 'Play Raw'}
                </Button>
              </div>
              
              <WaveformVisualizer
                waveform={audioComparisons?.[activeComparison]?.rawVersion?.waveform}
                isPlaying={playingTrack === 'raw'}
                title="Raw Version"
              />
            </div>

            {/* Final Version */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-foreground flex items-center">
                  <Icon name="Award" size={16} className="mr-2 text-accent" />
                  Final Production
                </h4>
                <Button
                  variant={playingTrack === 'final' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handlePlayPause('final')}
                  iconName={playingTrack === 'final' ? 'Pause' : 'Play'}
                  iconPosition="left"
                  iconSize={14}
                >
                  {playingTrack === 'final' ? 'Pause' : 'Play Final'}
                </Button>
              </div>
              
              <WaveformVisualizer
                waveform={audioComparisons?.[activeComparison]?.finalVersion?.waveform}
                isPlaying={playingTrack === 'final'}
                title="Final Version"
              />
            </div>

            {/* Production Notes */}
            <div className="bg-surface p-6 rounded-lg">
              <h4 className="font-semibold text-foreground mb-4 flex items-center">
                <Icon name="FileText" size={16} className="mr-2 text-primary" />
                Production Notes
              </h4>
              <div className="space-y-3">
                {audioComparisons?.[activeComparison]?.productionNotes?.map((note, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground text-sm">{note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-2xl border border-accent/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Experience the Full Audio Journey
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Download high-quality audio samples and detailed production breakdowns to understand 
              the complete transformation process from traditional to Grammy-nominated productions.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                className="musical-hover grammy-border"
                iconName="Download"
                iconPosition="left"
                iconSize={20}
              >
                Download Audio Pack
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="musical-hover"
                iconName="BookOpen"
                iconPosition="left"
                iconSize={20}
              >
                Read Production Guide
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudioComparisons;