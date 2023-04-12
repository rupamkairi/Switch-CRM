<template>
  <div class="flex">
    <NuxtLink :href="pages.jobs">Jobs</NuxtLink>
    <NuxtLink :href="pages.applications">Applications</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const pages = usePageNames();
</script>
