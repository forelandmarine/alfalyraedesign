# Behaviors — forelandmarine.com

## Scroll Container
- Custom container: `#main-body` with `overflow-y-auto`
- NOT window scroll — all scroll events on `#main-body`

## Header Scroll Behavior
- **At scroll 0:** has `shadow-md` class, bg `rgb(246,246,246)`, height 110px
- **When scrolled:** same bg, same height — header does NOT shrink or change color
- **Sticky:** `sticky top-0 z-[2000]`
- **Transition:** `transition-colors duration-300` — for potential color transitions but no visible change in testing

## Animations
- Service cards: have `opacity-0 translate-y-*` initial classes with `transition-all ease-in-out duration-500` and staggered delays (delay-100, delay-200) — these are scroll-triggered entrance animations via IntersectionObserver, transitioning from opacity-0 to opacity-100
- No page-level scroll snap
- No Lenis / smooth scroll library

## Interactive Elements
- **Tools dropdown** in nav: click-driven, shows submenu (not cloned — nav links to existing pages)
- **Contact button:** links to contact section anchor
- **"Find out more"** in hero: links to services section
- **"Learn More"** in service cards: links to individual service pages
- **"Get in touch"** in about: links to contact section
- **Map:** Mapbox satellite embed — replaced with static screenshot in clone
- **Contact form:** Has Name, Email, Message fields + Send button — render as static UI

## Hover States
- Nav links: no visible color change observed
- "Learn More" / "Contact" / buttons: slight darkening/fill on hover (standard)
- Service cards: `group` class — image likely scales slightly on hover

## Responsive Behavior (observed)
- **Desktop (1440px):** 3-column service cards, 2-col about/map/contact
- **Tablet / Mobile:** Not fully tested but Tailwind breakpoints used (lg:, md:)
- Card width: `w-full` with flex-wrap, each card likely full-width on mobile
- Services section uses `flex flex-wrap` — stacks on mobile
