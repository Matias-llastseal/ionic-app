import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { happyOutline, gridOutline, filmOutline  } from 'ionicons/icons';
import Tab1 from './pages/tab1_botonera/Tab1.js';
import Tab2 from './pages/tab2_escenas/Tab2.js';
import Tab3 from './pages/tab3_fuentes/Tab3.js';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom" class="cont-tab border">
          <IonTabButton tab="tab1" href="/tab1" class="cont-tab">
            <IonIcon icon={gridOutline} />
            <IonLabel>Botonera</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2" class="cont-tab">
            <IonIcon icon={filmOutline} />
            <IonLabel>Escenas</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3" class="cont-tab">
            <IonIcon icon={happyOutline} />
            <IonLabel>Fuentes</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
