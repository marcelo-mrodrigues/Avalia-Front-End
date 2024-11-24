import React from 'react'
import rick from "/public/Rick.svg"
import Image from "next/image"

const CardProf = () => {
  return (
    <div className="relative w-80 h-80 group"> 
    <div className="rounded-[10px] bg-white grid gap-1 place-items-center
     group-hover:bg-[#95BBDFE5]/90 group-hover:border-4 border-white">
        <Image src={rick} alt={rick} className="w-60 h-60 mt-3 rounded-3xl group-hover:opacity-15"></Image>
        <div className="text-2xl text-center leading-6 font-Questrial group-hover:opacity-15">Rick Sanchez</div>
        <div className="mb-2 text-xl  text-center leading-5 break-words text-[#B2B0B0] font-Questrial group-hover:opacity-25">Segurança Computacional</div>
    </div>
    <div className="absolute inset-y-0 inset-x-0 gap-4 hidden group-hover:grid place-self-center">
        <p className="text-2xl font-semibold font-Questrial place-self-center ">Nome</p>
        <p className="bg-black -mx-20 h-0.5"></p>
        <p className="text-2xl font-semibold font-Questrial place-self-center">Matéria</p>
        <p className="bg-black -mx-20 h-0.5"></p>
        <p className="text-2xl font-semibold font-Questrial place-self-center">Recentes</p>
        <p className="bg-black -mx-20 h-0.5"></p>
        <p className="text-2xl font-semibold font-Questrial place-self-center">Antigas</p>
    </div> 
  </div>
  )
}

export default CardProf