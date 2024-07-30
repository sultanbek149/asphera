<template>
  <form @submit.prevent>
    <fieldset>
      <input v-model="name" type="text" id="name" required aria-required="true"
        :placeholder="$t('feedbackForm.placeholders.name')" />
      <input v-model="social" type="text" id="social" required aria-required="true"
        :placeholder="$t('feedbackForm.placeholders.socials')" />

      <input v-model="email" type="email" id="email" required aria-required="true"
        :placeholder="$t('feedbackForm.placeholders.email')" />

      <textarea id="message" name="message" v-model="message" rows="4" required aria-required="true"
        :placeholder="$t('feedbackForm.placeholders.help')"></textarea>

      <div class="flex gap-6 justify-start">
        <transparent-button class="text-white bg-[#4B71FF] rounded-[15px] !w-[12rem] py-3 font-[200]"
          @click.prevent="submitForm" aria-label="Submit button">{{
          $t('feedbackForm.placeholders.submit') }}</transparent-button>

        <my-button class="connect !w-[14rem] !h-[3rem] flex items-center !rounded-[15px] hover:text-black">
          <svg class="mr-1" width="25" height="26" viewBox="0 0 25 26" fill="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M14.0797 7.45276C12.3874 8.16802 9.00506 9.64843 3.93277 11.894C3.10912 12.2268 2.67765 12.5524 2.63837 12.8708C2.57199 13.4088 3.23509 13.6207 4.13806 13.9092C4.26089 13.9485 4.38815 13.9891 4.51862 14.0322C5.407 14.3257 6.60204 14.669 7.22329 14.6826C7.78682 14.695 8.41579 14.4589 9.11019 13.9744C13.8494 10.7237 16.2958 9.08063 16.4494 9.0452C16.5577 9.02021 16.7079 8.98879 16.8096 9.08068C16.9113 9.17256 16.9013 9.34658 16.8906 9.39326C16.8249 9.67782 14.222 12.1368 12.875 13.4093C12.455 13.806 12.1572 14.0873 12.0963 14.1516C11.9599 14.2956 11.8208 14.4318 11.6872 14.5626C10.8619 15.3711 10.243 15.9774 11.7215 16.9674C12.432 17.4432 13.0006 17.8366 13.5678 18.2291C14.1872 18.6577 14.8051 19.0853 15.6045 19.6178C15.8081 19.7534 16.0027 19.8943 16.1921 20.0316C16.913 20.5538 17.5607 21.023 18.3608 20.9481C18.8257 20.9047 19.306 20.4604 19.5499 19.1355C20.1263 16.0043 21.2593 9.22007 21.5212 6.42443C21.5441 6.1795 21.5152 5.86603 21.4921 5.72842C21.4689 5.59082 21.4205 5.39476 21.2444 5.24963C21.036 5.07774 20.7141 5.04149 20.5702 5.04407C19.9158 5.05578 18.9117 5.41054 14.0797 7.45276Z"
              fill="currentColor" />
          </svg>
          Connect with us
        </my-button>
      </div>
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
        this.isSocialReady = false
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
