import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  head: (
    <>
      <title>JumpServer 技术白皮书</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/whitepaper/logo.png" />
    </>
  ),
  logo: (
    <>
      <img
        src="/whitepaper/logo.png"
        alt="JumpServer 技术白皮书"
        style={{ height: 24, marginRight: 8 }}
      />
      <span style={{ fontWeight: 600 }}>JumpServer 技术白皮书</span>
    </>
  ),
  footer: {
    content: (
      <span>
        2014-2025 版权所有© 杭州飞致云信息科技有限公司
      </span>
    )
  },
  sidebar: {
    defaultMenuCollapseLevel: 1
  }
}

export default config
