# Page Topology — forelandmarine.com

## Scroll Container
- `#main-body` div: `overflow-y-auto overflow-x-hidden`, scrollHeight 4750px
- NOT the window — all scrolling via `#main-body`

## Section Order (top → bottom)

| # | Name | offsetTop | Height | Interaction |
|---|------|-----------|--------|-------------|
| 0 | Header | 0 (sticky) | 110px | scroll-driven bg shadow |
| 1 | Hero | 110 | 736px | static |
| 2 | Services | 846 | 852px | static (cards) |
| 3 | Banner | 1698 | 320px | static (full-width image) |
| 4 | About | 2018 | 884px | static (2-col) |
| 5 | Map | 2902 | 544px | static (Mapbox embed) |
| 6 | Members | 3446 | 642px | static (2 logos) |
| 7 | Contact | 4088 | 474px | static (form) |
| 8 | Footer | 4562 | 188px | static |

## Z-index Layers
- Header: z-2000 (sticky overlay)
- Everything else: z-auto (flow)

## Global Layout
- Page bg: `rgb(246, 246, 246)` = #f6f6f6
- Max content width: 1280px (container with px-6)
- No scroll-snap, no Lenis

## Dependencies
- Header overlays all sections (sticky top-0)
- Footer closes page with dark navy bg
