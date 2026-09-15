/* Round-2 fixes: CRLF-aware replacements with unique anchors. Run: node scripts/fixes2.cjs */
const fs = require('fs')

let edits = 0, misses = 0
function patch(file, pairs) {
  let src = fs.readFileSync(file, 'utf8')
  for (const [from, to] of pairs) {
    const lf = src.includes(from)
    const crlf = !lf && src.includes(from.replace(/\n/g, '\r\n'))
    const f = crlf ? from.replace(/\n/g, '\r\n') : from
    const t = crlf ? to.replace(/\n/g, '\r\n') : to
    if (lf || crlf) { src = src.split(f).join(t); edits++; console.log(`OK  ${file}: ${JSON.stringify(from.slice(0, 48))}`) }
    else { misses++; console.log(`MISS ${file}: ${JSON.stringify(from.slice(0, 48))}`) }
  }
  fs.writeFileSync(file, src)
}

// steel-plant: Archivo|IPM pair collided with scaffold -> Chakra Petch identity
patch('src/designs/brutalism.ts', [
  ["      displayFont: 'Archivo',\n      bodyFont: 'IBM Plex Mono',", "      displayFont: 'Chakra Petch',\n      bodyFont: 'IBM Plex Mono',"],
  ['Archivo caps label each instrument; IBM Plex Mono renders values and readouts.', 'Chakra Petch caps label each instrument; IBM Plex Mono renders values and readouts.'],
  // brut-sunbelt: Oswald|Archivo pair collided with concrete-slab -> Bebas Neue/Karla
  ["      displayFont: 'Oswald',\n      bodyFont: 'Archivo',\n      scale: '14 / 16 / 18 / 22 / 30 / 42 / 72',", "      displayFont: 'Bebas Neue',\n      bodyFont: 'Karla',\n      scale: '14 / 16 / 18 / 22 / 30 / 42 / 72',"],
  ['Bebas Neue wayfinding caps tower over Karla body copy.', 'Bebas Neue wayfinding caps tower over Karla body copy, sun-printed.'],
])

// acid-garden typography (scale 46/88 is unique to this block)
patch('src/designs/maximalism.ts', [
  ["      displayFont: 'Fraunces',\n      bodyFont: 'Archivo',\n      scale: '13 / 15 / 18 / 22 / 30 / 46 / 88',", "      displayFont: 'Young Serif',\n      bodyFont: 'Space Grotesk',\n      scale: '13 / 15 / 18 / 22 / 30 / 46 / 88',"],
  // collision-course accent collides with playful-maximalist (primary+bg+accent); violet breaks it
  ["      accent: '#ffd23f',\n      neutral: '#f2e9ff',", "      accent: '#7c6ff0',\n      neutral: '#f2e9ff',"],
])

// champagne-noir body -> Spectral (scale 36/66 unique)
patch('src/designs/luxury.ts', [
  ["      displayFont: 'Fraunces',\n      bodyFont: 'IBM Plex Sans',\n      scale: '13 / 15 / 17 / 21 / 26 / 36 / 66',", "      displayFont: 'Fraunces',\n      bodyFont: 'Spectral',\n      scale: '13 / 15 / 17 / 21 / 26 / 36 / 66',"],
  // opera-box -> Cormorant Garamond / Source Sans 3 (scale 38/70 unique)
  ["      displayFont: 'Playfair Display',\n      bodyFont: 'Karla',\n      scale: '13 / 15 / 17 / 21 / 27 / 38 / 70',", "      displayFont: 'Cormorant Garamond',\n      bodyFont: 'Source Sans 3',\n      scale: '13 / 15 / 17 / 21 / 27 / 38 / 70',"],
])

// ledger-fintech display -> IBM Plex Mono (anchored by its unique text color)
patch('src/designs/professional.ts', [
  ["      text: '#12261f',\n    },\n    typography: {\n      displayFont: 'IBM Plex Sans',\n      bodyFont: 'IBM Plex Sans',", "      text: '#12261f',\n    },\n    typography: {\n      displayFont: 'IBM Plex Mono',\n      bodyFont: 'IBM Plex Sans',"],
  // clinical-care -> Livvic / Source Sans 3 (anchored by text color)
  ["      text: '#38302e',\n    },\n    typography: {\n      displayFont: 'IBM Plex Sans',\n      bodyFont: 'IBM Plex Sans',", "      text: '#38302e',\n    },\n    typography: {\n      displayFont: 'Livvic',\n      bodyFont: 'Source Sans 3',"],
  ['Fraunces speaks gently in headlines; Source Sans 3 keeps care copy', 'Livvic speaks gently in headlines; Source Sans 3 keeps care copy'],
  // briefcase-slate -> Familjen Grotesk / Source Sans 3 (anchored by text color)
  ["      text: '#1f2733',\n    },\n    typography: {\n      displayFont: 'Source Sans 3',\n      bodyFont: 'Source Sans 3',", "      text: '#1f2733',\n    },\n    typography: {\n      displayFont: 'Familjen Grotesk',\n      bodyFont: 'Source Sans 3',"],
])

// foundry-type: keep variable Archivo (weight 900) — undo the unnecessary text swap
patch('src/designs/creative.ts', [
  ['Archivo Black headlines display at specimen sizes', 'Archivo 900 headlines display at specimen sizes'],
])

// load Bebas Neue
patch('index.html', [
  ['family=Bitter:', 'family=Bebas+Neue&family=Bitter:'],
])

console.log(`\n${edits} edits, ${misses} misses`)
