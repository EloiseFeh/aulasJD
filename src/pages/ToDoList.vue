<template>
    <div>
      <h1>Lista de Tarefas</h1>
      <input
        type="text"
        v-model="newTask"
        placeholder="Insira nova tarefa"
        class="input-task"
      />
      <input
        type="text"
        v-model="newDescription"
        placeholder="Insira descrição"
      />
      <ButtonComponent text="Adicionar" @click="addTask" />
      <ToDoItem
        v-for="(item, index) in array"
        :key="item.id"
        :task="item.nome"
        :done="item.done"
        :description="item.description"
        @update="updateTask"
      >
      </ToDoItem>
    </div>
  </template>
  <script setup lang="ts">
  import { ref, onMounted } from "vue";
  import ButtonComponent from "./ButtonComponent.vue";
  import ToDoItem from "./ToDoItem.vue";
  
  const newTask = ref<String>("");
  const newDescription = ref<String>("");
  
  const array = ref([
    {
      id: 1,
      nome: "Estudar Vue.js",
      done: false,
      description: "Estudar Vue.js é muito legal",
    },
    {
      id: 2,
      nome: "Trabalhar",
      done: true,
      description: "Trabalhar é muito legal",
    },
    {
      id: 3,
      nome: "Dormir",
      done: false,
      description: "Dormir é muito legal",
    },
    {
      id: 4,
      nome: "Comer",
      done: false,
      description: "Comer é muito legal",
    },
  ]);

  const updateTask = (event: any) => {
    console.log(event);
  }
  
  const addTask = () => {
    array.value.push({
      id: array.value.length + 1,
      nome: newTask.value as string,
      description: newDescription.value as string,
      done: false,
    });
  };

  const addtaskOnMount = () => {
    array.value.push({
      id: array.value.length + 1,
      nome: "Assistir aula",
      description: "Estudar Vue.js é muito legal",
      done: false,
    })
  }
  
  onMounted(() => {
    addtaskOnMount();
  })
  </script>
  <style scoped>
  .input-task {
    margin-bottom: 1.5rem;
  }
  </style>
  