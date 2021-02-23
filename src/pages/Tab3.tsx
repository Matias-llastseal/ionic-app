import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader class="cont-header">
        <IonToolbar class="cont-header-tab1">
         <div className="flex">
            <div className="cont-nav"></div>
            <div className="hex"></div>
         </div>      
        </IonToolbar>
      </IonHeader>
      
      <IonContent class="cont-main" fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Botonera</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
