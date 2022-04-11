import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Add from "../views/AddPersonPage.vue";
import Update from "../views/UpdatePersonPage.vue";
import Remove from "../views/RemovePerson.vue";
import ViewList from "../views/ViewPersonList.vue";
import Modal from "../components/add_new_person/Modal.vue";
import Nav from "../components/NavBar.vue";
import Dashboard from "../components/Dashboard.vue";
import LandingPage from "../components/LandingPage.vue";
import Footer from "../components/Footer.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/add",
    name: "Add",
    component: Add,
  },

  {
    path: "/update",
    name: "Update",
    component: Update,
  },

  {
    path: "/remove",
    name: "Remove",
    component: Remove,
  },

  {
    path: "/viewList",
    name: "ViewList",
    component: ViewList,
  },

  {
    path: "/modal",
    name: "Modal",
    component: Modal,
  },

  {
    path: "/nav",
    name: "Nav",
    component: Nav,
  },

  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },

  {
    path: "/landingPage",
    name: "LandingPage",
    component: LandingPage,
  },

  {
    path: "/footer",
    name: "Footer",
    component: Footer,
  },

  {
    path: "/login",
    name: "Login",
    component: Login,
  },

  {
    path: "/register",
    name: "Register",
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
