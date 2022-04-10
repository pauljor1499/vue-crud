<template>
  <nav>
    <a href="/dashboard"><h1 style="color: black">MathWorld</h1></a>
    <ul>
      <router-link :to="'/register'">
        <n-button
          color="#253759"
          type="default"
          size="medium"
          id="signupBtn"
          style="margin: 10px; color: #253759"
          ghost
          >Register</n-button
        >
      </router-link>
      <router-link :to="'/login'">
        <n-button
          color="#253759"
          size="medium"
          id="loginBtn"
          style="margin: 10px"
          >Log In</n-button
        >
      </router-link>
      <li><a class="vl">|</a></li>
      <li><a href="/dashboard">Teachers</a></li>
      <li><a href="/dashboard">Community</a></li>
      <li><a href="/dashboard">About</a></li>
      <li><a href="/dashboard">Courses</a></li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
/* nav */
nav {
  border-bottom: 1px solid #dee2e6;
}

nav h1 {
  float: left;
  margin: 5px 0px 0px 5%;
  font-size: 30px;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-size: 18px;
  margin-right: 5%;
}

nav ul button {
  float: right;
  padding: 10px;
}

nav ul li a {
  float: right;
  display: block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  color: black;
}

nav ul li a:hover:not(.active, .vl) {
  background-color: #d0ebff;
  transition: 0.8s;
}

.active {
  background-color: #d0ebff;
  border-bottom: 1px solid #003a74;
}
/* nav */
</style>
