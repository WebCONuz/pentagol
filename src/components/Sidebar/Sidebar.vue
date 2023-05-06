<script setup>
import { useRouter } from "vue-router";
import { onMounted } from "vue";

onMounted(() => {});
</script>

<template>
  <div
    class="bg-white h-screen border flex flex-col justify-between py-10 dark:bg-gray-700"
  >
    <div class="menu-top">
      <h2
        class="text-[22px] font-medium leading-[36px] text-[#0167c6] text-center pb-7 dark:text-red-300"
      >
        DASHBOARD
      </h2>
      <ul>
        <router-link to="/admin/leagues">
          <li
            class="text-[16px] leading-6 pl-[25px] hover:text-[#0B63F8] mb-[20px] text-[#131313] border-l-4 border-white hover:border-l-[#0B63F8] duration-200 dark:text-white dark:hover:text-red-300 dark:hover:border-l-red-300 dark:border-gray-700"
          >
            <i class="bx bxs-dashboard mr-[15px] text-xl"></i>
            leagues
          </li>
        </router-link>
        <router-link to="/admin/teams">
          <li
            class="text-[16px] leading-6 pl-[25px] hover:text-[#0B63F8] mb-[20px] text-[#131313] border-l-4 border-white hover:border-l-[#0B63F8] duration-200 dark:text-white dark:hover:text-red-300 dark:hover:border-l-red-300 dark:border-gray-700"
          >
            <i class="bx bx-user-plus mr-[15px] text-xl"></i>
            teams
          </li>
        </router-link>
        <router-link to="/admin/matches">
          <li
            class="text-[16px] leading-6 pl-[25px] hover:text-[#0B63F8] mb-[20px] text-[#131313] border-l-4 border-white hover:border-l-[#0B63F8] duration-200 dark:text-white dark:hover:text-red-300 dark:hover:border-l-red-300 dark:border-gray-700"
          >
            <i class="bx bx-cart-add mr-[15px] text-xl"></i>
            matches
          </li>
        </router-link>
        <router-link to="/admin/news">
          <li
            class="text-[16px] leading-6 pl-[25px] hover:text-[#0B63F8] mb-[20px] text-[#131313] border-l-4 border-white hover:border-l-[#0B63F8] duration-200 dark:text-white dark:hover:text-red-300 dark:hover:border-l-red-300 dark:border-gray-700"
          >
            <i class="bx bx-cart mr-[15px] text-xl"></i>
            news
          </li>
        </router-link>
      </ul>
    </div>
    <div class="menu-bottom">
      <div
        class="py-1 text-sm w-[65%] flex items-center justify-center cursor-pointer ml-[25px] rounded-[30px] hover:text-white hover:bg-[#131313aa] text-[#131313aa] border border-[#131313aa] hover:border-[#131313aa] duration-200 dark:border-white dark:text-white dark:hover:border-[#131313aa]"
      >
        <i class="bx bx-log-out text-xl mr-[15px]"></i>
        <span>Logout</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.router-link-active li {
  color: #0b63f8;
  border-left-color: #0b63f8;
}
</style>
