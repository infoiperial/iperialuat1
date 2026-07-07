## Leaflet v3 — Rebalanced palette

Redo the A5 leaflet so the colour balance mirrors the website: deep navy as the dominant surface, blue/cyan gradient accents, and black used only as accent panels/dividers — not as the base.

### Palette shift
- **Base surface:** deep navy `#0F1830` (from site hero), not pure black
- **Panels / cards:** slightly lighter navy `#162445` with subtle blue borders
- **Accents:** cyan `#4FB8E6` + gradient blue `#3B6BE0` (unchanged)
- **Black `#07090F`:** used only for the bottom stat strip on the cover and the top header band on page 2 — as accent bands, not full backgrounds
- **Grid overlay:** subtle blue-tinted, not white

### Page 1 — Cover
- Full-bleed **navy → deeper navy** vertical gradient (no black base)
- Faint blue grid overlay across the whole page
- Prominent Iperial logo centered upper-third (keep ~120pt height)
- Large headline + cyan underline + subline (unchanged copy)
- **Black accent strip** at the very bottom (~70pt tall) holding the stat trio (10+ Years · 24/7 · UK) — this is where black lives
- Cyan hairline separating navy from the black strip

### Page 2 — Services + Contact
- Navy base background (not black)
- **Black header band** at top (~92pt) with prominent white Iperial logo left + "OUR SERVICES" right — black used as accent band
- Four service cards on navy background, cards themselves lighter navy `#162445` with thin blue border and cyan left accent bar
- **Black footer band** (~150pt) for contact — this is the second place black appears, giving symmetry with the cover
- Large faded Iperial logo watermark inside the footer (right side)
- Contact rows unchanged: Call / WhatsApp · 07731 552882, Email, Web, Location

### Keep
- Logo prominence on both pages (cover hero logo + page 2 header logo + footer watermark)
- "Call / WhatsApp — 07731 552882" (WhatsApp URL removed)
- Space Grotesk / Inter typography
- Same copy throughout

### Output
- `/mnt/documents/iperial-leaflet_v3.pdf` (new versioned file, v2 preserved)
- Render both pages to JPG at 130 DPI and visually QA before delivery
