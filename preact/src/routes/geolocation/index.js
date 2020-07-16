import { h } from 'preact';
import { useState } from 'preact/hooks';
import { Plugins } from '@capacitor/core';

import Button from 'preact-material-components/Button';
import 'preact-material-components/Button/style.css';

export default function GeolocationPage() {
  const { Geolocation } = Plugins;
  const [loc, setLoc] = useState(null);

  const getCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition();
    setLoc(coordinates);
    console.log('Current', coordinates);
  };
  return (
    <div class="page">
      <h1>Geolocation</h1>
      <p>Your location is:</p>
      <p>Latitude: {loc?.coords.latitude}</p>
      <p>Longitude: {loc?.coords.longitude}</p>

      <Button onClick={() => getCurrentPosition()}>
        {' '}
        Get Current Location
      </Button>
    </div>
  );
}
