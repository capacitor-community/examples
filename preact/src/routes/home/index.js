import { h } from 'preact';

import 'preact-material-components/Button/style.css';
import List from 'preact-material-components/List';
import 'preact-material-components/List/style.css';

import style from './style';
export default function Home() {
  return (
    <div class={`${style.home} page`}>
      <h1>Capacitor Preact Demo</h1>
      <p>Navigate below to see some examples of Capacitor's APIs</p>


      <List>
        <List.LinkItem href="/geolocation">
          <List.ItemGraphic>location_on</List.ItemGraphic>
          Geolocation
        </List.LinkItem>

        <List.LinkItem href="/camera">
          <List.ItemGraphic>camera_alt</List.ItemGraphic>
          Camera
        </List.LinkItem>
      </List>
    </div>
  );
}
