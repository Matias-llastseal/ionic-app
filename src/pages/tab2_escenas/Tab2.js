  import React, { useState, useEffect } from 'react';
  import { IonContent, IonIcon,IonList, IonButton, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
  import Escenas from '../../components/escenas/Escenas.js'
  import './Tab2.css';
  import vrt from '../../assets/img/virtualizarme.png';
  import hex from '../../assets/img/unnamed.png';

  const Tab2 = () => {

    return (
      <IonPage >
        <IonHeader class="cont-header">
          <IonToolbar class="cont-header-tab1">
            <img src={vrt} className="img1"></img>    
          </IonToolbar>
        </IonHeader>

        <IonContent class="cont-main" fullscreen>

          <IonList class="lista-escenas tilt-in-top-1">
            <Escenas/>
          </IonList> 

        </IonContent>
      </IonPage>
    );
  };

  export default Tab2;
