<script lang="ts">
export default defineComponent({
  async setup() {
    const { data } = await useFetch(
      "http://localhost:1337/api/jobs?populate=*"
    );
    const jobs = data.value.data;
    return { jobs };
  },
});
</script>

<template>
  <div>
    <!-- <h3 class="text-xl font-bold">Jobs List</h3> -->
    <!-- <pre>{{ JSON.stringify(jobs, null, 2) }}</pre> -->
    <div v-for="j in jobs">
      <!-- <div>
        <p>{{ j.attributes.title }}</p>
        <p>{{ j.attributes.company.data.attributes.name }}</p>
        <p>{{ j.attributes.recruiter.data.attributes.username }}</p>
      </div> -->

      <JobCard :job="j" />
    </div>
  </div>
</template>
