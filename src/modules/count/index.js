const count = {

    state: () => (
        {number: 0}
    ),
    mutations: {
        INCR(state) {
            state.number += 1
        },
        DECR(state) {
            state.number -= 1
        },
        RESET(state) {
            state.number = 0
        }
    },
    actions: {},
    getters: {
        doubleCount(state) {
           return state.number += 10;
        },

        resetCount(state) { 
          return  state.number =999
        }
    }
}


export default count;
