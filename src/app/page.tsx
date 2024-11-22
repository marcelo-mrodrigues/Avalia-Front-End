import Image from "next/image";
import Link from "next/link";
import lupa from "/public/lupa.svg"
import rick from "/public/Rick.svg"
import HeaderDeslogado from "./components/HeaderDeslogado";

export default function Home() {
  return (
    <>
      <div className="h-full min-h-screen bg-[#EDEDED] ">  
        <header><HeaderDeslogado/></header>
        <div>
          <div className="flex">
            <div className="ml-24 mt-5 text-black text-[36px]">Novos Professores</div>
            <div className="mr-36 mt-5 ml-auto mb-6 bg-white rounded-[20px] flex">
              <Image src={lupa} alt={lupa} className="w-[35px] h-[35px] ml-6 place-self-center"/>
              <div className="w-[454px] h-[61px] mt-2 ml-15 flex place-items-center">
                <Link href="/usuario/Login" className=" ml-20 text-[#999797] text-center text-[25px] leading[25.75px]"> Buscar Professor(a)</Link>
              </div>
            </div>
          </div>
        </div>

        <main>
          <div className="grid grid-cols-4 col-auto mt-7 ml-32 mr-32 place-items-center" >
              <div className="w-80 h-80 rounded-[10px] bg-white flex flex-col place-items-center hover:bg-[#95BBDFE5]/90">
                <Image src={rick} alt={rick} className="w-60 h-60 mt-5 rounded-3xl"></Image>
                <div className="w-52 h-10 mt-2 text-2xl text-center leading-6 font-normal">Rick Sanchez</div>
                <div className="w-52 h-10 mb-3 text-lg text-center leading-5 break-words text-[#B2B0B0]">Segurança Computacional</div>
              </div>
              <div className="w-80 h-80 rounded-[10px] bg-white flex flex-col place-items-center">
                <Image src={rick} alt={rick} className="w-60 h-60 mt-5 rounded-3xl"></Image>
                <div className="w-52 h-10 mt-2 text-2xl text-center leading-6 font-normal">Rick Sanchez</div>
                <div className="w-52 h-10 mb-3 text-lg text-center leading-5 break-words text-[#B2B0B0]">Segurança Computacional</div>
              </div>
              <div className="w-80 h-80 rounded-[10px] bg-white flex flex-col place-items-center">
                <Image src={rick} alt={rick} className="w-60 h-60 mt-5 rounded-3xl"></Image>
                <div className="w-52 h-10 mt-2 text-2xl text-center leading-6 font-normal">Rick Sanchez</div>
                <div className="w-52 h-10 mb-3 text-lg text-center leading-5 break-words text-[#B2B0B0]">Segurança Computacional</div>
              </div>
              <div className="w-80 h-80 rounded-[10px] bg-white flex flex-col place-items-center">
                <Image src={rick} alt={rick} className="w-60 h-60 mt-5 rounded-3xl"></Image>
                <div className="w-52 h-10 mt-2 text-2xl text-center leading-6 font-normal">Rick Sanchez</div>
                <div className="w-52 h-10 mb-3 text-lg text-center leading-5 break-words text-[#B2B0B0]">Segurança Computacional</div>
              </div>
          </div>
        </main>
      </div>
    </>
  );
}

//#95BBDFE5
// font-family: Questrial;
// font-size: 30px;
// font-weight: 400;
// line-height: 30.9px;
// text-align: center;
// text-underline-position: from-font;
// text-decoration-skip-ink: none;

// font-family: Questrial;
// font-size: 23px;
// font-weight: 400;
// line-height: 23.69px;
// text-align: center;
// text-underline-position: from-font;
// text-decoration-skip-ink: none;







