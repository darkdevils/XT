<template>
    <div>
      <div class="item" data-aos="fade-up">1</div>
      <div class="item" data-aos="fade-up" >2</div>
      <div class="item" data-aos="fade-up">3</div>
      <div class="item" data-aos="fade-up">4</div>

      <div class="item" data-aos="zoom-in">5</div>
      <div class="item" data-aos="zoom-out">6</div>

      <div class="item" data-aos="slide-up">7</div>

      <div class="item" data-aos="flip-up">8</div>
      <div class="item" data-aos="flip-down">9</div>
      <div class="item" data-aos="flip-right">10</div>
      <div class="item" data-aos="flip-left">11</div>
    </div>
</template>

<script>
  import AOS from 'aos';
  import 'aos/dist/aos.css';

    export default {
      name: "test",
      mounted() {
        AOS.init({
          disable: false,
          duration: 1200,
          offset: 200,
        });
      }
    }
</script>

<style scoped>
  .item {
    width: 200px;
    height: 200px;
    margin: 50px auto;
    padding-top: 75px;
    background: #ccc;
    text-align: center;
    color: #FFF;
    font-size: 3em;
  }

</style>
