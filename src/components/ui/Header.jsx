import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { 
      name: 'Home', 
      path: '/',
      icon: 'Home'
    },
    { 
      name: 'Journey', 
      path: '/journey',
      icon: 'MapPin'
    },
    // { 
    //   name: 'Collaborations', 
    //   path: '/collaborations',
    //   icon: 'Users'
    // },
    // { 
    //   name: 'Live', 
    //   path: '/live-performances',
    //   icon: 'Music'
    // },
    // { 
    //   name: 'Studio', 
    //   path: '/studio-insights',
    //   icon: 'Mic'
    // }
    { 
      name: 'Recognition', 
      path: '/recognition',
      icon: 'Award'
    }
  ];

  // const moreItems = [
  //   { 
  //     name: 'Recognition', 
  //     path: '/recognition',
  //     icon: 'Award'
  //   }
  // ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-navigation musical-transition ${
        isScrolled 
          ? 'bg-white shadow-contemplative' 
          : 'bg-white'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-6 lg:px-8">
          {/* Logo Section */}
          <Link 
            to="/" 
            className="flex items-center space-golden musical-hover group"
            onClick={closeMenu}
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-cultural">
                <img
                  src='/assets/muheet-logo.svg'
                />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full grammy-glow opacity-80"></div>
            </div>
            {/* <div className="ml-3">
              <h1 className="text-headline font-bold text-foreground">
                Muheet Bharti
              </h1>
              <p className="text-accent text-xs font-medium tracking-wide">
                Grammy Nominated
              </p>
            </div> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-fifth">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center px-4 py-2 rounded-lg musical-transition group ${
                  isActivePath(item?.path)
                    ? 'bg-primary/10 text-primary border border-primary/20' :'text-muted-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                <Icon 
                  name={item?.icon} 
                  size={16} 
                  className={`mr-2 group-hover:animate-sitar-vibrate ${
                    isActivePath(item?.path) ? 'text-primary' : ''
                  }`} 
                />
                <span className="text-body font-medium">{item?.name}</span>
              </Link>
            ))}

            {/* More Dropdown */}
            {/* <div className="relative group">
              <button className="flex items-center px-4 py-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/5 musical-transition">
                <Icon name="MoreHorizontal" size={16} className="mr-2" />
                <span className="text-body font-medium">More</span>
                <Icon name="ChevronDown" size={14} className="ml-1 group-hover:rotate-180 musical-transition" />
              </button>
              
              <div className="absolute top-full right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-grandeur opacity-0 invisible group-hover:opacity-100 group-hover:visible musical-transition">
                <div className="py-2">
                  {moreItems?.map((item) => (
                    <Link
                      key={item?.path}
                      to={item?.path}
                      className={`flex items-center px-4 py-2 text-sm musical-transition ${
                        isActivePath(item?.path)
                          ? 'bg-primary/10 text-primary' :'text-muted-foreground hover:text-primary hover:bg-primary/5'
                      }`}
                    >
                      <Icon name={item?.icon} size={14} className="mr-3" />
                      {item?.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div> */}
          </nav>

          {/* CTA Button */}
          {/* <div className="hidden lg:flex items-center space-fifth">
            <Button
              variant="outline"
              size="sm"
              className="musical-hover"
              iconName="Play"
              iconPosition="left"
              iconSize={14}
            >
              Listen Now
            </Button>
            <Button
              variant="default"
              size="sm"
              className="musical-hover grammy-border"
              iconName="MessageCircle"
              iconPosition="left"
              iconSize={14}
            >
              Collaborate
            </Button>
          </div> */}

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/5 musical-transition"
            aria-label="Toggle menu"
          >
            <Icon 
              name={isMenuOpen ? "X" : "Menu"} 
              size={24} 
              className={isMenuOpen ? "rotate-90" : ""} 
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden overflow-hidden musical-transition ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 py-4 bg-surface/50 backdrop-blur-sm border-t border-border">
            <nav className="space-y-2">
              {[...navigationItems]?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMenu}
                  className={`flex items-center px-4 py-3 rounded-lg musical-transition ${
                    isActivePath(item?.path)
                      ? 'bg-primary/10 text-primary border border-primary/20' :'text-muted-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  <Icon 
                    name={item?.icon} 
                    size={18} 
                    className="mr-3" 
                  />
                  <span className="text-body font-medium">{item?.name}</span>
                </Link>
              ))}
            </nav>

            {/* Mobile CTA Buttons */}
            {/* <div className="mt-6 space-y-3">
              <Button
                variant="outline"
                fullWidth
                iconName="Play"
                iconPosition="left"
                iconSize={16}
              >
                Listen Now
              </Button>
              <Button
                variant="default"
                fullWidth
                className="grammy-border"
                iconName="MessageCircle"
                iconPosition="left"
                iconSize={16}
              >
                Collaborate
              </Button>
            </div> */}

            {/* Grammy Recognition Badge */}
            {/* <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-accent/20">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center grammy-glow">
                  <Icon name="Award" size={16} color="white" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-semibold text-primary">Grammy Nominated</p>
                  <p className="text-xs text-muted-foreground">Classical Fusion Excellence</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;