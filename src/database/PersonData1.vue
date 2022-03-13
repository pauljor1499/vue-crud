<template>
  <div class="container">
    <h1>Person 1</h1>
    <p ref="p">Hello world!</p>
    <button @click="this.addPerson()">ADD PERSON</button><br />
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in this.getPersons" :key="index">
          <td>{{ user.FIRSTNAME }} {{ user.LASTNAME }}</td>
          <td>{{ user.EMAIL }}</td>
          <td>{{ user.ROLE }}</td>
          <td><button>Edit</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { data_api } from "@/database/api.js";

export default {
  name: "PersonData",

  data() {
    return {
      users: [],
    };
  },

  methods: {
    addPerson() {
      this.users.push({
        FIRSTNAME: "1",
        LASTNAME: "2",
        EMAIL: "3",
        ROLE: "4",
      });
      console.log(this.users);
    },
  },

  computed: {
    getPersons: function () {
      this.users = data_api.prototype.getPersonList();
      return this.users;
    },
  },

  created() {
    this.users = data_api.prototype.getPersonList();
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
