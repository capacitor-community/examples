<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class App extends Vue {
  constructor() {
    super();
  }
}
</script>
