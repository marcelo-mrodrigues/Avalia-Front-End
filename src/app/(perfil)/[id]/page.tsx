'use client'; //next/navigation não funciona sem essa linha, e Router dá erro por algum motivo
// precisamos do mvp, eu imagimo que apenas a tela de perfil do professor seja necessária pro final.
// essa é a tela de perfil do professor. Lembrando.

import React from "react";
import HeaderDeslogado from "../../components/HeaderDeslogado";
import HeaderLogado from "../../components/HeaderLogado";
import voltar from "/public/voltar.svg"
import Image from "next/image";
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

export async function IdDefault() { //default id pra teste
    const ids = ['1', '2', '3'];
    return ids.map(id => ({ id }));
}



const PagePerfil = () =>{
    const router = useRouter();

    const { id } = useParams();

    if (isNaN(Number(id))) return router.push('/'); //qualquer id inválido, volta pra home. isso deu alguns erros no terminal, mas tá tudo funcionando normalmente.

    return(<><div><header><HeaderDeslogado/></header></div>
        <div className="flex h-[calc(100vh-50px)] relative">
        
        <div className="w-[31%] bg-gray-100 relative">
        <button className="w-8 h-7 absolute top-1 -right-px">
            <Link href={"/"}><Image src={voltar} alt="icone"></Image></Link>
        </button> </div>
    
        <div className="w-[38%] bg-white flex items-center justify-center">
        <div className="bg-[#3EEE9A] flex h-[151px] absolute top-0 w-[38%]">
        <div className=" h-px w-[100%] bg-[#7E7E7E] absolute top-1/2 transform translate-y-64"></div>
        <div className="mt-20"><img src="/rick.svg" alt="fotodefault" className="w-26 h-26 rounded-full "/>
            </div>
            <div  className="mt-44"> 
            <p className="font-sans text-3xl">*nome professor* </p>
            <p>Dept. *department*</p>
            <p>*disciplinas*</p>
            <p>ID: {id}</p>
        </div>
        
        </div>

        <div className="w-full px-8 mt-32">
            <h2 className="text-lg font-bold mb-4">Avaliações</h2>
                                                                {/* Aqui começa o comentário */}
             <div className="mb-4 p-4 border rounded-lg bg-green-100">
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
             <div className="mb-4 p-4 border rounded-lg bg-green-100">
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