import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard } from '@ionic/react';
import './Tab3.css';
import {FunctionComponent, useEffect, useState} from "react";

const cardPairs = [
    {
        front: '/assets/images/storyteller/hooks/Style - Story Hooks - Front.png',
        back: '/assets/images/storyteller/hooks/Style - Story Hooks - Back.png',
    }];
export const StoryTeller: FunctionComponent = () => {
    const [currentCard, setCurrentCard] = useState({ front: '', back: '' });
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
        // Function to get the index for the current biweekly period
        const getBiweeklyIndex = () => {
            const startDate = new Date(2023, 0, 1); // Adjust to your start date
            const now = new Date();
            const fortnightMilliseconds = 12096e5; // Two weeks in milliseconds
            return Math.floor((now.getTime() - startDate.getTime()) / fortnightMilliseconds);
        };

        // Retrieve or set the card for the current biweekly period
        const index = getBiweeklyIndex();
        const storedCard = localStorage.getItem('storyTellerCard');
        const storedDateIndex = localStorage.getItem('dateIndex');

        if (storedCard && storedDateIndex && parseInt(storedDateIndex, 10) === index) {
            setCurrentCard(JSON.parse(storedCard));
        } else {
            const randomIndex = Math.floor(Math.random() * cardPairs.length);
            const selectedCard = cardPairs[randomIndex];
            localStorage.setItem('storyTellerCard', JSON.stringify(selectedCard));
            localStorage.setItem('dateIndex', index.toString());
            setCurrentCard(selectedCard);
        }
    }, []);

    // Flip the card when clicked
    const flipCard = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>StoryTeller Tactics</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className="ion-justify-content-center ion-align-items-center">
                <div className="container">
                <div className={`card-container ${isFlipped ? 'flipped' : ''}`} onClick={flipCard}>
                    <IonCard className="card-front">
                        <img src={currentCard.front} alt="Front side" />
                    </IonCard>
                    <IonCard className="card-back">
                        <img src={currentCard.back} alt="Back side" />
                    </IonCard>
                </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default StoryTeller;
