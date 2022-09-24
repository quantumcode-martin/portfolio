<template>
    <div class="section" id="education">
        <h1>My Experience and Education</h1>

        <!-- <a href="https://github.com/quantumcode-martin" target="_blank" class="btn-red-outline ma-1"><i class="fa fa-solid fa-briefcase"></i> My Resume</a> -->

        <ExperienceTimeline/>
    </div>
</template>

<script>
import ExperienceTimeline from './ExperienceTimeline.vue'
export default {
  components: {
    ExperienceTimeline
  }
}
</script>

<style lang="scss">
p {
    color:#fff;
}

.education-panel {
    display: inline-flex;
    background-color: #232323a2;
    border-width: 2px;
    border-style: solid;
    border-color: rgba(255, 255, 255, 0.61);
    border-radius: 10px;

    padding: 1rem;
    margin: auto;

    h2 {
        color: rgb(223, 223, 223);
    }
}

.btn-red, .btn-red-outline {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    transition: all 0.3s ease;
    border-radius: 3px;
    cursor: pointer;
  }

.btn-red-outline {
    color: rgb(194, 9, 3);
    background-color: transparent;
    border: 2px solid rgb(194, 9, 3);
}

a {
    text-decoration: none;
    color: white;
}
.btn-red-outline:hover {
color: white;
background-color: rgb(194, 9, 3);
}
</style>
