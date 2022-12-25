<template>
  <div>About组件</div>



  {{ count }}
  <button @click="increment">增加</button>

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
      store.commit("increment");
    };

    return {
      // 返回的数据
      count,
      increment
    };
  },
});
</script>
