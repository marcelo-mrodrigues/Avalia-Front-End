"use client";
import React from 'react'
import { ModalProps } from './ModalComentario'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import { CreateUserDto } from '@/utils/types';
import { postUser } from '@/utils/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';
import sair from '/public/sair.svg'

// Validação dos Dados
const initialValues = {
  nome: "",
  email: "",
  senha: "",
  nova_senha: "",
  curso: "",
  departamento: ""
};

const onSubmit = async (data : typeof initialValues) => {
  const partialUser:CreateUserDto = {
    name: data.nome,
    email:data.email,
    passWord:data.senha,
    course:data.curso,
    department:data.departamento 
  };
  try {
    await postUser(partialUser);
    window.location.href = '/feed-logado'
  } catch (error : any) {
    notify(error.response.data.message)
  }
  
};

const validationSchema = Yup.object().shape({
  nome: Yup.string().required('Nome inválido'),
  email: Yup.string().email('Email Inválido').required('Email Inválido'),
  senha: Yup.string().min(3, 'Senha muito Curta').required('Senha Inválida'),
  nova_senha: Yup.string().min(3, "Senha muito curta").required("Senha Inválida"),
  curso: Yup.string().required('Curso inválido'),
  departamento: Yup.string().required('Departamento Inválida')
});

//  Inputs
const entradas = ["nome", "email", "senha", "nova_senha", "curso", "departamento"];
//  Verifica se é um input de senha
const ehsenha = (entrada : string) : string => ["senha", "nova_senha"].includes(entrada) ? "password" : "text" 
//  Titulariza os placeholders
const titulariza = (str : string) : string => (str.charAt(0).toUpperCase() + str.slice(1)).replace("_", " ");


const notify = (errorMessage : string) => {
  toast.error(errorMessage, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
};


const ModalPerfil = ({onClose} : { onClose : () => void }) => {
  return (
    <div className='fixed flex z-50 inset-0 items-center justify-center'>
        <Formik initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={()=> console.log("hello")}>
        <Form className=' relative h-[80%] w-1/3 bg-[#EDEDED] flex flex-col justify-center items-center gap-10 rounded-2xl'>
        <div className='flex flex-col gap-5'>
          {entradas.map((entrada) => (
            <div key={entrada}>
                <Field type={ehsenha(entrada)} name={entrada} placeholder={titulariza(entrada)} className="font-Inter p-2 rounded-sm leading-5 text-lg text-[#999797]"/>
                <ErrorMessage name={entrada} className='text-red-600 text-xs' component="div" />
            </div>
          ))}
        </div>
        <div>
          <button className='bg-[#A4FED3] text-x2 py-2 px-5 rounded'>Salvar</button>
          <button onClick={onClose} className='absolute top-4 right-4 w-6 h-6'><Image src={sair} alt='Sair da Atualização do perfil'/></button>
        </div>
        </Form>
        </Formik>

      
    </div>
  )
}
export default ModalPerfil
