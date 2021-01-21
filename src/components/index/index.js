import React from 'react';
import './styles.css';

export default function Index(){
  return(
    <>
    <div className="corpo">
      <section class="objetos">
        <h1>Escolha uma opção</h1>
        <div className="botoes">
           <button id="futsal">Futsal</button>
           <button id="futClassico">Futebol Classico</button>
           <button id="society">Society</button>
        </div>
      </section>    
    </div>
    </>
  )
}