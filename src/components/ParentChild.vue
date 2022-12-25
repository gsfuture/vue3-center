<template>

  child com
  <div>
    {{name}}
    <button @click="setMsgToSon">set</button>
  </div>

  injectName
  {{injectName}}
  {{injectFatherName}}
</template>

<script>

//import { ref } from 'vue'
import { inject } from 'vue'

export default {
  props: {
    name: {
      type: String
    }
  },
  emits: ['get-msg'], // 声明当前组件触发的自定义事件
  name: "ParentChild",

  setup(props,{emit}) {
    // eslint-disable-next-line no-undef
    console.log("----- child props",props.name)
    function setMsgToSon(){
      // eslint-disable-next-line no-undef
      emit('get-msg','这是一条来自子组件的msg信息')
    }

    const injectName = inject('injectName')
    const injectFatherName = inject('injectFatherName')

    return {
      setMsgToSon,
      injectName,
      injectFatherName
    }
  }

}
</script>

<style scoped>

</style>
