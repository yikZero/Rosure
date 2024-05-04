import type { Config } from 'tailwindcss';
import color from 'tailwindcss/colors';

const config = {
  darkMode: ['class'],
  content: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: color.black,
      white: color.white,
      brand: color.sky,
      primary: 'hsl(var(--primary))',
      secondary: 'hsl(var(--secondary))',
      tertiary: 'hsl(var(--tertiary))',
      typography: 'hsl(var(--typography))',
      'primary-reverse': 'hsl(var(--primary-reverse))',
      'secondary-reverse': 'hsl(var(--secondary-reverse))',
      'tertiary-reverse': 'hsl(var(--tertiary-reverse))',
      'typography-reverse': 'hsl(var(--typography-reverse))',
      border: 'hsl(var(--border))',
      background: 'hsl(var(--background))',
      'body-background': 'hsl(var(--body-background))',
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
