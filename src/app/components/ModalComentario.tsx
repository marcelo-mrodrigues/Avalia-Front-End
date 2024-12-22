'use client';
import React, { useState } from 'react'
import Image from "next/image"
import lixeira from "/public/lixeira.svg"
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';

// Validação dos Dados
const initialValues = {
  conteudo : ""
};

const validationSchema = Yup.object().shape({
  conteudo: Yup.string().max(144, "Comentario muito grande").required('Comentario Inválido')
});

export interface ModalProps {
  editar : boolean
  onClose: () => void
}


const ModalComentario = ({editar, onClose} : ModalProps) => {

  return (
    <div className='fixed flex z-50 inset-0 items-center justify-center'>
      <Formik initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(Values) => console.log(Values)}
      >
        <Form className='flex bg-[#3EEE9A] flex-col h-[50%] w-[40%] p-5 rounded-xl'>
          <Field component='textarea' rows={10}  cols={30} name={"conteudo"} className="w-full align-text-top whitespace-pre-wrap"/>
          <ErrorMessage name={"conteudo"} className='text-red-600 text-sm' component="div" />
          <div className={editar ? 'flex justify-between' : 'flex justify-end'}>
            {editar ? (
              <button>
                <Image className='w-10 h-10' src={lixeira} alt='Apagar imagem'></Image>
              </button>
            ) : null}
            <div className='flex justify-end gap-4 p-3'>
              <button onClick={onClose} className='text-white font-Inter text-xl p-1'>Cancelar</button>
              <button type='submit' className='bg-[#A4FED3] text-[#2B895C] font-Inter text-xl p-1 rounded-md'>Comentar</button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default ModalComentario
// <textarea value={comentario} onChange={(event) => setComentario(event.target.value)} className='bg-[#A4FED3] w-full h-full'/>