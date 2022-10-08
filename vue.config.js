const plugins = []

if (process.env.NODE_ENV === 'production') {
  // Only import when needed
  const { join } = require('path')
  const PrerenderPlugin = require('prerender-spa-plugin')
  const Renderer = PrerenderPlugin.PuppeteerRenderer

  // Add the prerender plugin to the plugins array
  plugins.unshift(
    new PrerenderPlugin({
      staticDir: join(__dirname, 'dist'), // Vue's build folder
      routes: ['/'], // Only render the homepage
      maxConcurrentRoutes: 10,
      renderer: new Renderer({
        headless: true,
        renderAfterTime: 100,
        executablePath: '/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe' }) // Configure the renderer with all default options
    })
  )
}

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: { plugins }
})
