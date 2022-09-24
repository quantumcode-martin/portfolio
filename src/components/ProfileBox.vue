<template>
    <div class="section" id="main">
      <h2>Hi, I'm <span class="main-font text-red">
        Martin
      </span>
      </h2>
      <p>
        I am a final year computer science student at Telecom Nancy.
        <br/>
        I am also looking for an internship.
      </p>
      <div class="buttons">
        <a href="#projects" class="btn-red ma-1"><i class="fas fa-code"></i> Projects</a>
        <a href="https://github.com/quantumcode-martin" target="_blank" class="btn-red-outline ma-1"><i class="fab fa-github"></i> Github</a>
        <a href="https://www.linkedin.com/in/martin-hell/" target="_blank" class="btn-red-outline ma-1"><i class="fab fa-linkedin"></i> Linkedin</a>
        <a href="mailto:martin.hell@telecomnancy.net" class="btn-red-outline ma-1"><i class="fas fa-envelope"></i> Email</a>
      </div>
      <!-- <div class="socials">
        <a href="#projects" class="social-card"><i class="fab fa-linkedin fa-2x"></i><p>martin-hell</p></a>
      </div> -->
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
/*.profile-box {
  // background-color: #ffffffb9;
  position: relative;
  display: inline-block;
  width: 75%;
  height: calc(100vh - 175px);
  margin: 0 auto;
  padding: 1rem;
  border-radius: 1rem;
  color: rgb(54, 54, 54);
  align-items: center;
}*/

h2, .main-font {
  font-family: 'Salsa';
  font-size: clamp(4rem, 10vw, 8rem);
  font-weight: 600;
  text-align: center;
  width: 100%;
  color: rgb(255, 255, 255);
}

p {
  font-family: 'Open Sans';
  color: rgb(255, 255, 255);
  font-size: clamp(1.3rem, 1.9vw, 2.3rem);
}

.text-red {
  color: rgb(194, 9, 3);
}

.btn-red, .btn-red-outline {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  transition: all 0.3s ease;
  border-radius: 3px;
  cursor: pointer;
}

.btn-red {
  color: white;
  background-color: rgb(194, 9, 3);
  border: 2px solid rgb(194, 9, 3);
}

.btn-red-outline {
  color: rgb(194, 9, 3);
  background-color: transparent;
  border: 2px solid rgb(194, 9, 3);
}

.btn-red:hover {
  transition: all 0.3s ease;
  background-color: rgb(206, 70, 65);
  border: 2px solid rgb(206, 70, 65);
}

.btn-red-outline:hover {
  color: white;
  background-color: rgb(194, 9, 3);
}

.ma-1 {
  margin: 0.5rem;
}

.mx-1 {
  margin: 0 0.5rem;
}

a {
  text-decoration: none;
  color: white;
}

.socials {
  margin-top: 5rem;
}

.social-card {
  // border-radius: 100%;
  display: inline-block;
  border: 2px solid rgb(194, 9, 3);
  border-radius: 4px;
  background-color: #2323238e;
  color:rgb(194, 9, 3);
  text-align: center;
  vertical-align: middle;
  height: 150px;
  width: 150px;
  align-items: center;

  .i{
    color: rgb(194, 9, 3);
  }
}

.buttons {
  margin-top: 4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
