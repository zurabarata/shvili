import './ExploreContainer.css';
import React from "react";
import {IonIcon} from "@ionic/react";
import {refresh} from "ionicons/icons";
import {refreshPage} from "./../../src/utils/refresh-page";

interface ContainerProps {
  name: string;
  icon?: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name, icon }) => {
  return (
    <div className="container">

      <strong style={{
          maxWidth: '90vw',
          whiteSpace: 'pre-wrap'
      }}>{name}</strong>
      {/*<p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>*/}
        <br/>
        <IonIcon onClick={refreshPage} style={
            {fontSize: '32px'}
        } icon={refresh} />
    </div>
  );
};

export default ExploreContainer;
