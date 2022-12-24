<template>
  <div id = "WatchVue">
    千米 : <input type = "text" v-model = "kilometers2"  @focus="currentlyActiveField = 'kilometers'">
    米 : <input type = "text" v-model = "meters2" @focus="currentlyActiveField = 'meters'">

    watchName:{{watchName}}
  </div>
  <p id="info"></p>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import {Options, Vue} from "vue-class-component";

@Options({
  props: {
    watchName: String
  },
  data() {
    return {
      kilometers2 : 10,
      meters2:0
    }
  },
  watch : {
    kilometers2:function(newValue, oldValue) {
      // 判断是否是当前输入框
      if (this.currentlyActiveField === 'kilometers') {
        this.kilometers2 = newValue;
        this.meters2 = newValue * 1000
      }

      document.getElementById ("info").innerHTML = "修改前值为: " + oldValue + "，修改后值为: " + newValue;

      this.watchName = "good"

    },
    // eslint-disable-next-line no-unused-vars
    meters2 : function (newValue, oldValue) {
      // 判断是否是当前输入框
      if (this.currentlyActiveField === 'meters') {
        this.kilometers2 = newValue/ 1000;
        this.meters2 = newValue;
      }
    }
  }

})

export default class WatchVue extends Vue{
  // name: "WatchVue"
 //watchName:string
}

//vm = Vue.createApp(app).mount('#app')
//vm.$watch('kilometers2', function (newValue, oldValue) {
// 这个回调将在 vm.kilometers 改变后调用
//  document.getElementById ("info").innerHTML = "修改前值为: " + oldValue + "，修改后值为: " + newValue;
//})


</script>

<style scoped>

</style>
