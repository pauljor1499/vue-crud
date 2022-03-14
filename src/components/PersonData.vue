<template>
  <div class="container">
    <AddNewPerson />
    <!-- <n-button @click="showModal = true">Add Person</n-button> -->
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <td>{{ user.FIRSTNAME }} {{ user.LASTNAME }}</td>
          <td>{{ user.EMAIL }}</td>
          <td>{{ user.ROLE }}</td>
          <td><button>Edit</button></td>
        </tr>
      </tbody>
    </table>
    <br />
    <!-- <input type="text" v-model="users[0].FIRSTNAME" /><br /> -->
  </div>
</template>

<script>
import { persons } from "./PersonList.js";
import AddNewPerson from "./AddNewPerson.vue";
import { ref } from "vue";

export default {
  name: "PersonData",
  components: {
    AddNewPerson,
  },

  setup() {
    let users = ref(persons);
    let new_person = { FIRSTNAME: "1", LASTNAME: "1", EMAIL: "1", ROLE: "1" };
    let sample = ref("asdsadasd");

    function addPerson() {
      users.value.push(new_person);
      return true;
    }

    return {
      users,
      new_person,
      addPerson,
      sample,
    };
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

table,
th,
td {
  margin-top: 5%;
  margin-bottom: 10%;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid black;
  border-collapse: collapse;
  padding: 10px;
}
</style>
