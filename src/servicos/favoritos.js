import axios from "axios"

const favoritosAPI = axios.create({baseURL: "http://localhost:8000/favoritos"})

async function getfavoritos() {
    const response =  await livrosAPI.get('/')

    return response.data
}

async function postFavorito() {
    await favoritosAPI.post(`/${id}`)
}

async function deleteFavorito() {
    await favoritosAPI.delete(`/${id}`)
}

export {
    getfavoritos,
    postFavorito,
    deleteFavorito
}