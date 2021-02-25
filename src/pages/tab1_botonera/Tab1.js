import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faAllergies, faAngleDoubleRight, faAssistiveListeningSystems, faBahai, faBomb, faBolt, faBowlingBall, faBug, faBullhorn } from '@fortawesome/free-solid-svg-icons';
import './Tab1.css';
import vrt from '../../assets/img/virtualizarme.png';
import hex from '../../assets/img/unnamed.png';

const Tab1 = () => {
  return (
    <IonPage>
      <IonHeader class="cont-header">
        <IonToolbar class="cont-header-tab1">
            <img src={vrt} className="img1"></img>      
        </IonToolbar>
      </IonHeader>

      <IonContent class="cont-main" fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Botonera</IonTitle>
          </IonToolbar>
        </IonHeader>


      <div className="contenedor">
        <div className="cont-button">
        
        <IonButton class="btnVirtual">
          <FontAwesomeIcon className="icon" icon={faBell}></FontAwesomeIcon>
        </IonButton>

        <IonButton class="btnVirtual">
          <FontAwesomeIcon className="icon" icon={faAllergies}></FontAwesomeIcon>
        </IonButton>

        <IonButton class="btnVirtual">
          <FontAwesomeIcon className="icon" icon={faAngleDoubleRight}></FontAwesomeIcon>
        </IonButton>

        <IonButton class="btnVirtual">
          <FontAwesomeIcon className="icon" icon={faAssistiveListeningSystems}></FontAwesomeIcon>
        </IonButton>

        <IonButton class="btnVirtual">
          <FontAwesomeIcon className="icon" icon={faBahai}></FontAwesomeIcon>
        </IonButton>

        <IonButton class="btnVirtual">
          <FontAwesomeIcon className="icon" icon={faBomb}></FontAwesomeIcon>
        </IonButton>

        <IonButton class="btnVirtual">
          <FontAwesomeIcon className="icon" icon={faBolt}></FontAwesomeIcon>
        </IonButton>

        <IonButton class="btnVirtual">
          <FontAwesomeIcon className="icon" icon={faBowlingBall}></FontAwesomeIcon>
        </IonButton>

        <IonButton class="btnVirtual">
          <FontAwesomeIcon className="icon" icon={faBug}></FontAwesomeIcon>
        </IonButton>

        <IonButton class="btnVirtual">
          <FontAwesomeIcon className="icon" icon={faBullhorn}></FontAwesomeIcon>
        </IonButton>

        </div>
      </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
