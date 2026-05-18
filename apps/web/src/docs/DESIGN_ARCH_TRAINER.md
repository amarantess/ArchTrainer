---
name: ArchTrainer Cyber-Tech
colors:
  surface: '#13121d'
  surface-dim: '#13121d'
  surface-bright: '#393844'
  surface-container-lowest: '#0e0d17'
  surface-container-low: '#1b1a25'
  surface-container: '#1f1e29'
  surface-container-high: '#2a2934'
  surface-container-highest: '#35343f'
  on-surface: '#e4e0f0'
  on-surface-variant: '#c7c4da'
  inverse-surface: '#e4e0f0'
  inverse-on-surface: '#302f3b'
  outline: '#918ea3'
  outline-variant: '#464557'
  surface-tint: '#c4c0ff'
  primary: '#c4c0ff'
  on-primary: '#2000a4'
  primary-container: '#3713ec'
  on-primary-container: '#bab6ff'
  inverse-primary: '#4b37fc'
  secondary: '#ddb8ff'
  on-secondary: '#490081'
  secondary-container: '#62259b'
  on-secondary-container: '#d1a1ff'
  tertiary: '#ffb4a4'
  on-tertiary: '#630e00'
  tertiary-container: '#971b00'
  on-tertiary-container: '#ffa894'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e3dfff'
  primary-fixed-dim: '#c4c0ff'
  on-primary-fixed: '#110069'
  on-primary-fixed-variant: '#3100e4'
  secondary-fixed: '#f0dbff'
  secondary-fixed-dim: '#ddb8ff'
  on-secondary-fixed: '#2c0051'
  on-secondary-fixed-variant: '#62259b'
  tertiary-fixed: '#ffdad3'
  tertiary-fixed-dim: '#ffb4a4'
  on-tertiary-fixed: '#3d0600'
  on-tertiary-fixed-variant: '#8c1800'
  background: '#13121d'
  on-background: '#e4e0f0'
  surface-variant: '#35343f'
typography:
  display-xl:
    fontFamily: Space Grotesk
    fontSize: 4.5rem
    fontWeight: '900'
    lineHeight: '1.1'
    letterSpacing: -0.05em
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 3rem
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Space Grotesk
    fontSize: 2.25rem
    fontWeight: '700'
    lineHeight: '1.3'
  h3:
    fontFamily: Space Grotesk
    fontSize: 1.25rem
    fontWeight: '700'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Space Grotesk
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Space Grotesk
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.5'
  label-sm:
    fontFamily: Space Grotesk
    fontSize: 0.75rem
    fontWeight: '700'
    lineHeight: 1rem
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1200px
  section-padding-y: 6rem
  gutter: 1.5rem
  stack-sm: 0.5rem
  stack-md: 1rem
  stack-lg: 2.5rem
---

## Brand & Style
The brand personality is **Technical, Innovative, and Bold**. It targets senior engineers and architects who value precision and "learning by doing." 

The design style is **Futuristic Glassmorphism** mixed with **Modern Corporate**. It uses deep obsidian backgrounds, vibrant neon accents (electric indigo), and subtle grid patterns to evoke a "virtual terminal" or "war room" environment. The emotional response should be one of mastery and focus, achieved through high-contrast typography and glowing interactive elements that stand out against dark, layered surfaces.

## Colors
The palette is dominated by a dark mode aesthetic using "Obsidian" blacks and "Deep Purple" surfaces. 

- **Primary:** An aggressive electric indigo (#3713ec) used for core actions and brand identity.
- **Secondary:** A soft purple (#c084fc) used as a gradient end-point to provide depth.
- **Neutral:** A range of slates for typography, ensuring readability against the dark backgrounds.
- **Semantic:** Distinctive colors for difficulty tiers (Emerald for Easy, Amber for Medium, Rose for Hard), always paired with low-opacity background tints for a "glow" effect.

## Typography
The system uses **Space Grotesk** exclusively to maintain a technical, geometric feel. 

Headlines utilize heavy weights (Bold to Black) and tight letter spacing to create a sense of impact and urgency. Body text remains legible with generous line height. The use of uppercase tracking on labels reinforces the "system-dashboard" aesthetic common in high-end dev tools.

## Layout & Spacing
The layout follows a **Fixed Grid** model for desktop, centered within a max-width container of 1200px. 

Vertical rhythm is established with significant whitespace between sections (96px/6rem) to prevent the dark UI from feeling cramped. Content modules (like the grid of challenges) utilize a standard 24px gutter. The header uses a backdrop-blur effect and remains sticky to provide constant navigation access.

## Elevation & Depth
Depth is expressed through **Tonal Layering** and **Luminescence** rather than traditional shadows:
- **Surface Tier 1:** The base background (#131022).
- **Surface Tier 2:** Cards and Navigation (#1e1933) with 1px borders (#292348).
- **Interactive Depth:** Hover states use primary-tinted box shadows (`0_0_20px_rgba(55,19,236,0.4)`) to create a "neon glow" effect, making the element appear to emit light.
- **Glassmorphism:** Navigation and hero overlays use 95% opacity with `backdrop-blur-md` to maintain context of the background grid/glows.

## Shapes
The shape language is **Soft-Geometric**. 

Base components (buttons, small cards) use a 0.25rem (4px) radius for a precise, "engineered" look. Larger containers and cards use a 0.75rem to 1rem (12px-16px) radius to feel modern and approachable. Interactive elements like badges use "Pill-shaped" full rounding to distinguish them from structural elements.

## Components
- **Primary Buttons:** High-contrast Indigo background with white text. Must have a subtle glow shadow.
- **Secondary/Outline Buttons:** Border-only or dark-fill with white text. Hover states should introduce a slight background shift (white/5%).
- **Challenge Cards:** Feature a top-aligned image with a gradient overlay, a difficulty badge in the top-left, and a subtle border that intensifies on hover.
- **Badges:** Small, uppercase text with high-contrast color pairings (e.g., Emerald text on 20% Emerald background).
- **Input/Mock-UI Elements:** Use a monospaced-adjacent look for data (Space Grotesk remains fine) with iconography from Material Symbols Outlined.
- **Grid Background:** A repeating 50px linear gradient grid at 5% opacity of the primary color, providing a technical texture to large sections.