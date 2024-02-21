import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import SignUp from "./views/SignUp.vue";
import LogIn from "./views/Login.vue";
// Define routes

const routes = [
  { path: "/", component: HelloWorld ,meta:{

  }},
  { path: "/signup", component: SignUp,meta:{
    title:"Sign Up - MedQueryHub"
  } },
  { path: "/login", component: LogIn,meta:{
    title:"Log In - MedQueryHub"
  } },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach((to,from,next)=>{
  document.title = to.meta.title
  next()
})

export default router;
