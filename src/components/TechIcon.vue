<template>
  <inline-svg :height="getSize" :src="getIcon"/>
</template>

<script>
import InlineSvg from 'vue-inline-svg'

export default {
  components: {
    InlineSvg
  },

  props: {
    iconName:
    {
      type: String,
      default: 'godot'
    },
    height:
    {
      type: Number,
      default: 25
    },
    mheight:
    {
      type: Number,
      default: undefined
    }

  },

  data () {
    return {
      // mySVG: '!html-loader!./../assets/projects/tech_icons/php.svg',
      iconPaths: {
      },
      mobile: false
    }
  },

  computed: {
    getIcon () {
      let icon

      try {
        icon = require(`../assets/projects/tech_icons/${this.iconName}.svg`)
      } catch (error) {
        icon = require('../assets/projects/tech_icons/question.svg')
      }
      return icon
    },
    getSize () {
      if ((this.mheight === undefined) || (!this.mobile)) {
        return this.height
      }
      return this.mheight
    }
  },

  methods: {
    checkScreen () {
      this.windowWidth = window.innerWidth
      if (this.windowWidth <= 750) {
        this.mobile = true
        return
      }
      this.mobile = false
    }
  },

  created () {
    window.addEventListener('resize', this.checkScreen)
    this.checkScreen()
  }
}

</script>
