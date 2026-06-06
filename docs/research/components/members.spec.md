# MembersSection Specification

## Overview
- **Target file:** `src/components/MembersSection.tsx`
- **Interaction model:** static

## DOM Structure
```
<section> relative, height 642px, bg transparent (#f6f6f6)
  <!-- Navy SVG separator at top -->
  <svg> absolute top-0 left-0 z-50 width=1440 height=10
    <path d="M0 10H1440" stroke="#152075" stroke-width="10">
  </svg>
  <div> container mx-auto px-6 py-20 max-w-[1280px]
    <h2> "Proud Members" — centered
    <div> flex items-center justify-center gap-24 mt-16
      <img src="/images/superyacht-uk.png" alt="" />
      <img src="/images/british-marine.png" alt="" />
```

## Computed Styles

### Section
- position: relative
- height: 642px
- backgroundColor: transparent (#f6f6f6 shows through)
- overflow: visible (SVG extends to top edge)

### SVG separator (navy border at top)
- position: absolute
- top: 0
- left: 0
- zIndex: 50
- width: 100% (1440px)
- height: 10px
- stroke: #152075
- strokeWidth: 10

### H2 "Proud Members"
- fontFamily: Poppins, sans-serif
- fontSize: 48px
- fontWeight: 500 (estimated)
- lineHeight: 56px
- color: rgb(17, 24, 39)
- textAlign: center

### Logo images
- Superyacht UK: approximately 430x130px display size
- British Marine: approximately 330x130px display size
- objectFit: contain
- displayed side by side with ~6rem gap

## Assets
- `/images/superyacht-uk.png` — Superyacht UK logo (blue text + red/blue swoosh)
- `/images/british-marine.png` — British Marine logo (blue text + Union Jack arrow mark)

## Text Content
- Heading: "Proud Members"

## Responsive Behavior
- **Desktop (1440px):** 2 logos side by side, centered
- **Mobile (390px):** Logos stack vertically
- **Breakpoint:** ~640px (sm) or 768px (md)
