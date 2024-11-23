import React from 'react'
import Link from "next/link";
import Image from "next/image";
import unb from "/public/unb.svg"

const HeaderDeslogado = () => {
  return (
    <header>
        <div className="w-full h-[99px] bg-[#A4FED3] flex place-items-center">
        <Image src={unb} alt={unb} className="w-[92px] h-[46px] ml-9"/>
        <Link href="/usuario/Login" className="bg-[#00ABED] w-[154px] h-[55px] ml-auto mr-14 border border-white rounded-2xl shadow-md text-white text-center text-[30px]">
            Login
        </Link>
        </div>
    </header>
  )
}

export default HeaderDeslogado
