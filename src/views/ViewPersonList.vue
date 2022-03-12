<template>
  <div class="delete">
    <h1>Person List</h1>
    <PersonData />
  </div>
</template>

<script>
import PersonData from "@/database/PersonData.vue";

export default {
  name: "ViewList",
  components: {
    PersonData,
  },
};
</script>

