<template>
  parent com
  <button @click="changeName">change inject name</button>
  <br/>
  <ParentChild :name="name" @get-msg="getMsg">parent</ParentChild>



</template>

<script>

import { ref,provide } from 'vue'
import ParentChild from './ParentChild.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Parent",
  components: {
    ParentChild
  },

  setup() {
    const name = ref('cp')
    function getMsg(msg) {
      console.log("parent",msg)
    }

    let injectFatherName = ref('father老师')
    function changeName(){
      injectFatherName.value = 'pink老师'
    }

    // 使用provide配置项注入数据 key - value
    provide('injectFatherName', injectFatherName)

    return {
      name,
      getMsg,
      changeName
    }
  }

}
</script>

<style scoped>

</style>
