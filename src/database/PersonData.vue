<template>
  <div class="container">
    <h1>PersonData</h1>
    <button @click="setPerson">ADD PERSON</button>
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
    <!-- <p ref="user1">{{ user1 }}</p> -->
  </div>
</template>

<script>
import { ref } from "vue";
import { data_api } from "@/database/api.js";

export default {
  name: "PersonData",

  setup() {
    const my_API = new data_api();
    let users = [];
    users = my_API.getPersonList();
    let user1 = ref(user1);
    let new_person = { FIRSTNAME: "1", LASTNAME: "1", EMAIL: "1", ROLE: "1" };

    function setPerson() {
      users = my_API.addPerson(new_person);
      console.log(users);
    }

    return {
      users,
      new_person,
      user1,
      setPerson,
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
