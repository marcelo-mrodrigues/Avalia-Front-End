import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <header>
        <h1 className="bg-[#A4FED3] p-0 my-0">Hello World</h1>
        <Link href={"/userDeslogado"}>Login</Link>
      </header>

  );
}