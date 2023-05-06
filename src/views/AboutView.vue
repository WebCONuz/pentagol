<script setup>
import NewsCard from "../components/Cards/NewsCard.vue";
import ReleatedCard from "../components/Cards/ReleatedCard.vue";
import Header from "../components/Header/Header.vue";
import Footer from "../components/Footer/Footer.vue";
</script>

<template>
  <Header />
  <main>
    <!-- ARTICLE -->
    <div class="container my-10">
      <div class="title w-[75%] mb-7">
        <p class="text-lg mb-[10px] font-medium">2 soat oldin</p>
        <h1 class="text-3xl font-bold">
          Faqatgina muvaffaqiyatli qur'a Rossiyani Jahon chempionatiga olib
          boradi: bo'g'inlar oldidagi barcha maketlar
        </h1>
      </div>
      <div class="flex">
        <div class="w-4/5">
          <img
            src="../assets/images/intro_main.jpg"
            alt="article main image"
            class="w-full mb-10"
          />
          <article class="text-[22px] font-medium w-[90%]">
            <p class="mb-6">
              Ilon Mask (Elon Mask, Tesla va boshqa loyihalar rahbari) bir yarim
              hafta ichida ikkinchi marta Xitoyning hukmron doiralari va
              fuqarolariga murojaat qildi. Videoda u ularni ushbu mamlakatda
              biznesni rivojlantirish va kengaytirishga sarmoya kiritishga
              tayyor ekanligiga ishontirdi. Qayta ishlangan ma'lumotlarning
              xavfsizligiga alohida e'tibor qaratiladi.
            </p>
            <p class="mb-6">
              Ular faqat Xitoyning o'zida saqlanadi va shuning uchun istalgan
              vaqtda O'rta Qirollik hukumati foydalanishi mumkin bo'ladi.
            </p>
            <p class="mb-6">
              Ilon Mask Xitoyda hafta oxirida bo‘lib o‘tgan Butunjahon internet
              konferensiyasining tomoshabinlariga videomurojaati chog‘ida yangi
              bayonotlar berdi. Kompaniya Cisco Systems (Chak Robbins), Intel
              (Pat Gelsinger) va Qualcomm (Kristiano Amon) rahbarlaridan tashkil
              topgan bo'lib, Xitoy Xalq Respublikasi biznesi manfaatlarini
              Alibaba va Xiaomi rahbarlari himoya qilishgan.
            </p>
            <p class="mb-6">
              Tadbirni Xitoy Xalq Respublikasi Davlat kengashi bosh vaziri
              o‘rinbosari Lyu Xe ochib berdi va Si Szinpinning Osmon
              imperiyasining shaffof raqamli iqtisodiyotni yaratish uchun barcha
              kuchlar bilan ishlash istagi haqidagi so‘zlarini keltirdi.
            </p>
            <p class="mb-6">
              Yaqin kelajakda Tesla nafaqat Shanxay filialida elektromobillar
              ishlab chiqarishni kengaytiribgina qolmay, balki mahalliy studiya
              yordamida elektromobilning arzon modelini (narxi 25 000 dollardan
              kam) ishlab chiqmoqchi.
            </p>
            <p>
              Xitoy Xalq Respublikasida yig‘ilgan Tesla Model Y va Model 3
              elektromobillari allaqachon Yevropaga eksport qilinmoqda.
            </p>
          </article>
        </div>
        <div class="w-[25%] pl-3">
          <div class="px-3 rounded-lg bg-[#F4F5F7] pb-4 mb-8">
            <h3 class="py-[15px] text-lg font-bold">Asosiy</h3>
            <ReleatedCard />
            <ReleatedCard />
            <ReleatedCard />
            <ReleatedCard />
          </div>
          <div class="px-3 rounded-lg bg-[#F4F5F7] pb-4">
            <h3 class="py-[15px] text-lg font-bold">Asosiy</h3>
            <ReleatedCard />
            <ReleatedCard />
            <ReleatedCard />
            <ReleatedCard />
          </div>
        </div>
      </div>
      <h1></h1>
    </div>

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
  </main>
  <Footer />
</template>

<style></style>
