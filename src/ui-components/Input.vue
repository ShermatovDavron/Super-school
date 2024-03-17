<script>
export default {
  name:'Input',
 props:{
   label:String,
   type:String,
   placeholder:String
 },
}
</script>

<template>
 <div class="form-floating mb-3">
   <input :type="type" id="floatingInput" class="form-control" :placeholder="placeholder">
   <label for="floatingInput">{{label}}</label>
 </div>
</template>

<style scoped>

</style>