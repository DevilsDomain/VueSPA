<script setup lang="ts">
import { ref } from 'vue';
const count = ref(0);
</script>

<template>
  <div class="counter">
    <div class="buttons">
      <button id="button1" @click="count++"></button>
      <button id="button2" @click="count--"></button>
    </div>
    <div v-if="count <= 0"><p>0</p></div>
    <div v-else>
      <p>{{ count }}</p>
    </div>
  </div>
</template>

<style scoped>
p {
  color: #f6f0e8;
  padding-left: 15px;
  font-family: 'Sintony';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 39px;
  text-align: center;
  letter-spacing: 0.275em;
  margin-top: -0.5px;
}
.counter {
  display: flex;
  flex-direction: row;
  border: 1px solid #f6f0e8;
  width: 80px;
  height: 38px;
  margin-top: 5px;
}
.buttons {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-left: 10px;
}
#button1 {
  border: none;
  box-shadow: none;
  background-color: transparent;
  background-image: url('src/assets/Polygon1.svg');
  transform: scale(5);
  margin: 0px;
  margin-top: 10px;
}

#button2 {
  border: none;
  box-shadow: none;
  background-color: transparent;
  background-image: url('src/assets/Polygon1.svg');
  transform: rotate(180deg) scale(5);
  margin: 0px;
  margin-left: 1.7px;
}
</style>
