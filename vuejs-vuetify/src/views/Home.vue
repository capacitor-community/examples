<template>
  <div>
    <v-app-bar>
      <v-icon style="margin-right: 12px;">{{ icons.lightning }}</v-icon>
      <v-toolbar-title>Capacitor 💙 Vuetify</v-toolbar-title>
    </v-app-bar>
    <v-main class="content-padding content-centered">
      <v-btn color="primary" v-on:click="shareThis()">
        <v-icon left>{{ icons.share }}</v-icon> Share This
      </v-btn>
      <DeviceInfoCard />
    </v-main>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { mdiShareVariant, mdiLightningBoltOutline } from "@mdi/js";
import { Vue, Component } from "vue-property-decorator";
import DeviceInfoCard from "@/components/DeviceInfoCard.vue";

@Component({ components: { DeviceInfoCard } })
export default class Home extends Vue {
  icons: { [iconKey: string]: unknown } = {
    share: mdiShareVariant,
    lightning: mdiLightningBoltOutline
  };

  constructor() {
    super();
  }

  async shareThis() {
    try {
      await this.$capacitorPlugins.Share.share({
        title: "Share Capacitor",
        text:
          "I deployed an Vue 2 + Vuetify web app as a native mobile app using @capacitorjs in minutes!",
        url: "https://capacitorjs.com"
      });
    } catch (e) {
      console.error(e);
    }
  }
}
</script>

<style lang="scss">
.content-padding {
  padding: 10px !important;
}
.content-centered {
  text-align: center;
}
</style>
