<template>
  <div>Dashboard</div>
</template>

<script setup lang="ts">
import { useAppStates } from "~/stores/appStates";

const { fetchUser } = useStrapiAuth();
const router = useRouter();
const pages = usePageNames();
const layouts = useLayoutNames();
const { setPageLayout } = useAppStates();

onMounted(async () => {
  const user = await fetchUser();

  if (user.value) {
    router.replace(pages.dashboard);
    setPageLayout(layouts.dashboard);
  } else {
    router.replace(pages.index);
  }
});
</script>
