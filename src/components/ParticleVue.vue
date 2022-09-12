<template>
  <canvas id="canvas1"></canvas>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#canvas1 {
  position: fixed;
  top: 0;
  left: 0;
  widows: 100%;
  height: 100%;
  background-color: #232323;
  z-index: -100;
  overflow: scroll;
}
</style>

<script>
export default {
  mounted () {
    const canvas = document.getElementById('canvas1')
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    let particlesArray

    // eslint-disable-next-line prefer-const
    let mouse = {
      x: null,
      y: null,
      radius: (canvas.height / 80) * (canvas.width / 80)
    }

    window.addEventListener('mousemove',
      function (event) {
        mouse.x = event.x
        mouse.y = event.y
      }
    )

    window.addEventListener('resize',
      function () {
        canvas.width = innerWidth
        canvas.height = this.innerHeight
        mouse.radius = (canvas.height / 80) * (canvas.width / 80)
        init()
      }
    )

    window.addEventListener('mouseout',
      function () {
        mouse.x = undefined
        mouse.y = undefined
      }
    )

    class Particle {
      constructor (x, y, directionX, directionY, size, color) {
        this.x = x
        this.y = y
        this.directionX = directionX
        this.directionY = directionY
        this.size = size
        this.color = color
      }

      draw () {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false)
        ctx.fillStyle = this.color
        ctx.fill()
      }

      update () {
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY
        }

        this.directionX += (Math.random() * 0.05) - 0.025
        this.directionY += (Math.random() * 0.05) - 0.025

        this.directionX += (Math.sign(this.directionX) * 0.2 - this.directionX) * 0.05
        this.directionY += (Math.sign(this.directionY) * 0.2 - this.directionY) * 0.05

        const dx = mouse.x - this.x
        const dy = mouse.y - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        if (distance < mouse.radius + this.size) {
          const forceX = (dx / distance)
          const forceY = (dy / distance)
          this.directionX -= forceX / 10
          this.directionY -= forceY / 10
        }

        this.x += this.directionX
        this.y += this.directionY
        this.draw()
      }
    }

    function init () {
      particlesArray = []
      const numberOfParticles = 100// Math.min((canvas.height * canvas.width) / 9000, 100)
      for (let i = 0; i < numberOfParticles; i++) {
        const size = (Math.random() * 1.2) + 0.3
        const x = (Math.random() * ((innerWidth - size * 2) - size * 2))
        const y = (Math.random() * ((innerHeight - size * 2) - size * 2))
        const directionX = (Math.random() * 0.4) - 0.2
        const directionY = (Math.random() * 0.4) - 0.2
        // const color = hslToRgb(Math.random(), 0.9, 0.7)
        const color = 'rgba(137,137,137, 1.0)'
        console.log(color)

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color))
      }
      const size = 2
      const x = (Math.random() * ((innerWidth - size * 2) - size * 2))
      const y = (Math.random() * ((innerHeight - size * 2) - size * 2))
      const directionX = (Math.random() * 2) - 1
      const directionY = (Math.random() * 2) - 1
      const color = 'rgba(194, 9, 3, 1)'
      particlesArray.push(new Particle(x, y, directionX, directionY, size, color))
    }

    // eslint-disable-next-line no-unused-vars
    function hslToRgb (h, s, l) {
      let r, g, b

      if (s === 0) {
        r = g = b = l // achromatic
      } else {
        const hue2rgb = function hue2rgb (p, q, t) {
          if (t < 0) t += 1
          if (t > 1) t -= 1
          if (t < 1 / 6) return p + (q - p) * 6 * t
          if (t < 1 / 2) return q
          if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
          return p
        }

        const q = l < 0.5 ? l * (1 + s) : l + s - l * s
        const p = 2 * l - q
        r = hue2rgb(p, q, h + 1 / 3)
        g = hue2rgb(p, q, h)
        b = hue2rgb(p, q, h - 1 / 3)
      }

      return `rgba(${Math.round(r * 255)},${Math.round(g * 255)},${Math.round(b * 255)}, 1.0)`
    }

    function animate () {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, innerWidth, innerHeight)

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
      }
      connect()
    }

    function connect () {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = 0; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x
          const dy = particlesArray[a].y - particlesArray[b].y
          const dist = dx * dx + dy * dy
          if (dist < (canvas.width / 7) * (canvas.height / 7)) {
            if (particlesArray[a].color !== particlesArray[b].color) {
              const grad = ctx.createLinearGradient(particlesArray[a].x, particlesArray[a].y, particlesArray[b].x, particlesArray[b].y)
              grad.addColorStop(0, particlesArray[a].color.replace(/[^,]+(?=\))/, (1 - (dist / 20000))))
              grad.addColorStop(1, particlesArray[b].color.replace(/[^,]+(?=\))/, (1 - (dist / 20000))))
              ctx.strokeStyle = grad
            } else {
              ctx.strokeStyle = 'rgba(137,137,137,' + 0.3 * (1 - (dist / 20000)) + ')'
            }
            // console.log(ctx.strokeStyle)
            ctx.lineWidth = (1 - (dist / 20000))
            ctx.beginPath()
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
            ctx.stroke()
          }
        }
      }
    }

    init()
    animate()
  }
}
</script>
