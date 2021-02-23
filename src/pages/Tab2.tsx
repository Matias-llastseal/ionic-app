  import React, { useState, useEffect } from 'react';
  import { IonContent, IonIcon,IonList, IonButton, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
  import Escenas from '../components/Escenas';
  import './Tab2.css';

  const Tab2: React.FC = () => {

    return (
      <IonPage >
        <IonHeader class="cont-header">
          <IonToolbar class="cont-header-tab1">
          <div className="flex">
              <div className="cont-nav"></div>
              <div className="hex"></div>
          </div>      
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
