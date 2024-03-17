<script>
export default {
  data(){
    return{

    }
  },
  computed:{
    isLoading(){
      return this.$store.state.auth.isLoading
    }
  },
  methods:{
    submitHandler(e){
      e.preventDefault()
      this.$store.commit('setLoading')
    },
  }
}

</script>

<template>
  <form class=" form-control form p-5" style="width: 500px">
    <h1 class="h3 mb-5 font-weight-normal">Register</h1>
    <Input :label="'Name'" :type="'text'" :placeholder="'Name'"/>
    <Input :label="'Email address'" :type="'email'" :placeholder="'Email address'"/>
    <Input :label="'Password'" :type="'password'" :placeholder="'Password'"/>
    <Button :disabled="isLoading" @click="submitHandler">Login</Button>
  </form>
</template>

<style scoped>

</style>