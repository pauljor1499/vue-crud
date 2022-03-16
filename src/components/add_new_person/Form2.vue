<template>
  <div id="visa">
    <form>
      <label for="full name">Full Name:</label><br />
      <input type="text" v-model="name" required />
      <br /><br />

      <label for="email">Email Address:</label><br />
      <input type="text" v-model="email" required /> <br />
      <span v-if="msg.email" style="color: red">{{ msg.email }}</span>
      <br />

      <label for="password">Password:</label><br />
      <input type="text" v-model="password" required /><br />
      <span v-if="msg.password" style="color: red">{{ msg.password }}</span>
      <br />

      <label for="twitter">Twitter Handle:</label><br />
      <input type="text" v-model="twitter" required />
    </form>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from "@vue/runtime-core";

export default defineComponent({
  name: "Test",
  setup() {
    let name = ref("");
    let password = ref("");
    let email = ref("");
    let msg = ref([]);
    let twitter = ref("");

    const count = computed(() => validateEmail(), validatePassword());

    // const currentContextTasks = computed(() => {
    //   email(value)(() => {
    //     this.email = value;
    //     this.validateEmail(value);
    //   });

    //   password(value)(() => {
    //     this.password = value;
    //     this.validatePassword(value);
    //   });
    // });

    const validateEmail = function () {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email(value))) {
        this.msg["email"] = "";
      } else {
        this.msg["email"] = "Invalid Email Address";
      }
    };

    function validatePassword() {
      let difference = 8 - password(value).length;
      if (password(value).length < 8) {
        this.msg["password"] =
          "Must be 8 characters! " + difference + " characters left";
      } else {
        this.msg["password"] = "";
      }
    }

    return {
      name,
      password,
      email,
      msg,
      twitter,
      currentContextTasks,
      validateEmail,
      validatePassword,
      count,
    };
  },

  // data() {
  //   return {
  //     name: "",
  //     password: "",
  //     email: "",
  //     msg: [],
  //     twitter: "",
  //   };
  // },
  // watch: {
  //   email(value) {
  //     // binding this to the data value in the email input
  //     this.email = value;
  //     this.validateEmail(value);
  //   },
  //   password(value) {
  //     this.password = value;
  //     this.validatePassword(value);
  //   },
  // },
  // methods: {
  //   validateEmail(value) {
  //     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
  //       this.msg["email"] = "";
  //     } else {
  //       this.msg["email"] = "Invalid Email Address";
  //     }
  //   },
  //   validatePassword(value) {
  //     let difference = 8 - value.length;
  //     if (value.length < 8) {
  //       this.msg["password"] =
  //         "Must be 8 characters! " + difference + " characters left";
  //     } else {
  //       this.msg["password"] = "";
  //     }
  //   },
  // },
});
</script>