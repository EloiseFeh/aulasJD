<template>
    <div class="">
      <InputText v-model="pokemon" placeholder="Busque um pokemon" @change="getTypedPokemon"/>

      <div>
        <PokemonCard :pokemon-data="pokemonData"/>
      </div>
    </div>
  </template>
  <script setup lang="ts">
  import { ref, watch } from 'vue';
  import { getPokemon } from '@/service/pokemon.service';
  import InputText from 'primevue/inputtext';
  import PokemonCard from '@/components/pokemon/PokemonCard.vue';
  
  const pokemon = ref("");
  const pokemonData = ref({} as any);

  const getTypedPokemon = async () => {
    const response = await getPokemon(pokemon.value);
    pokemonData.value = response;
  }

  watch(pokemon, () => {
    getTypedPokemon();
  });

  </script>