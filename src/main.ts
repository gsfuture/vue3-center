import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import {store} from './store'

const app = createApp(App)

app.use(router)
app.mount('#main-app');

app.use(store)

// 为自定义的选项 'myOption' 注入一个处理器。
app.mixin({
    created() {
        const myOption = this.$options.myOption
        console.log("-------- myOption",myOption);
        if (myOption) {
            document.write(myOption)
        }
    }
})
