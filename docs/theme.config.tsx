import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <span style={{ fontWeight: 600 }}>
      JumpServer Whitepaper
    </span>
  ),
  // Omit repo links to avoid invalid URL parsing in dev
  // project: { link: 'https://example.com/repo' },
  // docsRepositoryBase: 'https://example.com/repo/tree/main/docs',
  footer: {
    content: 'JumpServer Whitepaper — Nextra'
  },
  sidebar: {
    defaultMenuCollapseLevel: 1
  },
  head: (
    <>
      <title>JumpServer Whitepaper</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </>
  )
}

export default config
