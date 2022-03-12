<template>
  <div class="delete">
    <h1>Person List</h1>
    <button @click="setPerson">Add Person</button>
    <PersonData />
  </div>
</template>

<script>
// @ is an alias to /src
import PersonData from "@/database/PersonData.vue"; //component no {}
import { ref } from "@vue/reactivity";
import { data_api } from "@/database/api.js";
import { person } from "@/database/Person.js";

export default {
  name: "Home",
  components: {
    PersonData,
  },

  setup() {
    // const setPerson = () => {
    //   const name = ref(prompt("First name:"));
    // };

    const my_API = new data_api();

    const setPerson = () => {
      my_API.addPerson("1", "2", "3", "4");
    };

    return { setPerson };
  },
};
</script>

<style scoped>
</style>

