const toast= {

    state: () => (
        {message: "Success!"}
    ),
    mutations: {
        SUCCESS(state, payload) {
            state.message = payload
        },
        INFO(state, payload) {
            state.message = payload
        },
        WARN(state, payload) {
            state.message = payload
        },
        ERROR(state, payload) {
            state.message = payload
        }
    },
    actions: {},

}


export default toast;
