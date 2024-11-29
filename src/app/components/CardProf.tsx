import React from 'react'
import rick from "/public/Rick.svg"
import Image from "next/image"

const CardProf = () => {
  return (
    <div className="relative w-80 h-80 group"> 
    <div className="rounded-[10px] bg-white grid gap-1 place-items-center border-white">
        <Image src={rick} alt={rick} className="w-60 h-60 mt-3 rounded-3xl"></Image>
        <div className="text-2xl text-center leading-6 font-Questrial">Rick Sanchez</div>
        <div className="mb-2 text-xl text-center leading-5 break-words text-[#B2B0B0] font-Questrial">Segurança Computacional</div>
    </div> 
  </div>
  )
}

export default CardProf