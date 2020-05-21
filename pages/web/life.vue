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
        <!-- 텍스트 애니메이션 예정 -->
        <div class="yellowBox yellowBox--rightTop">
          <div class="mask"><img src="~assets/web/images/life/mask01.svg" alt=""></div>
        </div>
        <div class="textBig textBig__s">
          <span class="big animate__animated animate__bounce">S</span>
          <span class="textSmall">Stable</span>
        </div>
        <div class="textBig textBig__p">
          <span class="big">P</span>
          <span class="textSmall">Pleasure</span>
        </div>
        <div class="textBig textBig__x">
          <span class="big">X</span>
          <span class="textSmall">XTSIEN</span>
        </div>
        <!-- //텍스트 애니메이션 예정 -->

        <!-- 동영상 및 사진 -->
        <div class="videoPhoto">
          <div class="videoPhoto__content" data-aos="fade-up">
            <div class="video-image" data-aos="fade-up"><img src="~assets/web/images/temp/photo.png" alt=""></div>
            <div class="videoPhoto__animateBox"></div>
            <div class="yellowBox"></div>
          </div>
          <div class="videoPhoto__text" data-aos="fade-right">
            우리는 즐거워서 오래 다니고 싶은 회사를 지향합니다<br>
            다양한 우리들이 만나 즐겁고 또 각자가 따로 있어 즐겁고<br>
            그렇게 우리는 함께 또 따로 즐거운<br>
            엑스티를 만들어 갑니다
          </div>
        </div>
        <!-- //동영상 및 사진 -->

        <!-- 로고 -->
        <div class="xtlogo">
          <div class="yellowBox"></div>
          <div class="logoImg" data-aos="fade-up"><img src="~assets/web/images/life/xtlogo.svg" alt=""></div>
          <div class="textMask">따로<br>도 같이</div>
        </div>
        <!-- //로고 -->

        <div class="swiperArea" style="padding: 0 0 50px">
          <div class="border" data-aos="fade-up"></div>
          <div class="swiper-container">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
              <!-- Slides -->
              <div class="swiper-slide">Slide 1</div>
              <div class="swiper-slide">Slide 2</div>
              <div class="swiper-slide">Slide 3</div>
              ...
            </div>
            <!-- If we need pagination -->
            <div class="swiper-pagination"></div>

            <!-- If we need navigation buttons -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

            <!-- If we need scrollbar -->
            <div class="swiper-scrollbar"></div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>


  import AOS from 'aos';
  import 'aos/dist/aos.css';
  import Swiper from 'swiper';

    export default {
      name: "life",
        head() {
        return {
          script : [
            /*{src: "/js/jquery.pagepiling.js"},
            {src: "/js/swiper.js"},*/
            {src: "/js/common.js"}
          ]
        }
      },
      mounted() {
        var mySwiper = new Swiper('.swiper-container', {
          speed: 400,
          spaceBetween: 100
        });
        //$('.life__content').pagepiling();
        AOS.init({
          duration: 1200,
          offset: 10,
        });
      }
    }
</script>

<style>
html,body {overflow: initial;}

</style>
