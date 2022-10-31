import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import {FunctionComponent, useEffect, useState} from "react";
import {fetchQuote} from "./../utils/fetch-quote";
import {refresh} from "ionicons/icons";

export const Quotes: FunctionComponent = () => {

    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetchQuote().then((data) => {
            setQuote(data.content);
            setAuthor(data.author);
        });
        setIsLoading(false);
    }
    , []);

    const quoteWithAuthor = quote + "\n\n - " + author;


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
          <ExploreContainer name={isLoading ? 'fetching...' : quoteWithAuthor} icon={refresh} />
      </IonContent>
    </IonPage>
  );
};

