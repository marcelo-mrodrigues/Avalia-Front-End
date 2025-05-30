'use client'; //next/navigation não funciona sem essa linha, e Router dá erro por algum motivo
// precisamos do mvp, eu imagimo que apenas a tela de perfil do professor seja necessária pro final.
// essa é a tela de perfil do professor. Lembrando.

import React, {useEffect, useState} from "react";
import HeaderDeslogado from "../../components/HeaderDeslogado";
import HeaderLogado from "../../components/HeaderLogado";
import retorno from "/public/retorno.svg";
import Image from "next/image";
import Link from 'next/link';
import building from "/public/mdi_office-building.svg"
import mail from "/public/eva_email-outline.svg"
import { useParams, useRouter } from 'next/navigation';
import { getOneProfessor, getSubjectsByProfessor, getEvaluationsByProfessor, getOneUser, deleteUser, patchUser } from "@/utils/api";
import { getOneEvaluation } from "@/utils/api";
import { string } from "yup";
import { decideHeader } from "@/app/page";
import { stringify } from "querystring";
import { toast } from "react-toastify";
import { LoginRequestBody } from "@/utils/types";



const PagePerfil = () =>{
    const router = useRouter();

    const  {id}  = useParams();

    const [user, setUser] = useState<any>(null);
    const [isLoggedIn, setIsLoggedIn]=useState(false);

    const excluirUser=async ()=>{
      const token = sessionStorage.getItem('token')
      
      if (token){
        try{
          await deleteUser(id,token)
        }
        catch(erro){
          return router.refresh();         
        }
          sessionStorage.clear()
          return router.push("/")
      }
    }

    const onSubmit= async(values:LoginRequestBody,actions:any)=>{
      const token = sessionStorage.getItem('token')
      
      if (token){
        try{
           await patchUser(id,token,values)
        }
        catch(erro){
          return router.refresh();         
        }
          sessionStorage.clear()
          return router.push("/")
      }
    }
    
 


    useEffect(() => {
        if (!id || isNaN(Number(id))){

        router.push('/'); //qualquer id inválido, volta pra home. isso deu alguns erros no terminal, mas tá tudo funcionando normalmente.}

        return;}
        
        decideHeader(setIsLoggedIn)
    
        
        const fetchData = async () => {
            const userId = Array.isArray(id) ? id[0] : id;
            try {
              const userData = await getOneUser(parseInt(userId));
              setUser(userData);
              console.log("User:", userData);
        
              // const subjectsData = await getSubjectsByProfessor(userId);
              // console.log("Subjects:", subjectsData); // Log para inspecionar os dados
              // setSubjects(subjectsData);

              // const EvaluationData = await getEvaluationsByProfessor(professorId);
              // console.log("Evaluation:", EvaluationData);
              // setEvaluation(EvaluationData);

            } catch (error) {
              console.error("Erro ao buscar dados:", error);
              router.push("/");
            }
          };
        
          fetchData();
        }, [id, router]);

    return(<><div><header>{isLoggedIn?<HeaderLogado/>:<HeaderDeslogado/>}</header></div>
        <div className="flex h-[calc(100vh-50px)] relative">
        
        <div className="w-[31%] bg-gray-100 relative">
        <button className="w-8 h-7 absolute top-1 -right-px">
            <Link href={"/"}><Image src={retorno} alt="icone"></Image></Link>
        </button> </div>
    
        <div className="w-[38%] bg-white flex items-center justify-center">
          <div className="bg-[#3EEE9A] flex h-[151px] absolute top-0 w-[38%]">
            <div className=" h-px w-[100%] bg-[#7E7E7E] absolute top-1/2 transform translate-y-64"></div>
            <div className="mt-20"><img src="/morty.svg" alt="fotodefault" className="w-44 h-44 rounded-full "/></div>
              <div  className="mt-44"> 
                <p className="font-sans text-3xl">{user?.name || "Sem Nome"} </p>
                <p className="flex gap-1">
                  <Image src={building} alt="Erro no carregamento da imagem"></Image>
                  {user?.course || "Sem Curso"} {user?.department || "Sem Departamento"}
                </p>  
                <p className="flex gap-1">
                  <Image src={mail} alt="Erro no carregamento da imagem"></Image>
                  {user?.email}
                </p>
              </div>
                <div className="mt-44 ml-auto mr-9 grid grid-rows-2 gap-14 ">
                  <button className="w-40 h-9 rounded-2xl bg-[#A4FED3] border-2 shadow-xl border-black " type="submit">Editar Perfil</button>
                  <button onClick={excluirUser} className="w-40 h-9 rounded-2xl bg-[#FEA4A4] border-2 shadow-xl border-black ">Excluir Perfil</button>
                </div>
              
          </div>

        <div className="w-full px-8 mt-32">
            <h2 className="text-lg font-bold mb-4">Publicações</h2>
                                                                {/* Aqui começa o comentário */}
             <div className="w-full mb-4 p-4 border rounded-lg bg-green-100">
                            <div className="flex items-center mb-2">
                                <img
                                    src="/morty.svg"
                                    alt="fotodefault"
                                    className="w-10 h-10 rounded-full mr-3"
                                />
                                <div>
                                    <p className="font-bold">{id}</p>
                                    <p className="text-sm text-gray-500">hahaha</p>
                                </div>
                            </div>
                            <p className="text-gray-700">
                               vamos inserir os users
                            </p>
                            
                        </div>
                                                {/* segundo comentário teste*/}
             <div className="w-full mb-4 p-4 border rounded-lg bg-green-100">
                            <div className="flex items-center mb-2">
                                <img
                                    src="/morty.svg"
                                    alt="fotodefault"
                                    className="w-10 h-10 rounded-full mr-3"
                                />
                                <div>
                                    <p className="font-bold">uhum</p>
                                    <p className="text-sm text-gray-500">20/12/2024, às 18:00</p>
                                </div>
                            </div>
                            <p className="text-gray-700">
                                usar key pra destribuir comentarios?

                            </p>
                            
        </div>
          </div>
          
        </div>
        <div className="w-[31%] bg-gray-100"></div> {/* Parte Direita */}
      </div>
      </>
    )
} 
export default PagePerfil