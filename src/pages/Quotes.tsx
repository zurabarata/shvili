import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import React from "react";
import {fetchQuote} from "./../utils/fetch-quote";

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

