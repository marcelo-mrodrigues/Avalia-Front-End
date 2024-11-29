import React from "react";

interface PopUpProps {
  isVisible: boolean;
}

const PopUp: React.FC<PopUpProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="absolute left-0 top-12 bg-[#95BBDF]/90 w-52 rounded-xl shadow-lg border border-white p-4 z-50">
      <div className="grid gap-2 text-center">
        <button className="text-xl font-Questrial">Nome</button>
        <div className="bg-black h-0.5"></div>
        <button className="text-xl font-Questrial">Matéria</button>
        <div className="bg-black h-0.5"></div>
        <button className="text-xl font-Questrial">Recentes</button>
        <div className="bg-black h-0.5"></div>
        <button className="text-xl font-Questrial">Antigas</button>
      </div>
    </div>
  );
};

export default PopUp;
