<script>
export default {
  name:'Input',
 props:{
   label:String,
   type:String,
   placeholder:String,
   modelValue:[String,Number]
 },
  methods:{
    updateInput(e){
      this.$emit('update:modelValue',e.target.value)
    }
  }
}
</script>

<template>
 <div class="form-floating mb-3">
   <input :type="type" id="floatingInput" class="form-control" @input="updateInput" :value="modelValue" :placeholder="placeholder">
   <label for="floatingInput">{{label}}</label>
 </div>
</template>

<style scoped>

</style>