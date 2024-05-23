<template>
    <div class="pokecard" :class="backGroundColor">
        <div class="image">
            <img :src="data.img">
        </div>
        <div class="base-info">
            <h2>{{props.id }}. {{ props.name }}</h2>
            <p v-for="(type, index) in data.types" :key="index">{{ type }}</p>

        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref  } from 'vue';
import api from '@/service/api.service';

const props = defineProps<{
    name: string;
    url: string;
    data: any;
    id: number;
}>();



const data = ref<{
    img: string;
    types: string[];
}>({
    img: '',
    types: []
});

const backGroundColor = ref('')

onMounted(() => {
    api.get(props.url).then((response: any) => {
        data.value = {
            img: response.data.sprites.front_default,
            types: response.data.types.map((type: any) => type.type.name)
        }

        backGroundColor.value = `bg-${data.value.types[0]}`
    });
});
</script>
<style scoped>
.pokecard {
    display: flex;
    align-items: center;
}

.base-info {
    display: flex;
    flex-direction: column;
    align-items: center;
}

h2{
    text-transform: capitalize;

}
</style>