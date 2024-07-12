<template>
  <form @submit.prevent>
    <fieldset>
      <input v-model="name" type="text" id="name" required aria-required="true" placeholder="Your name" />
      <input v-model="social" type="text" id="social" required aria-required="true"
        placeholder="Your telegram or whatsapp" />

      <input v-model="email" type="email" id="email" required aria-required="true" placeholder="Your email" />

      <textarea id="message" name="message" v-model="message" rows="4" required aria-required="true"
        placeholder="How can we help you"></textarea>

      <transparent-button id="submitBtn" @click.prevent="submitForm"
        aria-label="Submit button">Submit</transparent-button>
    </fieldset>
  </form>
</template>
<script>
export default {
  name: 'contact-form',
  data() {
    return {
      // chatId: 7017192108,
      chatId: 7017192108,
      token: '7122264496:AAFqPNZz-S_5MxMFUVgljVpr1yzZvvfTeZ4',
      name: '',
      social: '',
      email: '',
      message: '',

      isNameReady: false,
      isSocialReady: false,
      isEmailReady: false,
      isMessageReady: false,
    }
  },
  methods: {
    check() {
      let name = document.getElementById('name')
      let social = document.getElementById('social')
      let email = document.getElementById('email')
      let message = document.getElementById('message')
      if (this.name.trim().length > 1) {
        this.isNameReady = true
        name.classList.remove('red')
      } else {
        this.isNameReady = false
        name.classList.add('red')
      }

      if (this.social.trim().length > 3) {
        this.isSocialReady = true
        social.classList.remove('red')
      } else {
        this.isSocialReady = fale
        social.classList.add('red')
      }

      if (this.message.trim().length > 1) {
        this.isMessageReady = true
        message.classList.remove('red')
      } else {
        this.isMessageReady = false
        message.classList.add('red')
      }


      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (emailPattern.test(this.email)) {
        this.isEmailReady = true
        email.classList.remove('red')

      } else {
        this.isEmailReady = false;
        email.classList.add('red')

      }
    },
    submitForm() {
      this.check()
      if (this.isNameReady && this.isSocialReady && this.isMessageReady && this.isEmailReady) {
        const messageToBot = `${this.name}, сообщает:%0A%0A${this.message}%0A %0AКонтактные данные: %0Aпочта: ${this.email}%0ATelegram/whatsapp: ${this.social}`
        const url = `https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chatId}&text=${messageToBot}`
        this.$http.post(url).then(
          (response) => {
            console.log('Success!')
            this.$emit('send')
            this.clearInputs()
          },
          (error) => {
            console.log('Error: ' + error)
          }
        )
      }

    },
    clearInputs() {
      this.name = ''
      this.social = ''
      this.email = ''
      this.message = ''
    }
  }
}
</script>
<style scoped>
form {
  @apply w-full h-fit;
}

fieldset {
  @apply flex flex-col justify-center items-center gap-10;
}

input,
textarea {
  @apply w-[80%] h-[4rem] rounded-full border border-white bg-transparent pl-5 !important;
  outline: none;
}

.red {
  @apply border-red-500 !important;
}

textarea {
  @apply pt-[1rem] overflow-y-hidden;
}

input:focus,
textarea:focus {
  outline: 0.1rem solid white;
}

#submitBtn {
  @apply w-[40%] border-2 scale-110;
}

@media (min-width: 1100px) {
  #submitBtn {
    @apply mr-[35%] text-[1rem] mt-[2rem];
  }
}
</style>
