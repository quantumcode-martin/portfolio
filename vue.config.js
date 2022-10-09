const plugins = []

if (process.env.NODE_ENV === 'production') {
  // Only import when needed
  const { join } = require('path')
  const PrerenderPlugin = require('prerender-spa-plugin-next')

  // Add the prerender plugin to the plugins array
  plugins.unshift(
    new PrerenderPlugin({
      staticDir: join(__dirname, 'dist'), // Vue's build folder
      routes: ['/', '/project/reignscape'], // Only render the homepage
      renderAfterTime: 5000
    })
  )
}

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: { plugins }
})
