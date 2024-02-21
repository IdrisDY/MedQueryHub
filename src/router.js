import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import SignUp from "./views/SignUp.vue";
import LogIn from "./views/Login.vue";
import HomePage from "./views/Home.vue";
// Define routes

const routes = [
  { path: "/", component: HelloWorld ,meta:{
title:'MedQueryHub'
  }},
  { path: "/signup", component: SignUp,meta:{
    title:"Sign Up - MedQueryHub"
  } },
  { path: "/login", component: LogIn,meta:{
    title:"Log In - MedQueryHub"
  } },
  { path: "/home", component:HomePage,meta:{
    title:"Home - MedQueryHub"
  } },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach((to,from,next)=>{
  document.title = to.meta.title  || "MedQueryHub"
  next()
})

export default router;
