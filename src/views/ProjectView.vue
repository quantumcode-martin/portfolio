<template>
    <div class="main-panel">
        <p>Project Page</p>
        <p>The project is {{ $route.params.projectName }}</p>
    </div>
</template>

<script>
export default {
  props: {
    projectName: String
  }

}
</script>

<style lang="scss" scoped>
.main-panel {
  position: absolute;
  width: 100%;
  height: 100%;
  // background-color: white;
}
</style>
