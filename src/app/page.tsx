import Image from "next/image";
import Link from "next/link";
import unb from "/public/unb.svg"

export default function Home() {
  return (
    <main>
      <div className="absolute inset-0 h-[99px] w-full bg-[#A4FED3] place-items-center space-x-[1200px]">
        <Image src={unb} alt={unb} className="w-[92px] h-[46px] absolute top-[26px] left-[34px]" />
        <Link href="/usuario/Login" className="bg-[#00ABED] w-[154px] h-[55px] absolute top-[22px] 
        border border-white rounded-md 
        text-white text-center text-[30px] font-[400] decoration-from-font ">
          Login
          </Link>
      </div>
    </main>
  );
}


// font-family: Questrial;
// line-height: 30.9px;
// text-underline-position: from-font;
// text-decoration-skip-ink: none;
