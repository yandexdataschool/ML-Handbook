const remarkMath = import('remark-math')
const rehypeKatex = import('rehype-katex')

const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
  options: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex]
  }
})
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
})
