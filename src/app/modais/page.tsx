'use client'
import React, { useState } from 'react'
import ModalAvaliacao from '@/app/components/ModalAvaliacao'
import ModalComentario from '../components/ModalComentario'


const page = () => {
  const [isvisible, setIsVisible] = useState(false)
  return (
    <div className='h-screen w-screen inset-0 flex flex-col items-center'>
      <h1 className=''>Meu Modal</h1>
      <button onClick={() => setIsVisible(!isvisible)}> Modal </button>
      {isvisible ? <ModalComentario editar={false} onClose={() => setIsVisible(!isvisible)} /> : null}
    </div>
  )
}

export default page
