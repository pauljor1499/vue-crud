<template>
  <div class="delete">
    <!-- <h1>Person List</h1> -->
    <!-- <button @click="setPerson">Add Person</button>
    <button @click="goToPage">Goooo</button> -->
    <AddNewPerson />
    <PersonData />
  </div>
</template>

<script>
import PersonData from "../components/PersonData.vue"; //component no {}
import PersonData1 from "../components/PersonData1.vue";
import { ref } from "@vue/reactivity";
import Router from "../router";
import AddNewPerson from "../components/add_new_person/AddNewPerson.vue";

export default {
  name: "Home",
  components: {
    PersonData,
    AddNewPerson,
  },

  setup() {},
};
</script>

<style scoped>
</style>

