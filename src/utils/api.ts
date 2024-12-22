import axios, { AxiosResponse } from "axios";
import { CreateUserDto, LoginRequestBody } from "./types";
import { CreateCommentDto } from "./types";
import { CreateEvaluationDto } from "./types";

const api = axios.create({
    baseURL:'http://localhost:3333'
})

const setToken = async (res:AxiosResponse) => {
    sessionStorage.setItem('token',res.data.access_token)
}
export const postUser = async (cadastro:CreateUserDto) => {
    const res = await api.post('auth/cadastro', cadastro);
    setToken(res)
}


export const getOneUser = async (id:number) =>{
    try{
        const resposta = await api.get(`/user/${id}`);
        return resposta.data;
    }catch(error){
        console.error("Erro na api", error);
        throw error;
    }
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
    const res = await api.post('auth/login',login);
    setToken(res)
}



// const getAllUsers = async () =>{
//     await api.get("/user")
//     .then(function(data){
//         console.log(data)
//     })
// }

export const getOneProfessor = async (id:string ) =>{
    try{
        const resposta = await api.get(`/professor/${id}`);
        return resposta.data;
    }catch(error){
        console.error("Erro na api", error);
        throw error;
}};


export const getAllProfessors = async () =>{
    await api.get('/professor')
    .then(function(data){
        console.log(data)
    })
}


export const getOneComment = async (id:string) =>{
    await api.get(`/comment/${id}`)
    .then(function(data){
        console.log(data)
    })
}

export const getOneEvaluation = async (id:string) =>{
    await api.get(`/evaluation/${id}`)
    .then(function(data){
        console.log(data)
    })
}
export const getSubjectsByProfessor = async (id:string) =>{
    try{
       const resposta = await api.get(`/professor/subjects/${id}`)
       return resposta.data;}
       
       catch(error){
        console.error("Erro na api", error);
        throw error;
    
    }
}
export const getEvaluationsByProfessor = async (id:string) =>{
    try{
        const resposta = await api.get(`/professor/evaluations/${id}`)
        return resposta.data;}
        
        catch(error){
         console.error("Erro na api", error);
         throw error;
     
     }
}
