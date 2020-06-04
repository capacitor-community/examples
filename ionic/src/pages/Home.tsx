import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';

import { Plugins, DeviceInfo } from '@capacitor/core';

import './Home.css';

const Home: React.FC = () => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo | null>(null);

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
