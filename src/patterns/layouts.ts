import type { PatternDef } from './patterns'

/**
 * Canvas refinements.
 *
 * Most patterns read fine as a single stacked column, but a good layout is
 * about what sits *beside* what. This table holds the multi-column
 * arrangements: each entry names a grid with `grid-template-areas` and pins
 * the pattern's blocks to those areas via their `pt-i{n}` index class.
 *
 * Entries here override the simpler default on the pattern definition, so
 * `patterns.ts` can stay focused on composition and copy.
 *
 * Format: id → [canvas declarations, descendant rules].
 */
export const CANVAS: Record<string, [layout: string, extra?: string]> = {
  /* ---------- marketing ---------- */
  'hero-fullbleed-overlap': [
    'display:grid; grid-template-columns:minmax(0,1fr); gap:18px; padding:0;',
    '.pt-i0{padding:14px 20px 0;} .pt-i1{border-radius:0; min-height:230px;} .pt-i2{margin:-46px 20px 0; background:var(--p-bg); box-shadow:var(--p-shadow);} .pt-i3,.pt-i4{margin:0 20px;}',
  ],
  'bento-feature-grid': [
    'display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); grid-auto-rows:86px; gap:14px; padding:20px;',
    '.pt-i1{grid-column:1/-1;} .pt-i2{grid-column:1/-1; display:contents;} .pt-i2>:nth-child(1){grid-column:span 2; grid-row:span 2;} .pt-i2>:nth-child(2){grid-column:span 2; grid-row:span 2;} .pt-i2>:nth-child(3){grid-column:span 1;} .pt-i2>:nth-child(4){grid-column:span 1;} .pt-i2>:nth-child(5){grid-column:span 2;} .pt-i3{grid-column:1/-1;}',
  ],
  'logo-cloud-wall': [
    'display:grid; grid-template-columns:minmax(0,1fr); gap:18px; padding:20px;',
    '.pt-i2{grid-template-columns:repeat(3,minmax(0,1fr));}',
  ],
  'alternating-zigzag': [
    'display:flex; flex-direction:column; gap:26px; padding:20px;',
    '.pt-i3{direction:rtl;} .pt-i3>*{direction:ltr;}',
  ],
  'faq-two-column': [
    'display:grid; grid-template-columns:minmax(0,0.8fr) minmax(0,1.2fr); grid-template-areas:"intro faq" "intro faq"; gap:28px; align-items:start; padding:20px;',
    '.pt-i0{grid-area:intro; position:sticky; top:12px;} .pt-i1{grid-area:faq;}',
  ],
  'newsletter-benefits': [
    'display:grid; grid-template-columns:minmax(0,1.2fr) minmax(0,0.8fr); grid-template-areas:"benefits form"; gap:26px; align-items:center; padding:20px;',
    '.pt-i0{grid-area:benefits;} .pt-i1{grid-area:form; align-self:stretch; justify-content:center;}',
  ],
  'case-study-results': [
    'display:grid; grid-template-columns:minmax(0,1fr) minmax(0,1fr); grid-template-areas:"head head" "media media" "brief results" "quote quote"; gap:20px; padding:20px;',
    '.pt-i0{grid-area:head;} .pt-i1{grid-area:media;} .pt-i2{grid-area:brief;} .pt-i3{grid-area:results; align-self:center;} .pt-i4{grid-area:quote;}',
  ],
  'metrics-first-landing': [
    'display:grid; grid-template-columns:repeat(6,minmax(0,1fr)); grid-template-areas:"kpis kpis kpis kpis kpis kpis" "head head head head list list" "cta cta cta cta cta cta"; gap:18px; padding:20px;',
    '.pt-i0{grid-area:kpis;} .pt-i1{grid-area:head; align-self:center;} .pt-i2{grid-area:list;} .pt-i3{grid-area:cta;}',
  ],
  'docs-home-search': [
    'display:grid; grid-template-columns:minmax(0,1fr) 230px; grid-template-areas:"head head" "search side" "cards side"; gap:16px 24px; align-items:start; padding:20px;',
    '.pt-i0{grid-area:head;} .pt-i1{grid-area:search;} .pt-i2{grid-area:cards;} .pt-i3{grid-area:side;}',
  ],
  'status-page': [
    'display:grid; grid-template-columns:210px minmax(0,1fr); grid-template-areas:"head head" "services log"; gap:20px; align-items:start; padding:20px;',
    '.pt-i0{grid-area:head;} .pt-i1{grid-area:services;} .pt-i2{grid-area:log;}',
  ],

  /* ---------- commerce ---------- */
  'product-grid-filter-rail': [
    'display:grid; grid-template-columns:190px minmax(0,1fr); grid-template-areas:"filters grid" "pager pager"; gap:20px; align-items:start; padding:20px;',
    '.pt-i0{grid-area:filters; position:sticky; top:10px;} .pt-i1{grid-area:grid;} .pt-i2{grid-area:pager;}',
  ],
  'product-detail-gallery': [
    'display:grid; grid-template-columns:minmax(0,1.15fr) minmax(0,0.85fr); grid-template-areas:"gallery buy" "tabs tabs" "related related" "reviews reviews"; gap:20px; align-items:start; padding:20px;',
    '.pt-i0{grid-area:gallery;} .pt-i1{grid-area:buy;} .pt-i2{grid-area:tabs;} .pt-i3{grid-area:related;} .pt-i4{grid-area:reviews;}',
  ],
  'cart-summary-drawer': [
    'display:grid; grid-template-columns:minmax(0,1.4fr) minmax(0,0.6fr); grid-template-areas:"items summary"; gap:22px; align-items:start; padding:20px;',
    '.pt-i0{grid-area:items;} .pt-i1{grid-area:summary; position:sticky; top:10px;}',
  ],
  'checkout-stepper': [
    'display:grid; grid-template-columns:minmax(0,1.3fr) 260px; grid-template-areas:"steps steps" "form summary"; gap:22px; align-items:start; padding:20px;',
    '.pt-i0{grid-area:steps;} .pt-i1{grid-area:form;} .pt-i2{grid-area:summary; position:sticky; top:10px;}',
  ],
  'category-mosaic': [
    'display:grid; grid-template-columns:repeat(6,minmax(0,1fr)); grid-auto-rows:92px; gap:12px; padding:20px;',
    '.pt-i0{grid-column:1/-1;} .pt-i1{grid-column:1/-1; display:contents;} .pt-i1>:nth-child(1){grid-column:span 4; grid-row:span 2;} .pt-i1>:nth-child(2){grid-column:span 2;} .pt-i1>:nth-child(3){grid-column:span 2;} .pt-i1>:nth-child(4){grid-column:span 2;} .pt-i1>:nth-child(5){grid-column:span 4;}',
  ],
  'wishlist-board': [
    'display:grid; grid-template-columns:minmax(0,1fr); gap:18px; padding:20px;',
    '.pt-i1{grid-template-columns:repeat(3,minmax(0,1fr));}',
  ],
  'store-locator': [
    'display:grid; grid-template-columns:minmax(0,1.1fr) minmax(0,0.9fr); grid-template-areas:"head head" "map stores"; gap:18px; align-items:start; padding:20px;',
    '.pt-i0{grid-area:head;} .pt-i1{grid-area:map;} .pt-i2{grid-area:stores;}',
  ],
  'coupon-deal-stack': [
    'display:grid; grid-template-columns:minmax(0,1fr); gap:16px; padding:20px;',
    '.pt-i1{grid-template-columns:repeat(2,minmax(0,1fr));} .pt-i1>.pt-card{border-style:dashed;}',
  ],
  'gift-finder-quiz': [
    'display:grid; grid-template-columns:minmax(0,0.9fr) minmax(0,1.1fr); grid-template-areas:"head head" "quiz results"; gap:22px; align-items:start; padding:20px;',
    '.pt-i0{grid-area:head;} .pt-i1{grid-area:quiz;} .pt-i2{grid-area:results;}',
  ],
  'size-guide': [
    'display:grid; grid-template-columns:minmax(0,1.4fr) minmax(0,0.6fr); grid-template-areas:"tabs tabs" "sizes help"; gap:18px; align-items:start; padding:20px;',
    '.pt-i0{grid-area:tabs;} .pt-i1{grid-area:sizes;} .pt-i2{grid-area:help;}',
  ],

  /* ---------- app ---------- */
  'analytics-dashboard': [
    'display:grid; grid-template-columns:172px minmax(0,1fr); grid-template-areas:"rail kpis" "rail chart" "rail table"; gap:18px; align-items:start; padding:18px;',
    '.pt-i0{grid-area:rail; grid-row:span 3; position:sticky; top:10px;} .pt-i1{grid-area:kpis;} .pt-i2{grid-area:chart;} .pt-i3{grid-area:table;}',
  ],
  'kpi-wall-trends': [
    'display:grid; grid-template-columns:minmax(0,1fr); gap:16px; padding:18px;',
    '.pt-i1{grid-template-columns:repeat(3,minmax(0,1fr));}',
  ],
  'kanban-board-shell': [
    'display:grid; grid-template-columns:150px minmax(0,1fr); grid-template-areas:"rail board"; gap:16px; align-items:start; padding:18px;',
    '.pt-i0{grid-area:rail; position:sticky; top:10px;} .pt-i1{grid-area:board;}',
  ],
  'calendar-agenda': [
    'display:grid; grid-template-columns:minmax(0,1.35fr) minmax(0,0.65fr); grid-template-areas:"month agenda"; gap:18px; align-items:start; padding:18px;',
    '.pt-i0{grid-area:month;} .pt-i1{grid-area:agenda; position:sticky; top:10px;}',
  ],
  'inbox-reading-pane': [
    'display:grid; grid-template-columns:96px 250px minmax(0,1fr); grid-template-areas:"rail list thread"; gap:14px; align-items:start; padding:18px;',
    '.pt-i0{grid-area:rail; grid-row:span 2;} .pt-i1{grid-area:list;} .pt-i2{grid-area:thread;}',
  ],
  'settings-section-nav': [
    'display:grid; grid-template-columns:180px minmax(0,1fr); grid-template-areas:"nav prefs"; gap:24px; align-items:start; padding:18px;',
    '.pt-i0{grid-area:nav; position:sticky; top:10px;} .pt-i1{grid-area:prefs;}',
  ],
  'integrations-toggles': [
    'display:grid; grid-template-columns:minmax(0,1fr); gap:16px; padding:18px;',
    '.pt-i2{grid-template-columns:repeat(3,minmax(0,1fr));}',
  ],
  'api-key-management': [
    'display:grid; grid-template-columns:minmax(0,1.3fr) minmax(0,0.7fr); grid-template-areas:"head head" "keys create"; gap:20px; align-items:start; padding:18px;',
    '.pt-i0{grid-area:head;} .pt-i1{grid-area:keys;} .pt-i2{grid-area:create;}',
  ],
  'billing-invoices': [
    'display:grid; grid-template-columns:minmax(0,1fr); gap:16px; padding:18px;',
    '.pt-i2{display:flex; align-items:center; gap:14px;} .pt-i2 .pt-grow{flex:1;}',
  ],
  'usage-quota-meters': [
    'display:grid; grid-template-columns:minmax(0,1fr); gap:16px; padding:18px;',
    '.pt-i2{border-color:var(--p-accent);}',
  ],
  'onboarding-checklist': [
    'display:grid; grid-template-columns:minmax(0,1fr) 230px; grid-template-areas:"head head" "tasks help"; gap:20px; align-items:start; padding:18px;',
    '.pt-i0{grid-area:head;} .pt-i1{grid-area:tasks;} .pt-i2{grid-area:help; position:sticky; top:10px;}',
  ],

  /* ---------- content ---------- */
  'article-sticky-toc': [
    'display:grid; grid-template-columns:minmax(0,0.26fr) minmax(0,0.74fr); grid-template-areas:"crumb crumb" "toc body" "toc pull" "more more"; gap:18px 26px; align-items:start; padding:20px;',
    '.pt-i0{grid-area:crumb;} .pt-i1{grid-area:toc; position:sticky; top:12px;} .pt-i2{grid-area:body;} .pt-i3{grid-area:pull;} .pt-i4{grid-area:more;}',
  ],
  'editorial-two-column': [
    'display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); grid-template-areas:"head head" "media media" "colA colB" "quote quote" "foot foot"; gap:22px; padding:20px;',
    '.pt-i0{grid-area:head;} .pt-i1{grid-area:media;} .pt-i2{grid-area:colA;} .pt-i3{grid-area:colB;} .pt-i4{grid-area:quote;} .pt-i5{grid-area:foot;}',
  ],
  'magazine-cover-grid': [
    'display:grid; grid-template-columns:repeat(5,minmax(0,1fr)); grid-auto-rows:96px; gap:12px; padding:20px;',
    '.pt-i0{grid-column:1/-1; border-bottom:3px double var(--p-ink); padding-bottom:10px;} .pt-i1{grid-column:1/-1; display:contents;} .pt-i1>:nth-child(1){grid-column:span 3; grid-row:span 3;} .pt-i1>:nth-child(2){grid-column:span 2;} .pt-i1>:nth-child(3){grid-column:span 2;} .pt-i1>:nth-child(4){grid-column:span 2; grid-row:span 2;} .pt-i2{grid-column:1/-1;}',
  ],
  'gallery-exhibition': [
    'display:grid; grid-template-columns:minmax(0,1fr) 210px; grid-template-areas:"head head" "works details"; gap:22px; align-items:start; padding:20px;',
    '.pt-i0{grid-area:head;} .pt-i1{grid-area:works;} .pt-i2{grid-area:details; position:sticky; top:12px;}',
  ],
  'podcast-episode-page': [
    'display:grid; grid-template-columns:minmax(0,1fr) 250px; grid-template-areas:"player player" "chapters transcript"; gap:20px; align-items:start; padding:20px;',
    '.pt-i0{grid-area:player;} .pt-i1{grid-area:chapters;} .pt-i2{grid-area:transcript;}',
  ],
  'podcast-show-index': [
    'display:grid; grid-template-columns:200px minmax(0,1fr); grid-template-areas:"profile profile" "best episodes"; gap:20px; align-items:start; padding:20px;',
    '.pt-i0{grid-area:profile;} .pt-i1{grid-area:episodes;} .pt-i2{grid-area:best;}',
  ],
  'video-watch-page': [
    'display:grid; grid-template-columns:minmax(0,1fr) 260px; grid-template-areas:"player upnext" "comments comments"; gap:20px; align-items:start; padding:20px;',
    '.pt-i0{grid-area:player;} .pt-i1{grid-area:upnext;} .pt-i2{grid-area:comments;}',
  ],
  'news-home-sections': [
    'display:grid; grid-template-columns:minmax(0,1fr); gap:18px; padding:20px;',
    '.pt-i2{grid-template-columns:repeat(3,minmax(0,1fr));}',
  ],
  'book-author-page': [
    'display:grid; grid-template-columns:220px minmax(0,1fr); grid-template-areas:"cover contents" "quote quote"; gap:20px 24px; align-items:start; padding:20px;',
    '.pt-i0{grid-area:cover;} .pt-i1{grid-area:contents;} .pt-i2{grid-area:quote;}',
  ],
  'docs-article-sidebar': [
    'display:grid; grid-template-columns:200px minmax(0,1fr); grid-template-areas:"nav crumb" "nav install" "nav toc" "nav pager"; gap:14px 26px; align-items:start; padding:20px;',
    '.pt-i0{grid-area:nav; position:sticky; top:10px;} .pt-i1{grid-area:crumb;} .pt-i2{grid-area:install;} .pt-i3{grid-area:toc;} .pt-i4{grid-area:pager;}',
  ],
  'recipe-ingredients-steps': [
    'display:grid; grid-template-columns:minmax(0,1fr) 250px; grid-template-areas:"head head" "media media" "method ingredients"; gap:20px 24px; align-items:start; padding:20px;',
    '.pt-i0{grid-area:head;} .pt-i1{grid-area:media;} .pt-i2{grid-area:method;} .pt-i3{grid-area:ingredients; position:sticky; top:12px;}',
  ],

  /* ---------- forms ---------- */
  'signin-split': [
    'display:grid; grid-template-columns:minmax(0,1fr) minmax(0,1fr); grid-template-areas:"art form"; gap:0; padding:0; min-height:360px;',
    '.pt-i0{grid-area:art; border-radius:0; min-height:100%;} .pt-i1{grid-area:form; border:none; border-radius:0; justify-content:center; padding:28px;}',
  ],
  'signup-multi-step': [
    'display:grid; grid-template-columns:240px minmax(0,1fr); grid-template-areas:"steps form"; gap:0; padding:0; min-height:340px;',
    '.pt-i0{grid-area:steps; padding:22px; border-right:1px solid var(--p-line); background:var(--p-surface);} .pt-i1{grid-area:form; border:none; border-radius:0; padding:28px;}',
  ],
  'contact-map-form': [
    'display:grid; grid-template-columns:minmax(0,1fr) minmax(0,1fr); grid-template-areas:"head head" "form map"; gap:20px; align-items:start; padding:20px;',
    '.pt-i0{grid-area:head;} .pt-i1{grid-area:form;} .pt-i2{grid-area:map;}',
  ],
  'appointment-booking': [
    'display:grid; grid-template-columns:minmax(0,1.1fr) minmax(0,0.9fr); grid-template-areas:"month slots" "details slots"; gap:20px; align-items:start; padding:20px;',
    '.pt-i0{grid-area:month;} .pt-i1{grid-area:slots; position:sticky; top:10px;} .pt-i2{grid-area:details;}',
  ],
  'donation-amounts': [
    'display:grid; grid-template-columns:minmax(0,1fr) 240px; grid-template-areas:"head head" "amounts impact"; gap:22px; align-items:start; padding:20px;',
    '.pt-i0{grid-area:head;} .pt-i1{grid-area:amounts;} .pt-i2{grid-area:impact;}',
  ],
  'invoice-payment': [
    'display:grid; grid-template-columns:minmax(0,1.2fr) minmax(0,0.8fr); grid-template-areas:"head head" "items pay"; gap:22px; align-items:start; padding:20px;',
    '.pt-i0{grid-area:head;} .pt-i1{grid-area:items;} .pt-i2{grid-area:pay;}',
  ],
  'identity-verification': [
    'display:grid; grid-template-columns:minmax(0,1fr) 240px; grid-template-areas:"steps steps" "upload status"; gap:20px; align-items:start; padding:20px;',
    '.pt-i0{grid-area:steps;} .pt-i1{grid-area:upload;} .pt-i2{grid-area:status;}',
  ],
  'job-application': [
    'display:grid; grid-template-columns:minmax(0,0.9fr) minmax(0,1.1fr); grid-template-areas:"role apply"; gap:26px; align-items:start; padding:20px;',
    '.pt-i0{grid-area:role; position:sticky; top:10px;} .pt-i1{grid-area:apply;}',
  ],

  /* ---------- data ---------- */
  'weekly-schedule-grid': [
    'display:grid; grid-template-columns:minmax(0,1fr); gap:16px; padding:18px;',
    '.pt-i1{grid-template-columns:repeat(7,minmax(0,1fr));}',
  ],
  'audit-timeline-filtered': [
    'display:grid; grid-template-columns:170px minmax(0,1fr); grid-template-areas:"filters events"; gap:22px; align-items:start; padding:18px;',
    '.pt-i0{grid-area:filters; position:sticky; top:10px;} .pt-i1{grid-area:events;}',
  ],
  'report-builder-panes': [
    'display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); grid-template-areas:"pane1 pane2 pane3" "preview preview preview"; gap:14px; padding:18px;',
    '.pt-i0{grid-area:pane1;} .pt-i1{grid-area:pane2;} .pt-i2{grid-area:pane3;} .pt-i3{grid-area:preview;}',
  ],
  'activity-heatmap': [
    'display:grid; grid-template-columns:minmax(0,1fr) 200px; grid-template-areas:"head head" "grid weekday"; gap:18px; align-items:start; padding:18px;',
    '.pt-i0{grid-area:head;} .pt-i1{grid-area:grid;} .pt-i2{grid-area:weekday;}',
  ],
  'conversion-funnel': [
    'display:grid; grid-template-columns:minmax(0,1fr); gap:16px; padding:18px;',
    '.pt-i2{grid-template-columns:repeat(5,minmax(0,1fr));}',
  ],

  /* ---------- social ---------- */
  'social-feed-composer': [
    'display:grid; grid-template-columns:minmax(0,1fr) 220px; grid-template-areas:"composer side" "feed side"; gap:20px; align-items:start; padding:18px;',
    '.pt-i0{grid-area:composer;} .pt-i1{grid-area:feed;} .pt-i2{grid-area:side; position:sticky; top:10px;}',
  ],
  'forum-thread': [
    'display:grid; grid-template-columns:minmax(0,1fr) 220px; grid-template-areas:"crumb crumb" "thread related"; gap:20px; align-items:start; padding:18px;',
    '.pt-i0{grid-area:crumb;} .pt-i1{grid-area:thread;} .pt-i2{grid-area:related; position:sticky; top:10px;}',
  ],
  'messaging-two-pane': [
    'display:grid; grid-template-columns:220px minmax(0,1fr); grid-template-areas:"threads convo"; gap:0; padding:0; min-height:360px;',
    '.pt-i0{grid-area:threads; border-right:1px solid var(--p-line); padding:12px;} .pt-i1{grid-area:convo; padding:16px;}',
  ],
  'notification-center': [
    'display:grid; grid-template-columns:minmax(0,1.25fr) minmax(0,0.75fr); grid-template-areas:"head head" "feed delivery"; gap:20px; align-items:start; padding:18px;',
    '.pt-i0{grid-area:head;} .pt-i1{grid-area:feed;} .pt-i2{grid-area:delivery;}',
  ],
  'review-wall': [
    'display:grid; grid-template-columns:minmax(0,1fr); gap:16px; padding:18px;',
    '.pt-i1{grid-template-columns:repeat(3,minmax(0,1fr));}',
  ],

  /* ---------- system ---------- */
  'empty-state-variants': [
    'display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); grid-template-areas:"head head head" "one two three"; gap:16px; padding:20px;',
    '.pt-i0{grid-area:head;} .pt-i1{grid-area:one;} .pt-i2{grid-area:two;} .pt-i3{grid-area:three; border-color:var(--p-bad);}',
  ],
  'error-state-gallery': [
    'display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); grid-template-areas:"head head" "banner toast" "field block"; gap:16px; padding:20px;',
    '.pt-i0{grid-area:head;} .pt-i1{grid-area:banner;} .pt-i2{grid-area:toast;} .pt-i3{grid-area:field;} .pt-i4{grid-area:block;}',
  ],
  'migration-checklist': [
    'display:grid; grid-template-columns:minmax(0,1fr) 230px; grid-template-areas:"head head" "tasks rollback"; gap:22px; align-items:start; padding:20px;',
    '.pt-i0{grid-area:head;} .pt-i1{grid-area:tasks;} .pt-i2{grid-area:rollback; position:sticky; top:10px;}',
  ],
  'permission-prompts': [
    'display:grid; grid-template-columns:minmax(0,1fr); gap:18px; padding:20px;',
    '.pt-i1{grid-template-columns:repeat(3,minmax(0,1fr));}',
  ],

  /* ---- wave 5 arrangements: media-first PDP, release review, member directory ---- */

  'product-detail-media': [
    'display:grid; grid-template-columns:minmax(0,1.15fr) minmax(280px,0.85fr); grid-template-areas:"media buy" "media specs" "media review"; gap:20px 24px; align-items:start; padding:22px;',
    '.pt-i0{grid-area:media;} .pt-i1{grid-area:buy; position:sticky; top:12px;} .pt-i2{grid-area:specs;} .pt-i3{grid-area:review;}',
  ],

  'release-readiness': [
    'display:grid; grid-template-columns:minmax(0,1.2fr) minmax(260px,0.8fr); grid-template-areas:"checks call" "buglist call"; gap:18px 22px; align-items:start; padding:20px;',
    '.pt-i0{grid-area:checks;} .pt-i1{grid-area:buglist;} .pt-i2{grid-area:call; position:sticky; top:12px;}',
  ],

  'profiles-directory': [
    'display:grid; grid-template-columns:220px minmax(0,1fr); grid-template-areas:"filters people" "filters invite"; gap:18px 24px; align-items:start; padding:20px;',
    '.pt-i0{grid-area:filters; position:sticky; top:12px;} .pt-i1{grid-area:people; grid-template-columns:repeat(3,minmax(0,1fr));} .pt-i2{grid-area:invite;}',
  ],
  /* ---- wave 7 · batch 1 ---- */

  'harbour-tide-table': [
  'display:grid; grid-template-columns:200px minmax(0,1fr); grid-template-areas:"rail chart" "rail table" "rail status"; gap:16px; align-items:start; padding:20px;',
  '.pt-i0{grid-area:rail; position:sticky; top:12px;} .pt-i1{grid-area:chart;} .pt-i2{grid-area:table;} .pt-i3{grid-area:status;}',
  ],
  'kiln-firing-schedule': [
  'display:grid; grid-template-columns:minmax(0,1.5fr) minmax(240px,1fr); grid-template-areas:"bar bar" "week curve" "week controls"; gap:16px 20px; align-items:start; padding:20px;',
  '.pt-i0{grid-area:bar;} .pt-i1{grid-area:week;} .pt-i2{grid-area:curve;} .pt-i3{grid-area:controls;}',
  ],
  'accession-registry': [
  'display:grid; grid-template-columns:64px minmax(0,1fr) 300px; grid-template-areas:"bar bar bar" "alpha rows detail"; gap:16px 20px; align-items:start; padding:20px;',
  '.pt-i0{grid-area:bar;} .pt-i1{grid-area:alpha; position:sticky; top:12px;} .pt-i2{grid-area:rows;} .pt-i3{grid-area:detail; position:sticky; top:12px;}',
  ],
  'night-market-aisles': [
  'display:grid; grid-template-columns:repeat(6,minmax(0,1fr)); grid-template-areas:"head head head head head head" "aisles aisles aisles aisles aisles aisles" "stalls stalls stalls stalls offers offers" "stalls stalls stalls stalls call call"; gap:14px 16px; align-items:start; padding:20px;',
  '.pt-i0{grid-area:head;} .pt-i1{grid-area:aisles;} .pt-i2{grid-area:stalls;} .pt-i3{grid-area:offers;} .pt-i4{grid-area:call; align-self:end;}',
  ],

}

/**
 * Rhythm and density for the stacked-section patterns.
 *
 * Some patterns are legitimately a column of sections — a changelog, a
 * comparison matrix, a reading page. For those the arrangement is the
 * *rhythm*: how much air sits between sections, how wide the measure is,
 * whether the column is centred or flush. These are deliberate choices per
 * pattern, not defaults, and they are what stops ten stacked pages from
 * feeling like one template.
 */
export const RHYTHM: Record<string, [layout: string, extra?: string]> = {
  'hero-split-proof': ['display:grid; grid-template-columns:minmax(0,1fr); gap:26px; padding:20px;'],
  'pricing-three-tier': [
    'display:grid; grid-template-columns:minmax(0,1fr); gap:30px; padding:24px 20px;',
    '.pt-pricing{align-items:start;} .pt-pricing>:nth-child(2){transform:translateY(-12px); border-color:var(--p-brand); border-width:2px;}',
  ],
  'pricing-matrix': ['display:grid; grid-template-columns:minmax(0,1fr); gap:18px; padding:22px 20px 34px;'],
  'cta-band-inline-form': ['display:grid; grid-template-columns:minmax(0,1fr); gap:20px; padding:20px; align-content:start;'],
  'waitlist-countdown': ['display:grid; grid-template-columns:minmax(0,1fr); gap:22px; justify-items:center; text-align:center; padding:28px 20px;'],
  'changelog-timeline': [
    'display:grid; grid-template-columns:minmax(0,1fr); gap:18px; padding:22px;',
    '.pt-i1{border-left:2px solid var(--p-line); padding-left:20px;}',
  ],
  'public-roadmap': [
    'display:grid; grid-template-columns:minmax(0,1fr); gap:22px; padding:20px;',
    '.pt-i1{grid-template-columns:repeat(3,minmax(0,1fr));}',
  ],
  'order-tracking': [
    'display:grid; grid-template-columns:minmax(0,1fr) minmax(0,1fr); grid-template-areas:"steps steps" "map log"; gap:18px; align-items:start; padding:20px;',
    '.pt-i0{grid-area:steps;} .pt-i1{grid-area:map;} .pt-i2{grid-area:log;}',
  ],
  'flash-sale-countdown': ['display:grid; grid-template-columns:minmax(0,1fr); gap:14px; padding:0 20px 22px;'],
  'subscription-picker': ['display:grid; grid-template-columns:minmax(0,1fr); gap:24px; justify-items:center; text-align:center; padding:26px 20px;', '.pt-i1{align-self:center;}'],
  'compare-two-products': ['display:grid; grid-template-columns:minmax(0,1fr); gap:24px; padding:24px 20px;'],
  'loyalty-tiers': [
    'display:grid; grid-template-columns:minmax(0,1fr); gap:26px; padding:20px;',
    '.pt-i0{flex-direction:column; align-items:stretch; gap:12px;} .pt-i0 .pt-step{width:100%;} .pt-i0 .pt-step-line{display:none;}',
  ],
  'marketplace-sellers': [
    'display:grid; grid-template-columns:minmax(0,1fr) 260px; grid-template-areas:"find find" "results vendors" "pager pager"; gap:18px; align-items:start; padding:20px;',
    '.pt-i0{grid-area:find;} .pt-i1{grid-area:vendors;} .pt-i2{grid-area:results;} .pt-i3{grid-area:pager;}',
  ],
  'admin-table-bulk': ['display:grid; grid-template-columns:minmax(0,1fr); gap:12px; padding:18px; align-content:start;'],
  'profile-overview': ['display:grid; grid-template-columns:minmax(0,1fr); gap:22px; padding:18px;', '.pt-i0{padding:22px;}'],
  'team-directory': ['display:grid; grid-template-columns:minmax(0,1fr); gap:18px; padding:18px;'],
  'audit-log-filters': ['display:grid; grid-template-columns:minmax(0,1fr); gap:14px; padding:18px; align-content:start;'],
  'permissions-matrix': ['display:grid; grid-template-columns:minmax(0,1fr); gap:20px; padding:18px;'],
  'webhook-deliveries': [
    'display:grid; grid-template-columns:minmax(0,1.35fr) minmax(0,0.65fr); grid-template-areas:"table payload"; gap:18px; align-items:start; padding:18px;',
    '.pt-i0{grid-area:table;} .pt-i1{grid-area:payload;}',
  ],
  'command-palette-page': [
    'display:grid; grid-template-columns:minmax(0,1fr) 320px; grid-template-areas:"bar bar" "recent keys"; gap:16px; align-items:start; padding:20px;',
    '.pt-i0{grid-area:bar;} .pt-i1{grid-area:recent;} .pt-i2{grid-area:keys;}',
  ],
  'global-search-results': ['display:grid; grid-template-columns:minmax(0,1fr); gap:16px; padding:18px;', '.pt-i2 .pt-list-row:first-child{border-color:var(--p-brand);}'],
  'blog-index-featured': ['display:grid; grid-template-columns:minmax(0,1fr); gap:26px; padding:20px;', '.pt-i1{border-color:var(--p-brand);}'],
  'photo-story-captions': ['display:grid; grid-template-columns:minmax(0,1fr); gap:24px; padding:0 20px 22px;'],
  'long-read-pull-quotes': ['display:grid; grid-template-columns:minmax(0,1fr); gap:22px; padding:28px 34px; max-width:540px; margin:0 auto;'],
  'password-reset': [
    'display:grid; grid-template-columns:minmax(0,1fr); gap:16px; justify-items:center; text-align:center; padding:44px 20px;',
    '.pt-canvas>*{width:min(360px,100%);}',
  ],
  'otp-verification': ['display:grid; grid-template-columns:minmax(0,1fr); gap:20px; padding:34px 20px; max-width:420px; margin:0 auto;', '.pt-input{letter-spacing:.5em;}'],
  'survey-questionnaire': ['display:grid; grid-template-columns:minmax(0,1fr); gap:20px; padding:26px 20px; max-width:520px; margin:0 auto;'],
  'restaurant-reservation': ['display:grid; grid-template-columns:minmax(0,1fr); gap:18px; padding:0 20px 20px;'],
  'feature-comparison-matrix': [
    'display:grid; grid-template-columns:minmax(0,1fr); gap:16px; padding:18px 18px 34px;',
    '.pt-table th:first-child,.pt-table td:first-child{position:sticky; left:0; background:var(--p-bg);}',
  ],
  'financial-statement': ['display:grid; grid-template-columns:minmax(0,1fr); gap:20px; padding:18px;'],
  'crm-pipeline-table': ['display:grid; grid-template-columns:minmax(0,1fr); gap:16px; padding:18px; align-content:start;'],
  'leaderboard-table': [
    'display:grid; grid-template-columns:minmax(0,1fr); gap:14px; padding:18px;',
    '.pt-table tbody tr:nth-child(-n+3) td{font-weight:700; background:color-mix(in srgb,var(--p-brand) 6%,transparent);}',
  ],
  'inventory-table': ['display:grid; grid-template-columns:minmax(0,1fr); gap:15px; padding:18px; align-content:start;'],
  'invoice-list-status': ['display:grid; grid-template-columns:minmax(0,1fr); gap:17px; padding:18px;'],
  'cohort-retention-grid': [
    'display:grid; grid-template-columns:minmax(0,1fr); gap:18px; padding:18px;',
    '.pt-table td:not(:first-child){text-align:center; font-variant-numeric:tabular-nums;}',
  ],
  'community-members-grid': ['display:grid; grid-template-columns:minmax(0,1fr); gap:19px; padding:18px;'],
  'events-listing': ['display:grid; grid-template-columns:minmax(0,1fr); gap:18px; padding:18px;', '.pt-cards{grid-template-columns:repeat(2,minmax(0,1fr));}'],
  'event-detail-agenda': ['display:grid; grid-template-columns:minmax(0,1fr); gap:0; padding:0;', '.pt-canvas>*:not(.pt-hero){margin-inline:20px; padding-bottom:18px;} .pt-hero{border-radius:0; min-height:180px;}'],
  'profile-match-cards': ['display:grid; grid-template-columns:minmax(0,1fr); gap:20px; place-items:center; padding:28px 20px;', '.pt-canvas>.pt-card{width:min(300px,100%); box-shadow:var(--p-shadow);}'],
  'page-not-found': [
    'display:grid; grid-template-columns:minmax(0,1fr); gap:22px; justify-items:center; text-align:center; padding:56px 24px;',
    '.pt-h1{font-size:64px; letter-spacing:-.06em;}',
  ],
  'maintenance-mode': ['display:grid; grid-template-columns:minmax(0,1fr); gap:20px; justify-items:center; text-align:center; padding:44px 22px; max-width:620px; margin:0 auto;'],
  'loading-skeletons': ['display:grid; grid-template-columns:minmax(0,1fr); gap:20px; padding:22px;'],
  'consent-banners': [
    'display:grid; grid-template-columns:minmax(0,1fr); gap:14px; padding:22px; align-content:center;',
    '.pt-canvas>.pt-banner:nth-of-type(2){background:var(--p-brand);} .pt-canvas>.pt-banner:nth-of-type(3){background:var(--p-surface); color:var(--p-ink); border:1px solid var(--p-line);}',
  ],
  'search-no-results': ['display:grid; grid-template-columns:minmax(0,1fr); gap:20px; padding:24px 20px;', '.pt-i1{background:var(--p-surface);}'],
  'offline-retry': ['display:grid; grid-template-columns:minmax(0,1fr); gap:18px; justify-items:center; padding:32px 20px; max-width:480px; margin:0 auto;'],
  'hero-centered-shot': [
    'display:grid; grid-template-columns:minmax(0,1fr); gap:24px; justify-items:center; text-align:center; padding:28px 20px;',
    '.pt-i2{width:100%;} .pt-i3,.pt-i4{width:100%; text-align:left;}',
  ],

  /* ---------- wave 3 ---------- */
  'webinar-registration': [
    'display:grid; grid-template-columns:minmax(0,1fr); gap:20px; padding:24px 22px; max-width:760px; margin:0 auto;',
    '.pt-i2{border-color:var(--p-brand); border-width:2px;}',
  ],
  'app-download-banner': [
    'display:grid; grid-template-columns:minmax(0,1fr); gap:22px; padding:0 0 22px;',
    '.pt-i0{border-radius:0;}',
  ],
  'gift-card-builder': [
    'display:grid; grid-template-columns:minmax(0,1fr); gap:20px; padding:22px 20px;',
    '.pt-i2{border-radius:0; min-height:200px;}',
  ],
  'rental-availability': [
    'display:grid; grid-template-columns:minmax(0,1.2fr) minmax(0,0.8fr); grid-template-areas:"month month" "units filters"; gap:18px; align-items:start; padding:20px;',
    '.pt-i0{grid-area:month;} .pt-i1{grid-area:units;} .pt-i2{grid-area:filters; position:sticky; top:10px;}',
  ],
  'accessibility-statement': [
    'display:grid; grid-template-columns:minmax(0,1fr); gap:18px; padding:26px 22px; max-width:720px; margin:0 auto;',
    '.pt-i2 .pt-list-row{align-items:flex-start;}',
  ],
  'feature-request-board': [
    'display:grid; grid-template-columns:minmax(0,1fr); gap:16px; padding:20px;',
    '.pt-i0{border-bottom:none; padding-bottom:0;} .pt-i1{grid-template-columns:repeat(4,minmax(0,1fr));} .pt-i2{border-top:none;}',
  ],
  'glossary-index': [
    'display:grid; grid-template-columns:minmax(0,1fr); gap:16px; padding:22px 20px;',
    '.pt-i2 td:first-child{font-weight:700;}',
  ],
  'transcript-reader': [
    'display:grid; grid-template-columns:minmax(0,1fr); gap:20px; padding:22px 20px; max-width:820px; margin:0 auto;',
    '.pt-i1 .pt-list-row{border-left:2px solid transparent;} .pt-i1 .pt-list-row:first-child{border-left-color:var(--p-brand);}',
  ],
  'refund-request-flow': [
    'display:grid; grid-template-columns:minmax(0,1fr); gap:18px; padding:24px 22px; max-width:560px; margin:0 auto;',
    '.pt-i3{position:sticky; bottom:0;}',
  ],
  'team-invitation': [
    'display:grid; grid-template-columns:minmax(0,1fr); gap:18px; padding:26px 22px; max-width:620px; margin:0 auto;',
  ],
  'ab-test-results': [
    'display:grid; grid-template-columns:minmax(0,1fr); gap:18px; padding:20px;',
    '.pt-i2 td:nth-child(2), .pt-i2 td:nth-child(3){font-variant-numeric:tabular-nums; text-align:center;}',
  ],
  'dm-request-inbox': [
    'display:grid; grid-template-columns:230px minmax(0,1fr) 210px; grid-template-areas:"requests convo info"; gap:14px; align-items:start; padding:18px;',
    '.pt-i0{grid-area:requests; position:sticky; top:10px;} .pt-i1{grid-area:convo;} .pt-i2{grid-area:info;}',
  ],
  'event-photo-wall': [
    'display:grid; grid-template-columns:minmax(0,1fr); gap:18px; padding:20px;',
    '.pt-i0{grid-template-columns:repeat(6,minmax(0,1fr));}',
  ],
  'keyboard-shortcuts-sheet': [
    'display:grid; grid-template-columns:minmax(0,1fr); gap:16px; padding:24px 22px; max-width:640px; margin:0 auto;',
    '.pt-i1 td:last-child{text-align:right; font-variant-numeric:tabular-nums;}',
  ],
  /* ---- wave 7 · batch 1 ---- */

  'underwriting-worksheet': [
  'display:grid; grid-template-columns:minmax(0,780px); justify-content:center; gap:18px; padding:24px 20px 34px;',
  '.pt-i3{position:sticky; bottom:14px;}',
  ],

}

/** The canvas arrangement for a pattern, preferring the refined entry. */
export function canvasFor(p: PatternDef): { layout: string; extra?: string } {
  const override = CANVAS[p.id] ?? RHYTHM[p.id]
  if (override) return { layout: override[0], extra: override[1] }
  return { layout: p.layout, extra: p.extra }
}

/** Ids that carry a refined multi-column arrangement. */
export const REFINED_IDS = Object.keys(CANVAS)

/** Ids that carry a tailored stacked-section rhythm. */
export const RHYTHM_IDS = Object.keys(RHYTHM)
