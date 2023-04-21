<template>
  <div>
    <button @click="chooseApplicant">Applicant</button>
    <button @click="chooseRecruiter">Recruiter</button>
  </div>
</template>

<script setup lang="ts">
import { StrapiUser } from "@nuxtjs/strapi/dist/runtime/types";
import { useAppStates } from "~/stores/appStates";

const { fetchUser, setUser } = useStrapiAuth();
const user = useStrapiUser();
const { update } = useStrapi();
const strapiClient = useStrapiClient();
const router = useRouter();
const pages = usePageNames();
const layouts = useLayoutNames();
const { setPageLayout } = useAppStates();

onMounted(() => {
  setPageLayout(layouts.single);
});

async function chooseApplicant() {
  if (user.value) {
    const body = { role: 3 };
    const _user = await strapiClient("/users/" + user.value.id, {
      method: "PUT",
      body,
    });

    setUser(_user as StrapiUser);
    if (_user) {
      router.replace(pages.dashboard);
      setPageLayout(layouts.dashboard);
    }
  }
}

async function chooseRecruiter() {
  if (user.value) {
    const body = { role: 4 };
    const _user = await strapiClient("/users/" + user.value.id, {
      method: "PUT",
      body,
    });

    setUser(_user as StrapiUser);
    if (_user) {
      router.replace(pages.dashboard);
      setPageLayout(layouts.dashboard);
    }
  }
}
</script>
