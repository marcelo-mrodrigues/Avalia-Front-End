import React from "react";


const LoginPage = () => {
    
    return (
      <div className="flex h-screen">
        <div className="w-1/2 h-full">
          <img
            src="/ImagemLogin.svg"
            alt="Descrição da imagem"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-1/2 flex items-center justify-center bg-[#EDEDED]">
          <div className="w-2/3">
            <h1 className="text-5xl font-
Questrial mb-6 text-center">Avaliação de Professores</h1>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-teal-500"
              />


    <input
                type="password"
                placeholder="Senha"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-teal-500"
              />
              <div className="flex ml-24 items-center space-x-4">
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#A4FED3] text-[#222E50] font-Questrial rounded-lg border border-[#222E50]">Entrar</button>
                <button
                  type="button"
                  className="px-6 py-2 bg-[#A4FED3] text-[#222E50] font-Questrial rounded-lg border border-[#222E50]">Criar Conta
                
                
                </button>
              
                </div>
            
            </form>
          </div>
        
        
        </div>
      </div>
    );
  };
  
  export default LoginPage;
  