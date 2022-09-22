import './ExploreContainer.css';
import {IonIcon} from "@ionic/react";
import React from "react";

interface ContainerProps {
  name: string;
  icon?: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name, icon }) => {
  return (
    <div className="container">
        <a href="https://github.com/zurabarata" target="_blank" rel="noopener noreferrer">
            <IonIcon style={{
                fontSize: '128px'
            }} icon={icon} />
        </a>
      <strong style={{
          maxWidth: '90vw',
          whiteSpace: 'pre-wrap'
      }}>{name}</strong>
      {/*<p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>*/}
    </div>
  );
};

export default ExploreContainer;
