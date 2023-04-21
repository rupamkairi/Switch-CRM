<template>
  <div class="mx-auto max-w-screen-xl p-4">
    <div class="flex justify-center">
      <div>
        <h2 class="text-2xl mb-4 font-extrabold">Signup</h2>
        <div>
          <FormKit
            label="Username"
            type="text"
            id="username"
            v-model="credentials.username"
          />
          <FormKit
            label="Email"
            type="email"
            id="email"
            v-model="credentials.email"
          />
          <FormKit
            label="Password"
            type="password"
            id="password"
            v-model="credentials.password"
          />
          <FormKit
            type="button"
            @click="submitRegister"
            label="Signup to Switch"
          />
        </div>
        <!-- <pre>{{ JSON.stringify(credentials, null, 2) }}</pre> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAppStates } from "~/stores/appStates";

const user = useStrapiUser();
const token = useStrapiToken();
const { register } = useStrapiAuth();
const router = useRouter();
const pages = usePageNames();
const layouts = useLayoutNames();
const { setPageLayout } = useAppStates();

onMounted(() => {
  setPageLayout(layouts.single);
});

const credentials = reactive({
  username: "",
  email: "@public.io",
  password: "@Pass1234",
});

watch(credentials, () => {
  credentials.username = credentials.username
    .toLowerCase()
    .replaceAll(" ", "-");
});

async function submitRegister() {
  try {
    const _register = await register({
      ...credentials,
    });

    console.log({ token: _register.jwt, user: { ..._register.user.value } });
    sessionStorage.setItem("strapi_jwt", _register.jwt);

    router.push(pages.chooseAccount);
  } catch (error) {
    console.log("submitRegister", error);
  }
}
</script>
