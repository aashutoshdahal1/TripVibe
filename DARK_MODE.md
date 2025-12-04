# Dark Mode Documentation

## Overview

TravelMate now supports a cinematic, premium dark mode that makes videos pop and provides an immersive viewing experience. The dark mode uses a carefully curated color palette optimized for social media and video content.

## Dark Mode Color Palette

### Primary Colors
- **Neon Sky Blue** (`#3EA1FF`) - Buttons, active links, icons
- **Sunset Orange** (`#FF8054`) - CTA highlights, badges
- **Electric Purple** (`#9B51E0`) - Notifications, active states, secondary CTA

### Background Colors
- **Deep Navy** (`#0A0F24`) - Main background (cinematic & immersive)
- **Midnight Blue** (`#16213E`) - Card backgrounds, feed posts, modals

### Text Colors
- **Off-White** (`#F5F5F5`) - Headings & main text (readable & soft on eyes)
- **Light Gray** (`#B0B0B0`) - Subtext, timestamps

### UI Elements
- **Dark Gray** (`#2C2C3A`) - Borders, dividers (subtle separation)

### Interactive Gradients
- **Hover/Interactive**: `linear-gradient(90deg, #3EA1FF, #9B51E0, #FF8054)`
  - Used for buttons and interactive states
  - Creates a vibrant, premium feel

## Features

### Automatic Theme Detection
- Detects system preference on first load
- Remembers user preference in localStorage
- Smooth transitions between themes

### Dark Mode Toggle
- Located in the top navigation bar
- Available on login/signup pages
- Smooth icon animation (Moon/Sun)
- Accessible with proper ARIA labels

## Implementation

### Theme Context
The app uses a React Context (`ThemeContext`) to manage theme state:
- `useTheme()` hook for accessing theme
- `toggleTheme()` function to switch themes
- Automatic localStorage persistence

### CSS Variables
All colors are defined as CSS variables that automatically switch based on the `[data-theme="dark"]` attribute on the root element.

### Component Updates
All components automatically adapt to dark mode:
- Glass-morphism effects adjust opacity
- Cards use Midnight Blue background
- Text colors switch to Off-White/Light Gray
- Borders use Dark Gray
- Interactive elements use the gradient

## Usage

### Toggling Dark Mode
1. Click the moon/sun icon in the top navigation bar
2. Theme switches immediately with smooth transition
3. Preference is saved automatically

### Programmatic Access
```jsx
import { useTheme } from './contexts/ThemeContext'

function MyComponent() {
  const { theme, toggleTheme } = useTheme()
  
  return (
    <button onClick={toggleTheme}>
      Current theme: {theme}
    </button>
  )
}
```

## Design Philosophy

The dark mode is designed to be:
- **Cinematic**: Deep, immersive backgrounds that make content pop
- **Premium**: High contrast, carefully chosen colors
- **Comfortable**: Soft on the eyes for extended viewing
- **Vibrant**: Neon accents that stand out beautifully on dark backgrounds

## Browser Support

- Modern browsers with CSS custom properties support
- Automatic fallback to light mode if dark mode variables aren't supported
- Smooth transitions work in all modern browsers

## Future Enhancements

Potential improvements:
- Per-component theme overrides
- Custom theme creation
- Scheduled theme switching (e.g., auto-dark at sunset)
- Theme preview before applying

