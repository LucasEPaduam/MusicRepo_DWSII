module.exports = {
    update: (video, dbConnection,  callBack) =>{
        //console.log('Model do editarVideo COM update');       
        const selectedVideo = `update videocadastrado set artista = "${video.artista}", musica = "${video.musica}", ano = "${video.ano}", categoria = "${video.categoria}", url = "${video.url}" where id_musica = "${video.id_musica}";`;
        dbConnection.query(selectedVideo, callBack);        
    },
    getVideo: (video, dbConnection,  callBack) =>{
        //console.log('Model do editarVideo COM getVideo');       
        const selectedVideo = `select * from videocadastrado where id_musica = "${video}";`;
        dbConnection.query(selectedVideo, callBack);        
    }
}