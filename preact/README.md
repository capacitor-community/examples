# Preact + Material UI + Capacitor

An example app using [Preact](https://preactjs.com) and [Capacitor](https://capacitorjs.com) for building high quality PWAs and native iOS/Android app. This brings together the ease of building apps with Preact with the ease of making native apps from Capacitor. For more information on both Preact and Capacitor, please see their docs.

- [Preact](https://preactjs.com)
- [Capacitor](https://capacitorjs.com)


## Install Capacitor

If you have an existing Preact app, you can install Capacitor with the following command

```bash
npm install @capacitor/core @capacitor/cli
npx cap init [name] [id] --webDir=build
```

## Build the Web App

Build a production version of your app to be deployed to the native platform

```bash
npm run build
```

## Install the native platforms you want to target

```
npx cap add android
npx cap add ios
```

## Call native functionality

``` javascript
import { h } from 'preact';
import { useState } from 'preact/hooks';

import { Plugins } from '@capacitor/core';

export default function GeolocationPage() {

  const [loc, setLoc] = useState(null);

  const getCurrentPosition = async () => {
    const { Geolocation } = Plugins;
    const coordinates = await Geolocation.getCurrentPosition();
    setLoc(coordinates);
  };

  return (
    <div class="page">
      <h1>Geolocation</h1>
      <p>Your location is:</p>
      <p>Latitude: {loc?.coords.latitude}</p>
      <p>Longitude: {loc?.coords.longitude}</p>

      <button onClick={() => getCurrentPosition()}>
        Get Current Location
      </button>
    </div>
  );
}
```

For more examples of Capacitor APIs, check out the [Capacitor Docs](https://capacitorjs.com/docs) and the [Plugin API docs](https://capacitorjs.com/docs/apis)
