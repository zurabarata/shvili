import {IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import React from "react";
import {refresh} from "ionicons/icons";


const fetchQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();

    if (response.ok) {
        return data;
    } else {
        throw new Error(data.message);
    }
}



export const Quotes: React.FC = () => {

    const [quote, setQuote] = React.useState('');
    const [author, setAuthor] = React.useState('');

    React.useEffect(() => {
        fetchQuote().then((data) => {
            setQuote(data.content);
            setAuthor(data.author);
        });
    }
    , []);

    const quoteWithAuthor = quote + "\n - " + author;


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
            <IonTitle size="large">Quotes</IonTitle>
          </IonToolbar>
        </IonHeader>
          <ExploreContainer name={quoteWithAuthor} />
      </IonContent>
    </IonPage>
  );
};

