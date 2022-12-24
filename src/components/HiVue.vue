<template>

  <div id="HiVue">
    <h1 class="styh1">Hi Vue！！！,{{name}} loves {{age}}</h1>
  </div>

</template>

<script>
export default {
  name: "HiVue",
  // props:['name','hoppy']
  props: {
    name:String,
    age:[Boolean,Number],
  }
}
</script>

<style scoped>

</style>
