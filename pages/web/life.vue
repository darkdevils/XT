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

        <div class="swiperArea">
          <div class="border" data-aos="fade-up" data-aos-offset="500">
            <div class="swiper-container">
              <!-- Additional required wrapper -->
              <div class="swiper-wrapper" data-aos="fade" data-aos-delay="500">
                <!-- Slides -->
                <div class="swiper-slide"><img src="~assets/web/images/temp/img01.jpg" alt=""></div>
                <div class="swiper-slide"><img src="~assets/web/images/temp/img01.jpg" alt=""></div>
                <div class="swiper-slide"><img src="~assets/web/images/temp/img01.jpg" alt=""></div>
              </div>
            </div>
            <div class="swiper-pagination" data-aos="fade" data-aos-delay="500"></div>
          </div>
        </div>

        <div class="xtText">
          <strong class="bigText">
            <span>엑스트</span><br>
            <span>워라벨</span>
          </strong>
          <div class="text" data-aos="fade-up">
            <span>우리의 저녁이 있는 삶을 위해</span><br>
            <span>8시부터 10시 탄력 출근과 하루 7시간 근무로</span><br>
            <span>집중해서 일하고 한시간 일찍 퇴근할 수 있는</span><br>
            <span>엑스티만의 문화를 만들고 있습니다.</span>
          </div>
        </div>

        <div class="xtMember">
          <div class="xtMember__team textRight">
            <span class="name">김현수 대표</span><strong>CEO</strong>
            <span class="name">송의택 이사</span><strong>CTO</strong>
          </div>
          <div class="xtMember__team textLeft planner">
            <strong>PLANNER</strong>
            <span class="xtMember__team__memberList">
              <span>윤성배 팀장</span>
              <span>최성민 대리</span>
              <span>황수현 사원</span>
            </span>
          </div>
          <div class="xtMember__team textRight designer">
            <span class="xtMember__team__memberList">
              <span>우광수 실장</span>
              <span>정종운 차창</span>
              <span>최홍 사원</span>
              <span>성혜연 사원</span>
            </span>
            <strong>DESIGNER</strong>
          </div>
          <div class="xtMember__team textLeft publisher">
            <strong>PUBLISHER</strong>
            <span class="xtMember__team__memberList">
              <span>김정환 차장</span>
              <span>신민정 과장</span>
            </span>
          </div>
          <div class="xtMember__team textRight develover">
            <span class="xtMember__team__memberList list1">
              <span>홍원기 차장</span>
              <span>강인호 과장</span>
              <span>김종인 대리</span>
              <span>최광일 대리</span>
            </span>
            <span class="xtMember__team__memberList list2">
              <span>고세진 대리</span>
              <span>정대원 대리</span>
              <span>이건희 사원</span>
            </span>
            <strong>DEVELOVER</strong>
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
            {src: "/js/common.js"}
          ]
        }
      },
      mounted() {
        //$('.life__content').pagepiling();
        AOS.init({
          duration: 1200,
          offset: 120,
        });
        var mySwiper = new Swiper('.swiper-container', {
          speed: 1000,
          spaceBetween: 0,
          loop: true,
          autoplay: {
            delay: 5000,
          },
          pagination: {
            el: '.swiper-pagination',
          }
        });

      }
    }
</script>

<style>
html,body {overflow: initial;}

</style>
