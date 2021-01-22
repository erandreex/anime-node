const axios = require('axios');

const getAnime = async(anime) => {

    let encodeUrl = encodeURI(anime);



    let resp = await axios.get(`https://api.jikan.moe/v3/search/anime?q=${encodeUrl}`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${anime}`);
    }

    let resultadoanime = resp.data.results[0];

    return {
        titulo: resultadoanime.title,
        tipo: resultadoanime.type,
        Episodios: resultadoanime.episodes
    }
}


module.exports = {
    getAnime
}