import axios from "axios";
import { CreateUserDto, LoginRequestBody } from "./types";

const api = axios.create({
    baseURL:'http://localhost:3333'
})

export const postUser = async (cadastro:CreateUserDto) =>{
    await api.post('auth/cadastro', cadastro)
    .then(function(data){
        console.log(data.data)
    })
}


export const getOneUser = async () =>{
    await api.get('/user/id/10')
    .then(function(data){
        console.log(data)
    })
}

// const patchUser = async (id:number) =>{
//     await api.patch(`/user/${id}`,{
//         headers:{Authorization:`Bearer ${token}`}
//     })
//     .then(function(data){
//         console.log(data)
//     })
// }

// const deleteUser = async (data:CreateUserDto,token:User) =>{
//     await api.delete('/user',{
//         headers:{Authorization:`Bearer ${token}`}
//     })
//     .then(function(data){
//         console.log(data)
//     })
// }

export const loginUser = async (login:LoginRequestBody) =>{
    await api.post('auth/login',login)
    .then(function(data){
        console.log(data.data)
    })
}



// const getAllUsers = async () =>{
//     await api.get("/user")
//     .then(function(data){
//         console.log(data)
//     })
// }
