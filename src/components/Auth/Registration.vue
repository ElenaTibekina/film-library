<template lang="pug">
    .content-wraper
        section
            .container
              .auth
                .auth__banner
                  h1.ui-title-2 Hello banner
                .auth__form
                  span.ui-title-2 Registration
                    form
                      input(
                        type="email"
                        placeholder="Email"
                        v-model="email"
                      )
                      input(
                        type="password"
                        placeholder="Password"
                        v-model="password"
                      )
                      input(
                        type="password"
                        placeholder="Repeat your password"
                        v-model="repeatPassword"
                      )
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      repeatPassword: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
.auth
  display flex
.auth__banner,
.auth__form
  width 50%
</style>
