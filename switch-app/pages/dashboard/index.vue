<template>
  <div>Dashboard</div>
  <pre>{{ JSON.stringify(user, null, 2) }}</pre>
  <ActionsLogoutButton />
</template>

<script setup lang="ts">
import { useAppStates } from "~/stores/appStates";

// const { fetchUser } = useStrapiAuth();
const user = useStrapiUser();
const router = useRouter();
const pages = usePageNames();
const layouts = useLayoutNames();
const { setPageLayout } = useAppStates();

// const user = reactive<any>({});

onMounted(async () => {
  // console.log(user.value);
  if (user.value) {
    if (user.value?.role?.id === 1) {
      // console.log(true);
      // router.replace(pages.chooseAccount);
      // setPageLayout(layouts.single);
    }
  } else {
    router.replace(pages.index);
  }
});
</script>
