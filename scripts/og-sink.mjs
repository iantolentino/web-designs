/*
 * One-shot sink for the social card.
 *
 * Run: node scripts/og-sink.mjs
 *
 * The card is drawn on a canvas in scripts/og-card.html and posted here as
 * base64 — drawing it in the page (rather than capturing a screenshot) keeps
 * any editor/browser chrome out of the shipped image. Writes public/og.jpg,
 * answers once, then exits.
 */
import { createServer } from 'node:http'
import { writeFileSync } from 'node:fs'

// `|| 5199`, not `?? 5199`: PORT is often set to an empty string, which Number()
// turns into 0 — binding a random port the page can never post to.
const PORT = Number(process.env.PORT) || 5199

/** Expected magic bytes per format, so a bad render never lands in public/. */
const SIGNATURES = {
  png: [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a],
  jpg: [0xff, 0xd8, 0xff],
}

const server = createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')

  if (req.method === 'OPTIONS') {
    res.writeHead(204).end()
    return
  }
  if (req.method !== 'POST' || !req.url?.startsWith('/og')) {
    res.writeHead(404).end('not found')
    return
  }

  const ext = new URL(req.url, 'http://localhost').searchParams.get('ext') === 'png' ? 'png' : 'jpg'
  const out = `public/og.${ext}`

  const chunks = []
  req.on('data', (c) => chunks.push(c))
  req.on('end', () => {
    const buf = Buffer.from(chunks.join(''), 'base64')
    const sig = Buffer.from(SIGNATURES[ext])
    const ok = buf.subarray(0, sig.length).equals(sig)
    if (ok) writeFileSync(out, buf)
    console.log(
      `${ok ? 'wrote' : 'REJECTED'} ${out} — ${buf.length} bytes, ${ext} signature ${ok ? 'ok' : 'MISSING'}`,
    )
    res.writeHead(ok ? 200 : 400, { 'Content-Type': 'text/plain' }).end(ok ? 'ok' : 'bad signature')
    server.close()
  })
})

server.listen(PORT, () => console.log(`og-sink listening on http://localhost:${PORT}/og`))
