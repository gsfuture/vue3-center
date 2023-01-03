<template>
  <div class="home_main">
    <Tree :list="navBarList" />
    <ul class="tab_list">

      <button @click="changeComponent(item)" v-for="(item, index) in componentArr" :key="index" >{{item.name}}</button>


      <li @click="changeComponent(item)" v-for="(item, index) in componentArr" :key="index">
        {{ item.name }}
      </li>
    </ul>
    <component :is="current.comName"></component>
  </div>
</template>

<script lang="ts" setup>
import { reactive, markRaw } from "vue";
import A from './DynamicA.vue'
import B from './DynamicB.vue'
import C from './DynamicC.vue'
//建议我们使用组件跳过代理  markRaw  使用的时候我们会打印出__v_skip:true;节省性能
type Tabs = {
  name: string,
  comName: any
}
const componentArr = reactive<Tabs[]>([
  {
    name: '我是组件A',
    comName: markRaw(A)
  },
  {
    name: '我是组件B',
    comName: markRaw(B)
  },
  {
    name: '我是组件C',
    comName: markRaw(C)
  }
])
type Com = Pick<Tabs, 'comName'>
let current = reactive<Com>({
  comName: componentArr[0].comName
})
const navBarList = reactive([
  {
    name: '一级导航 1'
  },
  {
    name: '一级导航 2',
    children: [
      { name: '二级导航 2-1' },
      {
        name: '二级导航 2-2',
        children: [
          { name: '三级导航 2-2-1' },
          { name: '三级导航 2-2-2' },
        ]
      },
      { name: '二级导航 2-2' }
    ]
  },
  {
    name: '一级导航 3'
  }
])
const changeComponent = (item: Tabs) => {
  current.comName = item.comName
}
</script>

<style scoped>
.home_main {
  width: 100%;
  height: 100%;
  background: #d7d7d7;
  font-size: 30px;
  color: aqua;

  .tab_list {
    display: flex;
    justify-content: space-between;
    width: 700px;

    li {
      border: 1px solid #333;
      font-size: 18px;
      color: #fff
    }
  }
}
</style>

