import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import React from "react";
import zurab from '../Zurab-Baratashvili.svg';

const aboutMe = "I'm:\nZurab Baratashvili \n from Georgia 🇬🇪\n " +
    "based in Berlin 🐻\n" +
    "I'm passioned about:\n" +
    "sports ⚽️\n" +
    "software 👨🏽‍💻\n and \nbusiness\n development."


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
        <ExploreContainer name={aboutMe} icon={zurab} />
      </IonContent>
    </IonPage>
  );
};

