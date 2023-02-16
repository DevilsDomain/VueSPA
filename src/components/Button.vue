<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable-next-line vue/multi-word-component-names -->
<script setup lang="ts">
type variants = 'primary' | 'secondary';

const props = defineProps<{
  var: variants;
}>();
</script>
<template>
  <button :class="props.var"><slot></slot></button>
</template>

<style scoped>
.primary {
  width: 150px;
  height: 50px;
  font-size: 18px;
  background-color: #e0c097;
  border: none;
  box-shadow: none;
}

.secondary {
  width: 150px;
  height: 50px;
  font-size: 18px;
  border: 1px solid #e0c097;
  background-color: transparent;
  box-shadow: none;
  color: #f6f0e8;
}
</style>
