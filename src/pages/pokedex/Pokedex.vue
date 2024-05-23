<template>
    <div class="">
      <div class="container">
        <RouterLink
        v-for="(pokemon, index) in pokemonsList"
        :key="index"
        :to="{ name: 'PokemonPage', params: { id: index + 1}}"
        class="router-link"
        >
        <PokemonCard
        :data="pokemon"
        :name="pokemon.name"
        :url="pokemon.url"
        :id="index + 1"
        />
        </RouterLink>
        
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

.router-link{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    width: 15%;
}
</style>