# Java Fruit Company Profile Website (Next.js)

Official company profile website for **CV Intiplant Agro Lestari** (Brand: **Java Fruit**), built using **Next.js 14 (App Router)**. The website showcases premium Cavendish and Mas Kirana bananas, sustainable partnership with millennial farmers in Lumajang (East Java), ethylene ripening post-harvest technology, and cold-chain supply distribution.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: Next.js 14 (App Router)
- **Language**: JavaScript (React 18 Client & Server Components)
- **Styling**: Vanilla CSS in `app/globals.css` with CSS Custom Properties (`:root`). *No TailwindCSS or CSS-in-JS*.
- **Typography**: Google Fonts via `next/font`:
  - **Poppins** (`--font-poppins`) — Primary UI body font
  - **Plus Jakarta Sans** (`--font-jakarta`) — UI buttons, badges, and numbers
  - **Fraunces** (`--font-fraunces`) — Serif headings
- **Localization**: Dual-language support (`ID` Indonesian & `EN` English) via `LanguageContext` (`context/LanguageContext.js`) and `content/translations.js`.
- **Image Optimization**: `<Image>` component from `next/image` with WebP/AVIF output.

---

## 📁 Directory Structure

```text
├── app/
│   ├── globals.css          # Primary CSS design system, color tokens, & responsive rules
│   ├── layout.js             # Root layout, Google font setup, SEO metadata & JSON-LD schema
│   ├── page.js               # Main landing page wrapped in LanguageProvider
│   ├── robots.js             # Dynamic robots.txt
│   └── sitemap.js            # Dynamic sitemap.xml
├── components/               # Modular UI Components
│   ├── Header.js             # Fixed nav header, brand logos, mobile drawer menu, WhatsApp button
│   ├── Hero.js               # Hero banner, CTAs, key stats, Top Brand official award seal
│   ├── About.js              # Company background & governor farmer group documentation
│   ├── Advantages.js         # 3 advantage cards + nutritious school meal tray feature
│   ├── Technology.js         # Ethylene gas post-harvest steps & cold storage panel
│   ├── Benefits.js           # Benefits Bento Grid & Ethylene vs Carbide comparison panel
│   ├── WhyChoose.js          # 4 core reasons to choose Java Fruit
│   ├── Stats.js              # Plantation stats (50ha, 7 tons/wk) & documentation photo strip
│   ├── Contact.js            # Office address, Google Maps iframe & social links
│   ├── Footer.js             # Brand logo footer, copyright line & location
│   ├── LanguageToggle.js     # Language switch button (ID <-> EN)
│   └── ScrollToTop.js        # Floating scroll to top button
├── context/
│   └── LanguageContext.js    # React context managing active language & translation state
├── content/
│   └── translations.js       # Complete bilingual dictionary object (id & en)
├── public/assets/            # Optimized PNG/JPG images and company logos
├── AGENTS.md                 # Detailed instructions & rules for AI coding agents
├── .agents/AGENTS.md         # Workspace agent configuration & standards
└── PROJECT_DEFINITION.md     # Comprehensive project definition & roadmap
```

---

## 🚀 Setup & Development

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Verify production build
npm run build

# 4. Start production server
npm start
```

---

## 🤖 AI Agent Guidelines

For AI assistants working on this repository, please review [AGENTS.md](file:///Users/hafidz/Project/nextjs-site/AGENTS.md) before making changes.

Key rules:
1. **No Monospace UI Fonts**: Never use monospace or developer code fonts for UI text. Use `Poppins` or `Plus Jakarta Sans`.
2. **Localization First**: All user-facing strings must be defined in `content/translations.js` (`id` and `en`) and consumed via `useLanguage()`.
3. **Responsive Mobile Safety**: Always stack card grids to 1 column on screens `< 640px` and set `white-space: normal; word-break: break-word;` on tags to prevent horizontal overflow.
4. **Build Verification**: Always run `npm run build` after editing code to verify clean zero-error compilation.

---
*Built with ❤️ by CV Intiplant Agro Lestari — Java Fruit Team*

