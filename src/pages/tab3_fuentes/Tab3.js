import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';
import Fuentes from '../../components/fuentes/Fuentes.js';
import vrt from '../../assets/img/virtualizarme.png';
import hex from '../../assets/img/unnamed.png';

const Tab3 = () => {

  

  return (
    <IonPage>
      <IonHeader class="cont-header">
        <IonToolbar class="cont-header-tab1">
          <img src={vrt} className="img1"></img>      
        </IonToolbar>
      </IonHeader>
      
      <IonContent class="cont-main" fullscreen>

        
        <Fuentes/>
        
        

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
