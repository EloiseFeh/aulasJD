import { createRouter, createWebHistory } from "vue-router";
import Pokedex from "@/pages/pokedex/Pokedex.vue";
import PokemonPage from "@/pages/pokedex/PokemonPage.vue";

const routes = [
    {
        path: "/",
        name: "Pokedex",
        component: Pokedex,
    },
    {
        path: "/pokemon/:id/",
        name: "PokemonPage",
        component: PokemonPage,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;