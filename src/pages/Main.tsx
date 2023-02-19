import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import React from "react";
import zurabImage from '../Zurab Baratashvili.jpeg';
import {Card} from "../components/Card";

const aboutMe = "hi i'm zurab: \n " +
    "a software dev and\n" +
    "a wannabe players' agent\n" +
    "more tba soonish"


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
        <ExploreContainer name={aboutMe}/>
         {/* // todo uncomeent this card and remove the above*/}
          {/*<Card title="👋🏼" subtitle="me" content={aboutMe} image={zurabImage}/>*/}
      </IonContent>
    </IonPage>
  );
};

