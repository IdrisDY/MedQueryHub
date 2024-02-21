<template>
  <header class="relative py-3 px-2">
    <nav class="flex items-center md:px-4 gap-2 md:gap-4 lg:gap-6">
      <div class="flex md:hidden w-fit min-w-[24px]">
        <button @click="toggleMenu">
          <img
            src="../assets/images/outline_menu_black_24dp.png"
            alt="menu button"
          />
        </button>
      </div>
      <div>MedQueryHub</div>
      <!-- List of Tabs -->
      <Transition name="menu-slide">
        <div
          v-if="showMenu"
          class="flex justify-between fixed md:relative md:h-fit md:p-0 w-3/5 z-[3] py-5 px-3 bottom-0 h-full left-0 bg-white md:w-1/5"
        >
          <ul class="flex-col md:flex-row flex gap-3">
            <li>About</li>
            <li>Products</li>
            <li>Teams</li>
            <li>About</li>
          </ul>
          <span v-if="menuClicked" @click="menuClicked = false">X</span>
        </div>
      </Transition>
      <button @click="toggleSearch" class="flex md:hidden ml-auto">
        <svg
          aria-hidden="true"
          class="s-input-icon s-input-icon__search svg-icon iconSearch"
          width="20"
          height="20"
          viewBox="0 0 18 18"
          fill="hsl(210,8%,42%)"
        >
          <path
            d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z"
          ></path>
        </svg>
      </button>
      <Transition>
        <div
          v-show="showSearch || !widthMobile"
          class="border absolute w-[95%] flex md:relative md:bg-transparent bg-white mx-auto md:mr-0 md:ml-auto bottom-[-55px] md:bottom-0 left-0 right-0 md:w-1/3 lg:w-2/5 items-center p-2 rounded-md"
        >
          <svg
            aria-hidden="true"
            class="pr-1"
            width="23"
            height="23"
            fill="hsl(210,8%,42%)"
            viewBox="0 0 18 18"
          >
            <path
              d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z"
            ></path></svg
          ><input
            class="w-full focus:outline-none focus:border-none"
            placeholder="Search ..."
            type="search"
          />
        </div>
      </Transition>
      <div class="md:w-[20%] h-full justify-end gap-1 md:gap-4 flex">
        <router-link to="/login">
          <ButtonComponent
            btnStyle=" text-[14px] px-2 py-1 text-white md:py-2 md:px-4 bg-green-500 hover:bg-green-700"
            >Log In
          </ButtonComponent>
        </router-link>
        <router-link to="/signup" >
          <ButtonComponent
            btnStyle="text-[14px] text-white px-2 py-1 md:py-2 md:px-4 bg-blue-500 hover:bg-blue-700"
          >Sign Up
          </ButtonComponent>
        </router-link>
      </div>
    </nav>
  </header>
  <slot></slot>
  <footer></footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import ButtonComponent from "./button.vue";
const widthMobile = ref(window.innerWidth < 768);
const menuClicked = ref(false);
const showSearch = ref(false);

const showMenu = computed(() => {
  return !widthMobile.value || menuClicked.value;
});
console.log(showMenu, widthMobile);

const checkWidthAndToggleMenu = () => {
  console.log(widthMobile.value);
  if (window.innerWidth < 768) {
    widthMobile.value = true;
  } else {
    widthMobile.value = false;
  }
};

onMounted(() => {
  checkWidthAndToggleMenu();
  window.addEventListener("resize", checkWidthAndToggleMenu);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkWidthAndToggleMenu);
});

const toggleMenu = () => {
  menuClicked.value = !menuClicked.value;
};
const toggleSearch = () => {
  showSearch.value = !showSearch.value;
};
</script>

<style lang="css" scoped>
.v-move,
.v-enter-active,
.v-leave-active {
  transition: 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
.menu-slide-enter-active,
.menu-slide-leave-active {
  transition: transform 0.3s ease;
}

/* Starting state for entering element */
.menu-slide-enter-from,
.menu-slide-leave-to {
  transform: translateX(-100%);
}

/* Ending state for leaving element */
.menu-slide-leave-from,
.menu-slide-enter-to {
  transform: translateX(0);
}
</style>
