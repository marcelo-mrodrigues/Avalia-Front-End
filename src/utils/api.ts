import axios, { AxiosResponse } from "axios";
import { CreateUserDto, LoginRequestBody, UpdateUserDto } from "./types";
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
        const resposta = await api.get(`/user/id/${id}`);
        return resposta.data;
    }catch(error){
        console.error("Erro na api", error);
        throw error;
    }
}

export const patchUser = async (id:any,token:string,dados:UpdateUserDto) =>{
    await api.patch(
        `/user/${parseInt(id)}`,{
        headers:{Authorization:`Bearer ${token}`},
        data:{dados}}
    )
}

export const deleteUser = async (id:any,token:string) =>{
    await api.delete(`/user/${id}`,{
        headers:{Authorization:`Bearer ${token}`}
    })
}

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
    const res = await api.get('/professor')
    return res.data
}


export const getOneComment = async (id:string) =>{
    await api.get(`/comment/${id}`)
}

export const getOneEvaluation = async (id:string) =>{
    await api.get(`/evaluation/${id}`)
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
