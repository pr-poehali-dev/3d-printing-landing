import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				display: ['Oswald', 'sans-serif'],
				body: ['Golos Text', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				neon: {
					blue: '#00D4FF',
					violet: '#8A2BE2',
					purple: '#B44FFF',
				},
				dark: {
					900: '#0B0E14',
					800: '#111520',
					700: '#171C2B',
					600: '#1E2436',
					500: '#252D42',
				},
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
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'33%': { transform: 'translateY(-12px) rotate(2deg)' },
					'66%': { transform: 'translateY(-6px) rotate(-1deg)' },
				},
				'spin-slow': {
					from: { transform: 'rotateY(0deg) rotateX(15deg)' },
					to: { transform: 'rotateY(360deg) rotateX(15deg)' },
				},
				'glow-pulse': {
					'0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
					'50%': { opacity: '1', transform: 'scale(1.05)' },
				},
				'fade-up': {
					from: { opacity: '0', transform: 'translateY(30px)' },
					to: { opacity: '1', transform: 'translateY(0)' },
				},
				'neon-flicker': {
					'0%, 100%': { opacity: '1' },
					'92%': { opacity: '1' },
					'93%': { opacity: '0.7' },
					'94%': { opacity: '1' },
					'96%': { opacity: '0.8' },
					'97%': { opacity: '1' },
				},
				'scan-line': {
					'0%': { transform: 'translateY(-100%)' },
					'100%': { transform: 'translateY(100vh)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'spin-slow': 'spin-slow 12s linear infinite',
				'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
				'fade-up': 'fade-up 0.7s ease-out forwards',
				'neon-flicker': 'neon-flicker 4s linear infinite',
				'scan-line': 'scan-line 6s linear infinite',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'mesh-dark': 'radial-gradient(at 20% 50%, rgba(138,43,226,0.15) 0px, transparent 50%), radial-gradient(at 80% 20%, rgba(0,212,255,0.1) 0px, transparent 50%)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
