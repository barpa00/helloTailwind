<template>
  <div
    class="
      w-full
      bg-gray03
      h-16
      flex
      items-center
      tablet:justify-between 
      tablet:px-16 tablet:h-24
    "
  >
    <img
      class="mx-auto tablet:mx-0 tablet:w-60"
      src="../assets/images/logo.png"
      alt=""
    />
    <div class="hidden w-auto tablet:flex tablet:items-center ">
      <nav>
        <ul class="flex gap-4 ">
          <li class="px-4 text-center text-lg text-purple01 border-r border-l">認識我們</li>
          <li class="px-4 text-center text-lg text-purple01 border-r">服務特色</li>
          <li class="px-4 text-center text-lg text-purple01 border-r">知識文章</li>
          <li class="px-4 text-center text-lg text-purple01 border-r">連載專欄</li>
          <li class="px-4 text-center text-lg text-purple01 border-r">自費服務</li>
          <li class="px-4 text-center text-lg text-purple01 border-r">常見問題</li>
        </ul>
      </nav>
      <div class="flex items-center">
        <div class="px-4 ">
          <h4 class="text-lg text-purple01">目前號碼</h4>
          <span class="text-center block text-orange01 text-4xl">30</span>
        </div>
        <button class="px-8 h-12 bg-orange01 rounded-full text-white01 font-bold text-lg">立即掛號</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>

