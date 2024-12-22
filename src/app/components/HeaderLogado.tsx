import React from 'react'
import Image from "next/image";
import unb from "/public/unb.svg"
import morty from "/public/morty.svg"
import deslogar from "/public/deslogar.svg"
import sino from "/public/sino.svg"
import { useRouter } from 'next/navigation';

const HeaderLogado = () => {
  
  const router = useRouter()

  const cleanToken=()=>{
      sessionStorage.clear()
      return router.push('/')
  }

  return (
    <header>
        <div className="w-full h-24 bg-[#A4FED3] flex place-items-center">
          <Image src={unb} alt={unb} className="w-24 h-12 ml-9"/>
          <button className="w-11 h-11 ml-auto"><Image src={sino} alt={sino}></Image></button>
          <button className="w-16 h-16 ml-10 mr-7"><Image src={morty} alt={morty} className='rounded-full' ></Image></button>
          <button type="reset" onClick={cleanToken} className='w-10 h-10 mr-12'><Image src={deslogar} alt={deslogar} ></Image></button>
        </div>
    </header>
  )
}

export default HeaderLogado
