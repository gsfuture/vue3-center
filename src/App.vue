<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>


  <!-- router-link会被渲染成a标签 -->
  <router-link to="/home">Helloworld</router-link><br/>
  <router-link to="/about">about</router-link><br/>
  <router-link to="/user/lczmx">WatchVue</router-link><br/>

  <!-- 带查询参数，下面的结果为 /about?plan=private -->
  <router-link :to="{ path: '/about', query: { plan: 'private' }}">AboutParams</router-link><br/>

  <router-link v-bind:to = "{ path: '/about'}" event = "mouseover">Router Link 1</router-link><br/>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>


</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';

@Options({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {}
</script>

<style>
#main-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
