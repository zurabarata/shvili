import {IonContent, IonHeader, IonInput, IonPage, IonTextarea, IonTitle, IonToolbar} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import React, {ReactEventHandler, ReactNode, useState} from "react";
import {refresh} from "ionicons/icons";
import {fetchNumbersFacts} from "./../utils/fetch-numbers-facts";

export const NumbersFacts: React.FC = () => {

    const [number, setNumber] = React.useState(0);
    const [fact, setFact] = React.useState('');

    const handleChange = (event: any) => {
        if (isNaN(event.target.value)) {
            return;
        }
        if (isNaN(event.target.value)) {
            setNumber(0);
        }
        setNumber(event.target.value);

    };


    React.useEffect(() => {
        setTimeout(() => {
            //set timeout to 2 seconds

                fetchNumbersFacts(number).then((data) => {
                setFact(data);
            })} , 1000);
        }
        , [number]);

    const numberFact = fact.length > 100 ? 'Fact is too long in fact' : fact;


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Quotes</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        {/*<IonTitle size="large">Quotes</IonTitle>*/}
                    </IonToolbar>
                </IonHeader>
                <IonInput type="number" value={number} placeholder="Enter number" onChange={handleChange}/>
                <ExploreContainer name={numberFact} icon={refresh} />
            </IonContent>
        </IonPage>
    );
};

