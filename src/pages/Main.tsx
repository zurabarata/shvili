import { IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import React from "react";

const aboutMe = "hi i'm zurab: \n " +
    "a self-thought software developer\n" +
    "and an emerging players' agent.\n" +
    "more tba soonish"


export const Main: React.FC = () => {
  return (
    <IonPage style={{
        color: 'yellow'
    }}>
      <IonContent fullscreen >
        <IonHeader collapse="condense">
          <IonToolbar>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={aboutMe}/>
      </IonContent>
    </IonPage>
  );
};

