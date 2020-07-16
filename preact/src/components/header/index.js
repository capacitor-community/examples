import { h } from 'preact';
import { route } from 'preact-router';
import { useRef } from 'preact/hooks';

import TopAppBar from 'preact-material-components/TopAppBar';
import Drawer from 'preact-material-components/Drawer';
import List from 'preact-material-components/List';
import 'preact-material-components/Switch/style.css';
import 'preact-material-components/Dialog/style.css';
import 'preact-material-components/Drawer/style.css';
import 'preact-material-components/List/style.css';
import 'preact-material-components/TopAppBar/style.css';

export default function Header(props) {
  const drawerRef = useRef(null);
  const toggleDraw = (val) => (drawerRef.current.MDComponent.open = val);
  const linkTo = path  => {
    route(path);
    toggleDraw(false);
  };

  return (
    <div>
      <TopAppBar className="topappbar">
        <TopAppBar.Row>
          <TopAppBar.Section align-start>
            <TopAppBar.Icon menu onClick={() => toggleDraw(true)}>
              menu
            </TopAppBar.Icon>
            <TopAppBar.Title>Preact app</TopAppBar.Title>

          </TopAppBar.Section>
        </TopAppBar.Row>
      </TopAppBar>

      <Drawer modal ref={drawerRef}>
        <Drawer.DrawerContent>
          <Drawer.DrawerItem
            selected={props.selectedRoute === '/'}
            onClick={() => linkTo('/')}
          >
            <List.ItemGraphic>home</List.ItemGraphic>
            Home
          </Drawer.DrawerItem>
          <Drawer.DrawerItem
            selected={props.selectedRoute === '/geolocation'}
            onClick={() => linkTo('/geolocation')}
          >
            <List.ItemGraphic>location_on</List.ItemGraphic>
            Geolocation
          </Drawer.DrawerItem>

          <Drawer.DrawerItem
            selected={props.selectedRoute === '/camera'}
            onClick={() => linkTo('/camera')}
          >
            <List.ItemGraphic>camera_alt</List.ItemGraphic>
            Camera
          </Drawer.DrawerItem>

        </Drawer.DrawerContent>
      </Drawer>

    </div>
  );
}
