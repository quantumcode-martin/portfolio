<template>
    <div class="section" id="projects">
        <br>
        <h1>My Projects</h1>
        <div class="container">
          <!-- <ProjectCard data-image="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=">
            <template #header>Canyons</template>
            <template v-slot:content>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</template>
          </ProjectCard> -->
          <ProjectCard data-image="https://quantumcode.company/images/reignscape.png" :image-offset-y="4">
            <template #header>
                  Reignscape
            </template>
            <template v-slot:content>An infinite 2D city builder made with Godot Engine</template>
          </ProjectCard>
          <ProjectCard data-image="https://quantumcode.company/images/idlekiller.png" :image-offset-y="4">
            <template #header>
                  Idle Killer
            </template>
            <template v-slot:content>An idle game that put you in the shoes of a citizen living under a tyrannical government</template>
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

export default {
  components: {
    ProjectCard
  }
}
</script>
