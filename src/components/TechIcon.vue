<template>
  <inline-svg :height="height" :src="getIcon"/>
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
    }

  },

  data () {
    return {
      // mySVG: '!html-loader!./../assets/projects/tech_icons/php.svg',
      iconPaths: {
      }
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
    }
  }
}

</script>
