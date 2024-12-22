"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import HeaderDeslogado from "./components/HeaderDeslogado";
import CardProf from "./components/CardProf";
import lupa from "/public/lupa.svg";
import PopUp from "./components/PopUpOrdenacao";
import HeaderLogado from "./components/HeaderLogado";
import { getOneProfessor} from "@/utils/api";
import { getAllProfessors } from "@/utils/api";

export default function Home() {
  const [isPopUpVisible, setPopUpVisible] = useState(false);
  const togglePopUp = () => setPopUpVisible(!isPopUpVisible);

  const [isLoggedIn, setIsLoggedIn]=useState(false);

  useEffect(()=>{
    const token = sessionStorage.getItem('token');
    if (token == null){
      setIsLoggedIn(false);
    }    
    else{
      setIsLoggedIn(true);
    }
  },[])

  return (
    <>
      <div className="h-full min-h-screen bg-[#EDEDED]">
        <header>
          {isLoggedIn ? <HeaderLogado/> : <HeaderDeslogado/>}
        </header>
        <div>
          <div className="flex">
            <div className="ml-20 mt-11 text-black text-4xl font-Questrial">
              Novos Professores
            </div>
            <div className="mr-32 mt-7 ml-auto mb-6 bg-white rounded-3xl flex">
              <button type="submit">
                <Image
                  src={lupa}
                  alt="Lupa"
                  className="w-9 h-9 ml-6 place-self-center"
                />
              </button>
              <div className="w-96 h-16 mt-2 ml-15 flex relative place-items-center">
                <input
                  type="search"
                  className="w-full text-[#999797] text-center text-3xl font-Questrial leading-6"
                  placeholder="Buscar Professor(a)"
                />
              </div>
            </div>
          </div>
        </div>

        <main>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mt-7 ml-32 mr-32 place-items-center gap-y-10">
            <CardProf />
            <CardProf />
            <CardProf />
            <CardProf /> 
                    
          </div>
          <div className="bg-black h-1 mx-36 my-11"></div>
          <div className="flex justify-between">
            <div className="ml-20 mb-5 text-black text-4xl font-Questrial">
              Todos os Professores
            </div>
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
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mt-7 ml-32 mr-32 place-items-center gap-y-10">
            <CardProf />
            <CardProf />
            <CardProf />
            <CardProf />
          </div>
        </main>
      </div>
    </>
  );
}
