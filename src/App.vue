<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue';
import NavBar from './components/NavBar.vue';
import Button from './components/Button.vue';
import ItemCard from './components/ItemCard.vue';
</script>

<template>
  <!-- hero section -->
  <div class="hero-section">
    <!-- left -->
    <div class="left">
      <NavBar class="nav-center" var="primary"></NavBar>
      <h2 class="margin-left hero-h2-padding">Connoisseur's Delight</h2>
      <h1 class="margin-left hero-h1-padding">Brew Perfection</h1>
      <p class="margin-left">
        Impeccable Coffee Blends, Expertly Curated Online
      </p>
      <div class="buttons">
        <Button class="margin-left" var="primary">SHOP NOW</Button>
        <Button var="secondary">NEW ARRIVALS</Button>
      </div>
    </div>
    <!-- right -->
    <div class="right">
      <img src="@/assets/coffeeBeans.png" alt="coffe beand being roasted" />
    </div>
  </div>
  <!-- SHOP -->
  <div class="shop">
    <!-- shop navbar -->
    <div>
      <NavBar var="secondary"></NavBar>
    </div>
    <!-- shop items -->
    <h1>Discover Our Blends</h1>
    <ItemCard></ItemCard>
  </div>
</template>

<style scoped>
.hero-section {
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
}
.left {
  display: flex;
  flex-direction: column;
  background-color: #2d2424;
  width: 50%;
  height: 100vh;
  z-index: 1;
}
.right {
  width: 50%;
  height: 100vh;
  transform: translateX(-350px);
  object-fit: fill;
}

img {
  height: 100vh;
  width: 150%;
}
h1 {
  font-family: 'Rufina', serif;
  font-style: normal;
  font-weight: 600;
  font-size: 120px;
  line-height: 96.3%;
  color: #f6f0e8;
  margin: 0px;
}

h2 {
  font-family: 'Great Vibes';
  font-weight: 400;
  font-size: 25px;
  line-height: 37px;
  letter-spacing: 0.425em;
  color: #f6f0e8;
  margin: 0px;
}

p {
  font-family: 'Sintony', sans-serif;
  color: #f6f0e8;
  font-weight: 300;
  font-size: 20px;
  line-height: 29px;
  margin: 0px;
  width: 450px;
}
.nav-center {
  margin: auto;
  margin-top: 35px;
  margin-bottom: 0;
}

.margin-left {
  margin-left: 85px;
}

.hero-h2-padding {
  padding-top: 100px;
  padding-bottom: 60px;
}
.hero-h1-padding {
  padding-top: 20px;
}
.buttons {
  display: flex;
  flex-direction: row;
  gap: 30px;
  padding-top: 20px;
}
.shop {
  background-color: #2d2424;
}
</style>
