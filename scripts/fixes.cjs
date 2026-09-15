/* One-shot fixes for wave-2 verify findings. Run: node scripts/fixes.cjs */
const fs = require('fs')

let edits = 0
function patch(file, pairs) {
  let src = fs.readFileSync(file, 'utf8')
  let n = 0
  for (const [from, to] of pairs) {
    if (!src.includes(from)) { console.log(`MISS in ${file}: ${JSON.stringify(from.slice(0, 60))}`); continue }
    src = src.split(from).join(to)
    n++
  }
  fs.writeFileSync(file, src)
  edits += n
  console.log(`${file}: ${n} edits`)
}

// --- 1. Same-category font-pair & palette collisions in new designs ---
patch('src/designs/maximalism.ts', [
  // acid-garden: Fraunces|Archivo collided with editorial-maximalist; acid-garden is a
  // seeded permaculture scene — use Young Serif (seed-packet warmth) + Space Grotesk (grid precision)
  ["displayFont: 'Fraunces',\n      bodyFont: 'Archivo',\n      scale: '13 / 15 / 18 / 22 / 30 / 46 / 88',\n      lineHeights: 'Display 1.05, body 1.6',\n      letterSpacing: 'Display 0.01em, labels 0.12em uppercase',\n    },\n    colors: {\n      primary: '#b6ff2e',", "displayFont: 'Young Serif',\n      bodyFont: 'Space Grotesk',\n      scale: '13 / 15 / 18 / 22 / 30 / 46 / 88',\n      lineHeights: 'Display 1.05, body 1.6',\n      letterSpacing: 'Display 0.01em, labels 0.12em uppercase',\n    },\n    colors: {\n      primary: '#b6ff2e',"],
  ['Fraunces at 144–200px for hero display with tight leading, paired with Archivo for captions and body. Massive pull-quote bands invert colors mid-page.', 'Young Serif sets headline beds at 96–160px with tight leading; Space Grotesk handles captions, data rows, and body. Massive pull-quote bands invert colors mid-page.'],
  ["bodyFont: 'Archivo',\n      scale: '13 / 15 / 17 / 20 / 25 / 34 / 68',\n      lineHeights: 'Display 1.05, body 1.62',\n      letterSpacing: 'Display 0, labels 0.1em uppercase',\n    },\n    colors: {\n      primary: '#ff5da2',", "bodyFont: 'Space Grotesk',\n      scale: '13 / 15 / 17 / 20 / 25 / 34 / 68',\n      lineHeights: 'Display 1.05, body 1.62',\n      letterSpacing: 'Display 0, labels 0.1em uppercase',\n    },\n    colors: {\n      primary: '#ff5da2',"],
  ['Fredoka carries display at 700; Nunito keeps body friendly.', 'Fredoka carries display at 700; Space Grotesk keeps body friendly with a technical undercurrent.'],
  // collision-course: differentiate palette from playful-maximalist (primary+background+accent collide)
  ["secondary: '#2b2140',\n      accent: '#ffd23f',\n      neutral: '#f2e9ff',\n      background: '#fff6ec',", "secondary: '#2b2140',\n      accent: '#7c6ff0',\n      neutral: '#f2e9ff',\n      background: '#fff6ec',"],
])

patch('src/designs/brutalism.ts', [
  // steel-plant: Archivo|IBM Plex Mono collided with scaffold
  ["displayFont: 'Oxanium',\n      bodyFont: 'IBM Plex Mono',", "displayFont: 'Archivo',\n      bodyFont: 'IBM Plex Mono',"],
  ['Chassis #15181c with panel #20262c, safety-orange #ff7a1a actuators, gauge-blue #4f9bc4 readouts, and #e6e9ec text. Archivo caps label each instrument; IBM Plex Mono renders values.', 'Chassis #15181c with panel #20262c, safety-orange #ff7a1a actuators, gauge-blue #4f9bc4 readouts, and #e6e9ec text. Archivo caps label each instrument; IBM Plex Mono renders values and readouts.'],
  // brut-sunbelt: Oswald|Archivo collided with concrete-slab
  ["displayFont: 'Oswald',\n      bodyFont: 'Archivo',\n      scale: '14 / 16 / 18 / 22 / 30 / 42 / 72',", "displayFont: 'Bebas Neue',\n      bodyFont: 'Karla',\n      scale: '14 / 16 / 18 / 22 / 30 / 42 / 72',"],
  ['Oswald caps carry wayfinding; Archivo sets body.', 'Bebas Neue wayfinding caps tower over Karla body copy.'],
])

patch('src/designs/luxury.ts', [
  // champagne-noir: Fraunces|IBM Plex Sans collided with dark-luxury
  ["Fraunces italic opens evenings; IBM Plex Sans serves the details.", "Fraunces italic opens evenings; Spectral serves the details with engraved precision."],
  ["displayFont: 'Fraunces',\n      bodyFont: 'IBM Plex Sans',\n      scale: '13 / 15 / 17 / 21 / 26 / 36 / 66',", "displayFont: 'Fraunces',\n      bodyFont: 'Spectral',\n      scale: '13 / 15 / 17 / 21 / 26 / 36 / 66',"],
  // opera-box: Playfair|Karla collided with minimalist-luxury
  ["Playfair Display italic performs headlines; Karla sets the programme notes.", "Cormorant Garamond italic performs headlines; Source Sans 3 sets the programme notes."],
  ["displayFont: 'Playfair Display',\n      bodyFont: 'Karla',\n      scale: '13 / 15 / 17 / 21 / 27 / 38 / 70',", "displayFont: 'Cormorant Garamond',\n      bodyFont: 'Source Sans 3',\n      scale: '13 / 15 / 17 / 21 / 27 / 38 / 70',"],
])

patch('src/designs/professional.ts', [
  // ledger-fintech: IBM|IBM trio collision — fintech keeps Plex Sans UI, adds Plex Mono identity
  ["displayFont: 'IBM Plex Sans',\n      bodyFont: 'IBM Plex Sans',\n      scale: '12 / 14 / 16 / 19 / 24 / 32 / 52',", "displayFont: 'IBM Plex Mono',\n      bodyFont: 'IBM Plex Sans',\n      scale: '12 / 14 / 16 / 19 / 24 / 32 / 52',"],
  ['IBM Plex Sans carries UI copy; IBM Plex Mono sets every number in fixed-width columns so decimals align.', 'IBM Plex Mono stamps the identity — totals, tickers, headers; IBM Plex Sans carries UI copy so decimals align and prose stays humane.'],
  // clinical-care: IBM|IBM — healthcare gets warm-but-systematic pairing
  ["displayFont: 'IBM Plex Sans',\n      bodyFont: 'IBM Plex Sans',\n      scale: '13 / 15 / 17 / 21 / 26 / 34 / 56',", "displayFont: 'Livvic',\n      bodyFont: 'Source Sans 3',\n      scale: '13 / 15 / 17 / 21 / 26 / 34 / 56',"],
  ['IBM Plex Sans keeps care copy plain and legible at arm’s length.', 'Livvic headlines stay warm; Source Sans 3 keeps care copy plain and legible at arm’s length.'],
  // briefcase-slate: Source Sans 3|Source Sans 3 collided with corporate-blue
  ["displayFont: 'Source Sans 3',\n      bodyFont: 'Source Sans 3',\n      scale: '12 / 14 / 16 / 19 / 24 / 32 / 54',", "displayFont: 'Familjen Grotesk',\n      bodyFont: 'Source Sans 3',\n      scale: '12 / 14 / 16 / 19 / 24 / 32 / 54',"],
  ['Source Sans 3 handles prose; IBM Plex Mono sets data.', 'Familjen Grotesk handles headlines; Source Sans 3 prose and IBM Plex Mono data.'],
])

patch('src/designs/creative.ts', [
  // foundry-type: Archivo|IBM Plex Sans collided with sticker-storm
  ["displayFont: 'Archivo',\n      bodyFont: 'IBM Plex Sans',\n      scale: '12 / 14 / 16 / 20 / 26 / 36 / 96',", "displayFont: 'Archivo Black',\n      bodyFont: 'IBM Plex Sans',\n      scale: '12 / 14 / 16 / 20 / 26 / 36 / 96',"],
  ['Archivo 900 headlines display at specimen sizes with optical sizing notes in the margins', 'Archivo Black headlines display at specimen sizes with optical sizing notes in the margins'],
])

// --- 2. Layout-selector firsts must equal the card layout tag ---
patch('src/designs/extras.ts', [
  ["'baroque-punk': ['full-bleed', 'spotlight', 'hero-cards'],", "'baroque-punk': ['hero-cards', 'full-bleed', 'spotlight'],"],
  ["'sticker-storm': ['hero-cards', 'magazine', 'spotlight'],", "'sticker-storm': ['magazine', 'hero-cards', 'spotlight'],"],
  ["'festival-vivid': ['full-bleed', 'hero-cards', 'asymmetric'],", "'festival-vivid': ['hero-cards', 'full-bleed', 'asymmetric'],"],
  ["'arcade-pop': ['hero-cards', 'dashboard', 'full-bleed'],", "'arcade-pop': ['dashboard', 'hero-cards', 'full-bleed'],"],
])

// --- 3. studio-noir heroTitle case (existing design falling back to name) ---
patch('src/components/MiniSite.tsx', [
  ["    case 'collage-cut': return <>Cut. Paste. <em>Mean it.</em></>", "    case 'studio-noir': return <>Light the <em>subject.</em></>\n    case 'collage-cut': return <>Cut. Paste. <em>Mean it.</em></>"],
])

console.log(`Total edits: ${edits}`)
