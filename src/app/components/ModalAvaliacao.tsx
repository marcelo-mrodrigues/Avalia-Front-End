"use client";
import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';


// Validação dos Dados
const initialValues = {
  professorSel : '',
  disciplinaSel: '',
  conteudo: ''
};

const validationSchema = Yup.object().shape({
  professorSel: Yup.string().notOneOf(["Selecione o professor"], "Selecione o professor").required('Selecione um professor'),
  disciplinaSel: Yup.string().notOneOf(["Selecione uma disciplina"], "Selecione uma disciplina").required('Selecione uma disciplina'),
  conteudo : Yup.string().required('Escreva uma avaliação')
});


const ModalAvaliacao = () => {
  const [professores, setProfessores] = useState([{name : 'Selecione o professor', id: ''} , {name: 'João', id: '1'}, {name: 'Kleber', id: '2'}]);
  const [disciplinas, setDisciplinas] = useState([{name: 'Selecione a disciplina', id: ''},{name : 'CIC', id: '1'}, {name: 'OAC', id: '2'}]);
  return (
      <div className='fixed flex z-50 inset-0 items-center justify-center'>
      <Formik initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(Values) => console.log(Values)}
      >
        <Form className='flex bg-[#3EEE9A] flex-col h-[60%] w-[40%] p-5 rounded-xl'>
        <div className='flex gap-3 flex-col h-full'>
            <Field as='select' id='professorSel' name='professorSel' className="p-2 rounded-sm">
            {professores.map((professor) => (
              <option key={professor.name} value={professor.id}>{professor.name}</option>
            ))}
            </Field>
            <ErrorMessage name='professorSel' className='text-red-600 text-xs' component="div" />

            <Field as='select' id='disciplinaSel' name='disciplinaSel'  className='p-2 rounded-sm'>
            {disciplinas.map((disciplinas) => (
              <option key={disciplinas.name} value={disciplinas.id}>{disciplinas.name}</option>
            ))}
            </Field>
            <ErrorMessage name='disciplinaSel' className='text-red-600 text-xs' component="div" />

            <Field component='textarea' name='conteudo' className="w-full h-full align-text-top whitespace-pre-wrap"/>
            <ErrorMessage name={"conteudo"} className='text-red-600 text-xs' component="div" />
        </div>
        <div className='flex justify-end gap-4 p-2'>
          <button className='text-white font-Inter text-xl p-1'>Cancelar</button>
          <button type='submit' className='bg-[#A4FED3] text-[#2B895C] font-Inter text-xl p-1 rounded-md'>Comentar</button>
        </div>
      </Form>
      </Formik>
      </div>
  )
}

export default ModalAvaliacao
