<template>
  <div>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div
        class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4"
      >
        <a href="https://flowbite.com" class="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span
            class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            >Flowbite</span
          >
        </a>
        <div class="flex justify-between items-center">
          <div>
            <!-- <a
                href="tel:5541251234"
                class="mr-6 text-sm text-gray-500 dark:text-white hover:underline"
                >(000) 000-0000</a
              > -->
          </div>
          <div>
            <NuxtLink
              class="mr-6 text-sm text-blue-600 dark:text-blue-500 hover:underline"
              :href="pages.login"
              >Login</NuxtLink
            >
            <NuxtLink
              class="text-sm text-blue-600 dark:text-blue-500 hover:underline"
              :href="pages.signup"
              >Signup</NuxtLink
            >
          </div>
        </div>
      </div>
    </nav>
  </div>
  <nav class="bg-gray-50 dark:bg-gray-700">
    <div class="max-w-screen-xl px-4 py-3 mx-auto">
      <div class="flex items-center">
        <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
          <li>
            <a
              href="#"
              class="text-gray-900 dark:text-white hover:underline"
              aria-current="page"
              >Home</a
            >
          </li>
          <li>
            <a href="#" class="text-gray-900 dark:text-white hover:underline"
              >Company</a
            >
          </li>
          <li>
            <a href="#" class="text-gray-900 dark:text-white hover:underline"
              >Team</a
            >
          </li>
          <li>
            <a href="#" class="text-gray-900 dark:text-white hover:underline"
              >Features</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const pages = usePageNames();
</script>
