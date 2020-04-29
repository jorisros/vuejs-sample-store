
export default {
    state: {
        loading: false
    },
    getters: {
        isLoading (state) {
            return state.loading
        }
    },
    mutations: {
        startLoading: state => state.loading = true
    }
};