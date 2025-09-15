#!/usr/bin/env node
import { readdirSync, readFileSync, statSync } from 'fs'
import { join, relative } from 'path'

const ROOT = process.cwd()
const PAGES_DIR = join(ROOT, 'docs', 'pages')

function walk(dir) {
  const out = []
  for (const name of readdirSync(dir)) {
    if (name.startsWith('_') || name.startsWith('.')) continue
    const p = join(dir, name)
    const s = statSync(p)
    if (s.isDirectory()) out.push(...walk(p))
    else if (/\.mdx?$/.test(name)) out.push(p)
  }
  return out
}

function extractHeadings(content) {
  // drop frontmatter
  content = content.replace(/^---[\s\S]*?---\n/, '')
  const lines = content.split(/\r?\n/)
  const headings = []
  for (const line of lines) {
    const m = /^(#{1,6})\s+(.+)$/.exec(line.trim())
    if (m) headings.push({ level: m[1].length, text: m[2].replace(/<[^>]+>/g, '') })
  }
  return headings
}

function printOutline(title, items) {
  console.log(`# ${title}`)
  for (const it of items) {
    const prefix = '  '.repeat(Math.max(0, it.level - 1))
    console.log(`${prefix}- ${'#'.repeat(it.level)} ${it.text}`)
  }
  console.log('')
}

// Site pages outline
const files = walk(PAGES_DIR)
console.log('=== Site Pages Outline (H1/H2/H3) ===')
for (const f of files) {
  const rel = relative(PAGES_DIR, f)
  const content = readFileSync(f, 'utf8')
  const heads = extractHeadings(content).filter(h => h.level <= 3)
  printOutline(rel, heads)
}

// Optional: compare with external MD
const target = process.argv[2]
if (target) {
  try {
    const md = readFileSync(target, 'utf8')
    const heads = extractHeadings(md).filter(h => h.level <= 3)
    console.log('=== External Markdown Outline ===')
    printOutline(relative(ROOT, target), heads)
  } catch (e) {
    console.error('Cannot read target file:', target, e.message)
    process.exit(1)
  }
}

