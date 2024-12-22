"use client";
import React, { useState } from "react";
import Image from 'next/image'
import lupa from '/public/lupa.svg'
import HeaderLogado from '@/app/components/HeaderLogado'
import CardProf from '@/app/components/CardProf'
import PopUp from '../components/PopUpOrdenacao'
import Novapub from "../components/Novapub";


const FeedLogado = () => {

  const [isPopUpVisible, setPopUpVisible] = useState(false);

  const togglePopUp = () => setPopUpVisible(!isPopUpVisible);

  return (
    <>
      <div className="h-full min-h-screen bg-[#EDEDED] ">  
        <header><HeaderLogado/></header>
        <div>
          <div className="flex">
            <div className="ml-20 mt-11 text-black text-4xl font-Questrial">Novos Professores</div>
            <div className="mr-32 mt-7 ml-auto mb-6 bg-white rounded-3xl flex">
              <button type="submit"><Image src={lupa} alt={lupa} className="w-9 h-9 ml-6 place-self-center"/></button>
              <div className="w-96 h-16 mt-2 ml-15 flex relative place-items-center">
                <input type="search" className="w-full text-[#999797] text-center text-3xl font-Questrial leading-6" placeholder="Buscar Professor(a)"/>
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
          <div className="flex">
            <div className="ml-20 mb-5 text-black text-4xl font-Questrial">Todos os Professores</div>
            <Novapub/>
            <div className="relative mr-36">
              <button
                onClick={togglePopUp}
                className="bg-[#00ABED] w-36 h-11 border border-white rounded-xl shadow-md text-white text-center text-3xl font-Questrial"
              >
                Ordenar
              </button>
              <PopUp isVisible={isPopUpVisible} />
            </div>
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
  );
}

export default FeedLogado




