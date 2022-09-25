<template>
  <a :href="skill.redirect" target="_blank" class="skill-box">
    <TechIcon class="tech-icon" :height="height" :mheight="mheight" :icon-name="skill.url_name"></TechIcon>
    <p>{{ skill.name }}</p>
  </a>
</template>

<script>
import TechIcon from './TechIcon.vue'

export default {
  components: { TechIcon },
  props: ['skill', 'height', 'mheight']
}
</script>

<style lang="scss" scoped>
.skill-box{
  display: block;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  pointer-events: all;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  &:hover{
    transform: scale(1.5);
  }
  p {
    color: rgb(204, 204, 204);
    text-decoration: none;
  }

}

.tech-icon {
  pointer-events: none;
}

@media only screen and (max-width: 600px) {
  .skill-box{
    margin: 1rem;
  }
}

</style>
