import React, {} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';
const { IonButton, IonIcon, IonList } = require('@ionic/react');


const Test = ({fuentes, nombreEscena, visible, locked, guardarFuentes, guardarNombreEscena, guardarVisible, guardarLocked}) => {

    //----------------- OBS PROCESS --------------------//

    const OBSWebSocket = require('obs-websocket-js');
    const obs = new OBSWebSocket();

    const Conectar = ()=>{
        const OBS = obs.connect({
            //address: '192.168.100.10:4444',
            //address: 'localhost:4444',
            //address: '192.168.100.4:4444',
            //password: 'mat.altamirano',
        }).then(()=>{
            //console.log('-> Estas conectado a OBS Studio <-');  
        })

        return OBS;
    }

    function MostrarItemsEscenas(){
        Conectar().then(()=>{
            obs.send('GetSceneItemList', {"scene-name": 'Escena'}).then((res)=>{
                //Cambiar el state de nombre escena
                guardarNombreEscena(res.sceneName)

                let lista_fuentes = [];
                const lista = res.sceneItems;
                for (let i=0; i < lista.length; i++) {
                    lista_fuentes.push(lista[i].sourceName);
                }

                //Cambiar el state de fuentes
                guardarFuentes(lista_fuentes);                           
            });
        });           
    }

    function HabilitarFuente(nombreEscena, nombreFuente){
        Conectar().then(()=>{
            obs.send('GetSceneItemProperties', 
            {"scene-name": nombreEscena, 
            item:{name: nombreFuente}}).then((res)=>{
                
                let vis = !res.visible;

                return vis;

            }).then((res)=>{

                guardarVisible(res);

                obs.send('SetSceneItemProperties', 
                {"scene-name": nombreEscena, 
                item:{name: nombreFuente},
                visible: res}).then((res)=>{
                    console.log(res);               
                });
            })            
        });               
    }
        
    function BloquearFuente(nombreEscena, nombreFuente){
        Conectar().then(()=>{
            obs.send('GetSceneItemProperties', 
            {"scene-name": nombreEscena, 
            item:{name: nombreFuente}}).then((res)=>{
                
                let lock = !res.locked;

                return lock;

            }).then((res)=>{

                guardarLocked(res);

                obs.send('SetSceneItemProperties', 
                {"scene-name": nombreEscena, 
                item:{name: nombreFuente},
                locked: res}).then((res)=>{
                    console.log(res);               
                });
            })            
        });               
    }



    //----------------- RENDER --------------------//
    return (
        <div> 
            
            <IonButton onClick={MostrarItemsEscenas} expand='block' >mostrar fuentes</IonButton>  

            {nombreEscena != '' &&
                <div>
                    <h1 className="titulo-escena">{nombreEscena}</h1>
                </div>          
            }
            
            {fuentes.length > 0 &&
                <IonList class="lista-items">
                    {fuentes.map((esc, num=0) => (                  
                        <div key={num+=1} className="item">
                            <div className="cont-item">
                                <p>{esc}</p>
                                <div className="cont-icon-item">
                                <IonButton onClick={(e) => HabilitarFuente(nombreEscena, esc, e)}>
                                    <FontAwesomeIcon className="icon-item" icon={faEye}></FontAwesomeIcon>
                                </IonButton> 

                                <IonButton onClick={(e) => BloquearFuente(nombreEscena, esc, e)}>
                                    <FontAwesomeIcon className="icon-item" icon={faLock}></FontAwesomeIcon>
                                </IonButton>                                   
                                </div>    
                            </div>         
                        </div>                    
                    ))}  
                </IonList>   
            }   

        </div>
    );

};

export default Test;





