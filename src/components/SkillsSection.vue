<template>
  <div class="section" id="skills">
      <h1>My Skills</h1>
      <ul class="skills">
          <SkillIcon height="75" v-for="skill in skills" :key="skill.id" :skill="skill"/>
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
}
</style>
