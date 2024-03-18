<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
    }
  },
  computed: {
    isLoading() {
      return this.$store.state.auth.isLoading
    }
  },
  methods: {
    submitHandler(e) {
      e.preventDefault()
      const data = {
        username: this.username,
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('register', data)
          .then(user =>{ console.log('USER', user)
            this.$router.push({name:'home'})
          })
          .catch(err => console.log('ERROR', err))
    },
  }
}

</script>

<template>
  <form class=" form-control form p-5" style="width: 500px">
    <h1 class="h3 mb-5 font-weight-normal">Register</h1>
    <Input :label="'Name'" :type="'text'" :placeholder="'Name'" v-model="username"/>
    <Input :label="'Email address'" :type="'email'" :placeholder="'Email address'" v-model="email"/>
    <Input :label="'Password'" :type="'password'" :placeholder="'Password'" v-model="password"/>
    <Button :disabled="isLoading" @click="submitHandler">Login</Button>
  </form>
</template>

<style scoped>

</style>