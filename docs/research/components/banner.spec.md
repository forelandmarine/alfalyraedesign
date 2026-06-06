# BannerSection Specification

## Overview
- **Target file:** `src/components/BannerSection.tsx`
- **Interaction model:** static

## DOM Structure
```
<section> relative, height 320px
  <div> absolute inset-0
    <img src="/images/banner.jpg" alt="background" object-cover fill
```

## Computed Styles

### Section
- position: relative
- height: 320px
- overflow: hidden (implied by absolute child)
- backgroundColor: transparent

### Image
- position: absolute (fill)
- inset: 0
- objectFit: cover
- width: 100%
- height: 100%

## Text Content
- None — purely visual full-width image

## Assets
- Image: `/images/banner.jpg` (electrical schematics / blueprint technical drawing, light blue-white tone)

## Responsive Behavior
- Full-width at all breakpoints
- Height stays at 320px
