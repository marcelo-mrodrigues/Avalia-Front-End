import React from 'react'
import Link from "next/link"
import Image from 'next/image'
import lupa from '/public/lupa.svg'
import HeaderLogado from '@/app/components/HeaderLogado'
import CardProf from '@/app/components/CardProf'


const usuarioLogado = () => {
  return (
    <>
      <div className="h-full min-h-screen bg-[#EDEDED] ">  
        <header><HeaderLogado/></header>
        <div>
          <div className="flex">
            <div className="ml-20 mt-11 text-black text-[36px]">Novos Professores</div>
            <div className="mr-32 mt-7 ml-auto mb-6 bg-white rounded-[20px] flex">
              <Image src={lupa} alt={lupa} className="w-[35px] h-[35px] ml-6 place-self-center"/>
              <div className="w-[454px] h-[61px] mt-2 ml-15 flex place-items-center">
                <Link href="/usuario/Login" className=" ml-20 text-[#999797] text-center text-[25px] leading[25.75px]"> Buscar Professor(a)</Link>
              </div>
            </div>
          </div>
        </div>
        <main>
          <div className="grid grid-cols-4 col-auto mt-7 ml-32 mr-32 place-items-center" >
            <CardProf/>
            <CardProf/>
            <CardProf/>
            <CardProf/>
          </div>
          <div className="bg-black h-1 mx-36 my-11"></div>
          <div className="flex items-center">
            <div className="ml-20 mb-5 text-black text-[36px]">Todos os Professores</div>
            <button className="bg-[#00ABED] w-52 h-11 ml-auto mr-10 border border-white rounded-xl shadow-md text-white text-center text-[25px] ">
            Nova Publicação
            </button>
            <button className="bg-[#00ABED] w-36 h-11 mr-36 border border-white rounded-xl shadow-md text-white text-center text-3xl">
            Ordenar
            </button>
          </div>
          <div className="grid grid-cols-4 col-auto mt-7 ml-32 mr-32 place-items-center" >
            <CardProf/>
            <CardProf/>
            <CardProf/>
            <CardProf/>
          </div>
        </main>
      </div>  
    </>
  )
}

export default usuarioLogado


