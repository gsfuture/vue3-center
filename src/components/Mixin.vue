<template>
  <div>Mixin Com {{name}}</div>
  <div id="mixinText"></div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

const myMixin = {
  data() {
    return {
      message: 'hello',
      foo: 'runoob'
    }
  },
  created() {
    let doc = document.getElementById("mixinText");
    if(doc)
      doc.innerHTML =  doc.innerHTML + 'mixin 对象的钩子被调用<br/>';

    console.log('mixin 对象的钩子被调用<br/>');
  }
}

@Options({
  // eslint-disable-next-line vue/multi-word-component-names
  mixins: [myMixin],
  data() {
    return {
      message: 'goodbye',
      bar: 'def'
    }
  },
  created() {
    let doc = document.getElementById("mixinText");
    if(doc)
      doc.innerHTML =  doc.innerHTML + '组件钩子被调用<br/>';
    console.log('组件钩子被调用<br/>');
  },
  mounted() {
    let doc = document.getElementById("mixinText");
    if(doc)
      doc.innerHTML =  doc.innerHTML + JSON.stringify(this.$data);

    setTimeout(function (){

      // console.log(JSON.stringify(this.data())) //{"message":"goodbye","foo":"runoob","bar":"def"}
    },50);

  },
  setup() {
    return {
      // 返回的数据
    };
  },
})

export default class Mixin extends Vue{
  // name: "WatchVue"
  //watchName:string
}


</script>
