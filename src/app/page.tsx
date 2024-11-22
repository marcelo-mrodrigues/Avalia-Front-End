import Image from "next/image";
import Link from "next/link";
import unb from "/public/unb.svg"

export default function Home() {
  return (
    <main>
      <div className="absolute inset-0 h-[99px] w-full bg-[#A4FED3] place-items-center space-x-[1200px]">
        <Image src={unb} alt={unb} className="w-[92px] h-[46px] absolute top-[26px] left-[34px]" />
        <Link href="/usuario/Login" className="bg-[#00ABED] w-[154px] h-[55px] absolute top-[22px] right-[34px] 
        border border-white rounded-md shadow-[0px_4px_4px_0px_rgba(0, 0, 0, 0.25)]
        text-white text-center text-[30px] font-[400] decoration-from-font ">
          Login
          </Link>
      </div>
      <h1 className="absolute left-[88px] top[143px] text-black">Novos Professores</h1>
    </main>
  );
}


// font-family: Questrial;
// font-size: 30px;
// font-weight: 400;
// line-height: 30.9px;
// text-align: center;
// text-underline-position: from-font;
// text-decoration-skip-ink: none;



