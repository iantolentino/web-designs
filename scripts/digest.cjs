const fs = require('fs')
const path = require('path')

const dir = 'src/designs'
const files = fs.readdirSync(dir).filter((f) => f.endsWith('.ts') && !['index.ts', 'theme.ts'].includes(f))

function extractObjects(src) {
  // Find top-level entries in the exported array: match "  {" blocks ending with "  },"
  const out = []
  let i = 0
  while (true) {
    const start = src.indexOf('\n  {\n', i)
    if (start === -1) break
    let depth = 0
    let j = start + 1
    for (; j < src.length; j++) {
      if (src[j] === '{') depth++
      else if (src[j] === '}') {
        depth--
        if (depth === 0) break
      }
    }
    out.push(src.slice(start, j + 1))
    i = j
  }
  return out
}

function one(b, key) {
  const m = b.match(new RegExp(key + ":\\s*'([^']+)'"))
  return m ? m[1] : null
}

const rows = []
for (const f of files) {
  const src = fs.readFileSync(path.join(dir, f), 'utf8').replace(/\r\n/g, '\n')
  for (const b of extractObjects(src)) {
    const id = one(b, 'id')
    if (!id) continue
    const colors = {}
    for (const k of ['primary', 'secondary', 'accent', 'neutral', 'background', 'text']) {
      const m = b.match(new RegExp('colors:\\s*{[^}]*?' + k + ":\\s*'(#[0-9a-fA-F]{6}|#[0-9a-fA-F]{3})'"))
      colors[k] = m ? m[1] : null
    }
    rows.push({
      file: f,
      id,
      name: one(b, 'name'),
      category: one(b, 'category'),
      layout: one(b, 'layout'),
      motif: one(b, 'motif') || (b.match(/motif:\s*M\('([^']+)'\)/) || [])[1],
      display: one(b, 'displayFont'),
      body: one(b, 'bodyFont'),
      colors,
      createdAt: one(b, 'createdAt'),
      popularity: Number(one(b, 'popularity') || 0),
      trending: /trending:\s*true/.test(b),
    })
  }
}

const cats = {}
for (const r of rows) cats[r.category] = (cats[r.category] || 0) + 1
console.log('TOTAL', rows.length)
console.log('CATS', JSON.stringify(cats))
fs.writeFileSync('scripts/digest.json', JSON.stringify(rows, null, 1))
console.log('wrote scripts/digest.json')
