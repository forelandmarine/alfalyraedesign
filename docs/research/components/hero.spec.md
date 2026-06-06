# HeroSection Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Screenshot:** `docs/design-references/` (hero section, top of page below header)
- **Interaction model:** static

## DOM Structure
```
<section> relative, height 736px
  <div> absolute inset-0 overflow-hidden
    <img src="/images/hero-bg.jpg" alt="background" object-cover fill
  <div> absolute inset-0 bg-black/50 (dark overlay)
  <div> relative z-10, container mx-auto px-6, h-full flex flex-col justify-center
    <h1> "Smooth sailing. Every time."
    <pre> subtitle text (PT Serif)
    <button> "Find out more"
  <svg> absolute bottom-0, separator line
```

## Computed Styles (exact values from getComputedStyle)

### Section container
- position: relative
- height: 736px
- overflow: visible

### H1
- fontFamily: Poppins, sans-serif
- fontSize: 72px
- fontWeight: 500
- lineHeight: 80px
- color: rgb(255, 255, 255)
- display: block

### Subtitle (<pre> element with PT Serif)
- fontFamily: "PT Serif", serif
- fontSize: 24px
- fontWeight: 400
- color: rgb(255, 255, 255)
- whiteSpace: pre-wrap (use pre tag or styled p)

### "Find out more" button
- fontFamily: "PT Serif", serif
- fontSize: 20px
- fontWeight: 500
- lineHeight: 28px
- color: rgb(255, 255, 255)
- backgroundColor: transparent
- border: 2px solid rgb(255, 255, 255)
- borderRadius: 8px (rounded-lg)
- padding: 12px 24px
- height: 56px
- display: flex
- alignItems: center
- justifyContent: center

### Background image
- position: absolute
- inset: 0
- objectFit: cover
- width: 100%
- height: 100%

### Navy SVG separator at bottom
- position: absolute bottom-0 left-0 z-50
- fill: transparent
- stroke: #152075
- strokeWidth: 10
- SVG: `<path d="M0 10H1440" stroke="#152075" stroke-width="10">`
- width: 100vw height: 10px

## States & Behaviors
- Static section — no animations in clone

## Assets
- Background image: `/images/hero-bg.jpg` (aerial view of two sailing yachts over deep blue ocean)

## Text Content (verbatim)
- H1: "Smooth sailing. Every time."
- Subtitle: "Foreland Marine provides top-notch Project Management, Representation and Consultancy services to some of the world's most famous yachts"
- Button: "Find out more"

## Responsive Behavior
- **Desktop (1440px):** Full height 736px, text left-aligned, large typography
- **Mobile (390px):** Height reduces, font sizes scale down (use responsive classes), text left-aligned
- **Breakpoint:** ~768px for font size changes
