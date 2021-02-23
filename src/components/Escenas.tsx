import React, { useState, useEffect } from 'react';
import ObsWebSocket_ from '../services/ObsWebSocket';
import { albumsOutline } from 'ionicons/icons';
import './Escenas.css';
const { IonButton, IonIcon } = require('@ionic/react');

interface ContainerProps {
}

const Escenas: React.FC<ContainerProps> = () => {
    
  const [escenas, setEscenas] = useState(['']);

  const guardarEscenas = (lista_escenas:string[])=>{
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
