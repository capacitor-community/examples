import { h } from 'preact';
import { useState } from 'preact/hooks'
import { Router } from 'preact-router';

import Header from './header';
import Home from '../routes/home';
import NotFound from '../routes/404';

import GeolocationPage from '../routes/geolocation'
import CameraPage from '../routes/camera';
export default function App() {
  const [currentUrl, setCurrentUrl] = useState('');

  const handleRoute = e => {
    setCurrentUrl(e.url)
  };

  return (
    <div id="app">
      <Header selectedRoute={currentUrl}/>
      <Router onChange={e => handleRoute(e)}>
        <Home path="/" />
        <GeolocationPage path="geolocation"/>
        <CameraPage path="camera"/>
        <NotFound default />
      </Router>
    </div>
  );
}
