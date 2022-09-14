<template>
  <div class="card-wrap" @mousemove="handleMouseMove" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" @mousedown="handleMouseDown"
    ref="card">
    <div class="card" :style="cardStyle">
      <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>
      <div class="card-info">
          <h1>
            <slot name="header">Default Header</slot>
          </h1>
          <p>
            <slot name="content">Default Content</slot>
          </p>
      </div>
      <div class="card-tech">
        <slot name="techs">
          <p>1</p>
          <p>2</p>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    this.width = this.$refs.card.offsetWidth
    this.height = this.$refs.card.offsetHeight
  },
  props: {
    dataImage: String,
    imageOffsetX: {
      type: Number,
      default: 0
    },
    imageOffsetY: {
      type: Number,
      default: 0
    },
    projectName: String
  },

  data: () => ({
    width: 0,
    height: 0,
    mouseX: 0,
    mouseY: 0,
    mouseLeaveDelay: null
  }),
  computed: {
    mousePX () {
      return this.mouseX / this.width
    },
    mousePY () {
      return this.mouseY / this.height
    },
    cardStyle () {
      const rX = this.mousePX * 30
      const rY = this.mousePY * -30
      return {
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
      }
    },
    cardBgTransform () {
      const tX = this.imageOffsetX + this.mousePX * -40
      const tY = this.imageOffsetY + this.mousePY * -40
      return {
        transform: `translateX(${tX}px) translateY(${tY}px)`
      }
    },
    cardBgImage () {
      console.log(`url('${this.dataImage}')`)
      return {
        backgroundImage: `url('${this.dataImage}')`
      }
    }
  },
  methods: {
    handleMouseMove (e) {
      const rect = this.$refs.card.getBoundingClientRect()
      // console.log(e.target)
      this.mouseX = e.clientX - rect.left - this.width / 2
      this.mouseY = e.clientY - rect.top - this.height / 2
      // console.log(this.mousePY, e.clientY, rect.top)
    },
    handleMouseEnter () {
      clearTimeout(this.mouseLeaveDelay)
    },
    handleMouseLeave () {
      this.mouseLeaveDelay = setTimeout(() => {
        this.mouseX = 0
        this.mouseY = 0
      }, 1000)
    },
    handleMouseDown () {
      console.log(this.projectName)
    }
  }
}
</script>

<style lang="scss" scoped>
$hoverEasing: cubic-bezier(0.23, 1, 0.32, 1);
$returnEasing: cubic-bezier(0.445, 0.05, 0.55, 0.95);

body {
  margin: 40px 0;
  font-family: "Raleway";
  font-size: 14px;
  font-weight: 500;
  background-color: #BCAAA4;
  -webkit-font-smoothing: antialiased;
}

.title {
  font-family: "Raleway";
  font-size: 24px;
  font-weight: 700;
  color: #5D4037;
  text-align: center;
}

p {
  text-align: left;
  margin-bottom: 2px;
  color: rgb(199, 199, 199);
}

h1 {
  text-align: left;
  color: rgb(219, 219, 219);
  margin-bottom: 20px;
}

h1+p, p+p {
  margin-top: 6px;
}

.container {
  padding: 40px 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card-wrap {
  position: relative;
  margin: 10px;
  transform: perspective(800px);
  transform-style: preserve-3d;
  cursor: pointer;
  // background-color: #fff;

  &:hover {
    .card-info {
      transform: translateY(0);
    }
    .card-info p {
      opacity: 1;
    }
    .card-info, .card-info p , .card-tech, .card-tech p {
      transition: 0.6s $hoverEasing;
    }
    .card-info:after {
      transition: 5s $hoverEasing;
      opacity: 1;
      transform: translateY(0);
    }
/*
    .card-tech {
      transform: translateX(0);
    }
*/
    .card-tech {
      opacity: 1;
      :slotted(p) {
        transition-duration: 0.4s;
        transition-property:  $hoverEasing;
        // transition-delay: 1s;
        // transition-delay: calc(initial - 0.5s);
        transform: translateX(0);
      }

      :nth-child(1) {
        transition-delay: 0s
      }
      :nth-child(2) {
        transition-delay: 0.1s
      }
      :nth-child(3) {
        transition-delay: 0.2s
      }

    }

    /*
    .card-tech:after {
      transition: 5s $hoverEasing;
      opacity: 1;
      transform: translateX(0);
    }*/

    .card-bg {
      transition:
        0.6s $hoverEasing,
        opacity 5s $hoverEasing;
      opacity: 0.8;
    }
    .card {
      transition:
        0.6s $hoverEasing,
        box-shadow 2s $hoverEasing;
      box-shadow:
        rgba(white, 0.2) 0 0 40px 5px,
        rgba(white, 1) 0 0 0 1px,
        rgba(black, 0.66) 0 30px 60px 0,
        inset #333 0 0 0 5px,
        inset white 0 0 0 6px;
    }
  }
}

.card {
  position: relative;
  flex: 0 0 240px;
  width: 240px;
  height: 320px;
  background-color: #333;
  overflow: hidden;
  border-radius: 10px;
  box-shadow:
    rgba(black, 0.66) 0 30px 60px 0,
    inset #333 0 0 0 5px,
    inset rgba(white, 0.5) 0 0 0 6px;
  transition: 1s $returnEasing;
}

.card-bg {
  opacity: 0.5;
  position: absolute;
  top: -20px; left: -20px;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition:
    1s $returnEasing,
    opacity 5s 1s $returnEasing;
  pointer-events: none;
}

.card-info {
  padding: 20px;
  position: absolute;
  bottom: 0;
  color: #fff;
  transform: translateY(calc(100% - 100px));
  transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);

  p {
    opacity: 0;
    text-shadow: rgba(black, 1) 0 2px 3px;
    transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);

  }

  * {
    position: relative;
    z-index: 1;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0; left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom, transparent 0%, rgba(#000, 0.6) 100%);
    background-blend-mode: overlay;
    opacity: 0;
    transform: translateY(100%);
    transition: 5s 1s $returnEasing;
  }
}

.card-info h1 {
  font-family: "Playfair Display";
  font-size: 36px;
  font-weight: 700;
  text-shadow: rgba(black, 0.5) 0 10px 10px;
}

// .card-tech

.card-tech {
  padding: 8px 10px;
  position: absolute;
  top: 0;
  // left: 0;
  color: #fff;
  //transform: translateX(calc(-50px));
  transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);

  :slotted(p) {
    position: relative;
    transform: translateX(-50px);
    margin: 7px;
    color: white;
    text-shadow: rgba(black, 1) 0 2px 3px;
    transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
    svg {
      filter: drop-shadow(0px 0px 4px rgb(255, 255, 255, 0.7))
    }
  }

  * {
    position: relative;
    z-index: 1;
  }

  :nth-child(1) {
    transition-delay: 0.5s
  }
  :nth-child(2) {
    transition-delay: 0.6s
  }
  :nth-child(3) {
    transition-delay: 0.7s
  }

  /*
  &:after {
    content: '';
    position: absolute;
    top: 0; left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom, transparent 0%, rgba(#000, 0.6) 100%);
    background-blend-mode: overlay;
    opacity: 0;
    transform: translateY(100%);
    transition: 5s 1s $returnEasing;
  }*/

}

/*.card-tech p {
  color: white;
}*/

</style>
