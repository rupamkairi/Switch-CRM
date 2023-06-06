<script lang="ts">
class Job {
  constructor() {}
}

export default {
  props: {
    job: Job,
  },
  setup(props) {
    return { job: props.job };
  },
};
</script>

<template>
  <div class="border p-4">
    <!-- <pre>{{ JSON.stringify(job, null, 2) }}</pre> -->
    <p class="text-lg font-black">{{ job.attributes.title }}</p>
    <p class="font-bold">
      {{ job.attributes.company.data.attributes.name }}
    </p>
    <p class="text-sm">
      {{ job.attributes.recruiter.data.attributes.username }}
    </p>
  </div>
</template>
