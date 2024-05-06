<template>
  <div class="todo-item">
    <input type="checkbox" v-model="props.done" @change="$emit('update', { task: props.task, done: props.done})" />
    <label>{{ task }}</label>
    <p>{{ description }}</p>
    <span v-if="props.done">Esta tarefa está concluída</span>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  task: string;
  done: boolean;
  description?: string;
}>();

defineEmits(["update"]);

</script>
<style scoped>
.todo-item {
  margin-bottom: 1rem;
}
</style>
