import React from 'react'
import Image from 'next/image'
import morty from '/public/morty.svg'
import editar from '/public/edit.svg'
import deletar from '/public/delete.svg'

export interface Comentario {
    nome : string;
    data : string;
    conteudo : string
}

const ComentarioAvaliacao = ({nome, data, conteudo} : Comentario) => {
    return(
        <div className='bg-[#3EEE9A] p-3 rounded-xl'>
            <div className='flex items-center gap-2'>
                <Image src={morty} alt='Imagem do usuário' className='w-12 h-12'></Image>
                <span className='font-Inter text-base leading-5'>{nome}</span>
                <span className='text-[#71767B]'>{"•"}</span> 
                <span className='font-Inter text-base leading-5 text-[#71767B]'>{data}</span>
            </div>
            <p className='relative left-14 font-Inter text-lg leading-5 pb-2'>{conteudo}</p>
            <div className='flex gap-3 justify-end w-full'>
                <button>
                    <Image src={editar} alt='Editar comentário'></Image>
                </button>
                <button>
                    <Image src={deletar} alt='Deletar imagem'></Image>
                </button>
            </div>
        </div>
    )
}; 
export default ComentarioAvaliacao;