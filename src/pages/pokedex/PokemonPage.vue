<template>
    <div>
        <h2 class="name">{{ pokemon.name }}</h2>

        <div>
            <label>Altura: </label> {{ pokemon.height }}m
        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { getPokemonById } from '@/service/pokemon.service';

const router = useRouter();

const pokemon = ref({} as any);
const id = Number(router.currentRoute.value.params.id); // id: "1" -> id: 1

const getCurrentPokemon = async () => {
    const response = await getPokemonById(id)
    pokemon.value = response;
}

onMounted(() => {
    getCurrentPokemon();
});
</script>
<style scoped>
.name {
    text-transform: capitalize;
}
</style>