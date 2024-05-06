<template>
    <div class="counter">
        <button @click="increment">+</button>
        <h1>{{ count }}</h1>
        <button @click="decrement">-</button>
        <h2>Esse número é {{ numeroPar }}</h2>
    </div>
</template>
<script setup lang="ts">
import { ref, computed, watch } from "vue";
const count = ref(0);
const increment = () => count.value++;
const decrement = () => count.value--;

const isPar = () => {
    if(count.value % 2 === 0){
        return "Par";
    } else {
        return "Impar";
    }

}

const numeroPar = computed(() =>{
    if(count.value % 2 === 0){
        return "Par";
    } else {
        return "Impar";
    }
})

watch(count, (newValue, oldValue) => {
    if(count.value === 10){
        alert("Chegou a 10")
    }
})

const getChart = (count: number) => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice/BRL.json")
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
}

watch(() => count.value,
    (newValue) => {
        getChart(newValue);
    }
)



</script>
<style scoped>
.counter {
    margin-left: 3rem;
}
</style>