<template>
  <div class="header">
    <div class="logo">
      <img src="~assets/image/common/logo.svg" alt="">
    </div>
    <ul class="nav">
      <li><a href="#"><span>워터플래닛</span></a></li>
      <li><a href="#"><span>슬라이드&amp;어트랙션</span></a></li>
      <li><a href="#"><span>이용/할인 안내</span></a></li>
    </ul>
    <div class="login"><a href="#"><span>로그인</span></a></div>
    <div class="ticket"><a href="#"><span>입장권구매</span></a></div>
  </div>
</template>

<script>
import pageHeader from '~/components/layout/pageHeader.vue'

export default {
  components: {
    pageHeader
  }
}
</script>
<style lang="scss" scoped>

</style>
