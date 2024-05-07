<template>
    <div class="">
      <InputText v-model="pokemon" placeholder="Busque um pokemon" @change="getTypedPokemon"/>
      <div class="container">
        <PokemonCard
        v-for="(pokemon, index) in pokemonsList"
        :key="index"
        :data="pokemon"
        :name="pokemon.name"
        :url="pokemon.url"
        :id="index + 1"
        />
      </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { getPokemonByName, getAllPokemon } from '@/service/pokemon.service';
import InputText from 'primevue/inputtext';
import PokemonCard from '@/components/pokemon/PokemonCard.vue';
  
const pokemon = ref("");
const pokemonData = ref({} as any);
const pokemonsList = ref([] as any[]);

const getTypedPokemon = async () => {
  const response = await getPokemonByName(pokemon.value);
  pokemonData.value = response;
}

const getPokemons = async () => {
  const response = await getAllPokemon();
  pokemonsList.value = response.results;
}

watch(pokemon, () => {
  getTypedPokemon();
});

onMounted(() => {
  getPokemons();
});
</script>
<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>