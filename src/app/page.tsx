import Image from "next/image"
import Link from "next/link"
import lupa from "/public/lupa.svg"
import HeaderDeslogado from "./components/HeaderDeslogado"
import CardProf from "./components/CardProf"

export default function Home() {
  return (
    <>
      <div className="h-full min-h-screen bg-[#EDEDED] ">  
        <header><HeaderDeslogado/></header>
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
          <div className="flex">
            <div className="ml-20 mb-5 text-black text-[36px]">Todos os Professores</div>
            <Link href="/usuario/Login" className="bg-[#00ABED] w-36 h-11 ml-auto mr-36 border border-white rounded-xl shadow-md text-white text-center text-[30px]">
            Ordenar
            </Link>
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

//#95BBDFE5
// font-family: Questrial;
// font-size: 25px;
// font-weight: 400;
// line-height: 25.75px;
// text-align: center;
// text-underline-position: from-font;
// text-decoration-skip-ink: none;







