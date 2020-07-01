<template>
  <v-card outlined elevation="3" style="margin-top: 10px;">
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">Device Info</v-list-item-title>
        <div style="text-align: left; margin-top: 10px">
          <pre>{{ deviceInfo ? JSON.stringify(deviceInfo, null, 2) : "" }}</pre>
        </div>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { DeviceInfo } from "@capacitor/core";

@Component
export default class DeviceInfoCard extends Vue {
  deviceInfo: DeviceInfo | null = null;

  constructor() {
    super();
  }

  mounted() {
    this.getDeviceInfo();
  }

  async getDeviceInfo() {
    try {
      this.deviceInfo = await this.$capacitorPlugins.Device.getInfo();
    } catch (e) {
      console.error(e);
    }
  }
}
</script>
