import {createStore} from 'vuex'
import OtherType from "./states/index";
import user from "./modules/user";

interface CommonState {
    name: string;
    age: number;
    count: number;

    todo:any[];
}
type states = CommonState & OtherType;

// interface State{
//
// }
export const store=createStore<states>({
    state(){
        return{
            count:1,
            name:"张三",
            age:100,
            todo:[{age:2},{age:3},{age:4}]
        }
    },
    mutations:{
        increment(state,value){
            state.count += value
        }
    },
    actions:{
        //这个名字可以随便起，和上面一样也没关系。函数里面进行了commit mutations，提交了mutations里面的increment，触发了increment这个函数，把额外的参数传进去，mutations里面的increment负责更改state的count。
        incrementAction(context:any,value:number){
            context.commit("increment",value)
        }
    },
    getters:{
        getArray:(state:any)=>{
            // const list =  state.todo.filter((item:any)=>item.age>=3);
             console.log("getArray State",state.todo);
            return state.todo;
        },
        getCount:(state:any)=>{
            return state.count;
        }
    },
    modules: {
        user,
    },

})
