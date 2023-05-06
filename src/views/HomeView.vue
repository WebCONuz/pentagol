<script setup>
import GameCard from "../components/Cards/GameCard.vue";
import IntroNewsCard from "../components/Cards/IntroNewsCard.vue";
import CountRow from "../components/Rows/CountRow.vue";
import NewsCard from "../components/Cards/NewsCard.vue";
import Header from "../components/Header/Header.vue";
import Footer from "../components/Footer/Footer.vue";
</script>

<template>
  <Header />
  <main class="py-10">
    <!-- GAMES TABLE -->
    <div class="container">
      <div class="games-table">
        <div class="upcoming-games">
          <ul class="buttons flex bg-[#DAE9E0] rounded-lg">
            <li
              class="py-3 px-4 rounded-lg flex items-center mr-6 bg-[#469264] text-[white]"
            >
              <img
                src="../assets/images/italia_a_seria.png"
                alt="liga logo image"
                class="mr-[13px] w-[28px]"
              />
              <span class="text-sm">Italiya. Seriya A</span>
            </li>
            <li
              class="py-3 px-4 rounded-lg flex items-center mr-6 text-[#777777]"
            >
              <img
                src="../assets/images/Primier_liga.png"
                alt="liga logo image"
                class="mr-[13px] w-[28px]"
              />
              <span class="text-sm">Premier Liga</span>
            </li>
            <li
              class="py-3 px-4 rounded-lg flex items-center mr-6 text-[#777777]"
            >
              <img
                src="../assets/images/laliga.png"
                alt="liga logo image"
                class="mr-[13px] w-[28px]"
              />
              <span class="text-sm">LaLiga</span>
            </li>
            <li
              class="py-3 px-4 rounded-lg flex items-center mr-6 text-[#777777]"
            >
              <img
                src="../assets/images/italia_a_seria.png"
                alt="liga logo image"
                class="mr-[13px] w-[28px]"
              />
              <span class="text-sm">Italiya. Seriya A</span>
            </li>
            <li
              class="py-3 px-4 rounded-lg flex items-center mr-6 text-[#777777]"
            >
              <img
                src="../assets/images/bundesliga.png"
                alt="liga logo image"
                class="mr-[13px] w-[28px]"
              />
              <span class="text-sm">Bundesliga</span>
            </li>
          </ul>
          <div
            class="flex flex-wrap justify-between items-center mt-5 rounded-lg"
          >
            <GameCard class="mb-5" />
            <GameCard class="mb-5" />
            <GameCard class="mb-5" />
            <GameCard class="mb-5" />
            <GameCard class="mb-5" />
            <GameCard class="mb-5" />
            <GameCard class="mb-5" />
            <GameCard class="mb-5" />
            <GameCard class="mb-5" />
            <GameCard class="mb-5" />
          </div>
        </div>
        <div class="past-games mt-[30px]">
          <ul class="buttons flex bg-[#DAE9E0] rounded-lg">
            <li
              class="py-3 px-4 rounded-lg flex items-center mr-6 bg-[#469264] text-[white]"
            >
              <img
                src="../assets/images/italia_a_seria.png"
                alt="liga logo image"
                class="mr-[13px] w-[28px]"
              />
              <span class="text-sm">Italiya. Seriya A</span>
            </li>
            <li
              class="py-3 px-4 rounded-lg flex items-center mr-6 text-[#777777]"
            >
              <img
                src="../assets/images/Primier_liga.png"
                alt="liga logo image"
                class="mr-[13px] w-[28px]"
              />
              <span class="text-sm">Premier Liga</span>
            </li>
            <li
              class="py-3 px-4 rounded-lg flex items-center mr-6 text-[#777777]"
            >
              <img
                src="../assets/images/laliga.png"
                alt="liga logo image"
                class="mr-[13px] w-[28px]"
              />
              <span class="text-sm">LaLiga</span>
            </li>
            <li
              class="py-3 px-4 rounded-lg flex items-center mr-6 text-[#777777]"
            >
              <img
                src="../assets/images/italia_a_seria.png"
                alt="liga logo image"
                class="mr-[13px] w-[28px]"
              />
              <span class="text-sm">Italiya. Seriya A</span>
            </li>
            <li
              class="py-3 px-4 rounded-lg flex items-center mr-6 text-[#777777]"
            >
              <img
                src="../assets/images/bundesliga.png"
                alt="liga logo image"
                class="mr-[13px] w-[28px]"
              />
              <span class="text-sm">Bundesliga</span>
            </li>
          </ul>
          <div
            class="flex flex-wrap justify-between items-center mt-5 rounded-lg"
          >
            <GameCard class="mb-5" />
            <GameCard class="mb-5" />
            <GameCard class="mb-5" />
            <GameCard class="mb-5" />
            <GameCard class="mb-5" />
            <GameCard class="mb-5" />
            <GameCard class="mb-5" />
            <GameCard class="mb-5" />
            <GameCard class="mb-5" />
            <GameCard class="mb-5" />
          </div>
        </div>
      </div>
    </div>

    <!-- INTRO SECTION -->
    <section class="container flex justify-between mb-10">
      <div class="w-[80%]">
        <div class="intro__main relative mb-5">
          <img
            src="../assets/images/intro_main.jpg"
            alt="intro image"
            class="w-full"
          />
          <div class="absolute left-[50px] bottom-[20px] max-w-[600px]">
            <h1 class="font-bold text-white text-[28px] mb-5">
              Faqatgina muvaffaqiyatli qur'a Rossiyani Jahon chempionatiga olib
              boradi: bo'g'inlar oldidagi barcha maketlar
            </h1>
            <p class="text-white text-[20px] font-medium">2 soat oldin</p>
          </div>
        </div>
        <div class="intro__news flex flex-wrap justify-between">
          <IntroNewsCard />
          <IntroNewsCard />
          <IntroNewsCard />
          <IntroNewsCard />
          <IntroNewsCard />
          <IntroNewsCard />
        </div>
      </div>
      <div class="w-[20%] pl-3 pb-2 overflow-hidden">
        <div class="bg-[#F4F5F7] rounded-lg overflow-hidden px-1 h-full">
          <h3 class="py-[15px] px-3 text-5 font-bold">Jadval</h3>
          <select
            name=""
            id=""
            class="border-none w-full rounded-lg mb-1 outline-none ring-0 focus:ring-0"
          >
            <option value="">Italiya. A seriya</option>
            <option value="">Premier Liga</option>
            <option value="">LaLiga</option>
            <option value="">Bundesliga</option>
            <option value="">Ligue 1</option>
          </select>
          <table class="min-w-full">
            <thead>
              <tr>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-1 py-3 text-left"
                >
                  №
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-1 py-3 text-left"
                ></th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 py-3 text-left"
                >
                  Команда
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-1 py-3 text-left"
                >
                  И
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 pr-1 py-3 text-left"
                >
                  O
                </th>
              </tr>
            </thead>
            <tbody>
              <CountRow class="bg-white mb-2" />
              <CountRow class="mb-2" />
              <CountRow class="bg-white mb-2" />
              <CountRow class="mb-2" />
              <CountRow class="bg-white mb-2" />
              <CountRow class="mb-2" />
              <CountRow class="bg-white mb-2" />
              <CountRow class="mb-2" />
              <CountRow class="bg-white mb-2" />
              <CountRow class="mb-2" />
              <CountRow class="bg-white mb-2" />
              <CountRow class="mb-2" />
              <CountRow class="bg-white mb-2" />
              <CountRow class="mb-2" />
              <CountRow class="bg-white mb-2" />
              <CountRow class="mb-2" />
              <CountRow class="bg-white mb-2" />
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- LATES NEWS -->
    <section class="container mb-14">
      <h2
        class="bg-[#469264] py-3 px-6 text-white text-xl font-bold rounded-lg mb-7"
      >
        So'ngi yangiliklar
      </h2>
      <div class="flex justify-between flex-wrap">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
      <div
        class="bg-[#EAEAEA] py-3 px-6 text-xl text-center font-bold rounded-lg mb-7 cursor-pointer"
      >
        Barchasi ko’rish
      </div>
    </section>

    <!-- ALL NEWS -->
    <section class="container">
      <h2
        class="bg-[#469264] py-3 px-6 text-white text-xl font-bold rounded-lg mb-7"
      >
        Barcha yangiliklar
      </h2>
      <div class="flex justify-between flex-wrap">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
      <div
        class="bg-[#EAEAEA] py-3 px-6 text-xl text-center font-bold rounded-lg mb-7 cursor-pointer"
      >
        Barchasi ko’rish
      </div>
    </section>
  </main>
  <Footer />
</template>

<style></style>
