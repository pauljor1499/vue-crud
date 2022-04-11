<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/add">Add</router-link> |
    <router-link to="/update">Update</router-link> |
    <router-link to="/remove">Delete</router-link> |
    <router-link to="/viewList">View List</router-link> |
    <router-link to="/modal">View Modal</router-link> |
    <router-link to="/nav">NavBar</router-link> |
    <router-link to="/dashboard">Dashboard</router-link> |
    <router-link to="/landingPage">Landing Page</router-link> |
    <router-link to="/footer">Footer</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/register">Register</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
