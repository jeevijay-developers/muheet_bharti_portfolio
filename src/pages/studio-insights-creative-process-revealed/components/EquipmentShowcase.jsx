import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const EquipmentShowcase = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);

  const equipmentCategories = [
    {
      id: 1,
      name: "Traditional Instruments",
      icon: "Music",
      description: "Authentic classical instruments from renowned craftsmen",
      items: [
        {
          id: 1,
          name: "Concert Sitar",
          brand: "Rikhi Ram (Delhi)",
          year: "1987",
          description: "Master-crafted sitar with 20 strings, made from seasoned tun wood with intricate bone and brass inlay work.",
          image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
          specifications: [
            "20 strings (7 main, 13 sympathetic)",
            "Tun wood body with gourd resonator",
            "Bone bridge and nut",
            "Brass frets (movable)"
          ],
          story: "This sitar was handcrafted by the legendary Rikhi Ram workshop in Delhi, known for creating instruments for maestros like Ravi Shankar. Its rich, resonant tone has been featured in multiple Grammy-nominated recordings."
        },
        {
          id: 2,
          name: "Tabla Set",
          brand: "Haridas Vhatkar (Mumbai)",
          year: "1995",
          description: "Professional tabla set with perfectly tuned dayan and bayan, crafted following Banaras Gharana traditions.",
          image: "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?w=400&h=300&fit=crop",
          specifications: [
            "Dayan: Sheesham wood with goat skin",
            "Bayan: Brass with buffalo skin",
            "Traditional rope tensioning system",
            "Handmade by master craftsman"
          ],
          story: "Acquired from the renowned Haridas Vhatkar, this tabla set represents the pinnacle of Mumbai's tabla-making tradition. Its crisp, clear tones have accompanied countless recording sessions."
        },
        {
          id: 3,
          name: "Tanpura",
          brand: "Miraj Instruments",
          year: "1992",
          description: "Four-string tanpura providing the essential drone foundation for classical performances and recordings.",
          image: "https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg?w=400&h=300&fit=crop",
          specifications: [
            "Four steel strings",
            "Teak wood body",
            "Gourd resonator",
            "Adjustable bridge"
          ],
          story: "This tanpura from Miraj has been the harmonic foundation for hundreds of recordings, providing the perfect drone that supports both classical and fusion compositions."
        }
      ]
    },
    {
      id: 2,
      name: "Recording Equipment",
      icon: "Mic",
      description: "Professional recording gear for pristine audio capture",
      items: [
        {
          id: 4,
          name: "Neumann U87 Ai",
          brand: "Neumann",
          year: "2019",
          description: "Industry-standard large-diaphragm condenser microphone, perfect for capturing the nuances of classical instruments.",
          image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=300&fit=crop",
          specifications: [
            "Large diaphragm condenser",
            "Three polar patterns",
            "Frequency response: 20Hz-20kHz",
            "Maximum SPL: 127 dB"
          ],
          story: "The Neumann U87 has been the go-to microphone for capturing the intricate details of sitar and vocal performances, contributing to the Grammy-nominated sound quality."
        },
        {
          id: 5,
          name: "SSL 4000 Series Console",
          brand: "Solid State Logic",
          year: "2018",
          description: "Legendary mixing console known for its warm, musical sound and used in countless hit records worldwide.",
          image: "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?w=400&h=300&fit=crop",
          specifications: [
            "32-channel analog console",
            "SSL EQ and dynamics",
            "Total recall automation",
            "Pristine signal path"
          ],
          story: "This SSL console has been the heart of the studio, providing the warm, analog sound that perfectly complements both traditional instruments and modern production elements."
        },
        {
          id: 6,
          name: "Pro Tools HDX System",
          brand: "Avid",
          year: "2020",
          description: "Professional digital audio workstation providing unlimited creative possibilities with rock-solid stability.",
          image: "https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg?w=400&h=300&fit=crop",
          specifications: [
            "HDX PCIe cards",
            "Ultra-low latency",
            "Unlimited track count",
            "Professional plugin support"
          ],
          story: "Pro Tools HDX has been instrumental in creating complex arrangements that seamlessly blend traditional and contemporary elements, enabling the Grammy-nominated productions."
        }
      ]
    },
    {
      id: 3,
      name: "Production Tools",
      icon: "Settings",
      description: "Modern production equipment for contemporary sound design",
      items: [
        {
          id: 7,
          name: "Native Instruments Komplete",
          brand: "Native Instruments",
          year: "2021",
          description: "Comprehensive collection of virtual instruments and effects, essential for modern music production.",
          image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=300&fit=crop",
          specifications: [
            "600+ instruments and effects",
            "55,000+ samples",
            "Kontakt 6 sampler",
            "Massive X synthesizer"
          ],
          story: "Komplete has been crucial in creating the electronic elements that complement traditional instruments, allowing for seamless fusion of classical and contemporary sounds."
        },
        {
          id: 8,
          name: "Genelec 8351B Monitors",
          brand: "Genelec",
          year: "2020",
          description: "Three-way coaxial studio monitors providing accurate, detailed sound reproduction for critical mixing decisions.",
          image: "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?w=400&h=300&fit=crop",
          specifications: [
            "Three-way coaxial design",
            "DSP-based room correction",
            "Frequency response: 32Hz-40kHz",
            "Maximum SPL: 118 dB"
          ],
          story: "These Genelec monitors ensure that every mix translates perfectly across different playback systems, maintaining the integrity of both classical nuances and modern production elements."
        },
        {
          id: 9,
          name: "Waves Mercury Bundle",
          brand: "Waves Audio",
          year: "2021",
          description: "Complete collection of professional audio plugins for mixing, mastering, and creative sound design.",
          image: "https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg?w=400&h=300&fit=crop",
          specifications: [
            "200+ professional plugins",
            "Grammy-winning processors",
            "Vintage analog emulations",
            "Modern creative tools"
          ],
          story: "The Waves Mercury bundle provides the professional processing tools necessary to achieve Grammy-standard sound quality while preserving the authenticity of traditional instruments."
        }
      ]
    }
  ];

  const ItemModal = ({ item, onClose }) => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <Image
            src={item?.image}
            alt={item?.name}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-black/60 text-white rounded-full flex items-center justify-center hover:bg-black/80 musical-transition"
          >
            <Icon name="X" size={16} />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-headline text-2xl font-bold text-foreground mb-2">{item?.name}</h3>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
              <span className="flex items-center">
                <Icon name="Tag" size={14} className="mr-1" />
                {item?.brand}
              </span>
              <span className="flex items-center">
                <Icon name="Calendar" size={14} className="mr-1" />
                {item?.year}
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">{item?.description}</p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-3 flex items-center">
              <Icon name="List" size={16} className="mr-2 text-primary" />
              Specifications
            </h4>
            <div className="space-y-2">
              {item?.specifications?.map((spec, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="text-muted-foreground text-sm">{spec}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-3 flex items-center">
              <Icon name="BookOpen" size={16} className="mr-2 text-accent" />
              Story & Significance
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">{item?.story}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
              <Icon name="Tool" size={20} color="white" />
            </div>
            <span className="text-primary font-semibold text-lg">Studio Arsenal</span>
          </div>
          
          <h2 className="text-headline text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Equipment &
            <span className="text-secondary block">Instrument Collection</span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Explore the carefully curated collection of traditional instruments and modern equipment 
            that enables the seamless fusion of classical heritage with Grammy-nominated production quality.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-col lg:flex-row justify-center space-y-4 lg:space-y-0 lg:space-x-4 mb-12">
          {equipmentCategories?.map((category, index) => (
            <button
              key={category?.id}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center space-x-3 p-4 rounded-lg musical-transition ${
                activeCategory === index
                  ? 'bg-primary text-white shadow-grammy'
                  : 'bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              <Icon 
                name={category?.icon} 
                size={20} 
                className={activeCategory === index ? 'text-white' : 'text-primary'} 
              />
              <div className="text-left">
                <div className="font-semibold text-sm">{category?.name}</div>
                <div className="text-xs opacity-75">{category?.description}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipmentCategories?.[activeCategory]?.items?.map((item) => (
            <div
              key={item?.id}
              className="bg-card rounded-lg overflow-hidden shadow-contemplative musical-hover group cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item?.image}
                  alt={item?.name}
                  className="w-full h-full object-cover group-hover:scale-105 musical-transition"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 musical-transition flex items-center justify-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="Eye" size={20} color="white" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-foreground text-lg">{item?.name}</h3>
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                    {item?.year}
                  </span>
                </div>
                
                <p className="text-primary font-medium text-sm mb-2">{item?.brand}</p>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                  {item?.description}
                </p>
                
                <Button
                  variant="outline"
                  size="sm"
                  fullWidth
                  iconName="Info"
                  iconPosition="left"
                  iconSize={14}
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Equipment Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-card rounded-lg shadow-contemplative">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Music" size={20} className="text-primary" />
            </div>
            <div className="text-2xl font-bold text-primary mb-1">25+</div>
            <div className="text-sm text-muted-foreground">Traditional Instruments</div>
          </div>
          
          <div className="text-center p-6 bg-card rounded-lg shadow-contemplative">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Mic" size={20} className="text-accent" />
            </div>
            <div className="text-2xl font-bold text-accent mb-1">15+</div>
            <div className="text-sm text-muted-foreground">Professional Microphones</div>
          </div>
          
          <div className="text-center p-6 bg-card rounded-lg shadow-contemplative">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Settings" size={20} className="text-secondary" />
            </div>
            <div className="text-2xl font-bold text-secondary mb-1">500+</div>
            <div className="text-sm text-muted-foreground">Software Instruments</div>
          </div>
          
          <div className="text-center p-6 bg-card rounded-lg shadow-contemplative">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Award" size={20} className="text-primary" />
            </div>
            <div className="text-2xl font-bold text-primary mb-1">$500K+</div>
            <div className="text-sm text-muted-foreground">Total Equipment Value</div>
          </div>
        </div>
      </div>
      {/* Item Detail Modal */}
      {selectedItem && (
        <ItemModal 
          item={selectedItem} 
          onClose={() => setSelectedItem(null)} 
        />
      )}
    </section>
  );
};

export default EquipmentShowcase;