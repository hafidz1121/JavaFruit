# Java Fruit Company Profile — Project Definition & Development Plan

## 1. Project Overview
- **Client:** CV Intiplant Agro Lestari (Brand: Java Fruit)
- **Objective:** Create a modern, high-performance company profile website to showcase premium Cavendish and Mas Kirana bananas.
- **Audience:** Distributors, retailers, export partners, and general consumers.
- **Tech Stack:** Next.js 14 (App Router), React 18, Global CSS, `next/font`, `next/image`.

## 2. Current Codebase Review

### ✅ Best Practices Implemented
- **App Router (Next.js 14):** Utilizes the latest Next.js architecture for better layout and SEO handling.
- **Font Optimization:** Uses `next/font` to load Fraunces, Inter, and IBM Plex Mono with `display: 'swap'`, preventing layout shift.
- **Image Optimization:** Employs `next/image` with AVIF/WebP formats for faster loading and reduced bandwidth.
- **Structured Data (JSON-LD):** Implements Organization schema in the layout for rich snippets in search results.
- **Dynamic Sitemap & Robots.txt:** Generates `sitemap.xml` and `robots.txt` dynamically via API routes.
- **Metadata API:** Uses Next.js built-in metadata API for managing page titles, descriptions, and Open Graph tags.

### 🛡️ Security Assessment
- **No Active Forms:** The site currently lacks active input forms (e.g., Contact, Newsletter), which inherently mitigates Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF) vulnerabilities.
- **Link Security:** External links (social media) open in new tabs with `rel="noopener"`, preventing the new page from accessing the parent page's `window` object.
- **Data Handling:** `dangerouslySetInnerHTML` is used for JSON-LD but with sanitized static data, which is safe.
- **Environment Variables:** Ensure sensitive data (if added later, like API keys) is stored in `.env.local` and not committed to the repository.
- **Recommendations:**
    - Implement **Content Security Policy (CSP)** headers in `next.config.js` to prevent unauthorized script execution.
    - Add **Rate Limiting** if a contact form or API routes are introduced.

### 🔍 SEO Assessment
- **Fundamentals:** Excellent use of `title`, `description`, and `keywords` in the `metadata` API.
- **Open Graph & Twitter Cards:** Properly configured for social sharing.
- **Canonical URLs:** Set to prevent duplicate content issues.
- **Image Alt Tags:** All images include descriptive alt text for accessibility and image search SEO.
- **Recommendations:**
    - **Internal Linking:** Ensure components (like "Why Choose Us" or "Advantages") link to each other or specific detail pages (if created).
    - **Content Expansion:** Consider adding a blog or news section (using MDX) to attract organic traffic with keywords like "Banana farming tips" or "Ethylene ripening benefits."
    - **Local SEO:** Add a `LocalBusiness` schema in addition to `Organization` to boost local search visibility.

### 🖼️ Asset Integration
- **Current Status:** All assets provided in `/Users/hafidz/Downloads/CP Java Fruit` are accounted for and mapped to components.
- **Image Quality:** Ensure all images are compressed (e.g., using Squoosh or TinyPNG) before deployment to further improve PageSpeed scores.
- **Responsive Images:** Verify that `next/image` `sizes` prop is used correctly to serve appropriate image sizes for different viewports.

## 3. Development Roadmap

### Phase 1: Optimization & Hardening (Current Focus)
- [ ] **Compress Images:** Optimize all images in `/public/assets` for web performance.
- [ ] **Implement CSP:** Add security headers in `next.config.js`.
- [ ] **Refine Metadata:** Review and refine keywords based on competitor analysis.
- [ ] **Accessibility Audit:** Ensure full WCAG compliance (focus, contrast, ARIA labels).

### Phase 2: Feature Expansion
- [ ] **Contact Form:** Implement a secure contact form with server-side validation and email integration (e.g., using Nodemailer or a service like SendGrid/Resend).
- [ ] **Testimonials Section:** Add social proof to build trust with potential partners.
- [ ] **Photo Gallery:** Create a dynamic gallery for plantation and harvest showcases.
- [ ] **Blog/News:** Introduce a content marketing strategy to drive organic traffic.

### Phase 3: Advanced SEO & Performance
- [ ] **Dynamic OG Images:** Generate unique Open Graph images for each page/post (using `@vercel/og`).
- [ ] **Analytics Integration:** Set up Google Analytics 4 or Plausible for traffic monitoring.
- [ ] **Core Web Vitals:** Continuously monitor LCP, FID, and CLS using PageSpeed Insights.

## 4. Technical Decisions
- **Styling:** Continue with Global CSS as it's lightweight and sufficient for the current scale. If complexity grows, consider migrating to CSS Modules or Tailwind CSS.
- **State Management:** Not currently needed due to static content. Use `useState` for local UI interactions.
- **Deployment:** Vercel is recommended for seamless Next.js deployment and edge network benefits.

---
*Document Generated: 2026-08-06*
