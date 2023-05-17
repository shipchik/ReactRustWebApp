import axios from 'axios';



const instance = axios.create({
    withCredentials:true,
    baseURL:"http://localhost:8000/api/"
});


export const UserApi = {
    registerUser(email,password,username){
        return instance.post('auth/register',{email,username,password})
    },

    loginUser(username,password){
        return instance.post('auth/login',{username,password})
    },
    me(){
        return instance.get('auth/me')
    },
    logout(){
        return instance.get('auth/logout')
    },
    profileData(){
        return instance.get('auth/profile')
    }
}