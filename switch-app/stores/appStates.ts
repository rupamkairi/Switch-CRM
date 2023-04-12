import { defineStore } from "pinia";

const initialState = {
  pageLayout: "default",
};

// Options Store
// export const useAppStates = defineStore("appStates", {
//   state: () => initialState,
//   getters: {
//     pageLayout: (state) => state.pageLayout,
//   },
//   actions: {
//     setPageLayout(layout: string) {
//       this.pageLayout = layout;
//     },
//   },
// });

// Composition Store
export const useAppStates = defineStore("appStates", () => {
  const _pageLayout = ref(initialState.pageLayout);

  const pageLayout = computed(() => _pageLayout);
  function setPageLayout(layout: string) {
    _pageLayout.value = layout;
  }

  function initLayout() {
    const { fetchUser, setToken } = useStrapiAuth();
    const layouts = useLayoutNames();

    onMounted(async () => {
      const strapi_jwt = sessionStorage.getItem("strapi_jwt");
      setToken(strapi_jwt);

      const user = await fetchUser();
      // console.log(!!user.value);

      if (user.value) {
        setPageLayout(layouts.dashboard);
      }
    });
  }

  return { pageLayout, setPageLayout, initLayout };
});
