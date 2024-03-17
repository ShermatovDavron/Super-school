<script>
import {logo} from "@/constants/index.js"

export default {
  data() {
    return {
      logo,
    }
  }
}
</script>

<template>
  <div class="d-flex justify-content-between align-items-center pb-3 mb-2 border-bottom">
    <RouterLink :to="{name:'home'}" class="link-dark text-decoration-none">
      <h2 class="school">Super school</h2>
    </RouterLink>
    <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
      <RouterLink class="link-dark text-decoration-none fs-5 m-1"  :to="{name:'login'}">Login</RouterLink>
      <RouterLink class="link-dark text-decoration-none fs-5 m-1" :to="{name:'register'}">Register</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.school {
  font-size: 30px;
  font-weight: bold;
  font-family: sans-serif;
  background: -webkit-linear-gradient(#00008B, #00CED1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

</style>