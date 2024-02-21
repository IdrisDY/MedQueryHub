<template>
   <div class="flex flex-col md:flex-row gap-4  py-2 " :key="item.id" >
<div class="flex text-[12px]  md:flex-col gap-2 " >
<span>{{ item.votes }} votes</span>
<span>{{ item.answers }} answers</span>
<span>{{ item.views }} views</span>
</div>
<div class="flex flex-col  gap-2" >

<p> {{ item.title }}</p>
<div class="flex flex-col md:flex-row justify-between">
<span class="rounded-lg p-1 w-fit h-fit text-[12px] bg-blue-100 text-blue-500" v-for="(tag) in item.tags" >{{ tag }}</span>
<div>
<span class="text-[12px]" > {{ item.userName + ", "+item.rating + " "+item.action + " " + item.timeStamp }}  </span>
</div>
</div>
<div>


</div>
</div>
   </div>
</template>

<script setup>
   defineProps({
      item:Object
   })
</script>

<style lang="css" scoped>

</style>