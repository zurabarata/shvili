import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import React from "react";
import {logoGithub} from 'ionicons/icons';

const aboutMe = "I'm Zurab Baratashvili \n from Tbilisi, Georgia\n " +
    "based in Berlin, Germany\n" +
    "I'm passioned about software \n and business development."


export const Main: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Zurab</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            {/*<IonTitle size="large">Tab 1</IonTitle>*/}
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={aboutMe} icon={logoGithub} />
      </IonContent>
    </IonPage>
  );
};

