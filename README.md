# The Design Vault

A production-grade design-system showcase: **134 curated, intentionally distinct design
systems**, a **148-layout pattern library**, and a **70-component kit** — all browsable,
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
| **Design systems** | 134 systems as live thumbnails, **four per row** (five on very wide screens, stepping down to 3 → 2 → 1). |
| **Pattern library** | 148 production layouts with live previews, filterable by family and searchable by block. |
| **Component kit** | The 53-component kit rendered for any design — with a side-by-side compare mode. |

On narrow screens the sidebar becomes a drawer (hamburger in the top bar, `Esc` to close,
`/` to open-and-focus search).

## What's inside

### Design systems (100)

Every system ships: philosophy, typography (display + body fonts, scale, leading, tracking),
6-color palette, component specs, spacing rhythm, motion rules, responsive rules,
accessibility notes, and a themed live preview driven by those same tokens. Each card opens
a full preview with:

- **Live preview** — the complete page, plus the full component kit and per-design content
  blocks, with Desktop / Tablet / Mobile framing (container queries, so the design truly
  responds) and an arrangement switcher (2–3 layout archetypes per design).
- **Components** — all 62 kit components themed by that design alone.
- **Code** — a simplified, readable HTML/CSS sample (tokens + one hero).
- **Details** — philosophy, click-to-copy palette, type scale, component specs, a themed
  playground, the full prompt, and JSON / CSS-variable export.

### The component kit (70 components, per design)

`src/components/ComponentKit.tsx` implements one vocabulary — buttons, fields, selection
controls, feedback, data display, navigation, and overlays — and renders it entirely from
whatever tokens it is handed. Nothing is hard-coded, which is why the same kit reads as a
different product in every one of the 134 systems. Groups:

**Inputs & actions** (13) · **Selection & toggles** (8) · **Feedback & status** (10) ·
**Data display** (10) · **Navigation** (7) · **Overlays & media** (14)

### The pattern library (148 layouts)

`src/patterns/` ships 148 genuinely distinct layout recipes: heroes, bento grids, filter
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
- 91 of the 148 use a genuine multi-track arrangement (rails, splits, mosaics, DAGs);
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

## Architecture

```
src/
├── types.ts              # DesignSystem model, 67 website types + groups + icons
├── store.ts              # Zustand: view, search/filter/selection/favorites/toast
├── prompt.ts             # buildDesignPrompt() — the copyable prompt text
├── hooks.ts              # clipboard, toast, URL sync, keyboard shortcuts
├── App.tsx               # shell: sidebar + topbar + the three views
├── designs/              # 17 category files + registry + theming + use-case index
│   ├── theme.ts          #   themeOf(), contrast/onColor, withAlpha, sorting
│   ├── usecases.ts       #   derived website-type index (rules + top-up)
│   └── extras.ts         #   per-design layout sets, block sets, dashboard extras
├── patterns/
│   ├── patterns.ts       #   148 pattern recipes + the CSS builder
│   ├── layouts.ts        #   canvas arrangements and stacked rhythms
│   ├── PatternView.tsx   #   48 block renderers + the browsable board
│   └── patterns.css      #   pattern primitives
└── components/
    ├── Sidebar.tsx       #   navigation, filters, website-type picker
    ├── Gallery.tsx       #   4-up cards, lazy thumbnails, infinite scroll
    ├── Preview.tsx       #   overlay: live/components/code/details, device modes
    ├── MiniSite.tsx      #   shared live renderer + per-instance CSS scoping
    ├── ComponentKit.tsx  #   53 themed components + the kit board
    ├── KitExplorer.tsx   #   kit-per-design view with compare mode
    ├── minisite.css      #   themed layout, motif variants, container queries
    └── kit.css           #   kit layout + motion
```

Design thumbnails and previews are the **same component** (`MiniSite`) — cards render it
scaled inside the thumb, the preview renders it full-size in a device frame. Each design's
`signatureCss` is auto-scoped per instance so 100 previews can coexist without style bleed.
Thumbnails use `compact` mode, which skips the kit and blocks sections so 100 scaled pages
stay cheap.

## Adding a design system

1. Add an object to the relevant `designs/*.ts` file (or a new file + import in
   `designs/index.ts`), matching the `DesignSystem` type.
2. Pick a `layout` from the archetypes and add any bespoke `signatureCss` (one rule per
   line — it gets auto-scoped).
3. Add a hero line in `MiniSite.tsx`'s `heroTitle` switch (optional — falls back to the
   design name).
4. Add a `LAYOUT_SETS` entry in `designs/extras.ts` so the arrangement switcher has options.

The card, thumbnail, preview, code sample, prompt, and component kit are all derived
automatically from the data.

## Adding a pattern

1. Append a `PatternDef` to `PATTERNS` in `patterns/patterns.ts` — id, name, family,
   blurb, tags, and the block composition.
2. If it needs a multi-column arrangement, add an entry to `CANVAS` in `patterns/layouts.ts`
   using `grid-template-areas` and `.pt-i{n}` placement; otherwise add a `RHYTHM` entry.
3. Run `npm run verify` — it enforces unique recipes, unique arrangements, and scoped CSS.
