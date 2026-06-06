# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Interaction model:** static

## DOM Structure
```
<footer> flex flex-1
  <div> absolute inset-0 z-10 bg-[#063367]  (navy background layer)
  <div> relative z-20 w-full flex items-center justify-end px-6 h-[188px]
    <nav> flex items-center gap-8
      <a href="/yacht-management">Yacht Management</a>
      <a href="/new-build">New Build</a>
      <a href="/project-management">Refit</a>
      <a href="/technical-consultancy">Technical Consultancy</a>
```

## Computed Styles

### Footer element
- display: flex
- flexDirection: row
- height: 188px
- position: relative (for absolute bg overlay)
- backgroundColor: transparent (bg is via absolute child)

### Navy bg overlay
- position: absolute
- inset: 0
- zIndex: 10
- backgroundColor: rgb(6, 51, 103) = #063367

### Nav links
- fontFamily: Inter, ui-sans-serif, system-ui, sans-serif
- fontSize: 18px
- fontWeight: 400
- color: rgb(255, 255, 255)
- textDecoration: none

### Footer inner container
- display: flex
- alignItems: center
- justifyContent: flex-end
- paddingLeft: 24px
- paddingRight: 24px
- height: 188px
- width: 100%

## Text Content
- Links: "Yacht Management", "New Build", "Refit", "Technical Consultancy"

## Responsive Behavior
- **Desktop (1440px):** All links in one row, right-aligned
- **Mobile (390px):** Links may stack or scroll
- **Breakpoint:** ~768px
