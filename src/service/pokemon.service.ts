import api from "./api.service";

export const getPokemonByName = async (pokemonName: string) => {
    try {
        const response = await api.get(`pokemon/${pokemonName}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const getPokemonById = async (pokemonId: number) => {
    try {
        const response = await api.get(`pokemon/${pokemonId}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const getAllPokemon = async () => {
    try {
        const response = await api.get(`pokemon?limit=151&offset=0`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}