"use client";
import ComentarioAvaliacao from '@/app/components/ComentarioAvaliacao';
import HeaderDeslogado from '@/app/components/HeaderDeslogado'
import React, { useState } from 'react'
import Image from 'next/image'
import voltar from "/public/goBack.svg"

const decideHeader = () => (<HeaderDeslogado/>); // Todo

const page = () => {

  const [comentarios, setComentarios] = useState([
    {nome : "Joao", data : "Hoje", conteudo : "Que horas São?"}, 
    {nome : "Helô", data: "Amanhã", conteudo: "Meu nome não é Johnny"},
    {nome: "Deegan", data: "Ontem", conteudo: "Feed the Beast!"}])
  
  return (
    <div className='w-full min-h-fit flex flex-col bg-[#EDEDED]'>
    {decideHeader()}
    <div className='flex'>
      <button className='absolute'>
        <Image src={voltar} alt='Voltar para página anterior'></Image>
      </button>
      <div className='w-1/2 flex flex-col min-h-screen mx-auto bg-white p-2 gap-2 border border-black border-t-0 border-b-0'>
        {comentarios.map((comentario) => (
          <ComentarioAvaliacao key={comentario.nome} nome={comentario.nome} data={comentario.data} conteudo={comentario.conteudo}/>
        ))}
      </div>
    </div>
    </div>
  )
};

export default page