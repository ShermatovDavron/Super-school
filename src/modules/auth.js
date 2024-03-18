import AuthService from "@/service/auth.js";

const state = {
    isLoading: false
}
const mutations = {
    registerStart(state) {
        state.isLoading = true
        state.user=null
        state.payload=null
    },
    registerSuccess(state,payload) {
        state.isLoading = false
        state.user = payload
    },
    registerFailure(state,payload) {
        state.isLoading = false
        state.errors = payload
    }
}
const actions = {
    register(context, user) {
        return new Promise((resolve, reject)=>{
            context.commit("registerStart")
            AuthService.register(user).then(response=>{
                context.commit("registerSuccess")
                resolve(response.data.user)
            }).catch(error=>{
                context.commit("registerFailure")
                reject(error.response.data)
            })
        })

    }
}
export default {
    state,
    mutations,
    actions
}