import {createStore} from 'vuex'
interface State{
    count:number
}
export const store=createStore<State>({
    state(){
        return{
            count:1
        }
    },
    mutations:{
        increment(state){
            state.count++
        }
    }
})
