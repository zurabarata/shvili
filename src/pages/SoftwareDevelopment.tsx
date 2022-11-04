import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import React from "react";
import {logoGithub} from "ionicons/icons";

const myTechStack = "My current tech stack:\n " +
    "Frontend: React, Typescript\n " +
    "Testing: Jest, Cypress\n" +
    "Backend: Node.js\n" +
    "Versioning: Github\n" +
    "Currently trying out: Remix, NextJS️\n" +
    "Fluent in: RegEx \n" +
    "Beginner in: Python"


export const SoftwareDevelopment: React.FC = () => {
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
        <ExploreContainer name={myTechStack} icon={logoGithub}/>
      </IonContent>
    </IonPage>
  );
};

