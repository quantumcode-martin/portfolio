<template>
  <NavigationBar/>
  <ProfileBox></ProfileBox>
  <ProjectsSection/>
  <SkillsSection/>
  <EducationSection></EducationSection>
  <EmailForm></EmailForm>
</template>

<script>
import ProjectsSection from '@/components/ProjectsSection.vue'
import ProfileBox from '@/components/ProfileBox.vue'
import NavigationBar from '@/components/NavigationBar.vue'
import EmailForm from '@/components/EmailForm.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import EducationSection from '../components/EducationSection.vue'
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    ProjectsSection,
    ProfileBox,
    NavigationBar,
    EmailForm,
    SkillsSection,
    EducationSection
  }
}
</script>
