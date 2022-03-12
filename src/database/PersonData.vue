<template>
  <div class="container">
    <p ref="p">Hello world!</p>
    <button @click="setPerson">ADD PERSON</button>
    <button @click="setReference">CHANGE TEXT</button>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id" ref="users">
          <td>{{ user.firstName }} {{ user.lastName }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.role }}</td>
          <td><button>Edit</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref } from "vue";
import { data_api } from "@/database/api.js";

export default {
  name: "PersonData",

  setup() {
    // const users = ref(persons);
    const my_API = new data_api();
    const users = ref(my_API.getPersonList());
    const p = ref(null);

    const setPerson = () => {
      my_API.addPerson("1", "2", "3", "4");
      console.log((users.value.textContent = "asdasdsad"));
    };

    const setReference = () => {
      p.value.textContent = "asdadsadas";
    };

    return {
      users,
      setPerson,
      p,
      setReference,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
