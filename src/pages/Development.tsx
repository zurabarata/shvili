import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import React from "react";

const myTechStack = "My current tech stack:\n " +
    "Frontend: React, Typescript\n " +
    "Testing: Jest, Cypress\n" +
    "Versioning: Github\n" +
    "Currently trying out: Remix, NextJS️\n" +
    "Fluent in: RegEx \n" +
    "Beginner in: Python"


export const Development: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Software Development</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            {/*<IonTitle size="large">Tab 1</IonTitle>*/}
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={myTechStack} />
      </IonContent>
    </IonPage>
  );
};

