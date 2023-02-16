<script setup lang="ts">
import Button from './Button.vue';
import ItemCounter from './ItemCounter.vue';
import store from './store';
const props = defineProps<{
  image: string;
}>();
</script>

<template>
  <div class="background">
    <h3>Cappuccino Classique</h3>
    <h5>300gm/10 servings</h5>
    <h4>$25</h4>
    <img :src="props.image" alt="coffee bag" />
    <div class="align-row">
      <Button var="primary" class="button" @click="store.increment()"
        >Add to cart</Button
      >
      <ItemCounter></ItemCounter>
    </div>
  </div>
</template>

<style scoped lang="scss">
* {
  margin: 0px;
}
h3 {
  color: #f6f0e8;
  font-family: 'Rufina';
  font-style: normal;
  font-weight: 400;
  font-size: 23.4602px;
  line-height: 210.3%;
  text-align: center;
  padding: 0px;
  padding-top: 20px;
}

h5 {
  color: rgba(246, 240, 232, 0.7);
  font-family: 'Sintony';
  font-style: normal;
  font-weight: 400;
  font-size: 11.6315px;
  line-height: 210.3%;
  text-align: center;
  margin-top: -15px;
  padding-bottom: 30px;
}
h4 {
  font-family: 'Sintony';
  font-style: normal;
  font-weight: 700;
  font-size: 16.2841px;
  line-height: 210.3%;
  text-align: center;

  color: #f6f0e8;
}

.background {
  width: 298.93px;
  height: 524px;
  background-color: #4e372c;
  margin: 0 auto;
  transition: 0.3s;
}
.background:hover {
  background-color: #996038;
  transition-timing-function: ease-in-out;
}
img {
  text-align: center;
  padding-left: 50px;
  margin: 0px;
  object-fit: inherit;
  transform: scale(0.6);
  margin-top: -80px;
  margin-bottom: -45px;
}
.button {
  z-index: 1;
  transform: scale(0.8);
  margin-left: 20px;
}

.align-row {
  display: flex;
  flex-direction: row;
}
</style>
