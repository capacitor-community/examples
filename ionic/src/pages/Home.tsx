import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { shareSocialOutline } from 'ionicons/icons';

import { Plugins, DeviceInfo } from '@capacitor/core';

import './Home.css';

const Home: React.FC = () => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo | null>(null);

  const shareTweet = async () => {
    const { Share } = Plugins;

    const share = await Share.share({
      title: 'Share Capacitor',
      text: 'I deployed an Ionic React web app as a native mobile app using @capacitorjs in minutes!',
      url: 'https://capacitorjs.com',
    });
  }

  useEffect(() => {
    const getDeviceInfo = async () => {
      const { Device } = Plugins;

      setDeviceInfo(await Device.getInfo());
    };

    getDeviceInfo();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Capacitor Example</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Capacitor Ionic Example</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={() => shareTweet()}>
          <IonIcon slot="start" icon={shareSocialOutline} />
          Share This
        </IonButton>
        <div className="ion-padding">
          <h2>Device Info:</h2>
          <pre>
          {deviceInfo ? (
            JSON.stringify(deviceInfo, null, 2)
          ) : null}
          </pre>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
