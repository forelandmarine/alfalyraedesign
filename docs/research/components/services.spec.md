# ServicesSection Specification

## Overview
- **Target file:** `src/components/ServicesSection.tsx`
- **Screenshot:** See screenshot showing 3 cards with images
- **Interaction model:** static (cards with hover scale on image)

## DOM Structure
```
<section> relative, bg transparent (page bg shows through = #f6f6f6)
  <div> relative z-10 container mx-auto pt-20 pb-20 px-6
    <h2> "Our Services"  (Poppins 48px, mb-8)
    <div> flex flex-wrap gap-8 justify-start
      <!-- 3 cards, each: -->
      <div class="group w-full relative overflow-hidden rounded-2xl"> width 384px height 612px
        <div class="flex flex-col h-full rounded-2xl"> inner wrapper
          <div> image container, aspect-ratio or fixed height ~280px
            <img src="..." alt="..." object-cover w-full h-full />
          </div>
          <div class="flex flex-col items-start py-6 px-0 gap-4">
            <p> card title (Poppins 32px)
            <div class="rich-text-block">
              <p> description (PT Serif 18px)
            </div>
            <a href="..."> "Learn More" button (outlined)
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

## Computed Styles (exact values from getComputedStyle)

### Section
- position: relative
- height: 852px
- backgroundColor: transparent (page bg #f6f6f6 shows through)

### Container
- padding: 80px 24px
- maxWidth: 1280px
- margin: 0 auto
- display: block (not flex — uses internal flex on children)

### Section heading "Our Services"
- fontFamily: Poppins, sans-serif
- fontSize: 48px
- fontWeight: 500
- lineHeight: 56px
- color: rgb(17, 24, 39)

### Card outer (group div)
- width: 384px
- height: 612px
- borderRadius: 16px (rounded-2xl)
- overflow: hidden
- position: relative
- display: block

### Card inner (flex col h-full)
- display: flex
- flexDirection: column
- height: 612px
- borderRadius: 16px

### Card title (p tag, Poppins)
- fontFamily: Poppins, sans-serif
- fontSize: 32px
- fontWeight: 500
- lineHeight: 40px
- color: rgb(17, 24, 39)
- height: 80px (2 lines)

### Card description (PT Serif p tag)
- fontFamily: "PT Serif", serif
- fontSize: 18px
- fontWeight: 400
- lineHeight: 28px
- color: rgb(17, 24, 39)
- height: 168px

### "Learn More" link/button
- border: 2px solid rgb(17, 24, 39)
- borderRadius: 8px
- padding: 8px 16px
- fontSize: 16px
- fontWeight: 500
- color: rgb(17, 24, 39)
- fontFamily: "PT Serif", serif
- height: 40px
- display: flex
- alignItems: center

### Card padding area (below image)
- padding: 24px 0 (py-6)
- display: flex
- flexDirection: column
- alignItems: flex-start
- gap: 16px (gap-4)

## Card Data (3 cards)

### Card 1: Refit Project Management
- imageSrc: `/images/refit-card.jpg`
- imageAlt: "Restored ship at a shipyard"
- title: "Refit Project Management"
- description: "We manage every aspect of your yacht refit from beginning to end - from planning and design, to project management and crew services, our team ensures timely delivery, quality workmanship, and effective budgeting for motor and sail yachts over 24m+"
- href: "/project-management"

### Card 2: Race Winning Technical Consultancy
- imageSrc: `/images/technical-card.jpg`
- imageAlt: "Classic yacht regatta"
- title: "Race Winning Technical Consultancy"
- description: "Our industry leading Consultants provide top-tier technical guidance for your sailing yacht. We work with you to ensure optimal performance and reliability on the race course, helping you achieve winning results, every time."
- href: "/technical-consultancy"

### Card 3: New Build - Owner's Representation
- imageSrc: `/images/newbuild-card.jpg`
- imageAlt: "Business contract signing."
- title: "New Build - Owner's Representation"
- description: "Accredited by the Superyacht Builders' Association (SYBAss), Foreland Marine provides expert leadership, management and representation on behalf of yacht owners for new build projects.We represent your interests from start to finish, keeping you informed and in control."
- href: "/new-build"

## States & Behaviors
### Hover state
- Card `.group` has hover effect — image likely scales to 105% on hover
- Use `group-hover:scale-105 transition-transform duration-500` on image

## Assets
- Card images: `/images/refit-card.jpg`, `/images/technical-card.jpg`, `/images/newbuild-card.jpg`

## Responsive Behavior
- **Desktop (1440px):** 3 columns, each 384px wide, flex-wrap justify-start with gap-8
- **Tablet (768px):** 2 columns or 1 column depending on available width
- **Mobile (390px):** Single column, full width cards
- **Breakpoint:** flex-wrap handles responsive stacking naturally
