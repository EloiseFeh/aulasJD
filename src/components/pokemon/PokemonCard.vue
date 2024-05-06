<template>
    <Card>
        <template #title>{{ pokemonData.name }}</template>
        <template #content>
        <p>
            <strong>Tipo: </strong> {{ pokemonData.types }} 
        </p>
    </template>
    </Card>
</template>
<script setup lang="ts">
import Card from 'primevue/card';

const props = defineProps<{
    pokemonData: any;
}>();
</script>