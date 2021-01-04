import React from 'react';
import CalculaEsorteia from './calculaEsorterteia'

export default function Inputs(){
  return(
    <>
     <input type="text" className="nomePessoa" id="number1" onChange={()=>pegaValorDeInputs("number1")}/>
     <input type="text" className="nomePessoa" id="number2" onChange={()=>pegaValorDeInputs("number2")}/>
     <input type="text" className="nomePessoa" id="number3" onChange={()=>pegaValorDeInputs("number3")}/>
     <input type="text" className="nomePessoa" id="number4" onChange={()=>pegaValorDeInputs("number4")}/>
    </>
  )

  function pegaValorDeInputs(props){
   const currentInput = document.getElementById(props).value
   console.log(currentInput)
  }
}