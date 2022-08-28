import { defineConfig } from 'vite'
import path from 'path'
import { createVuePlugin } from 'vite-plugin-vue2'
import { createHtmlPlugin } from 'vite-plugin-html'

function getAlias (alias) {
  const obj = {}
  Object.entries(alias).forEach(([key, val]) => {
    obj[key] = val
    obj['~' + key] = val
  })
  return obj
}

export default defineConfig({
  plugins: [
    createVuePlugin(),
    createHtmlPlugin({
      minify: true,
      entry: 'src/main.js',
      inject: {
        data: {
          injectScript: '<script type="module" src="/src/main.js"></script>'
        }
      }
    })
  ],
  resolve: {
    alias: getAlias({
      '@': path.resolve(__dirname, 'src')
    })
  }
})
