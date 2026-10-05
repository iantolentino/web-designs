# The Design Vault

A production-grade design-system showcase: **550 curated, intentionally distinct design
systems**, a **153-layout pattern library**, and a **110-component kit** — all browsable,
previewable live, and copyable as ready-to-use AI design prompts. 
Built to kill AI design slop — no Inter, no purple-on-white, no generic layouts.

## Quick start

```bash
npm install
npm run dev        # http://localhost:5180 (picks a free port if taken)
```

Other scripts:

```bash
npm run typecheck  # strict TypeScript, no emit
npm run verify     # expansion invariants (components, website types, patterns)
npm run build      # typecheck + production build to dist/
npm run preview    # serve the production build locally
```

## The shell

Everything is driven from a **persistent left sidebar** — search, website type, category,
sort, and saved filters live there, so the main column is nothing but content.

| View | What it shows |
| --- | --- |
| **Design systems** | 550 systems as live thumbnails, **four per row** (five on very wide screens, stepping down to 3 → 2 → 1). |
| **Layout arrangements** | 21 archetypes (incl. Bento, Poster, Catalog, Docs, Map plate); each design offers its own set so previews differ structurally, not just by color. |
| **Pattern library** | 153 production layouts with live previews, filterable by family and searchable by block. |
| **Component kit** | The 110-component kit rendered for any design — with a side-by-side compare mode. |

On narrow screens the sidebar becomes a drawer (hamburger in the top bar, `Esc` to close,
`/` to open-and-focus search).

## What's inside

### Design systems (550)

Twenty-one arrangements ship today: the original thirteen (hero + cards, split hero, magazine,
dashboard, centered, editorial, asymmetric, full-bleed, spotlight, manifesto, bento, poster,
catalog) plus wave 10's **mosaic**, **timeline**, and **split-scroll**, and wave 11's
**docs**, **film-strip**, **map-plate**, **field-notes**, and **receipt**. Fifty-three
motifs are available, twenty of them added in wave 11 (double rule, inset frame, ribbon
band, stamp seal, ticket stub, blueprint grid, riso offset, glass sheen, torn edge, stitch
line, lattice weave, vignette, slat shadow, watermark glyph, terrazzo speck, sonar sweep,
PCB trace, punched card, quilt patch, rivet row). `scripts/audit-designs.cjs` asserts that no two systems
share an identity (type pair + motif + radius + depth), a palette, a name, or a hero line.

Every system ships: philosophy, typography (display + body fonts, scale, leading, tracking),
6-color palette, component specs, spacing rhythm, motion rules, responsive rules,
accessibility notes, and a themed live preview driven by those same tokens. Each card opens
a full preview with:

- **Live preview** — the complete sample page with copy written in each design's own
  voice (nav, CTAs, stats, pricing, testimonials, and dashboard labels derived from the
  design's tags and use-cases), plus per-design content blocks, Desktop / Tablet / Mobile
  framing (container queries, so the design truly responds), and an arrangement switcher
  (2–4 layout archetypes per design). The 110-component kit lives in its own Components
  tab and the standalone Component kit view — it does not repeat inside the page.
- **Colors** — a Color Studio: keep the design, swap the ink. Apply a curated palette, harmonize a full palette from any single color, or edit each of the six tokens; overrides save per design.
- **Code** — a simplified, readable HTML/CSS sample (tokens + one hero).
- **Details** — philosophy, click-to-copy palette, type scale, component specs, a themed
  playground, the full prompt, and JSON / CSS-variable export.

### The component kit (110 components, per design)

`src/components/ComponentKit.tsx` implements one vocabulary — buttons, fields, selection
controls, feedback, data display, navigation, and overlays — and renders it entirely from
whatever tokens it is handed. Nothing is hard-coded, which is why the same kit reads as a
different product in every one of the 550 systems. Groups:

**Inputs & actions** (28) · **Selection & toggles** (14) · **Feedback & status** (15) ·
**Data display** (23) · **Navigation** (10) · **Overlays & media** (20)

### The pattern library (153 layouts)

`src/patterns/` ships 153 genuinely distinct layout recipes: heroes, bento grids, filter
rails, master–detail inboxes, kanban shells, checkout steppers, sticky-TOC articles,
podcast pages, cohort grids, consent banners, 404s — the whole repertoire.
Each pattern is a *recipe* rather than a screenshot:

```ts
{
  id: 'analytics-dashboard',
  name: 'Analytics dashboard',
  family: 'app',
  blurb: 'Sidebar shell, four KPIs, one large chart, and a customer table.',
  blocks: [{ k: 'sidebar' }, { k: 'kpis' }, { k: 'chart' }, { k: 'table' }],
}
```

- `blocks` is the **composition** — 48 shared, well-behaved block kinds (nav, split hero,
  table, kanban, calendar, player, chat, dropzone…).
- `layouts.ts` holds the **arrangement** — a named grid (`grid-template-areas`) plus
  placement for each block, or a deliberately tuned stacked rhythm.
- 95 of the 153 use a genuine multi-track arrangement (rails, splits, mosaics, DAGs);
  the rest are stacked sections with rhythm chosen per pattern.

No two patterns share both an arrangement and a composition, and per-pattern CSS is scoped
so nothing leaks between them (`npm run verify` asserts both).

### Extras

Search across systems/patterns/components · 67 website types in a grouped, searchable
picker · 9 category filters · quick sorts · localStorage favorites · shareable URLs
(`?design=slug`) · keyboard shortcuts (`/` search, `Esc` close/clear, `←`/`→` navigate,
`Ctrl+Shift+C` copy prompt) · lazy-loaded previews · IntersectionObserver thumbnails and
infinite scroll · light/dark shell theme.

## Website types

The picker offers 67 website types across 11 groups, from the original 22 through
Developer Tools, Data & Analytics, Banking, Legal, Project Management, Marketplace,
Art Gallery, Podcast, E-learning, Hotel, Coffee Shop, Wedding, Mental Health, Architecture,
Logistics, Energy, Sports, Government, and more.

Designs author a handful of use cases each; `src/designs/usecases.ts` derives the rest by
matching keyword rules against every design's id, name, category, tags, description, and
philosophy, then tops up any thin bucket from the most popular designs in the categories
that suit it. **Every option filters to a real, non-empty result set** — the smallest
bucket is 5 designs, and `npm run verify` fails the build if that stops being true.

## Speed

Three things keep the vault fast as the catalog grows past 550 systems:

- **The catalog loads lazily.** `src/designs/*` is more than two thirds of the app's
  JavaScript, so the shell (topbar, sidebar, search, theme) paints from its own markup while
  the design data streams in behind it through a dynamic import. The entry chunk is ~85 kB
  gzipped, the catalog ~315 kB, and the gallery shows shimmer cards — never an empty page —
  for the frames in between. `src/catalog.ts` is the only module that touches the data
  module directly.
- **Everything else is prefetched on intent.** Hovering a card, a view button, or a palette
  result warms the chunk the click will need, so the preview, pattern board, and kit open
  with no loading state (`src/prefetch.ts`).
- **Repeat visits are offline-first.** `public/sw.js` is a hand-rolled service worker: a
  build-time manifest (`vite.config.ts` → `closeBundle`) precaches the shell, the catalog,
  the fonts, and every hashed asset; navigation is stale-while-revalidate and `/assets/`
  plus the font CDN are cache-first, so a second visit renders from disk with no network.

## Command palette (⌘K)

One field over the whole vault: designs, patterns, components, and actions (`Surprise me`,
`Copy a link`, `Clear all filters`, `Copy this design's prompt`). Arrow keys move, Enter
runs, Escape closes. `/` still focuses the sidebar's per-view filter, and `Esc` closes the
palette, the preview, or the filters in that order.

Every piece of state is in the URL — `view`, `q`, `cat`, `type`, `pattern`, `family`,
`kit`, `group`, `kitDesign`, and `design` — so any view can be sent to a teammate.

## Architecture

```
src/
├── types.ts              # DesignSystem model, 67 website types + groups + icons
├── store.ts              # Zustand: view, search/filter/selection/favorites/toast
├── prompt.ts             # buildDesignPrompt() — the copyable prompt text
├── hooks.ts              # clipboard, toast, URL sync, keyboard shortcuts
├── App.tsx               # shell: sidebar + topbar + the three views
├── designs/              # 29 design files + registry + theming + use-case index
│   ├── theme.ts          #   themeOf(), contrast/onColor, withAlpha, sorting
│   ├── usecases.ts       #   derived website-type index (rules + top-up)
│   └── extras.ts         #   per-design layout sets, block sets, dashboard extras
├── patterns/
│   ├── patterns.ts       #   153 pattern recipes + the CSS builder
│   ├── layouts.ts        #   canvas arrangements and stacked rhythms
│   ├── PatternView.tsx   #   48 block renderers + the browsable board
│   └── patterns.css      #   pattern primitives
└── components/
    ├── Sidebar.tsx       #   navigation, filters, website-type picker
    ├── Gallery.tsx       #   4-up cards, lazy thumbnails, infinite scroll
    ├── Preview.tsx       #   overlay: live/components/code/details, device modes
    ├── MiniSite.tsx      #   shared live renderer + per-instance CSS scoping
    ├── ComponentKit.tsx  #   110 themed components + the kit board
    ├── KitExplorer.tsx   #   kit-per-design view with compare mode
    ├── minisite.css      #   themed layout, motif variants, container queries
    └── kit.css           #   kit layout + motion
```

Design thumbnails and previews are the **same component** (`MiniSite`) — cards render it
scaled inside the thumb, the preview renders it full-size in a device frame. Each design's
`signatureCss` is auto-scoped per instance so 550 previews can coexist without style bleed.
Thumbnails use `compact` mode, which skips the kit and blocks sections so 550 scaled pages
stay cheap.

## Adding a design system

1. Add an object to the relevant `designs/*.ts` file (or a new file + import in
   `designs/index.ts`), matching the `DesignSystem` type.
2. Pick a `layout` from the archetypes and add any bespoke `signatureCss` (one rule per
   line — it gets auto-scoped).
3. Add a hero line in `MiniSite.tsx`'s `heroTitle` switch (optional — falls back to the
   design name).
4. Add a `LAYOUT_SETS` entry in `designs/extras.ts` so the arrangement switcher has options
   (2–4 arrangements; the **first must equal the design's card `layout` tag**).
5. Run `node scripts/wave6-wire.cjs`. It wires the id into the registry, the arrangement sets,
   the block-set rotation, and the mini-site hero titles, and it fails the run on duplicate
   palettes, near-identical taglines, same-category type or palette clashes, invalid website
   types, missing arrangement sets, or fonts that are not loaded in `index.html`.

The card, thumbnail, preview, code sample, prompt, and component kit are all derived
automatically from the data.

## Adding a pattern

1. Append a `PatternDef` to `PATTERNS` in `patterns/patterns.ts` — id, name, family,
   blurb, tags, and the block composition.
2. If it needs a multi-column arrangement, add an entry to `CANVAS` in `patterns/layouts.ts`
   using `grid-template-areas` and `.pt-i{n}` placement; otherwise add a `RHYTHM` entry.
3. Run `npm run verify` — it enforces unique recipes, unique arrangements, and scoped CSS.
