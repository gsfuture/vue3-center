<template>
  <div>About组件</div>



  {{ count }}
  <button @click="increment">增加</button>

  <button type="primary" round @click="onSubmit">Primary</button>

  <br/>
  gArray
  <br/>

  changeName of Modules<br/>
  {{name1}}<br/>
  <button @click="changeName">moduleChangeName</button>



</template>

<script lang="ts">
import { defineComponent } from "vue";

import { computed } from "vue";
import { useStore } from "vuex";


export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "About",
  setup() {

    const store = useStore();

    const count = computed(() => {
      return store.state.count;
    });
    const increment = () => {
      store.commit("increment",10);
    };
    const onSubmit = () => {
      store.dispatch("incrementAction", 100);
    };

    const gArray=store.getters.getArray
    console.log("gArray",JSON.stringify(gArray));

    const gCount=store.getters.getCount
    console.log("----gCount",gCount);


    ///module change name

    const changeName = () => {
      store.dispatch("user/changeName","gan");
    };

    const name1 = computed(() => {
      return store.state.user.name1;
    });


    return {
      // 返回的数据
      count,
      increment,
      onSubmit,
      name1,
      changeName
    };
  },
});
</script>
