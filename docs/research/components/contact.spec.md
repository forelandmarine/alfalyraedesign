# ContactSection Specification

## Overview
- **Target file:** `src/components/ContactSection.tsx`
- **Interaction model:** static form (non-functional in clone)

## DOM Structure
```
<section id="contact"> relative, height 474px, bg transparent (#f6f6f6)
  <div> container mx-auto px-6 py-16 max-w-[1280px]
    <div> grid grid-cols-2 gap-16 items-start
      <!-- Left: form -->
      <div>
        <div> grid grid-cols-2 gap-4 mb-4
          <div>
            <label> "Name"
            <input type="text" placeholder="" />
          </div>
          <div>
            <label> "Email"
            <input type="email" placeholder="" />
          </div>
        </div>
        <div> mb-4
          <label> "Message"
          <textarea rows=5 placeholder="" />
        </div>
        <div> flex items-center gap-4
          <button type="submit"> "Send"
          <p> "This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply."
        </div>
      </div>
      <!-- Right: text -->
      <div>
        <h2> "Reach Out Today"
        <p> paragraph 1
        <p> paragraph 2
      </div>
```

## Computed Styles

### Section
- position: relative
- height: 474px
- backgroundColor: transparent (#f6f6f6 shows through)

### Container
- padding: ~64px 24px
- maxWidth: 1280px

### H2 "Reach Out Today"
- fontFamily: Poppins, sans-serif
- fontSize: 48px (estimated matching other h2s)
- fontWeight: 500
- color: rgb(17, 24, 39)

### Form inputs
- backgroundColor: rgb(229, 231, 235) = #e5e7eb (light gray fill)
- border: 1px solid rgb(209, 213, 219)
- borderRadius: 6px
- padding: 8px 12px
- fontSize: 16px
- width: 100%
- fontFamily: Inter

### Textarea
- Same as input styles
- height: ~120px (5 rows)
- resize: vertical

### Labels
- fontSize: 14px
- fontWeight: 500
- color: rgb(17, 24, 39)
- fontFamily: Inter
- marginBottom: 4px
- display: block

### Send button
- border: 2px solid rgb(17, 24, 39)
- borderRadius: 8px
- padding: 8px 32px
- fontSize: 16px
- fontWeight: 500
- fontFamily: "PT Serif", serif
- color: rgb(17, 24, 39)
- backgroundColor: transparent
- height: ~48px

### reCAPTCHA text
- fontSize: 12px
- color: rgb(107, 114, 128)
- fontFamily: Inter
- maxWidth: 300px

## Text Content (verbatim)
**H2:** "Reach Out Today"

**Paragraph 1:** "Got a large project, maintenance period or big race coming up? We'd love to hear from you."

**Paragraph 2:** "Let Foreland Marine make your dream plain sailing!"

**Form labels:** "Name", "Email", "Message"

**Button:** "Send"

**reCAPTCHA:** "This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply."

## Responsive Behavior
- **Desktop (1440px):** 2-column, form left, text right
- **Mobile (390px):** 1-column, text first then form
- **Breakpoint:** ~768px (md)
