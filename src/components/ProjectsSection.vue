<template>
    <div class="section" id="projects">
        <br>
        <h1>My Projects</h1>
        <div class="container">
          <!-- <ProjectCard data-image="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=">
            <template #header>Canyons</template>
            <template v-slot:content>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</template>
          </ProjectCard> -->

          <ProjectCard v-for="project in projects" :key="project.id" :data-image="project.cover_img" :project-URL="project.url_name">
            <template #header> {{ project.name }} </template>
            <template v-slot:content> {{ project.short }} </template>
            <template #techs> <p v-for="(icon,id) in project.techs" :key="id"><TechIcon :icon-name="icon"></TechIcon></p> </template>
          </ProjectCard>

        </div>
      </div>

</template>

<style>
.container {
  padding: 40px 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>

<script>
import ProjectCard from './ProjectCard.vue'

import projectsData from '@/assets/projects/projects.json'
import TechIcon from './TechIcon.vue'

export default {
  data () {
    return {
      projects: projectsData
    }
  },

  components: {
    ProjectCard,
    TechIcon
  }
}
</script>
