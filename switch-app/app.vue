<template>
  <title>Switch CRM | Nuxt</title>
  <nuxt-layout :name="pageLayout">
    <!-- <nuxt-layout name="default"> -->
    <nuxt-page />
  </nuxt-layout>
</template>

<script lang="ts">
import { useAppStates } from "./stores/appStates";

export default {
  setup() {
    const { pageLayout, initLayout } = useAppStates();

    initLayout();

    return {
      pageLayout,
    };
  },
};
</script>
