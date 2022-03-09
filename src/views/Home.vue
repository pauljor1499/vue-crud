<template>
  <div class="delete">
    <h1>Person List</h1>
    <button @click="setPerson">Add Person</button>
    <PersonData />
  </div>
</template>

<script>
// @ is an alias to /src
import PersonData from "@/database/PersonData.vue";
import { ref } from "@vue/reactivity";

export default {
  name: "Home",
  components: {
    PersonData,
  },

  setup() {
    const setPerson = () => {
      const name = ref(prompt("First name:"));
    };

    return { setPerson };
  },
};
</script>

