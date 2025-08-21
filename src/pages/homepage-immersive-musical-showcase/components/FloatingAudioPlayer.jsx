import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const FloatingAudioPlayer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.7);

  const currentTrack = {
    title: "Raga Yaman Fusion",
    artist: "Muheet Bharti",
    duration: 342, // in seconds
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop"
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentTime(prev => {
        if (prev >= currentTrack?.duration) {
          setIsPlaying(false);
          return 0;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying, currentTrack?.duration]);

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs?.toString()?.padStart(2, '0')}`;
  };

  const handleProgressClick = (e) => {
    const rect = e?.currentTarget?.getBoundingClientRect();
    const clickX = e?.clientX - rect?.left;
    const percentage = clickX / rect?.width;
    setCurrentTime(Math.floor(percentage * currentTrack?.duration));
  };

  const handleVolumeChange = (e) => {
    setVolume(e?.target?.value / 100);
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-6 right-6 z-50 musical-transition ${
      isExpanded ? 'w-80' : 'w-16'
    }`}>
      {/* Collapsed State */}
      {!isExpanded && (
        <div 
          onClick={toggleExpanded}
          className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-grandeur cursor-pointer musical-hover grammy-glow"
        >
          <Icon 
            name={isPlaying ? "Pause" : "Play"} 
            size={24} 
            color="white"
            className="ml-0.5"
          />
        </div>
      )}
      {/* Expanded State */}
      {isExpanded && (
        <div className="bg-card/95 backdrop-blur-md rounded-2xl shadow-grandeur border border-border p-4 space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-xs text-muted-foreground font-medium">NOW PLAYING</span>
            </div>
            <button
              onClick={toggleExpanded}
              className="p-1 rounded-full hover:bg-muted musical-transition"
            >
              <Icon name="ChevronDown" size={16} />
            </button>
          </div>

          {/* Track Info */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Image
                src={currentTrack?.image}
                alt={currentTrack?.title}
                className="w-12 h-12 rounded-lg object-cover"
              />
              {isPlaying && (
                <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm text-foreground truncate">
                {currentTrack?.title}
              </p>
              <p className="text-xs text-muted-foreground truncate">
                {currentTrack?.artist}
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div 
              className="w-full bg-muted rounded-full h-1 cursor-pointer"
              onClick={handleProgressClick}
            >
              <div 
                className="bg-primary h-1 rounded-full musical-transition"
                style={{ width: `${(currentTime / currentTrack?.duration) * 100}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(currentTrack?.duration)}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button className="p-1 rounded-full hover:bg-muted musical-transition">
                <Icon name="SkipBack" size={16} />
              </button>
              
              <button
                onClick={togglePlayback}
                className="p-2 bg-primary rounded-full hover:bg-primary/90 musical-transition"
              >
                <Icon 
                  name={isPlaying ? "Pause" : "Play"} 
                  size={16} 
                  color="white"
                  className="ml-0.5"
                />
              </button>
              
              <button className="p-1 rounded-full hover:bg-muted musical-transition">
                <Icon name="SkipForward" size={16} />
              </button>
            </div>

            {/* Volume Control */}
            <div className="flex items-center space-x-2">
              <Icon name="Volume2" size={14} className="text-muted-foreground" />
              <input
                type="range"
                min="0"
                max="100"
                value={volume * 100}
                onChange={handleVolumeChange}
                className="w-16 h-1 bg-muted rounded-full appearance-none slider"
              />
            </div>
          </div>

          {/* Waveform Visualization */}
          <div className="flex items-center justify-center space-x-1 h-8">
            {[...Array(20)]?.map((_, i) => (
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

          {/* Additional Actions */}
          <div className="flex items-center justify-between pt-2 border-t border-border">
            <button className="flex items-center space-x-1 text-xs text-muted-foreground hover:text-primary musical-transition">
              <Icon name="Heart" size={12} />
              <span>Like</span>
            </button>
            
            <button className="flex items-center space-x-1 text-xs text-muted-foreground hover:text-primary musical-transition">
              <Icon name="Share" size={12} />
              <span>Share</span>
            </button>
            
            <button className="flex items-center space-x-1 text-xs text-muted-foreground hover:text-primary musical-transition">
              <Icon name="Download" size={12} />
              <span>Download</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingAudioPlayer;