import './ExploreContainer.css';
import React from "react";
import {IonIcon, IonText} from "@ionic/react";
import {refreshPage} from "./../../src/utils/refresh-page";

interface ContainerProps {
  name: string;
  icon?: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name, icon }) => {
  return (
    <div className="container">

      <IonText style={{
          maxWidth: '500px',
          whiteSpace: 'pre-wrap',
          fontSize: '20px',
          padding: '20px'
      }}>{name}</IonText>
      {/*<p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>*/}
        <br/>
        <IonIcon onClick={refreshPage} style={
            {fontSize: '32px'}
        } icon={icon} />
    </div>
  );
};

export default ExploreContainer;
