<template>
  <div class="container">
    <n-button @click="showModal = true">Add Person</n-button>
  </div>

  <n-modal
    v-model:show="showModal"
    class="custom-card"
    preset="card"
    :style="bodyStyle"
    title="Add New Person"
    :bordered="false"
    size="small"
    :segmented="segmented"
  >
    <template #header-extra></template>
    <!-- Form -->
    <Form />
    <!-- Form End -->
    <template #footer>
      <n-button @click="showModal = false">CANCEL</n-button>
      <n-button
        class="right_button"
        type="primary"
        @click="addPerson() ? (showModal = false) : false"
      >
        ADD
      </n-button>
    </template>
  </n-modal>
</template>

<script>
import { persons } from "../PersonList.js";
import { defineComponent, ref } from "vue";
import Form from "./Form.vue";

export default defineComponent({
  name: "PersonData",
  components: {
    Form,
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

      //Styles
      bodyStyle: {
        width: "600px",
      },
      segmented: {
        content: "soft",
        footer: "soft",
      },
      showModal: ref(false),
    };
  },
});
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

.n-modal {
  padding: 20px;
}

.right_button {
  float: right;
}

.n-input {
  width: 50%;
  margin: 10px 0px 10px 10px;
}
</style>
