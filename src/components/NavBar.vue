<script setup lang="ts">
import Logo from './Logo.vue';
import store from './store';

type variants = 'primary' | 'secondary';

const props = defineProps<{
  var?: variants;
}>();
</script>

<template>
  <div :class="props.var">
    <Logo class="logo-padding"></Logo>
    <p>HOME</p>
    <p>ABOUT</p>
    <p>SHOP</p>
    <div v-if="props.var === `secondary`">
      <p>{{ store.count }}</p>
      <img src="@/assets/cart.svg" alt="shopping cart" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.primary {
  display: flex;
  flex-direction: row;
  gap: 71px;

  p {
    font-family: 'Sintony', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: #f6f0e8;
  }

  .logo-padding {
    padding-right: 150px;
  }
}

.secondary {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 80px;
  gap: 71px;
  background-color: #c87941;
  p {
    font-family: 'Sintony', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: #f6f0e8;
    padding-top: 15px;
  }

  .logo-padding {
    padding-right: 800px;
    padding-left: 85px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  img {
  }
}
</style>
