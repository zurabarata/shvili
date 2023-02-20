import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {beer, chatbubble, logoGithub, logoInstagram} from 'ionicons/icons';
import {Main} from "./pages/Main";
import {Quotes} from "./pages/Quotes";

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

setupIonicReact();

const App: React.FC = () => (
  <IonApp >
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/main">
            <Main />
          </Route>
          <Route path="/quotes">
            <Quotes />
          </Route>
          <Route />
          <Route />
          <Route exact path="/">
            <Redirect to="/main" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="main" href="/main">
            <IonIcon icon={beer} />
            <IonLabel>Me</IonLabel>
          </IonTabButton>
          <IonTabButton tab="quotes" href="/quotes">
            <IonIcon icon={chatbubble} />
            <IonLabel>Quotes</IonLabel>
          </IonTabButton>
{/*          <IonTabButton href="https://github.com/zurabarata/" target="_blank">
            <IonIcon icon={logoGithub} />
            <IonLabel>Software</IonLabel>
          </IonTabButton>*/}
          <IonTabButton href="https://instagram.com/zurabarata" target="_blank">
            <IonIcon icon={logoInstagram} />
            <IonLabel>Insta</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
