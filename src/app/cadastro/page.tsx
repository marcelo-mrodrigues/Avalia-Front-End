"use client";
import React from 'react'
import img_cadastro from "/public/img_cadastro.png"
import Image from 'next/image'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import { CreateUserDto } from '@/utils/types';
import { postUser } from '@/utils/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

// Validação dos Dados
const initialValues = {
  nome: "",
  email: "",
  senha: "",
  confirme_senha: "",
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
    window.location.href = '/'
  } catch (error : any) {
    notify(error.response.data.message)
  }
  
};

const validationSchema = Yup.object().shape({
  nome: Yup.string().required('Nome inválido'),
  email: Yup.string().email('Email Inválido').required('Email Inválido'),
  senha: Yup.string().min(3, 'Senha muito Curta').required('Senha Inválida'),
  confirme_senha: Yup.string().oneOf([Yup.ref("senha")] , "As senhas não coincidem").required("Senha Inválida"),
  curso: Yup.string().required('Curso inválido'),
  departamento: Yup.string().required('Departamento Inválida')
});

//  Inputs
const entradas = ["nome", "email", "senha", "confirme_senha", "curso", "departamento"];
//  Verifica se é um input de senha
const ehsenha = (entrada : string) : string => ["senha", "confirme_senha"].includes(entrada) ? "password" : "text" 
//  Titulariza os placeholders
const titulariza = (str : string) : string => (str.charAt(0).toUpperCase() + str.slice(1)).replace("_", " a ");


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


const Cadastro = () => {
  
  return (
    <main className="h-screen w-full flex">
      <div className='h-full, w-[40%]'>
        <Image src={img_cadastro} alt="Cadastro" className="h-full w-full"></Image>
      </div> {/* Imagem*/}

      <div className='h-full w-[60%] flex flex-col items-center justify-center gap-8 bg-[#EDEDED]'>
        <p className='text-5xl leading-10 font-Questrial'>Cadastro Usuário</p>

      <div className='w-1/2'>
        <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={(values, {setSubmitting})=>{
          onSubmit(values);
          setSubmitting(false);
        }}>
          
        {({isSubmitting})=>(
          <Form className='flex flex-col gap-5'>
          {entradas.map((entrada) =>(
          <div key={entrada}>
            <Field type={ehsenha(entrada)} name={entrada} placeholder={titulariza(entrada)} className="inputs"/>
            <ErrorMessage name={entrada} className='text-red-600' component="div" />
          </div>
          ))}
            <button type='submit' disabled={isSubmitting} className='bg-[#A4FED3] w-fit  m-auto p-2 pl-4 pr-4 rounded-lg'> Criar Conta </button>
            </Form>
            )}
            </Formik>
          </div>
      </div> {/* Cadastro*/}
      <ToastContainer/>
  </main>
  )
}

export default Cadastro
