# AboutSection Specification

## Overview
- **Target file:** `src/components/AboutSection.tsx`
- **Interaction model:** static

## DOM Structure
```
<section> relative, height 884px, bg transparent (page #f6f6f6)
  <div> container mx-auto px-6 py-20 max-w-[1280px]
    <div> grid grid-cols-2 gap-16 (approx) items-start
      <!-- Left column: text -->
      <div>
        <h2> "About us"
        <p> paragraph 1
        <p> paragraph 2
        <p> paragraph 3
        <a href="#contact"> "Get in touch" button
      </div>
      <!-- Right column: image -->
      <div> rounded-2xl overflow-hidden
        <img src="/images/about-yacht.jpg" alt="shamrock v classic sailing racing yacht upwind sea spray bow waves"
             object-cover w-full h-full
```

## Computed Styles (exact values from getComputedStyle)

### Section
- position: relative
- height: 884px
- backgroundColor: transparent (#f6f6f6 shows through)

### Container
- padding: 80px 24px
- maxWidth: 1280px
- margin: 0 auto

### H2 "About us"
- fontFamily: Poppins, sans-serif
- fontSize: 48px
- fontWeight: 500
- lineHeight: 56px
- color: rgb(17, 24, 39)
- paddingBottom: 8px

### Paragraphs (PT Serif)
- fontFamily: "PT Serif", serif
- fontSize: 18px (estimated — same pattern as cards)
- fontWeight: 400
- lineHeight: 28px
- color: rgb(17, 24, 39)
- marginBottom: 16px between paragraphs

### "Get in touch" button
- Same style as "Learn More" buttons: border 2px solid #111827, borderRadius 8px, padding 8px 16px, PT Serif 16px 500 weight
- display: flex, alignItems: center

## Assets
- Image: `/images/about-yacht.jpg` (Shamrock V — classic dark sailing yacht racing, dramatic angle with spray)

## Text Content (verbatim)
**H2:** "About us"

**Paragraph 1:** "At Foreland Marine, we provide expert yacht management and marine engineering consultancy for your next yachting project. Based in London and with team members in Antibes, Palma de Mallorca, Fort Lauderdale, Antigua, The Netherlands, Germany, Italy and other maritime hubs across the world, our team handles all aspects of super yacht refit projects, vessel purchases and new builds."

**Paragraph 2:** "Our skilled professionals work closely with clients to ensure their yachts maintain peak performance - From routine maintenance to complex refits, new build yachts to gaining the winning edge on the race course - we deliver a reliable and efficient service tailored to your unique needs."

**Paragraph 3:** "Named after the Lighthouse at South Foreland in Kent, UK ('the South Foreland Light') - once a pair of light houses that have been guiding sailors into the Thames Estuary since 1635, as well as the upper light house being the site of the first Ship-to-Shore telegraph on Christmas Eve, 1898 by Guglielmo Marconi - Foreland Marine Consultancy is your guiding light through the storm, and a haven for sailors and ship owners alike."

**Button:** "Get in touch"

## Responsive Behavior
- **Desktop (1440px):** 2-column layout, text left, image right, approximately 50/50 split
- **Mobile (390px):** Stack to 1 column, image below text
- **Breakpoint:** ~768px (md)
