<template>
  <div class="delete">
    <h1>Person List</h1>
    <PersonData1 />
  </div>
</template>

<script>
import PersonData1 from "@/database/PersonData.vue";

export default {
  name: "ViewList",
  components: {
    PersonData1,
  },
};
</script>

