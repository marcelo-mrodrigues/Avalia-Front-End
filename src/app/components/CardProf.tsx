import React from 'react'
import rick from "/public/Rick.svg"
import Image from "next/image"
import { Router } from 'next/router'


interface CardProf {
  nome : string,
  departamento : string
}

const CardProf = ({nome, departamento} : CardProf) => {
  return (
    <div key={nome} className="relative w-80 h-80 group"> 
    <div className="rounded-[10px] bg-white grid gap-1 place-items-center border-white">
        <Image src={rick} alt={rick} className="w-60 h-60 mt-3 rounded-3xl"></Image>
        <div className="text-2xl text-center leading-6 font-Questrial">{nome}</div>
        <div className="mb-2 text-xl text-center leading-5 break-words text-[#B2B0B0] font-Questrial">{departamento}</div>
    </div> 
  </div>
  )
}

export default CardProf