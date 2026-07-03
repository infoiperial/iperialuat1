## A5 Leaflet Design — Iperial Technology Solutions

Create a print-ready **A5 leaflet PDF** (148 × 210 mm) that mirrors the website's aesthetic: deep navy background, cyan/blue gradient accents, Space Grotesk headings + Inter body, and the Iperial logo.

### Format
- **Size:** A5 portrait, double-sided (2 pages in one PDF)
- **Output:** `/mnt/documents/iperial-leaflet.pdf` (delivered as a downloadable artifact)
- **Bleed/margins:** 5mm safe margin from edges, print-ready

### Page 1 — Front / Cover
- Full-bleed navy gradient background (matching hero section)
- Iperial logo top-left
- Large Space Grotesk headline: **"Dependable IT, built around you."**
- Subline: "Helping small businesses and individuals with their technology."
- Small tagline chip: "Technology Solutions"
- Stat strip at bottom: **10+ Years · 24/7 Response · UK-wide**

### Page 2 — Services + Contact
Compact, scannable layout listing the four core service pillars with 2–3 bullet items each:

1. **Infrastructure & Hardware** — Servers, networking, Wi-Fi, firewalls, devices
2. **Cloud Systems Management** — Cloud migration, M365 & Google Workspace, hybrid setups
3. **IT Support** — Remote & on-site, user accounts, hardware/software troubleshooting
4. **Digital Marketing** — SEO, graphics & video, social media

Each pillar shown as a card with a small gradient icon circle (matching the site cards).

Bottom contact bar:
- 🌐 www.iperial.com
- ✉ info@iperial.com
- 📞 07731 552882
- 💬 WhatsApp: wa.me/447731552882
- 📍 Surrey, UK

### Technical approach
- Generate with **ReportLab** (Python) for precise A5 print sizing and typography control
- Use Space Grotesk (headings) and Inter (body) from Google Fonts, downloaded at build time
- Colors sampled from the site's OKLCH tokens, converted to hex for print (navy `#131F3D`, cyan accent `#4FB8E6`, gradient blue `#3B6BE0`)
- Embed the existing project logo (`src/assets/iperial-logo.png`)
- Run visual QA: render each page to JPG at 150 DPI, inspect for overflow / alignment / contrast, iterate until clean
- Deliver via `<presentation-artifact>` tag

### Out of scope
- Not adding leaflet to the website
- Not creating multiple design variations (one polished version)
- No print-shop specifics (CMYK conversion) unless you request it — output will be standard RGB PDF suitable for both digital sharing and most home/office printing
