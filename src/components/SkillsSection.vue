<template>
  <div class="section" id="skills">
      <h1>My Skills</h1>
      <ul class="skills">
          <SkillIcon :height="75" :mheight="40" v-for="(skill, id) in skills" :key="id" :skill="skill"/>
          <!-- <SkillIcon height="75" tech-name="godot"/> -->
      </ul>
    </div>
</template>

<script>
import SkillIcon from './SkillIcon.vue'
import skillsData from '@/assets/skills.json'

export default {
  components: {
    SkillIcon
  },

  data () {
    return {
      skills: skillsData
    }
  }
}
</script>

<style>
.skills {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  max-width: 75%;
  margin: auto;
  padding: 0;
}

@media (max-width: 600px) {
  .skills {
    max-width: 100%;
  }
 }
</style>
