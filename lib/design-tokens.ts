// Design System Tokens
// Based on Visual Design System documentation

export const colors = {
  // Primary brand - CTAs and key emphasis ONLY
  primary: {
    red: '#AC1F2D',
    redHover: '#8B1924',
  },

  // Neutrals - carry most visual weight
  neutral: {
    dark: '#4D4D4D',      // Primary body text
    mid: '#7D7D7D',       // Secondary text, captions
    light: '#B4B1B1',     // Dividers, borders, disabled
    lighter: '#E5E5E5',   // Subtle backgrounds
    white: '#FFFFFF',
  },

  // Secondary - technical sections, links
  secondary: {
    blue: '#657EE2',          // Primary secondary
    blueHover: '#5269C4',
    blueMuted: '#7688CE',     // Supporting
    blueGray: '#70799E',      // Supporting
  },

  // Gradient reds - background washes ONLY (use at low opacity)
  gradient: {
    redWarm: '#E46470',
    redMid: '#F7909A',
    redLight: '#FFDDE0',
  },

  // Categorical - alerts, status, comparisons (never for CTAs)
  categorical: {
    alert: '#EF5350',
  },
} as const;

export const typography = {
  // Font family
  fontFamily: {
    sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
  },

  // Font sizes (rem)
  fontSize: {
    h1: '3rem',        // 48px
    h2: '2.25rem',     // 36px
    h3: '1.5rem',      // 24px
    h4: '1.25rem',     // 20px
    bodyLarge: '1.125rem',  // 18px
    body: '1rem',      // 16px
    bodySmall: '0.875rem',  // 14px
    caption: '0.75rem',     // 12px
  },

  // Line heights
  lineHeight: {
    tight: '1.1',
    snug: '1.2',
    normal: '1.3',
    relaxed: '1.5',
    loose: '1.6',
    spacious: '1.7',
  },

  // Font weights
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
  },
} as const;

export const spacing = {
  section: '6rem',      // 96px - Between major sections
  subsection: '3rem',   // 48px - Within sections
  component: '1.5rem',  // 24px - Between related elements
  element: '0.75rem',   // 12px - Tight groupings
} as const;

export const breakpoints = {
  sm: '640px',   // Small tablets
  md: '768px',   // Tablets
  lg: '1024px',  // Desktop
  xl: '1280px',  // Large desktop
} as const;

export const layout = {
  maxWidth: '1280px',
  contentMaxWidth: '768px',
  headerHeight: '80px',
  headerHeightScrolled: '64px',
} as const;
