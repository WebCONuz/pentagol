<script setup></script>

<template>
  <div>
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-lg text-green-500 font-semibold">O'yinlar ro'yxati:</h2>
      <router-link
        to="/admin/teams/add"
        class="py-2 px-4 rounded-md bg-green-500 text-white"
        >Yangi o'yin qo'shish</router-link
      >
    </div>
    <div
      class="table_wraper bg-white relative shadow-md flex overflow-x-scroll overflow-y-scroll"
    >
      <table class="text-sm flex-grow text-left dark:text-gray-400 h-full">
        <thead
          class="text-[#55358C] font-normal text-[16px] leading-[24px] md:text-sm bg-[#E9E2F7] dark:bg-gray-700 dark:text-gray-400"
        >
          <tr class="text-[16px] font-medium">
            <th scope="col" class="px-[15px] py-3">
              <div class="flex items-center">No.</div>
            </th>
            <th scope="col" class="px-[15px] py-3">
              <div class="flex items-center">team_1</div>
            </th>
            <th scope="col" class="px-[15px] py-3">
              <div class="flex items-center">grade_team_1</div>
            </th>
            <th scope="col" class="px-[15px] py-3">
              <div class="flex items-center">team_2</div>
            </th>
            <th scope="col" class="px-[15px] py-3">
              <div class="flex items-center">grade_team_2</div>
            </th>
            <th scope="col" class="px-[15px] py-3">
              <div class="flex items-center">date</div>
            </th>
            <th scope="col" class="px-[15px] py-3">
              <div class="flex items-center">Tugagan</div>
            </th>
            <th scope="col" class="px-[15px] py-3">
              <div class="flex items-center w-[150px]">Liga nomi</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(gr, index) in 10"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 font-normal text-[16px] leading-[24px]"
          >
            <th
              scope="row"
              class="px-[15px] py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ index + 1 }}
            </th>
            <td class="px-[15px] py-2">
              <img src="../../assets/images/barsa_logo.png" class="w-[25px]" />
            </td>
            <td class="px-[15px] py-2">Bavaria</td>
            <td class="px-[15px] py-2">Bundesliga</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style></style>
