<template>
  <div class="delete">
    <!-- <h1>Person List</h1> -->
    <!-- <button @click="setPerson">Add Person</button>
    <button @click="goToPage">Goooo</button> -->
    <PersonData />
  </div>
</template>

<script>
import PersonData from "@/database/PersonData.vue"; //component no {}
import PersonData1 from "@/database/PersonData1.vue";
import { ref } from "@vue/reactivity";
import Router from "../router";

export default {
  name: "Home",
  components: {
    PersonData,
  },

  setup() {

  },
};
</script>

<style scoped>
</style>

