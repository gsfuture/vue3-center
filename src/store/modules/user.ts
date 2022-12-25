import UserState from "../states/userType";

const user = {
    namespaced: true,
    state: (): UserState => ({
        name1: "李四",
        age: 10,
        todo: [{ age: 1 }, { age: 3 }, { age: 4 }],
    }),
    mutations: {
        changeName(state: any, value: string): void {
            state.name1 = value;
            console.log(state.name1);
        },
    },
    actions: {
        changeName({ commit }: any, value: string): void {
            commit("changeName", value);
        },
    },
    getters: {
        getArray: (state: any) => {
            return state.todo;//.filter((itme: any) => itme.age >= 3);
        },
    },
};

export default user;
