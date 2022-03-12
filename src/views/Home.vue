<template>
  <div class="delete">
    <h1>Person List</h1>
    <button @click="setPerson">Add Person</button>
    <button @click="goToPage">Goooo</button>
    <PersonData />
  </div>
</template>

<script>
import PersonData from "@/database/PersonData.vue"; //component no {}
import { ref } from "@vue/reactivity";
import { data_api } from "@/database/api.js";
import { person } from "@/database/Person.js";
import Router from "../router";

export default {
  name: "Home",
  components: {
    PersonData,
  },

  setup() {
    const my_API = new data_api();

    const setPerson = () => {
      my_API.addPerson("1", "2", "3", "4");
    };

    const goToPage = () => {
      Router.push({ name: "ViewList" });
      // this.$router.push({ path: "/viewList" });
      // alert("asdads");
    };

    return { setPerson, goToPage };
  },
};
</script>

<style scoped>
</style>

