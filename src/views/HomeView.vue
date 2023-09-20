<template>
  <NavigationBar />
  <ProfileBox></ProfileBox>
  <ProjectsSection />
  <SkillsSection />
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
  },
  created () {
    document.title = 'Martin Hell - CS Engineering'
    Array.from(document.querySelectorAll('[dynamic-meta]')).map((el) =>
      el.parentNode.removeChild(el)
    )
    const metaTags = [
      {
        name: 'description',
        content: 'Martin Hell Portfolio'
      },
      {
        property: 'og:description',
        content: 'Here is my personal porfolio.'
      },
      {
        property: 'og:url',
        content: 'https://martinhell.qtmcode.com'
      },
      {
        property: 'og:image',
        content: 'https://qtmcode.com/images/portfolio_header.png'
      }
    ]
    // Turn the meta tag definitions into actual elements in the head.
    metaTags
      .map((tagDef) => {
        const tag = document.createElement('meta')

        Object.keys(tagDef).forEach((key) => {
          tag.setAttribute(key, tagDef[key])
        })
        // We use this to track which meta tags we create so we don't interfere with other ones.
        tag.setAttribute('dynamic-meta', '')
        return tag
      })
      .forEach((tag) => document.head.appendChild(tag))
  }
}
</script>
