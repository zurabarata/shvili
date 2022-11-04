import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import React from "react";
import {gitBranch} from "ionicons/icons";
import zurab from "src/Zurab-Baratashvili.svg";

const aboutMe = "I'm:\nZurab Baratashvili \n ზურაბ ბარათაშვილი \n from Georgia 🇬🇪\n " +
    "based in Berlin 🐻\n" +
    "I'm passioned about:\n" +
    "sports ⚽️\n" +
    "software 👨🏽‍💻\n and \nbusiness\n development."


export const SoftwareEngineering: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Software Engineering</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                    </IonToolbar>
                </IonHeader>
                <ExploreContainer name={aboutMe} icon={gitBranch} />
            </IonContent>
        </IonPage>
    );
};


