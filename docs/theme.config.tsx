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
  },
  search: {
    placeholder: '搜索文档…'
  },
  toc: {
    title: '本页内容'
  },
  editLink: {
    component: ({ className }) => (
      <a
        className={className}
        href="https://github.com/jumpserver/whitepaper"
        target="_blank"
        rel="noreferrer"
      >
        在 GitHub 上查看
      </a>
    )
  },
  feedback: {
    content: '有问题？点此反馈 →',
    useLink: () => 'https://github.com/jumpserver/whitepaper/issues'
  },
  themeSwitch: {
    useOptions: {
      light: '浅色模式',
      dark: '深色模式',
      system: '跟随系统'
    }
  },
  gitTimestamp: ({ timestamp }) => (
    <span>最后更新于 {new Date(timestamp).toLocaleDateString('zh-CN')}</span>
  )
}

export default config
