import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { shareSocialOutline } from 'ionicons/icons';

import { Plugins, DeviceInfo, Share } from '@capacitor/core';

import './Home.css';

const Home: React.FC = () => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo | null>(null);

  const shareTweet = async () => {
    const { Share } = Plugins;

    const share = await Share.share({
      title: 'See cool stuff',
      text: 'Really awesome thing you need to see right meow',
      url: 'http://ionicframework.com/',
      dialogTitle: 'Share with buddies'
    });
  }

  useEffect(() => {
    const getDeviceInfo = async () => {
      const { Device } = Plugins;

      setDeviceInfo(await Device.getInfo());
    };

    getDeviceInfo();
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Capacitor Ionic Example</IonTitle>
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
