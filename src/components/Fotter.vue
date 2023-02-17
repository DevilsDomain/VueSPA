<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable-next-line vue/multi-word-component-names -->
<script setup>
import Logo from './Logo.vue';
</script>
<template>
  <!-- container -->
  <div class="container">
    <!-- col-1 -->
    <div class="space top-padding">
      <Logo class="logo-padding"></Logo>
      <p class="padding-left">Every cup is a new journey</p>
      <p class="padding-left">(+33)7 45 55 87 71</p>
      <p class="padding-left">connoisseuradeligth@email.com</p>
    </div>
    <!-- categories -->
    <div class="space top-padding">
      <h3>CATEGORIES</h3>
      <p>Gift Cards</p>
      <p>Merchendise</p>
      <p>Shops</p>
    </div>
    <!-- info -->
    <div class="space top-padding">
      <h3>INFORMATION</h3>
      <p>Coffe beans</p>
      <p>Contact us</p>
      <p>Blog</p>
    </div>
    <!-- fallow -->
    <div class="top-padding">
      <h3>FALLOW US</h3>
      <img class="gap-between" src="/images/bxl_instagram.svg" alt="ig icon" />
      <img
        class="gap-between"
        src="/images/ph_twitter-logo.svg"
        alt="twitter icon"
      />
      <img
        class="gap-between"
        src="/images/ri_facebook-fill.svg"
        alt="facebook icon"
      />
      <img
        class="gap-between"
        src="/images/ant-design_youtube-outlined.svg"
        alt="youtube icon"
      />
    </div>
    <!-- line -->
  </div>
  <div class="color">
    <div class="line"></div>
    <p class="center-text">
      Copyright © 2021 Connoisseur's Delight USA, Inc. All rights reserved
    </p>
  </div>
</template>

<style scoped>
* {
  color: #f6f0e8;
  margin: 0px;
  padding: 0px;
  font-family: 'Sintony';
}
.container {
  background-color: #c87941;
  display: flex;
  flex-direction: row;
  gap: 180px;
}

.color {
  background-color: #c87941;
}

.space {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-bottom: 100px;
}

.top-padding {
  padding-top: 50px;
}

.gap-between {
  padding-right: 30px;
}

.logo-padding {
  transform: scale(0.2);
  margin-top: -170px;
  margin-bottom: -150px;
}

.padding-left {
  padding-left: 90px;
}

.center-text {
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
}
.line {
  margin: 0 auto;
  width: 1000px;
  border: 1px solid #f6f0e8;
}
</style>
