import { initFlowbite } from "flowbite";
import { defineStore } from "pinia";
// import { useRouter } from "nuxt/app";
// import { usePageNames } from "~/composables/page-names";

const initialState = {
  pageLayout: "default",
};

// Composition Store
export const useAppStates = defineStore("appStates", () => {
  const _pageLayout = ref(initialState.pageLayout);

  const pageLayout = computed(() => _pageLayout);

  function setPageLayout(layout: string) {
    _pageLayout.value = layout;
  }

  function initLayout() {
    const { fetchUser, setToken } = useStrapiAuth();
    const router = useRouter();
    const pages = usePageNames();
    const layouts = useLayoutNames();

    onMounted(async () => {
      initFlowbite();

      const strapi_jwt = sessionStorage.getItem("strapi_jwt");
      setToken(strapi_jwt);

      const user = await fetchUser();

      if (user.value) {
        router.replace(pages.dashboard);
        setPageLayout(layouts.dashboard);
      }
    });
  }

  return { pageLayout, setPageLayout, initLayout };
});
