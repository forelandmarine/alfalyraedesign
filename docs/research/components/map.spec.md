# MapSection Specification

## Overview
- **Target file:** `src/components/MapSection.tsx`
- **Interaction model:** static (Mapbox replaced with static screenshot/placeholder)

## DOM Structure
```
<section> relative, height 544px, bg transparent (#f6f6f6)
  <div> container mx-auto px-6 py-16 max-w-[1280px] h-full
    <div> grid grid-cols-2 gap-16 h-full items-center
      <!-- Left: address text -->
      <div>
        <h3> "Head Office"
        <p> "7 Bell Yard, London, WC2A 2JR"
      </div>
      <!-- Right: map -->
      <div> h-full min-h-[400px] rounded-2xl overflow-hidden bg-gray-200
        <!-- Static map image or iframe placeholder -->
        NOTE: Use a static satellite map image or a styled placeholder
        The original uses Mapbox satellite-v9 centered on London WC2A 2JR
        Coordinates: approx 51.5137° N, -0.1120° W
        Zoom level 16
        With a blue pin marker (#396a9c color)
      </div>
```

## Computed Styles

### Section
- position: relative
- height: 544px
- backgroundColor: transparent

### Container
- padding: ~64px 24px (py-16 px-6)
- maxWidth: 1280px

### H3 "Head Office"
- fontFamily: Poppins, sans-serif (estimated — consistent with other headings)
- fontSize: ~32px or 40px
- fontWeight: 500
- color: rgb(17, 24, 39)

### Address paragraph
- fontFamily: "PT Serif", serif (estimated)
- fontSize: 18px
- color: rgb(17, 24, 39)

### Map container (right side)
- height: ~400px
- borderRadius: 16px
- overflow: hidden
- backgroundColor: rgb(200, 210, 220) (placeholder)

## Assets
- For the map: use a static screenshot or embed a simplified map placeholder
- The original map shows: satellite view of London WC2A 2JR area (The Royal Courts of Justice / Bell Yard area) with a blue circular pin marker

## Text Content (verbatim)
- Heading: "Head Office"
- Address: "7 Bell Yard, London, WC2A 2JR"

## Implementation Note
Since real Mapbox is expensive/complex, render a styled placeholder div with the address overlaid, or use a static map screenshot.
Use `react-leaflet` is too heavy — just render a styled div with a map-colored background and the pin marker emoji (📍) or SVG.

## Responsive Behavior
- **Desktop (1440px):** 2-column, text left, map right
- **Mobile (390px):** 1-column, text above, map below (reduced height)
- **Breakpoint:** ~768px (md)
