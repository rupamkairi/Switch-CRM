<script setup lang="ts">
import { useAppStates } from "~/stores/appStates";

const { logout } = useStrapiAuth();
const router = useRouter();
const pages = usePageNames();
const layouts = useLayoutNames();
const { setPageLayout } = useAppStates();

async function logoutUser() {
  logout();
  localStorage.clear();
  sessionStorage.clear();

  router.replace(pages.index);
  setPageLayout(layouts.default);
}
</script>

<template>
  <button
    type="button"
    class="focus:outline-none text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-500 dark:hover:bg-red-400 dark:focus:ring-red-700"
    @click="logoutUser"
  >
    Log out
  </button>
</template>
