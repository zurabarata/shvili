import React, {FunctionComponent} from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';


interface CardProps {
    title: string;
    subtitle: string;
    content: string;
    image: string;
    cardWidth?: string;
}


export const Card: FunctionComponent<CardProps> = ({title, subtitle, content, image, cardWidth}) => {

    return (
        <IonCard style={{
            maxWidth: cardWidth ?? '300px',
            margin: 'auto',
marginTop: '50px'
        }}>
            <img alt="Zurab Baratashvili" src={image}/>
            <IonCardHeader>
                <IonCardTitle>{title}</IonCardTitle>
                <IonCardSubtitle>{subtitle}</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
                {content}
            </IonCardContent>
        </IonCard>
    );
}
