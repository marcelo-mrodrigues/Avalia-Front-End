'use client'; //next/navigation não funciona sem essa linha, e Router dá erro por algum motivo
// precisamos do mvp, eu imagimo que apenas a tela de perfil do professor seja necessária pro final.
// essa é a tela de perfil do professor. Lembrando.

import React, {useEffect, useState} from "react";
import HeaderDeslogado from "../../components/HeaderDeslogado";
import HeaderLogado from "../../components/HeaderLogado";
import retorno from "/public/retorno.svg";
import Image from "next/image";
import Link from 'next/link';
import building from "/public/mdi_office-building.svg"
import livro from "/public/abra-o-livro 1.svg"
import { useParams, useRouter } from 'next/navigation';
import { getOneProfessor, getSubjectsByProfessor, getEvaluationsByProfessor } from "@/utils/api";
import { getOneEvaluation } from "@/utils/api";
import { string } from "yup";
import { decideHeader } from "@/app/page";


const PagePerfil = () =>{
    const router = useRouter();

    const { id } = useParams();

    const [professor, setProfessor] = useState<any>(null);
    const [subjects, setSubjects] = useState<any[]>([]);;
    const [evaluation, setEvaluation] = useState<any[]>([]);
    const [isLoggedIn, setIsLoggedIn]=useState(false);



    useEffect(() => {
        if (!id || isNaN(Number(id))){

        router.push('/'); //qualquer id inválido, volta pra home. isso deu alguns erros no terminal, mas tá tudo funcionando normalmente.}

        return;}
        
        decideHeader(setIsLoggedIn)

        const fetchData = async () => {
            const professorId = Array.isArray(id) ? id[0] : id;
            try {
              const professorData = await getOneProfessor(professorId);
              setProfessor(professorData);
              console.log("Professor:", professorData);
        
              const subjectsData = await getSubjectsByProfessor(professorId);
              console.log("Subjects:", subjectsData); // Log para inspecionar os dados
              setSubjects(subjectsData);

              const EvaluationData = await getEvaluationsByProfessor(professorId);
              console.log("Evaluation:", EvaluationData);
              setEvaluation(EvaluationData);

              console.log(sessionStorage.getItem("token"))

            } catch (error) {
              console.error("Erro ao buscar dados:", error);
              router.push("/");
            }
          };
        
          fetchData();
        }, [id, router]);

    return(
    <>
      <div><header>{isLoggedIn?<HeaderLogado/>:<HeaderDeslogado/>}</header></div>
        <div className="flex h-[calc(100vh-50px)] relative">
        
        <div className="w-[31%] bg-gray-100 relative">
        <button className="w-8 h-7 absolute top-1 -right-px">
            <Link href={"/"}><Image src={retorno} alt="icone"></Image></Link>
        </button> </div>
    
        <div className="w-[38%] bg-white flex items-center justify-center">
        <div className="bg-[#3EEE9A] flex h-[151px] absolute top-0 w-[38%]">
        <div className=" h-px w-[100%] bg-[#7E7E7E] absolute top-1/2 transform translate-y-64"></div>
        <div className="mt-20"><img src="/rick.svg" alt="fotodefault" className="w-26 h-26 rounded-full "/>
            </div>
            <div  className="mt-44"> 
            <p className="font-sans text-3xl">{professor?.name || "Sem Nome"} </p>
            <p className="flex gap-1">
              <Image src={building} alt="Erro no carregamento da imagem"></Image>
              Dept. {professor?.department || "Sem Departamento"}
            </p>
            <p className="flex gap-1">
            <Image src={livro} alt="Erro no carregamento da imagem"></Image>
          {subjects.length > 0 ? ( [...new Map(subjects.map((item) => [item.subject.id, item.subject])).values()]
      .map((uniqueSubject, index) => (
        <span key={index}>{uniqueSubject.name}</span>
      ))
  ) : (
    <span>Sem Disciplinas</span>
  )}
</p>
        </div>
        
        </div>

        <div className="w-full px-8 mt-32 bg-[#3EEE9A] rounded-2xl">
  <h2 className="text-lg font-bold mb-4">Avaliações</h2>
  {evaluation.length > 0 ? (
    evaluation.map((evaluationItem, index) => (
      <div key={index} className="w-full mb-4 p-4 border rounded-lg bg-green-100">
        <div className="flex items-center mb-2">
          <img
            src="/morty.svg"
            alt="Avatar do usuário"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <p className="font-bold">{evaluationItem.user?.name || "Usuário Anônimo"}</p>
            <p className="text-sm text-gray-500">
                {new Date(evaluationItem.createdAt).toLocaleDateString("pt-BR", {
                        day: "2-digit",
                      month: "2-digit",
                    year: "numeric",
                  hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        </div>
        <p className="text-gray-700">{evaluationItem.content}</p>
        <div className="text-sm text-gray-500 mt-2">
          <span>Disciplina: {evaluationItem.subject?.name || "Sem disciplina"}</span>
        </div>
      </div>
    ))
  ) : (
    <p className="text-gray-500">Nenhuma avaliação encontrada.</p>
  )}
</div>

  
          </div>
          
        
        <div className="w-[31%] bg-gray-100 flex items-center justify-center h-full"></div> {/* Parte Direita */}
        </div>
      </>
    )
} 
export default PagePerfil