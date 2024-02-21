<template>
  <section class="bg-white rounded-md shadow-md  px-[12px]">
    <div></div>

    <!-- Ask question button -->
    <div class="flex flex-col gap-4" >
      <section class="flex pt-5 justify-between">
        <span> Top questions</span>
        <ButtonComponent btn-style="px-2 py-1 text-white " blue>
          Ask question</ButtonComponent
        >
      </section>
      <!-- Filter questions  -->
      <section class="filter">
        <ul
          class="flex border w-fit ml-auto flex-wrap rounded-md last:border-r-0 border-gray-300"
        >
          <li
            :key="item"
            class="border-r border-b p-2 border-gray-300"
            v-for="(item, i) in questionsFilter"
          >
            {{ item }}
          </li>
        </ul>
      </section>

      <!-- Questions List section -->
      <section class="">
        <div class="border-b border-gray-300" v-for="(item, i) in questionList">
          <QuestionItem :item="item" />
        </div>
      </section>
    </div>
    <aside></aside>
  </section>
</template>

<script setup>
import ButtonComponent from "../components/button.vue";
import QuestionItem from "../components/questionItem.vue";
const questionsFilter = [
  "Interesting",
  "Bountied",
  "Hot",
  "Week",
  "Month",
  "Year",
];
const questionList = [
  {
    id: 1,
    answers: 2,
    title: "Why I am not able to set to document or window object in js?",
    votes: 3,
    views: 5,
    tags: ["javascript"],
    userName: "Javier Mascherano",
    rating: 178,
    action: "answered",
    timeStamp: "10 mins ago",
  },
  {
    id: 2,
    answers: 2,
    title: "Why I am not able to set to document or window object in js?",
    votes: 3,
    views: 5,
    tags: ["javascript"],
    userName: "Javier Mascherano",
    rating: 178,
    action: "answered",
    timeStamp: "10 mins ago",
  },
  {
    id: 3,
    answers: 2,
    title: "Why I am not able to set to document or window object in js?",
    votes: 3,
    views: 5,
    tags: ["javascript"],
    userName: "Javier Mascherano",
    rating: 178,
    action: "answered",
    timeStamp: "10 mins ago",
  },
  {
    id: 4,
    answers: 2,
    title: "Why I am not able to set to document or window object in js?",
    votes: 3,
    views: 5,
    tags: ["javascript"],
    userName: "Javier Mascherano",
    rating: 178,
    action: "answered",
    timeStamp: "10 mins ago",
  },
  {
    id: 5,
    answers: 2,
    title: "Why I am not able to set to document or window object in js?",
    votes: 3,
    views: 5,
    tags: ["javascript"],
    userName: "Javier Mascherano",
    rating: 178,
    action: "answered",
    timeStamp: "10 mins ago",
  },
];
</script>

<style lang="css" scoped></style>
