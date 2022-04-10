<template>
  <div>
    <span v-if="msg.email" style="color: red">{{ msg.email }}</span
    ><br />
    <span v-if="msg.password" style="color: red">{{ msg.password }}</span>

    <n-form>
      <label for="firstname">First Name:</label><br />
      <n-input type="text" v-model="firstname" required />
      <br /><br />

      <label for="lastname">Last Name:</label><br />
      <n-input type="text" v-model="lastname" required />
      <br /><br />

      <label for="email">Email Address:</label><br />
      <n-input type="text" v-model="email" required /> <br />
      <br />

      <label for="password">Password:</label><br />
      <n-input type="text" v-model="password" required /><br />
      <br />
    </n-form>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      msg: [],
    };
  },
  watch: {
    email(value) {
      // binding this to the data value in the email input
      this.email = value;
      this.validateEmail(value);
    },
    password(value) {
      this.password = value;
      this.validatePassword(value);
    },
  },
  methods: {
    validateEmail(value) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        this.msg["email"] = "";
      } else {
        this.msg["email"] = "Invalid Email Address";
      }
    },
    validatePassword(value) {
      let difference = 8 - value.length;
      if (value.length < 8) {
        this.msg["password"] =
          "Must be 8 characters! " + difference + " characters left";
      } else {
        this.msg["password"] = "";
      }
    },
  },
};
</script>