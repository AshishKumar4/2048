/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme"
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
  	extend: {
  		fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        mono: ["'Press Start 2P'", ...fontFamily.mono],
  		},
  		colors: {
        'neon-magenta': '#FF00FF',
        'neon-cyan': '#00FFFF',
        'neon-lime': '#39FF14',
        tile: {
          2: '#262626',
          4: '#404040',
          8: '#047857',    // emerald-600
          16: '#059669',   // emerald-500
          32: '#1d4ed8',   // blue-700
          64: '#2563eb',   // blue-600
          128: '#9333ea',  // purple-600
          256: '#a855f7',  // purple-500
          512: '#c026d3',  // fuchsia-600
          1024: '#d946ef', // fuchsia-500
          2048: '#e11d48', // rose-600
          4096: '#f43f5e', // rose-500
        },
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
        'tile-pop-in': {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'glitch': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '20%': { transform: 'translate(-3px, 3px)' },
          '40%': { transform: 'translate(-3px, -3px)' },
          '60%': { transform: 'translate(3px, 3px)' },
          '80%': { transform: 'translate(3px, -3px)' },
        },
        'neon-glow': {
          '0%, 100%': { textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #FF00FF, 0 0 20px #FF00FF' },
          '50%': { textShadow: '0 0 10px #fff, 0 0 15px #fff, 0 0 20px #00FFFF, 0 0 25px #00FFFF' },
        }
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
        'tile-pop-in': 'tile-pop-in 0.2s ease-out',
        'glitch': 'glitch 0.2s ease-in-out',
        'neon-glow': 'neon-glow 2s ease-in-out infinite',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")]
}