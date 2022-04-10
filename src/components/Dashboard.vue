<template>
  <!-- Nav bar -->
  <NavBar />
  <body>
    <div class="container">
      <!-- Side bar -->
      <div
        class="sidebar-show"
        :class="sidebar_status ? 'drawerOn' : 'drawerOff'"
      >
        <div class="profile">
          <img
            src="https://thetaiwantimes.com/wp-content/uploads/2020/06/President_Rodrigo_Duterte-1.jpg"
            alt="profile_picture"
          />
          <h3>Rodrigo Duterte</h3>
          <p>Code: 142-4342-1</p>
          <p style="margin-bottom: 10px">Teacher</p>
          <a href="/">
            <span>View Profile</span>
          </a>
        </div>
        <hr />
        <ul>
          <li>
            <a href="#" class="active">
              <span class="icon"><i class="fas fa-home"></i></span>
              <span class="item">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon"><i class="fas fa-desktop"></i></span>
              <span class="item">All Classes</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon"><i class="fas fa-user-friends"></i></span>
              <span class="item">Class Periods</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon"><i class="fas fa-tachometer-alt"></i></span>
              <span class="item">Reports</span>
            </a>
          </li>
        </ul>
      </div>
      <!-- Board -->
      <div class="board">
        <div class="hamburger">
          <button @click="sidebar_status = !sidebar_status">
            <svg
              :class="sidebar_status ? 'show' : 'hide'"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"
              />
            </svg>
          </button>
        </div>
        <h1>Welcome to your Dashboard!</h1>
        <!-- Card -->
        <div :class="sidebar_status ? 'row' : 'row-sidebar-hide'">
          <div class="column">
            <n-card
              title="Subjects"
              :segmented="{
                content: true,
                footer: 'soft',
              }"
              hoverable
              style="text-align: left"
            >
              <template #header-extra>View</template>
              Card Content
            </n-card>
          </div>
          <div class="column">
            <n-card
              title="Classes"
              :segmented="{
                content: true,
                footer: 'soft',
              }"
              hoverable
              style="text-align: left"
            >
              <template #header-extra>View</template>
              Card Content
            </n-card>
          </div>
          <div class="column">
            <n-card
              title="Notifications"
              :segmented="{
                content: true,
                footer: 'soft',
              }"
              hoverable
              style="text-align: left"
            >
              <template #header-extra>View</template>
              Card Content
            </n-card>
          </div>
          <div class="column">
            <n-card class="calendar">
              <div class="date">21</div>
              <div>
                <div class="month">December</div>
                <div class="year">2018</div>
                <div class="day">Sunday</div>
              </div>
            </n-card>
          </div>
        </div>
      </div>
    </div>
  </body>
  <footer></footer>
</template>

<script>
import { ref } from "@vue/reactivity";
import NavBar from "../components/NavBar.vue";

export default {
  name: "Dashboard",
  components: {
    NavBar,
  },

  setup() {
    var sidebar_status = ref(true);

    return { sidebar_status };
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  text-decoration: none;

  list-style: none;
  font-family: "Open Sans", sans-serif;
}

.sidebar-show {
  background-color: #253759;
  width: 280px;
  height: 100%;
  text-align: center;
}

.sidebar-show .profile {
  margin-top: 50px;
  text-align: center;
}

.sidebar-show .profile img {
  display: block;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin: 0 auto;
  border: 2px solid #ffffff;
}

.sidebar-show .profile h3 {
  color: #ffffff;
  margin: 20px 0 10px;
}

.sidebar-show .profile p {
  color: rgb(206, 240, 253);
  font-size: 14px;
}

.sidebar-show .profile a {
  display: inline-block;
  font-size: 12px;
  padding: 10px;
  padding-left: 140px;
  color: rgba(255, 255, 255, 0.61);
}

.sidebar-show ul {
  display: inline-block;
  margin-top: 20px;
}

.sidebar-show ul li a {
  display: block;
  padding: 13px 30px;
  border-bottom: 1px solid #10558d;
  color: #ffffff;
  font-size: 16px;
  position: relative;
}

.sidebar-show ul li a .icon {
  color: #dee4ec;
  width: 30px;
  float: left;
}

.sidebar-show ul li a:hover,
.sidebar-show ul li a.active {
  color: #253759;
  background: white;
}

.sidebar-show ul li a:hover .icon,
.sidebar-show ul li a.active .icon {
  color: #0073b0;
}

/* body */
.container {
  display: flex;
  background-color: hsl(0, 0%, 95%);
  height: 750px;
}

.board {
  width: 100%;
  height: 200px;
  background-color: #0073b0;
  float: right;
}

.board h1 {
  color: white;
  float: left;
  margin: 50px 80px 0;
}

/* Cards */

.column {
  width: 100%;
  height: 200px;
}

.row {
  width: 95%;
  display: grid;
  margin: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 20px;
}

.row .column .n-card {
  max-width: 300px;
  top: 50px;
}

.row .column .calendar {
  display: flex;
}

.row .column .calendar .date {
  float: left;
  font-weight: bold;
  font-size: 55px;
  margin: 0px 20px 0px;
  color: #2ab6b6;
}

.row .column .calendar .month {
  font-weight: bold;
  font-size: 16px;
  margin: 10px 0px 0px;
}

footer {
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 100px;
}

.hamburger {
  position: absolute;
  float: left;
  margin-left: 5px;
  margin-top: 5px;
}

.hamburger button {
  width: 20px;
  height: 20px;
  background: transparent;
  border: none;
}

.hamburger svg path {
  fill: white;
}

.hamburger button:hover {
  cursor: pointer;
}

.sidebar-hide {
  display: none;
}

.row-sidebar-hide {
  width: 95%;
  display: grid;
  margin: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  column-gap: 20px;
}

.row-sidebar-hide .column .n-card {
  max-width: 300px;
  top: 50px;
}

.row-sidebar-hide .column .calendar {
  display: flex;
}

.row-sidebar-hide .column .calendar .date {
  float: left;
  font-weight: bold;
  font-size: 55px;
  margin: 0px 20px 0px;
  color: #2ab6b6;
}

.row-sidebar-hide .column .calendar .month {
  font-weight: bold;
  font-size: 16px;
  margin: 10px 0px 0px;
}

/* svg animation */
.show {
  transform: rotate(0deg);
  transition: 0.3s ease-in;
}

.hide {
  transform: rotate(90deg);
  transition: 0.3s ease-in;
}
/* svg animation */

.drawerOn {
  margin-left: 0px;
  transition: 0.3s ease-in;
}

.drawerOff {
  margin-left: -280px;
  transition: 0.3s ease-in;
}
</style>
