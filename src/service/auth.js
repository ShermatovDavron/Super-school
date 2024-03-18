import axios from "@/service/axios.js";

const AuthService = {
    register(user) {
        return axios.post('/users',{user})
    }
}

export default AuthService