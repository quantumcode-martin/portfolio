<template>

    <div class="section">
      <h1>Contact Me</h1>
      <div class="container">
          <form @submit.prevent="sendEmail">
            <label>Name</label>
            <input
              type="text"
              v-model="name"
              name="name"
              placeholder="Your Name"
            >
            <label>Email</label>
            <input
              type="email"
              v-model="email"
              name="email"
              placeholder="Your Email"
              >
            <label>Message</label>
            <textarea
              name="message"
              v-model="message"
              cols="30" rows="5"
              placeholder="Message">
            </textarea>
            <input type="submit" value="Send">
          </form>
      </div>
    </div>
</template>

<style scoped>
* {box-sizing: border-box;}

.container {
    display: block;
    margin:auto;
    text-align: center;
    border-radius: 5px;
    border-style: solid;
    border-color: rgba(255, 255, 255, 0.548);
    border-width: 1px;
    background-color: #11111111;
    padding: 20px;
    width: 50%;
}

label {
    float: left;
    color: rgb(214, 214, 214);
}

input[type=text], [type=email], textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
}

input[type=submit] {
    background-color: #c20903;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

input[type=submit]:hover {
    background-color: #d4514c;
}
</style>

<script>
import emailjs from 'emailjs-com'

export default {
  data () {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    sendEmail (e) {
      // console.log(process.env.VUE_APP_SERVICE_ID)
      emailjs.sendForm(process.env.VUE_APP_SERVICE_ID, process.env.VUE_APP_TEMPLATE_ID, e.target,
        process.env.VUE_APP_PUBLIC_KEY, {
          name: this.name,
          email: this.email,
          message: this.message
        }).then((result) => {
        console.log('SUCCESS!', result.text)
      }, (error) => {
        console.log('FAILED...', error.text)
      })
    }
  }
}
</script>
