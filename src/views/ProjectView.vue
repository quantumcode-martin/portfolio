<template>
    <ProjectNavigationBar></ProjectNavigationBar>
    <div class="section project-section">
      <h1 id="project">{{ project.name }}</h1>
      <div class="project-description">
        <p class="a-end">{{getDates}}</p>
      </div>
      <img class="cover-img" :src="project.cover_img" alt="ProjectCoverImage">
      <div class="project-description">
        <p class="p-descriptor">Made with: </p>
        <!-- Made With: -->
        <TechIcon class="tech-icon" v-for="(icon,id) in project.techs" :key="id" :icon-name="icon" :height="30"></TechIcon>

        <!-- <svg class="tech-icon" height="30" viewBox="0 0 128 128">
          <path d="M114.906 84.145s-.172-1.04-.27-1.028l-18.823 1.817a3.062 3.062 0 00-2.77 2.84l-.516 7.413-14.566 1.04-.988-6.72a3.089 3.089 0 00-3.04-2.62H54.067a3.089 3.089 0 00-3.039 2.62l-.988 6.72-14.566-1.04-.516-7.414a3.058 3.058 0 00-2.77-2.84l-18.835-1.816c-.094-.012-.168 1.028-.266 1.028l-.024 4.074 15.954 2.574.52 7.477a3.084 3.084 0 002.843 2.847l20.059 1.434c.078.004.152.008.226.008a3.087 3.087 0 003.031-2.621l1.02-6.915h14.57l1.02 6.915a3.088 3.088 0 003.254 2.613l20.062-1.434a3.084 3.084 0 002.844-2.847l.52-7.477 15.945-2.586zm0 0" fill="#fff"></path><path d="M13.086 53.422v30.723c.059 0 .113.003.168.007L32.09 85.97a2.027 2.027 0 011.828 1.875l.582 8.316 16.426 1.172 1.133-7.672a2.03 2.03 0 012.007-1.734h19.868a2.03 2.03 0 012.007 1.734l1.133 7.672 16.43-1.172.578-8.316a2.027 2.027 0 011.828-1.875l18.828-1.817c.055-.004.11-.007.168-.007V81.69h.008V53.42c2.652-3.335 5.16-7.019 7.086-10.116-2.941-5.008-6.543-9.48-10.395-13.625a101.543 101.543 0 00-10.316 6.004c-1.64-1.633-3.484-2.965-5.3-4.36-1.782-1.43-3.79-2.48-5.696-3.703.566-4.223.848-8.379.96-12.719-4.913-2.476-10.155-4.113-15.456-5.293-2.117 3.559-4.055 7.41-5.738 11.176-2-.332-4.008-.457-6.02-.48V20.3c-.016 0-.027.004-.039.004s-.023-.004-.04-.004v.004c-2.01.023-4.019.148-6.019.48-1.683-3.765-3.62-7.617-5.738-11.176-5.3 1.18-10.543 2.817-15.457 5.293.113 4.34.395 8.496.961 12.72-1.906 1.222-3.914 2.273-5.695 3.702-1.813 1.395-3.66 2.727-5.301 4.36a101.543 101.543 0 00-10.316-6.004C12.543 33.824 8.94 38.297 6 43.305c2.313 3.629 4.793 7.273 7.086 10.117zm0 0" fill="#478cbf"></path><path d="M98.008 89.84l-.582 8.36a2.024 2.024 0 01-1.88 1.878l-20.062 1.434c-.046.004-.097.004-.144.004-.996 0-1.86-.73-2.004-1.73l-1.152-7.806H55.816l-1.152 7.805a2.026 2.026 0 01-2.148 1.727l-20.063-1.434a2.024 2.024 0 01-1.879-1.879l-.582-8.36-16.937-1.632c.008 1.82.03 3.816.03 4.211 0 17.887 22.692 26.484 50.88 26.582h.07c28.188-.098 50.871-8.695 50.871-26.582 0-.402.024-2.39.031-4.211zm0 0" fill="#478cbf"></path><path d="M48.652 65.895c0 6.27-5.082 11.351-11.351 11.351-6.266 0-11.348-5.082-11.348-11.351 0-6.266 5.082-11.344 11.348-11.344 6.27 0 11.351 5.078 11.351 11.344" fill="#fff"></path><path d="M45.922 66.566a7.531 7.531 0 01-7.535 7.532 7.534 7.534 0 01-7.535-7.532 7.534 7.534 0 017.535-7.53 7.531 7.531 0 017.535 7.53" fill="#414042"></path><path d="M64 78.277c-2.02 0-3.652-1.488-3.652-3.32v-10.45c0-1.831 1.632-3.32 3.652-3.32 2.016 0 3.656 1.489 3.656 3.32v10.45c0 1.832-1.64 3.32-3.656 3.32m15.348-12.382c0 6.27 5.082 11.351 11.351 11.351 6.266 0 11.348-5.082 11.348-11.351 0-6.266-5.082-11.344-11.348-11.344-6.27 0-11.351 5.078-11.351 11.344" fill="#fff"></path><path d="M82.078 66.566a7.53 7.53 0 007.531 7.532 7.531 7.531 0 100-15.063 7.53 7.53 0 00-7.53 7.531" fill="#414042"></path>
        </svg>
        <svg class="tech-icon" height="30" viewBox="0 0 128 128">
          <path fill="#9B4F96" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"></path><path fill="#68217A" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"></path><path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6zM97 66.2l.9-4.3h-4.2v-4.7h5.1L100 51h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.4v-4.7H97zm4.8 0h3.8l.9-4.3h-3.8l-.9 4.3z"></path>
        </svg> -->
      </div>

      <div class="project-links">
        <a v-if="!!project.github" :href="project.github" target="_blank" class="btn-red-outline ma-1"><i class="fab fa-github"></i> Code</a>
        <a v-if="!!project.live" :href="project.live" target="_blank" class="btn-red-outline ma-1"><i class="fas fa-external-link-alt"></i> Live</a>
        <a v-if="!!project.demo" :href="project.demo" target="_blank" class="btn-red-outline ma-1"><i class="fab fa-youtube"></i> Demo</a>

      </div>

      <div class="project-body" @click="handleBodyClick" v-html="projectBody"></div>

      <div v-if="projectBody===undefined">
        <h2>🚧 Under Maintenance 🚧</h2>
        <p>I am working on the description of this project. It should be ready soon. Please come back later...</p>
      </div>

      <div v-if="displayImage" @click="handleDisplayClick" class="fullscreen-display" id="display">
        <img class="fullscreen-img" :src="displayImage" alt="">
      </div>

      <!-- <h2>Title</h2>
      <h3>Sub Title</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit soluta, quasi officia quo maiores corporis hic qui dolorem animi nesciunt rerum, laboriosam, facere temporibus fuga asperiores tenetur cum tempora pariatur.</p>
      <h3>Other Sub Title</h3>
      <p>The project is name {{ $route.params.projectName }}</p>
      <img src="https://quantumcode.company/images/reignscape.png" alt="ProjectCoverImage">
      <h2>Other Title</h2>
        <p>Other Section: Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit soluta, quasi officia quo maiores corporis hic qui dolorem animi nesciunt rerum, laboriosam, facere temporibus fuga asperiores tenetur cum tempora pariatur.</p> -->
    </div>

    <transition name="fade">
      <div id="pagetop" class="pagetop fixed right-0 bottom-0" key="pagetop" v-show="scY > 300" @click="toTop">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
             stroke="#232323"
             stroke-width="2" stroke-linecap="round" stroke-linejoin="arcs">
          <path d="M18 15l-6-6-6 6"/>
        </svg>
      </div>
    </transition>
</template>

<script>
import ProjectNavigationBar from '@/components/ProjectNavigationBar.vue'
import projectsData from '@/assets/projects/projects.json'
import axios from 'axios'
import TechIcon from '@/components/TechIcon.vue'
import ProjectImage from '@/components/ProjectImage.vue'

export default {
  props: {
    projectName: String
  },

  data () {
    return {
      scTimer: 0,
      scY: 0,
      projects: projectsData,
      project: undefined,
      projectBody: undefined,
      displayImage: undefined
    }
  },

  // eslint-disable-next-line vue/no-unused-components
  components: { ProjectNavigationBar, TechIcon, ProjectImage },

  created () {
    const projectURLName = this.$route.params.projectName
    this.project = this.projects.find(e => { return e.url_name === projectURLName })
    this.projectBody = require('@/components/projects/Reignscape.vue')
    // console.log(this.projectBody)
    // this.projectBody = require(`@/assets/projects/${this.project.file}`)
    axios.get(`/project/${this.project.url_name}.html`).then(resp => {
      this.projectBody = resp.data
    }).catch(_error => {
      this.projectBody = undefined
      // console.log(error)
    })
  },

  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll: function () {
      if (this.scTimer) return
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY
        clearTimeout(this.scTimer)
        this.scTimer = 0
      }, 100)
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    handleBodyClick (e) {
      if (e.target.tagName === 'IMG') {
        this.displayImage = e.target.src
        console.log(e.target.src)
      }
    },
    handleDisplayClick (e) {
      if (e.target.id === 'display') {
        this.displayImage = undefined
      }
    }
  },

  computed: {
    getDates () {
      let dates = this.project.starting_date
      if (this.project.ending_date !== '') {
        dates += '-'
        dates += this.project.ending_date
      }
      return dates
    }
  }

}
</script>

<style lang="scss" scoped>
  .project-section {
    width: 75%;
    max-width: 1080px;
  }
.main-panel {
  position: absolute;
  width: 100%;
  height: 100%;
  // background-color: white;
}

h1 {
  font-size: clamp(3rem, 8vw, 7rem);
  color: #fff;
  margin-bottom: 1rem;
  text-shadow: 3px 3px 4px #0e0e0e;
}

img, .project-body::v-deep img {
  cursor: pointer;
  position: relative;
  left: 0;
  max-width: 75%;
  border-radius: 0.3rem;
  display: inline-flex;
  max-height: 35vh;
  //float: left;
  box-shadow: 3px 3px 5px #1a1a1a;

  &.cover-img {
    left: auto;

    // width: 75%;
    margin-left: 0rem;
    margin-bottom: 5px;
    border-radius: 1rem;

    width: 100%;
    max-width: 100%;
    max-height: none;

    cursor: auto;
  }
}

h2, .project-body::v-deep h2 {
  font-size: clamp(2rem, 5vw, 4rem);
  margin-left: 0rem;
  margin-top: 4rem;
  margin-bottom: 0rem;
  color: rgb(236, 236, 236);
  text-align: left;
}
h3, .project-body::v-deep h3 {
  font-size: clamp(1.5rem, 3vw, 2rem);
  margin-left: 0rem;
  color: #c50600;
  margin-top: 3rem;
  margin-bottom: 1rem;
  text-align: left;
}

p, .project-body::v-deep p {
  margin-left: 0rem;
  color: rgb(236, 236, 236);
  text-align: left;
  font-size: 1.1rem;
  //line-height: 100%;
  letter-spacing: normal;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
}

.project-body::v-deep a {
  color: #c50600;
}

.p-descriptor {
  //vertical-align: middle;
  margin: 0;
  //display: table-cell;
}

.tech-icon {
  margin: 0 0.5rem;
  filter: drop-shadow(2px 2px 2px #0a0a0a)
}

.project-description {
  display: flex;
  // height: 40px;
  align-items: center;
  //justify-content: center;
  //border: 1px dashed #1c87c949;
  margin: 2px 1rem 2px 1rem;
}

.a-end {
  margin: 0;
  margin-left: auto;
  margin-right: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s ease
}

.fade-enter-from,
.fade-leave-to
{
  opacity: 0
}

.fixed {
  position: fixed;
}

.right-0 {
  right: 0;
}

.bottom-0 {
  bottom: 0;
}

.pagetop {
  margin: 1rem;
  background-color: rgb(235, 235, 235);
  border-radius: 100%;
  box-shadow: 2px 2px 5px #0a0a0a;
}

.ma-1 {
  margin: 0.5rem;
}

.btn-red-outline {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  transition: all 0.3s ease;
  border-radius: 3px;
  cursor: pointer;
  color: rgb(194, 9, 3);
  background-color: transparent;
  border: 2px solid rgb(194, 9, 3);
}

.btn-red-outline:hover {
  color: white;
  background-color: rgb(194, 9, 3);
}

a {
  text-decoration: none;
  color: white;
}

.project-links {
  margin-top: 2rem;
}

.fullscreen-display {
  background-color: #1b1b1be5;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  align-content: center;
  display: flex;
  padding-top: 5rem;
}

.fullscreen-img {
  margin: auto;
  height: 75%;
  max-height: 90%;
  max-width: 90%;
  cursor: auto;
}

</style>
