const anime = require('./anime/anime');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Anime que desea',
        demand: true
    }
}).argv;

anime.getAnime(argv.direccion)
    .then(resp => {
        console.log(resp);
    })
    .catch(e => console.log(e));