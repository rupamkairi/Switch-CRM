<template>
  <div class="flex">
    <NuxtLink :href="pages.login">Login</NuxtLink>
    <NuxtLink :href="pages.signup">Signup</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const pages = usePageNames();
</script>
