<template>
  <section class="grid md:grid-cols-2 grid-rows-1">
    <div class="mt-16 z-[2] ">
      <div
        class="md:w-[65%] w-[90%] m-auto bg-white rounded-md shadow-xl px-4 py-8 md:px-[24px] mr-auto"
      >
        <h1
          class="text-xl text-[#444444] font-[700] text-center md:text-left md:text-4xl"
        >
          Create your account
        </h1>

        <form class="md:ml-0 mt-10">
          <div class="flex flex-col gap-1">
            <label class="font-[600] text-[#444444]" for="email">Email</label>
            <InputComponent
              id="email"
              type="email"
              name="email"
            />
          </div>

          <div class="flex mt-5 flex-col gap-1">
            <label class="font-[600] text-[#444444]" for="password"
              >Password</label
            >
            <InputComponent
              type="password"
              name="password"
              id="password"
              autocomplete="new-password"
            />
            <p class="text-sm text-gray-600 mt-1">
              Password must contain 8+ characters, including at least 1 letter
              and 1 number.
            </p>
          </div>

          <div class="mt-6">
            <button
              type="submit"
              class="bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border w-full text-white rounded-md transition ease-in-out duration-150 p-2"
            >
              Sign up
            </button>
          </div>

          <div class="flex flex-col gap-5 mt-8">
            <ButtonComponent
              class="border flex justify-center gap-2 items-center border-gray-300 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 w-full text-black rounded-md transition ease-in-out duration-150 p-2"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#fbc02d"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#e53935"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4caf50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1565c0"
                  d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
              Sign up with Google
            </ButtonComponent>
            <ButtonComponent
              class="bg-black flex justify-center gap-2 items-center hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 text-white w-full rounded-md transition ease-in-out duration-150 p-2"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-github"
              >
                <path
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.61V22"
                ></path>
              </svg>
              Sign up with GitHub
            </ButtonComponent>
          </div>
        </form>
      </div>
    </div>
    <div class="hidden relative md:flex">
    
    <img class="bg-white absolute rounded-md md:left-[-20%] md:max-w-[400px] lg:max-w-[500px]   top-[40%] " src="../assets/images/medpik2.jpg" alt="hero health illustration"/>
    <img class="absolute lg:right-[20%] rounded-md top-[10%]  md:max-w-[400px]   lg:max-w-[500px]" src="../assets/images/medpik3.webp"/>
    </div>
  </section>
</template>

<script setup>
import ButtonComponent from "../components/button.vue";
import InputComponent from "../components/Input.vue";
</script>

<style lang="css" scoped>
/* SCSS styles here */
</style>
