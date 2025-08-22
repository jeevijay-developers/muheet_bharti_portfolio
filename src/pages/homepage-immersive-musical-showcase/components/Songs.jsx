import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const Songs = () => {
  const [hoveredSong, setHoveredSong] = useState(null);

  const handleSongClick = (link) => {
    if (link && link.trim() !== '') {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  const songs = [
            {
            id: 1,
            title: "Jitthe Pyaar",
            genre: "Folk Fusion",
            duration: "3:30",
            image: "/assets/thumbnail/jitthe-pyaar.webp",
            description: "Traditional Punjabi folk meets classical Indian music",
            link: "https://open.spotify.com/album/3eAvDmzwqPvcpqZJcLauLl?nd=1&dlsi=72c903a7f33740a9"
        },
      {
          id: 2,
          title: "Dil Lagana",
          genre: "Romantic Classical",
          duration: "2:26",
          image: "/assets/thumbnail/dil-lagana.webp",
          description: "An emotional journey through the depths of love and longing",
          link: "https://open.spotify.com/album/1xgXSQFY281rp9OXwhj91S?nd=1&dlsi=2cd884f7f3884025"
        },

        {
          id: 3,
          title: "Shaam Se Aaj",
          genre: "Evening Raga",
          duration: "4:38",
          image: "/assets/thumbnail/sham-se-aaj.webp",
          description: "A beautiful evening raga composition capturing twilight emotions. Featured with appreciation quotes from Arijit Singh on social media.",
          link: "https://open.spotify.com/album/4SuzrXLwbsRxRSZvp2Dr5g?nd=1&dlsi=56c424883c734173"
        },
    {
      id: 4,
      title: "Keda Jaadu",
      genre: "Mystical Classical",
      duration: "3:21",
      image: "/assets/thumbnail/keda-jaadu.webp",
      description: "Exploring the mystical elements of Senia Gharana tradition",
      link: "https://open.spotify.com/album/2Dmo7yJf0M12ogMtAo4C0B?nd=1&dlsi=af1699f2a7274998"
    },
    {
      id: 5,
      title: "Agar Main Kahoo",
      genre: "Classical Fusion",
      duration: "3:27",
      image: "/assets/thumbnail/agar-main-kahoo.webp",
      description: "A soulful rendition blending traditional ragas with contemporary arrangements",
      link: "https://open.spotify.com/album/7rRTQRMtHousD8fdYwUPB7?nd=1&dlsi=c1dde8ef87ce4eb4"
    },
    {
      id: 6,
      title: "The 99 Names",
      genre: "Spiritual Classical",
      duration: "4:46",
      image: "/assets/thumbnail/the99names.webp",
      description: "A spiritual journey through divine names in classical musical form",
      link: "https://open.spotify.com/album/3NVkH6VPc1oOvUe6s3Mx7b?nd=1&dlsi=fba50fb4083b4587"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-background via-surface to-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4">
            Musical Compositions
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl lg:max-w-3xl mx-auto">
            Explore a collection of original compositions that blend traditional Senia Gharana 
            with contemporary musical elements, creating a unique sonic experience.
          </p>
        </div>

        {/* Meshed Grid Layout */}
        <div className="relative max-w-6xl mx-auto">
          {/* Desktop Grid */}
          <div className="hidden lg:grid grid-cols-5 grid-rows-5 gap-4 h-[600px]">
            {/* Song 1 - Medium top-left (2x2) */}
            <div 
              className="col-span-2 row-span-2 relative group cursor-pointer overflow-hidden rounded-xl"
              onMouseEnter={() => setHoveredSong(1)}
              onMouseLeave={() => setHoveredSong(null)}
              onClick={() => handleSongClick(songs[0].link)}
            >
              <Image
                src={songs[0].image}
                alt={songs[0].title}
                className="w-full h-full object-cover object-top group-hover:scale-110 musical-transition"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg mb-1">{songs[0].title}</h3>
                  <p className="text-sm text-white/80">{songs[0].genre}</p>
                  <p className="text-xs text-white/60">{songs[0].duration}</p>
                </div>
              </div>
              {hoveredSong === 1 && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Icon name="Play" size={32} className="text-white" />
                </div>
              )}
            </div>

            {/* Song 2 - Large top-right (3x2) */}
            <div 
              className="col-span-3 row-span-2 col-start-3 relative group cursor-pointer overflow-hidden rounded-xl"
              onMouseEnter={() => setHoveredSong(2)}
              onMouseLeave={() => setHoveredSong(null)}
              onClick={() => handleSongClick(songs[1].link)}
            >
              <Image
                src={songs[1].image}
                alt={songs[1].title}
                className="w-full h-full object-cover group-hover:scale-110 musical-transition"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-xl mb-1">{songs[1].title}</h3>
                  <p className="text-sm text-white/80">{songs[1].genre}</p>
                  <p className="text-xs text-white/60">{songs[1].duration}</p>
                </div>
              </div>
              {hoveredSong === 2 && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Icon name="Play" size={40} className="text-white" />
                </div>
              )}
            </div>

            {/* Song 3 - Tall left (2x3) */}
            <div 
              className="col-span-2 row-span-3 row-start-3 relative group cursor-pointer overflow-hidden rounded-xl"
              onMouseEnter={() => setHoveredSong(3)}
              onMouseLeave={() => setHoveredSong(null)}
              onClick={() => handleSongClick(songs[2].link)}
            >
              <Image
                src={songs[2].image}
                alt={songs[2].title}
                className="w-full h-full object-cover group-hover:scale-110 musical-transition"
              />
              {/* Special Badge for Arijit Singh Recognition */}
              <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                <Icon name="Star" size={12} />
                Share by Arijit Singh ✨
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg mb-1">{songs[2].title}</h3>
                  <p className="text-sm text-white/80">{songs[2].genre}</p>
                  <p className="text-xs text-white/60">{songs[2].duration}</p>
                  <p className="text-xs text-yellow-300 mt-1 font-medium">🎵 Featured on social media</p>
                </div>
              </div>
              {hoveredSong === 3 && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Icon name="Play" size={32} className="text-white" />
                </div>
              )}
            </div>

            {/* Song 4 - Medium center (2x2) */}
            <div 
              className="col-span-2 row-span-2 col-start-3 row-start-3 relative group cursor-pointer overflow-hidden rounded-xl"
              onMouseEnter={() => setHoveredSong(4)}
              onMouseLeave={() => setHoveredSong(null)}
              onClick={() => handleSongClick(songs[3].link)}
            >
              <Image
                src={songs[3].image}
                alt={songs[3].title}
                className="w-full h-full object-cover group-hover:scale-110 musical-transition"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-base mb-1">{songs[3].title}</h3>
                  <p className="text-sm text-white/80">{songs[3].genre}</p>
                  <p className="text-xs text-white/60">{songs[3].duration}</p>
                </div>
              </div>
              {hoveredSong === 4 && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Icon name="Play" size={28} className="text-white" />
                </div>
              )}
            </div>

            {/* Song 5 - Tall right (1x3) */}
            <div 
              className="row-span-3 col-start-5 row-start-3 relative group cursor-pointer overflow-hidden rounded-xl"
              onMouseEnter={() => setHoveredSong(5)}
              onMouseLeave={() => setHoveredSong(null)}
              onClick={() => handleSongClick(songs[4].link)}
            >
              <Image
                src={songs[4].image}
                alt={songs[4].title}
                className="w-full h-full object-cover group-hover:scale-110 musical-transition"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-base mb-1">{songs[4].title}</h3>
                  <p className="text-sm text-white/80">{songs[4].genre}</p>
                  <p className="text-xs text-white/60">{songs[4].duration}</p>
                </div>
              </div>
              {hoveredSong === 5 && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Icon name="Play" size={24} className="text-white" />
                </div>
              )}
            </div>

            {/* Song 6 - Bottom center (2x1) */}
            <div 
              className="col-span-2 col-start-3 row-start-5 relative group cursor-pointer overflow-hidden rounded-xl"
              onMouseEnter={() => setHoveredSong(6)}
              onMouseLeave={() => setHoveredSong(null)}
              onClick={() => handleSongClick(songs[5].link)}
            >
              <Image
                src={songs[5].image}
                alt={songs[5].title}
                className="w-full h-full object-cover group-hover:scale-110 musical-transition"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-base mb-1">{songs[5].title}</h3>
                  <p className="text-sm text-white/80">{songs[5].genre}</p>
                  <p className="text-xs text-white/60">{songs[5].duration}</p>
                </div>
              </div>
              {hoveredSong === 6 && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Icon name="Play" size={24} className="text-white" />
                </div>
              )}
            </div>
          </div>

          {/* Tablet Grid */}
          <div className="hidden md:grid lg:hidden grid-cols-3 grid-rows-4 gap-4 h-[500px]">
            <div 
              className="col-span-2 row-span-2 relative group cursor-pointer overflow-hidden rounded-xl"
              onClick={() => handleSongClick(songs[0].link)}
            >
              <Image
                src={songs[0].image}
                alt={songs[0].title}
                className="w-full h-full object-cover group-hover:scale-110 musical-transition"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg mb-1">{songs[0].title}</h3>
                  <p className="text-sm text-white/80">{songs[0].genre}</p>
                </div>
              </div>
            </div>
            
            <div 
              className="row-span-3 relative group cursor-pointer overflow-hidden rounded-xl"
              onClick={() => handleSongClick(songs[1].link)}
            >
              <Image
                src={songs[1].image}
                alt={songs[1].title}
                className="w-full h-full object-cover group-hover:scale-110 musical-transition"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-base mb-1">{songs[1].title}</h3>
                  <p className="text-sm text-white/80">{songs[1].genre}</p>
                </div>
              </div>
            </div>

            <div 
              className="col-span-2 row-span-2 row-start-3 relative group cursor-pointer overflow-hidden rounded-xl"
              onClick={() => handleSongClick(songs[2].link)}
            >
              <Image
                src={songs[2].image}
                alt={songs[2].title}
                className="w-full h-full object-cover group-hover:scale-110 musical-transition"
              />
              {/* Special Badge for Arijit Singh Recognition */}
              <div className="absolute top-2 right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                <Icon name="Star" size={10} />
                Shared by Arijit Singh ✨
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg mb-1">{songs[2].title}</h3>
                  <p className="text-sm text-white/80">{songs[2].genre}</p>
                  <p className="text-xs text-yellow-300 font-medium">🎵 Social media featured</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Grid */}
          <div className="grid md:hidden grid-cols-2 gap-4">
            {songs.map((song, index) => (
              <div 
                key={song.id}
                className="aspect-square relative group cursor-pointer overflow-hidden rounded-xl"
                onMouseEnter={() => setHoveredSong(song.id)}
                onMouseLeave={() => setHoveredSong(null)}
                onClick={() => handleSongClick(song.link)}
              >
                <Image
                  src={song.image}
                  alt={song.title}
                  className="w-full h-full object-cover group-hover:scale-110 musical-transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="absolute bottom-3 left-3 text-white">
                    <h3 className="font-bold text-sm mb-1">{song.title}</h3>
                    <p className="text-xs text-white/80">{song.genre}</p>
                    {song.title === "Shaam Se Aaj" && (
                      <>
                        <p className="text-xs text-yellow-300 font-medium mt-0.5">🎵 Featured</p>
                        <div className="mt-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-1.5 py-0.5 rounded-full text-xs font-bold flex items-center gap-0.5 shadow-lg w-fit">
                          <Icon name="Star" size={8} />
                          Shared by Arijit Singh ✨
                        </div>
                      </>
                    )}
                  </div>
                </div>
                {hoveredSong === song.id && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Icon name="Play" size={20} className="text-white" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-12 lg:mt-16">
          <button className="bg-primary text-primary-foreground px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-primary/90 musical-transition inline-flex items-center gap-2">
            <Icon name="Music" size={20} />
            Explore Full Discography
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Songs;