import React, { useState } from 'react';
import { albumsOutline, cropOutline } from 'ionicons/icons';
const { IonButton, IonIcon } = require('@ionic/react');

const OBSWebSocket_ = ({escenas, guardarEscenas}) => {

    //----------------- OBS PROCESS --------------------//

    const OBSWebSocket = require('obs-websocket-js');
    const obs = new OBSWebSocket();

    const Conectar = ()=>{
        const OBS = obs.connect({
            address: '192.168.100.10:5000',
            //address: 'localhost:4444',
            //address: '192.168.100.4:4444',
            //password: 'mat.altamirano',
        }).then(()=>{
            console.log('-> Estas conectado a OBS Studio <-');  
        })

        return OBS;
    }

    function MostrarEscenas(){
        Conectar().then(()=>{
            obs.send('GetSceneList').then((res)=>{
                let lista_escenas = [];
                const lista = res.scenes;
                for (let i=0; i < lista.length; i++) {
                    lista_escenas.push(lista[i].name);
                }

                //uso de funcion para cambiar el state de escenas
                guardarEscenas(lista_escenas);
            });
        });           
    }

    function CambiarEscena(escena){
        Conectar().then(()=>{
            obs.send('SetCurrentScene', {"scene-name": escena}).then(()=>{
                let listaBotones = document.querySelectorAll('.btn-escena');
                let select = document.getElementById(escena)

                for (let i=0; i < listaBotones.length; i++) {
                    listaBotones[i].classList.remove('select-escene');                      
                }
     
                select.classList.add('select-escene');              
            })           
        });
    }
 
    //----------------- RENDER --------------------//
    return (
        <div> 
            <IonButton onClick={MostrarEscenas} expand='block' >escenas</IonButton>
              
            {escenas.length > 1 &&
                <div>
                {escenas.map((esc, num=0) => (
                <IonButton key={num+=1} id={esc} class="btn-escena" onClick={(e) => CambiarEscena(esc, e)}>  
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





