<template>

  <div>
    <!-- 功能一模板 -->
    <button @click="show">显示</button>
    <button @click="hide">隐藏</button>
    <div v-if="showDivFlag">一个被控制显隐的div</div>
  </div>
  <div>
    <!-- 功能二模板 -->
    <button @click="changeRed">红色</button>
    <button @click="changeBlue">蓝色</button>
    <div :style="`color:${fontColor}`">一个被控制字体颜色的的div</div>
  </div>


  <div>{{ state.name }}</div>
  <div>{{ state.age }}</div>

  separate
  <div>{{ name }}</div>
  <div>{{ age }}</div>

  <button @click="state.name = 'pink'">改值</button>


  <!-- list case -->
  {{ list }}
  {{ filterList }}
  <button @click="changeList">change list</button>

  <!-- use age-->
  <br/>
  {{ age2 }}
  <button @click="age2++">change age</button>

  <!-- deep -->
  <br/>
  {{ deepName }}
  {{ deepInfo.deepAge }}
  <button @click="deepName = 'Gray'">change deep name</button>
  <button @click="deepInfo.deepAge++">change deep age</button>


</template>

<script>

import { ref,computed,onMounted,watch } from 'vue'
import { reactive,toRefs } from 'vue'

function useShow() {
  const showDivFlag = ref(true)
  function show() {
    showDivFlag.value = true
  }
  function hide() {
    showDivFlag.value = false
  }
  return { showDivFlag, show, hide }
}

function useColor() {
  const fontColor = ref('')
  function changeRed() {
    fontColor.value = 'red'
  }
  function changeBlue() {
    fontColor.value = 'blue'
  }
  return { fontColor, changeRed, changeBlue }
}

function useList() {
  const list = ref([1, 2, 3, 4, 5])
  // 输入大于3的数字
  const filterList = computed(() => {
    return list.value.filter(item => item > 3)
  })
  // 修改list的函数
  function changeList() {
    list.value.push(6, 7, 8)
  }
  return {
    list,
    filterList,
    changeList
  }
}

function usetAge(){
  const age2 = ref(18)
  watch(() => {
    // 返回你想要监听的响应式属性(ref产生的对象必须加.value)
    return age2.value
  }, () => {
    // 数据变化之后的回调函数
    console.log('age发生了变化')
  },{ immediate: true})
  return {
    age2
  }
}

function useDeep(){
  const deepState = reactive({
    deepName: 'cp',
    deepInfo: {
      deepAge: 18
    }
  })
  watch(() => {
    return deepState
  }, () => {
    // 数据变化之后的回调函数
    console.log('age发生了变化')
  }, {
    deep: true
  })
  return {
    deepState
  }
}



export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Composition",
  setup() {
    // 功能一
    const { showDivFlag, show, hide } = useShow()
    // 功能二
    const { fontColor, changeRed, changeBlue } = useColor()

    const state = reactive({
      name: 'cp',
      age: 18
    })

    const {list, filterList, changeList} = useList();

    const {age2} = usetAge();

    const {deepState} = useDeep();

    // 时机成熟 回调函数自动执行
    onMounted(() => {
      console.log('mouted生命周期执行了')
    })
    onMounted(() => {
      console.log('mouted生命周期函数又执行了')
    })

    console.log('setup执行了')
    return { ...toRefs(state),state, showDivFlag, show, hide, fontColor, changeRed, changeBlue,
      list, filterList, changeList,age2,...toRefs(deepState)
    }
  },
  beforeCreate() {
    console.log('beforeCreate执行了')
    console.log(this)
  }
}
</script>

<style scoped>

</style>
