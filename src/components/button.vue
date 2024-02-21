<!-- ButtonComponent.vue -->
<template>
   <button :class="[ btnStyle, { 'bg-blue-500 hover:bg-blue-600': blue } ]"  class=" whitespace-nowrap cursor-pointer font-bold  rounded-md transition ease-in-out duration-150">
     <slot></slot> <!-- Use slot for button text -->
   </button>
 </template>


 <script setup>
const props =  defineProps({
   btnStyle:String,
   blue:Boolean
})
 </script>