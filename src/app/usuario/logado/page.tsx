import React from 'react'
import HeaderDeslogado from '@/app/components/HeaderDeslogado'
import CardProf from '@/app/components/CardProf'

const usuarioLogado = () => {
  return (
    <>
    <header><HeaderDeslogado/></header>
    <body><CardProf/></body>
    </>
  )
}

export default usuarioLogado


