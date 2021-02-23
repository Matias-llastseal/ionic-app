import React, { useState } from 'react';
import { albumsOutline } from 'ionicons/icons';
const { IonButton, IonIcon } = require('@ionic/react');

const OBSWebSocket_ = ({escenas, guardarEscenas}) => {

    //----------------- OBS PROCESS --------------------//

    const OBSWebSocket = require('obs-websocket-js');
    const obs = new OBSWebSocket();

    const Conectar = ()=>{
        const OBS = obs.connect({
            address: '192.168.100.10:4444',
            password: 'mat.altamirano',
        }).then(()=>{
            console.log('-> Estas conectado a OBS Studio <-');  
        })

        return OBS;
    }
  
    const MostrarEscenas = ()=>{
        Conectar().then(()=>{
            obs.send('GetSceneList').then((res)=>{
                let lista_escenas = [];
                const lista = res.scenes;
                for (let i=0; i < lista.length; i++) {
                    lista_escenas.push(lista[i].name);
                }

                //uso de funcion para cambiar el state de escenas
                guardarEscenas(lista_escenas) 
            });
        });           
    }

    const CambiarEscena = ()=>{
        Conectar().then(()=>{
            console.log("conectado por segunda vez");
        });
    }


    //----------------- RENDER --------------------//
    return (
        <div > 
            <IonButton onClick={MostrarEscenas} expand="full">escenas</IonButton>
            
            {escenas.length > 1 &&
                <div>
                {escenas.map((esc, num=0) => (
                <IonButton key={num+=1} class="btn-escena" onClick={CambiarEscena}>  
                    <IonIcon class="icon-escena" icon={albumsOutline} />
                    {esc}
                </IonButton>
                ))}  
                </div>    
            }
        </div>
    );

};

export default OBSWebSocket_;





