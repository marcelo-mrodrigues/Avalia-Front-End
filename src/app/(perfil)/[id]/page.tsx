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
            <Link href={"/feed-logado"}><Image src={voltar} alt="icone"></Image></Link>
        </button> </div>
    
        <div className="w-[38%] bg-white flex items-center justify-center">
        <div className="bg-[#3EEE9A] flex h-[151px] absolute top-0 w-[38%]">
        <div className=" h-px w-[100%] bg-[#7E7E7E] absolute top-1/2 transform translate-y-64"></div>
        <div className="mt-20">
            <h1>Perfil do professor</h1>
            <p>ID: {id}</p>
        </div>
        
        </div>
          
          
        </div>
        <div className="w-[31%] bg-gray-100"></div> {/* Parte Direita */}
      </div>
      </>
    )
} 
export default PagePerfil