<!-- ButtonComponent.vue -->
<template>
   <button :class="btnStyle" class=" whitespace-nowrap cursor-pointer font-bold  rounded-md transition ease-in-out duration-150">
     <slot></slot> <!-- Use slot for button text -->
   </button>
 </template>


 <script setup>
const props =  defineProps({
   btnStyle:String
})
 </script>