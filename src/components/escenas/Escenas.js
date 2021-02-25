import React, { useState, useEffect } from 'react';
import ObsWebSocket_ from '../../services/ObsWebSocket';
import './Escenas.css';
const { IonButton, IonIcon } = require('@ionic/react');

const Escenas = () => {
    
  const [escenas, setEscenas] = useState(['']);

  const guardarEscenas = (lista_escenas)=>{
    setEscenas(lista_escenas);
  }

  return (   
    <div> 
        <ObsWebSocket_ 
            escenas={escenas}
            guardarEscenas={guardarEscenas}
        />
    </div>
  );
};

export default Escenas;
