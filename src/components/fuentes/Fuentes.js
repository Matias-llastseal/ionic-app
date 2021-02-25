import React, { useState, useEffect } from 'react';
import Test from '../../services/Test';
import './Fuentes.css';

const Fuentes = () => {
    
  const [fuentes, setFuentes] = useState([]);
  const [nombreEscena, setnombreEscena] = useState('');
  const [visible, setVisible] = useState(false);
  const [locked, setLocked] = useState(true);

  const guardarFuentes = (lista_fuentes)=>{
    setFuentes(lista_fuentes);
  }

  const guardarNombreEscena = (nombre)=>{
    setnombreEscena(nombre);
  }

  const guardarVisible = (vis)=>{
    setVisible(vis);
  }

  const guardarLocked = (lock)=>{
    setLocked(lock);
  }
  return (   
    <div className="tilt-in-top-1"> 
        <Test
          fuentes={fuentes}
          nombreEscena={nombreEscena}
          visible={visible}
          locked={locked}
          guardarFuentes={guardarFuentes}
          guardarNombreEscena={guardarNombreEscena}
          guardarVisible={guardarVisible}
          guardarLocked={guardarLocked}
        />    
    </div>
  );
};

export default Fuentes;
