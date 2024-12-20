"use client";
import React, { useState } from 'react'

const ModalAvaliacao = () => {
  const [professores, setProfessores] = useState(["Selecione o professor", "João", "Kleber", "thiago"]);
  const [professorSel, setProfessorSel] = useState("Selecione o professor");
  const [disciplinas, setDisciplinas] = useState(["Selecione a disciplina","CIC", "OAC", "LCL", "IAL"]);
  const [disciplinaSel, setDisciplinaSel] = useState("Selecione a Disciplina");
  return (
    <div className='flex bg-[#3EEE9A] flex-col h-[50%] w-[40%] p-5 rounded-xl'>
      <div className='flex flex-col gap-3 h-full'>
        <select className='dropdown' defaultValue={"Selecione o Professor"} onChange={(evento) => setProfessorSel(evento.target.value)}>
          {professores.map((professor) => (
            <option key={professor} value={professor}>{professor}</option>
          ))}
        </select>

        <select className='dropdown' defaultValue={"Selecione o Professor"} onChange={(evento)=> setDisciplinaSel(evento.target.value)}>
          {disciplinas.map((disciplina) =>(
            <option key={disciplina} value={disciplina}>{disciplina}</option>
          ))}
        </select>

        <textarea className='bg-[#A4FED3] w-full h-full'/>
      </div>
      <div className='flex justify-end gap-4 p-2'>
      <button className='text-white font-Inter text-xl p-1'>Cancelar</button>
      <button className='bg-[#A4FED3] text-[#2B895C] font-Inter text-xl p-1 rounded-md'
       onClick={() => console.log(professorSel)}>Comentar</button>
      </div>
    </div>
  )
}

export default ModalAvaliacao
