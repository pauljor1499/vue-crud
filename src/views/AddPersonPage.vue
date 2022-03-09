<template>
  <div class="add">
    <h1>Add Person</h1>
    <br /><br />
    First name: <input type="text" name="firstname" id="Fname" /> <br /><br />
    Middle name: <input type="text" name="middlename" id="Mname" /> <br /><br />
    Last name: <input type="text" name="lastname" id="Lname" /> <br /><br />
    Age: <input type="number" name="age" id="Age" /> <br /><br />
    <button @click="addPerson">Add Person</button>
  </div>
</template>

<script>
export default {
  name: "Add",

  setup() {
    const addPerson = () => {
      alert("asdsadsa");
    };

    return { addPerson };
  },
};
</script>

