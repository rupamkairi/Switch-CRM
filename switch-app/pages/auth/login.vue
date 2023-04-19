<template>
  <div class="mx-auto max-w-screen-xl p-4">
    <div class="flex justify-center">
      <div>
        <h2 class="text-2xl mb-4 font-extrabold">Login</h2>
        <div>
          <FormKit
            label="Email"
            type="email"
            id="email"
            v-model="credentials.identifier"
          />
          <FormKit
            label="Password"
            type="password"
            id="password"
            v-model="credentials.password"
          />
          <FormKit type="button" @click="submitLogin" label="Login to Switch" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAppStates } from "~/stores/appStates";

const user = useStrapiUser();
const token = useStrapiToken();
const { login } = useStrapiAuth();
const router = useRouter();
const pages = usePageNames();
const layouts = useLayoutNames();
const { setPageLayout } = useAppStates();

onMounted(() => {
  setPageLayout(layouts.single);
});

const credentials = reactive({
  identifier: "user.1@public.io",
  password: "@Pass1234",
});

async function submitLogin() {
  try {
    const _login = await login({
      ...credentials,
      // identifier: "user.1@public.io",
      // password: "@Pass1234",
      // identifier: "applicant.1@public.io",
      // password: "@Pass1234",
    });

    console.log({ token: _login.jwt, user: { ..._login.user.value } });
    sessionStorage.setItem("strapi_jwt", _login.jwt);

    router.replace(pages.dashboard);
    setPageLayout(layouts.dashboard);
  } catch (error) {
    console.log("submitLogin", error);
  }
}
</script>
