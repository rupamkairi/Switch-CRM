<script lang="ts">
import { useAppStates } from "./stores/appStates";
import "flowbite";

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

<template>
  <title>Switch CRM | Nuxt</title>
  <nuxt-layout :name="pageLayout">
    <!-- <nuxt-layout name="default"> -->
    <nuxt-page />
  </nuxt-layout>
</template>
