<script lang="ts">
export default defineComponent({
  async setup() {
    const { data: applicants } = await useFetch(
      "http://localhost:1337/api/users?filters[role][id][$eq]=3"
    );
    console.log(applicants.value);
    const { data: recruiters } = await useFetch(
      "http://localhost:1337/api/users?filters[role][id][$eq]=4"
    );
    console.log(recruiters.value);
    return { applicants, recruiters };
  },
});
</script>

<template>
  <div>
    <h3 class="text-xl font-bold">Applicants</h3>
    <!-- <pre>{{ JSON.stringify(applicants, null, 2) }}</pre> -->
    <div class="flex flex-wrap gap-2">
      <div v-for="a in applicants">
        <div class="border p-2">
          <p>{{ a?.username }}</p>
        </div>
      </div>
    </div>
  </div>
  <div>
    <h3 class="text-xl font-bold">Recruiters</h3>
    <!-- <pre>{{ JSON.stringify(recruiters, null, 2) }}</pre> -->
    <div class="flex flex-wrap gap-2">
      <div v-for="r in recruiters">
        <div class="border p-2">
          <p>{{ r?.username }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
