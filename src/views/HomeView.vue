<template>
  <NavigationBar/>
  <ProfileBox></ProfileBox>
  <ProjectsSection/>
</template>

<script>
import ProjectsSection from '@/components/ProjectsSection.vue'
import ProfileBox from '@/components/ProfileBox.vue'
import NavigationBar from '@/components/NavigationBar.vue'
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    ProjectsSection,
    ProfileBox,
    NavigationBar
  }
}
</script>
