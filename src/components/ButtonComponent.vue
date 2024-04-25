<template>
  <button>{{ text }}</button>
</template>
<script setup lang="ts">
const props = defineProps<{
  text: string;
}>();
</script>
<style scoped></style>
