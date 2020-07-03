<Page name="home">
  <!-- Top Navbar -->
  <Navbar large sliding={false}>
    <NavTitle sliding>Capacitor 💙 F7</NavTitle>
    <NavTitleLarge>Capacitor 💙 F7</NavTitleLarge>
  </Navbar>
  <!-- Page content -->
  <Block>
    <Button large raised fill iconF7="arrow_up_left_square" iconSize="21" on:click={shareThis}>
      Share This
    </Button>
  </Block>
  <BlockTitle>Device Info</BlockTitle>
  <Block inset strong style="word-wrap: break-word">
    <pre style="word-wrap: break-word; white-space: pre-wrap;">{deviceInfo}</pre>
  </Block>
</Page>
<script>
  import {
    Page,
    Navbar,
    NavTitle,
    NavTitleLarge,
    Block,
    Button,
    BlockTitle
  } from 'framework7-svelte';

  import {Plugins} from '@capacitor/core';

  let deviceInfo = '';

  async function getDeviceInfo() {
    try {
      deviceInfo = JSON.stringify(await Plugins.Device.getInfo() , null, 2)
    } catch(e) {
      console.error(e);
    }
  }

  async function shareThis() {
    try {
      await Plugins.Share.share({
        title: "Share Capacitor",
        text:
          "I deployed an Svelte + Framework7 web app as a native mobile app using @capacitorjs in minutes!",
        url: "https://capacitorjs.com"
      });
    } catch (e) {
      console.error(e);
    }
  }

  getDeviceInfo();

</script>