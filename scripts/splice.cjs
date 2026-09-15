const fs = require('fs')
const path = require('path')

const [cat] = process.argv.slice(2)
const designFile = `src/designs/${cat}.ts`
const chunkFile = `scripts/chunks/${cat}.ts`

let src = fs.readFileSync(designFile, 'utf8')
const chunk = fs.readFileSync(chunkFile, 'utf8')

// Normalize to LF inside this repo file to make splicing deterministic.
src = src.replace(/\r\n/g, '\n')

const idx = src.lastIndexOf('\n]')
if (idx === -1) throw new Error('closing bracket not found')
src = src.slice(0, idx) + '\n' + chunk + ']'

// Restore CRLF to match repo convention.
src = src.replace(/\n/g, '\r\n')
fs.writeFileSync(designFile, src)
console.log(`spliced ${chunkFile} -> ${designFile}`)
