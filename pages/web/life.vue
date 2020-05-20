<template>
  <div class="wrapper">
    <div class="wrap main life">
      <header class="w-txt">
        <div class="xt-ci">
          <ul class="gnb-menu">
            <li class="gnb-menu01">Who we are</li>
            <li class="gnb-menu02">We make</li>
            <li class="gnb-menu03">XTSIEN Life</li>
            <li class="gnb-menu04">Contact XT</li>
          </ul>
        </div>
        <div class="pdf-down">Start a project x Download pdf</div>
        <div class="hamburger">
          <a href="#">
            <div class="side-open">
              <span class="m">M</span>
              <span class="e">E</span>
              <span class="n">N</span>
              <span class="u">U</span>
            </div>
            <div class="side-close">
              <span></span>
              <span></span>
            </div>
          </a>
        </div>
        <nav>
          <ul id="gnb">
            <li><a href="#">XT</a></li>
            <li><a href="#">Works</a></li>
            <li><a href="#">XTSIEN Life</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">News</a></li>
          </ul>
          <div class="profile-down">
            <a href="#">Download XT profile pdf</a>
          </div>
        </nav>
      </header>
      <div class="life__content">
        <span class="yellowBox yellowBox--rightTop"></span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "life",
      head() {
        return {
          script : [
            {src: "/js/jquery.pagepiling.js"},
            {src: "/js/swiper.js"},
            {src: "/js/common.js"}
          ]
        }
      }
    }
</script>

<style scoped>

</style>
