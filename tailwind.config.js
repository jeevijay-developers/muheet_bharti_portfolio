/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors - Saffron Resonance Palette
        primary: {
          DEFAULT: 'var(--color-primary)', // saffron gold
          foreground: 'var(--color-primary-foreground)' // white
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', // rich earth
          foreground: 'var(--color-secondary-foreground)' // white
        },
        accent: {
          DEFAULT: 'var(--color-accent)', // celebration gold
          foreground: 'var(--color-accent-foreground)' // charcoal
        },
        
        // Background & Surface
        background: 'var(--color-background)', // pure canvas
        foreground: 'var(--color-foreground)', // charcoal
        surface: 'var(--color-surface)', // warm ivory
        card: {
          DEFAULT: 'var(--color-card)', // white
          foreground: 'var(--color-card-foreground)' // charcoal
        },
        popover: {
          DEFAULT: 'var(--color-popover)', // white
          foreground: 'var(--color-popover-foreground)' // charcoal
        },
        
        // Text Hierarchy
        muted: {
          DEFAULT: 'var(--color-muted)', // warm ivory
          foreground: 'var(--color-muted-foreground)' // medium gray
        },
        
        // Interactive Elements
        border: 'var(--color-border)', // light gray
        input: 'var(--color-input)', // white
        ring: 'var(--color-ring)', // saffron gold
        
        // Status Colors
        success: {
          DEFAULT: 'var(--color-success)', // forest green
          foreground: 'var(--color-success-foreground)' // white
        },
        warning: {
          DEFAULT: 'var(--color-warning)', // warm orange
          foreground: 'var(--color-warning-foreground)' // white
        },
        error: {
          DEFAULT: 'var(--color-error)', // muted red
          foreground: 'var(--color-error-foreground)' // white
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', // muted red
          foreground: 'var(--color-destructive-foreground)' // white
        }
      },
      fontFamily: {
        'headline': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
        'accent': ['Crimson Text', 'serif'],
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Playfair Display', 'serif']
      },
      fontSize: {
        'hero': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'headline': ['2rem', { lineHeight: '1.3' }],
        'subheading': ['1.5rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem', { lineHeight: '1.4' }]
      },
      spacing: {
        'unison': '1rem', // 1:1 musical interval
        'fifth': '1.5rem', // 1:1.5 perfect fifth
        'golden': '1.618rem', // 1:1.618 golden ratio
        'octave': '2rem', // 1:2 octave
        'sonic-sm': '0.5rem',
        'sonic-md': '1rem',
        'sonic-lg': '2rem',
        'sonic-xl': '4rem'
      },
      animation: {
        'sitar-vibrate': 'sitarVibrate 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'grammy-pulse': 'grammy-pulse 2s ease-in-out infinite',
        'waveform-pulse': 'waveform-pulse 1.5s ease-in-out infinite',
        'harmony-flow': 'harmony-flow 3s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out'
      },
      keyframes: {
        sitarVibrate: {
          '0%': { transform: 'scaleY(1.0)' },
          '25%': { transform: 'scaleY(1.02)' },
          '75%': { transform: 'scaleY(0.98)' },
          '100%': { transform: 'scaleY(1.0)' }
        },
        'grammy-pulse': {
          '0%, 100%': { boxShadow: '0 0 30px rgba(218, 165, 32, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(218, 165, 32, 0.6)' }
        },
        'waveform-pulse': {
          '0%, 100%': { height: '20%' },
          '50%': { height: '100%' }
        },
        'harmony-flow': {
          '0%': { strokeDashoffset: '0' },
          '100%': { strokeDashoffset: '20' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      },
      boxShadow: {
        'contemplative': '0 4px 20px rgba(184, 134, 11, 0.1)',
        'grandeur': '0 8px 40px rgba(0, 0, 0, 0.15)',
        'grammy': '0 0 30px rgba(218, 165, 32, 0.4)',
        'cultural': '0 2px 10px rgba(139, 69, 19, 0.1)',
        'sonic': '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)'
      },
      backdropBlur: {
        'audio': '10px'
      },
      transitionTimingFunction: {
        'musical': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'sitar': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      },
      transitionDuration: {
        'musical': '300ms',
        'micro': '200ms'
      },
      aspectRatio: {
        'golden': '1.618',
        'album': '1',
        'widescreen': '16/9'
      },
      zIndex: {
        'audio-player': '40',
        'navigation': '50',
        'modal': '60',
        'tooltip': '70'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-animate')
  ],
}