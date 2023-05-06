<script setup></script>

<template>
  <div class="game_card w-[19%] rounded-lg overflow-hidden">
    <div class="result flex justify-between bg-[#F4F5F7] py-[10px] px-3">
      <div class="team1 flex items-center">
        <img
          src="../../assets/images/barsa_logo.png"
          alt="team logo image"
          class="w-[20px] mr-[2px]"
        />
        <span class="team-name text-sm">Barcelona</span>
      </div>
      <div class="count"><b>3</b><b>:</b><span>0</span></div>
      <div class="team1 flex items-center">
        <img
          src="../../assets/images/liverpool_logo.png"
          alt="team logo image"
          class="w-[20px] mr-[2px]"
        />
        <span class="team-name text-sm">Liverpool</span>
      </div>
    </div>
    <div
      class="date text-[12px] text-[#333333] pt-1 px-2 inline-block border border-[#e7e7e9] border-t-transparent rounded-b-lg"
    >
      11.11.2021 23:59
    </div>
  </div>
</template>

<style>
.count,
.team-name {
  font-family: "Roboto", sans-serif !important;
  font-weight: 400;
}
</style>
