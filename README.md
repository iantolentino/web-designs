# The Design Vault — `web/`

A production-grade design-system showcase: **30 curated, intentionally distinct design
systems** you can browse, preview live, and copy as ready-to-use AI design prompts.
Built to kill AI design slop — no Inter, no purple-on-white, no generic layouts.

## Quick start

```bash
cd web
npm install
npm run dev        # http://localhost:5180 (picks a free port if taken)
```

Other scripts:

```bash
npm run typecheck  # strict TypeScript, no emit
npm run build      # typecheck + production build to dist/
npm run preview    # serve the production build locally
```

## What's inside

- **Gallery** — 30 design cards with *live rendered thumbnails* (real components, scaled),
  category badges with color coding, trend flags, popularity, and palette swatches.
- **Live preview** — full page (hero, features, stats, forms, buttons, modal, footer)
  rendered from each system's tokens, with Desktop / Tablet / Mobile framing
  (container queries, so the design truly responds) and prev/next navigation.
- **Code view** — simplified, readable HTML/CSS per design (tokens + one hero sample).
- **Details view** — philosophy, click-to-copy palette, typography scale, all component
  specs, an interactive themed playground, the full prompt, and JSON / CSS-variable export.
- **Copy Design Prompt** — sticky button (top-right) that copies a comprehensive,
  structured design prompt. Toast feedback, `Ctrl+Shift+C` shortcut, prompt cache flag.
- **Search & filter** — instant search (name/category/tags/philosophy), 9 category chips
  with counts, quick filters (Most Popular / Latest / Trending), favorites-only view,
  result count, clear-all.
- **Extras** — localStorage favorites, shareable URLs (`?design=slug`), keyboard
  shortcuts (`/` search focus, `Esc` close/clear, `←/→` navigate), lazy-loaded preview
  components, IntersectionObserver thumbnails + infinite scroll.

## The 30 systems

Minimalism (4): Minimalist Tech, Zen Minimal, Swiss Editorial, Soft Mono ·
Maximalism (3): Neon Maximalist, Editorial Maximalist, Playful Maximalist ·
Brutalism (3): Raw, Refined, Web1 · Luxury (3): Dark, Minimalist, Bold ·
Playful (3): Pastel, Rainbow, Toybox Round · Retro (4): Y2K, Vintage Print,
Cyberpunk, Memphis Pop · Organic (3): Nature-Inspired, Biophilic, Botanical ·
Professional (3): Corporate Blue, Startup Serious, Tech Corporate ·
Creative (4): Abstract Art, Geometric Art, Illustration-Heavy, Ink House.

Every system ships: philosophy, typography (display + body fonts, scale, leading,
tracking), 6-color palette, full component specs, spacing rhythm, motion rules,
responsive rules, accessibility notes, and a usage snippet — plus a themed live
preview driven by those same tokens.

## Architecture

```
web/src/
├── types.ts              # DesignSystem model + category accents
├── store.ts              # Zustand: search/filter/selection/favorites/toast
├── prompt.ts             # buildDesignPrompt() — the copyable prompt text
├── hooks.ts              # clipboard, toast, URL sync, keyboard shortcuts
├── designs/              # 9 category files + registry + theming helpers
│   ├── theme.ts          #   themeOf(), contrast/onColor, withAlpha, sorting
│   └── minimalism.ts …   #   one file per aesthetic family
└── components/
    ├── Gallery.tsx       # cards, lazy thumbnails, infinite scroll
    ├── Preview.tsx       # overlay: live/code/details, device modes, copy
    ├── MiniSite.tsx      # shared live renderer + per-instance CSS scoping
    └── minisite.css      # themed layout, 20 motif variants, container queries
```

Design thumbnails and previews are the **same component** (`MiniSite`) — cards render
it scaled inside the thumb; the preview renders it full-size in a device frame. Each
design's `signatureCss` is auto-scoped per instance so 30 previews can coexist
without style bleed.

## Adding a design system

1. Add an object to the relevant `designs/*.ts` file (or a new file + import in
   `designs/index.ts`), matching the `DesignSystem` type.
2. Pick a `motif` from the ~20 supported layout variants and add any bespoke
   `signatureCss` (one rule per line — it gets auto-scoped).
3. Add a hero line in `MiniSite.tsx`'s `heroTitle` switch (optional — falls back to
   the design name).

The card, thumbnail, preview, code sample, and prompt are all derived
automatically from the data.
