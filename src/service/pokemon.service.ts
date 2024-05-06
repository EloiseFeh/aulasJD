import api from "./api.service";

export const getPokemon = async (pokemonName: string) => {
    try {
        const response = await api.get(`pokemon/${pokemonName}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}