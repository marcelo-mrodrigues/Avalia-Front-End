'use client'
import React, { useState } from 'react'
import ModalAvaliacao from '@/app/components/ModalAvaliacao'
import ModalComentario from '../components/ModalComentario'



const page = () => {
  const [isvisible, setIsVisible] = useState(false)
  return (
    <div className='bg-slate-400 h-screen w-screen inset-0 flex justify-center'>
      <h1 className='relative top-4'>Meu Modal</h1>
      <button onClick={() => setIsVisible(!isvisible)}>Modal</button>
      {isvisible ? <ModalAvaliacao/> : null}
    </div>
  )
}

export default page
