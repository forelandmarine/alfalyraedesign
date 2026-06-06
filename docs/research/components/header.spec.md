# Header Specification

## Overview
- **Target file:** `src/components/Header.tsx`
- **Screenshot:** `docs/design-references/` (top of page)
- **Interaction model:** static (sticky, always visible)

## DOM Structure
```
<header id="website-header"> sticky top-0 z-[2000] bg-[#f6f6f6] shadow-md
  <div> max-w-[1280px] mx-auto px-6 flex items-center justify-between h-[110px]
    <a href="/"> <!-- Logo -->
      <img src="/images/logo.png" alt="Foreland Marine Consultancy Ltd." width=287 height=46 />
    </a>
    <nav> flex items-center gap-8
      <a href="/yacht-management">Yacht Management</a>
      <a href="/new-build">New Build</a>
      <a href="/project-management">Refit</a>
      <a href="/technical-consultancy">Technical Consultancy</a>
      <button>Tools <ChevronDownIcon /></button>
    </nav>
    <div> flex items-center gap-4
      <a href="https://instagram.com"> <!-- Instagram circle -->
        <div class="w-10 h-10 rounded-full bg-[#111827] flex items-center justify-center">
          <InstagramIcon color="#FFFFFF" />
        </div>
      </a>
      <a href="#contact"> <!-- Contact button -->
        Contact
      </a>
    </div>
  </div>
</header>
```

## Computed Styles (exact values from getComputedStyle)

### Header element
- position: sticky
- top: 0
- zIndex: 2000
- backgroundColor: rgb(246, 246, 246)
- boxShadow: rgba(0,0,0,0.1) 0px 4px 6px -1px, rgba(0,0,0,0.06) 0px 2px 4px -1px
- height: 110px
- width: 1440px (full)
- transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1)

### Logo image
- height: 46px
- width: ~287px
- display: grid (parent is grid container)
- overflow: hidden

### Nav links (Yacht Management, New Build, Refit, Technical Consultancy)
- fontFamily: Inter, ui-sans-serif, system-ui, sans-serif
- fontSize: 18px
- fontWeight: 400
- color: rgb(17, 24, 39)
- padding: 6px 0px
- border: none
- textDecoration: none

### Tools button
- fontFamily: Inter
- fontSize: 16px
- fontWeight: 400
- color: rgb(17, 24, 39)
- display: inline-flex
- alignItems: center
- gap: 8px (with chevron icon)

### Instagram circle wrapper
- width: 40px (w-10)
- height: 40px (h-10)
- borderRadius: 50% (rounded-full)
- backgroundColor: rgb(17, 24, 39) = #111827
- display: flex
- alignItems: center
- justifyContent: center

### Contact button (outlined)
- border: 2px solid rgb(17, 24, 39)
- borderRadius: 8px
- padding: 8px 16px
- fontSize: 16px
- fontWeight: 500
- color: rgb(17, 24, 39)
- backgroundColor: transparent
- fontFamily: Inter

## States & Behaviors
### Sticky behavior
- Always sticky at top, no scroll-triggered changes
- `shadow-md` always present

### Tools dropdown
- On click shows dropdown with submenu links
- Implementation: simple state toggle, show/hide dropdown below button

## Assets
- Logo: `/images/logo.png` (1920x308 original, display at ~287x46)
- Icons: `InstagramIcon`, `ChevronDownIcon`, `MenuIcon` from `icons.tsx`

## Text Content
- Nav: "Yacht Management", "New Build", "Refit", "Technical Consultancy", "Tools"
- Button: "Contact"

## Responsive Behavior
- **Desktop (1440px):** Full nav visible, horizontal layout
- **Mobile (390px):** Hamburger menu replaces nav links (MenuIcon), logo stays
- **Breakpoint:** ~768px (md) — hide nav links, show burger
