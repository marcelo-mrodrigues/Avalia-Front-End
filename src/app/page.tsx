import Image from "next/image";
import Link from "next/link";
import unb from "/public/unb.svg"
import lupa from "/public/lupa.svg"
import rick from "/public/Rick.svg"

export default function Home() {
  return (
    <>
      <div className="h-full bg-[#BEBEBE]">  
        <header>
          <div className="w-full h-[99px] bg-[#A4FED3] flex place-items-center">
            <Image src={unb} alt={unb} className="w-[92px] h-[46px] ml-9"/>
            <Link href="/usuario/Login" className="bg-[#00ABED] w-[154px] h-[55px] ml-auto mr-14 border border-white rounded-2xl shadow-md text-white text-center text-[30px]">
              Login
            </Link>
          </div>
        </header>
      {/* <div className="bg-[#BEBEBE]"> */}
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
        <div className="flex gap-x-10 mt-30 ml-37 mr-37 h-[281px]">
          <div className="w-[236px] h-[281px] rounded-[10px] bg-white flex flex-col place-items-center">
            <Image src={rick} alt={rick} className="w-[185px] h-[185px] mt-5 rounded-[25px]"></Image>
            <div className="w-[191px] h-[30px] mt-2 text-[23px] text-center leading-[23.69px] font-normal">Rick Sanchez</div>
            <div className="w-[191px] h-[30px] mb-3 text-[18px] text-center leading-[18.64px] break-words text-[#B2B0B0]">Segurança Computacional</div>
          </div>
        </div>
        </main>
      </div>
    </>
  );
}

//
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







