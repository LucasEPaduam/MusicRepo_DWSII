module.exports = {
    updateVideo: (dbConnection, video, callBack) =>{
        console.log('Model do editarVideo');
        if(video){
            const video = `update videocadastrado set artista = "${video.artista}", musica = "${video.musica}", ano = "${video.ano}", categoria = "${video.categoria}", url = "${video.url}" where id_musica = "${video.id_musica}";`;
            dbConnection.query(video, callBack);
        }
        else{
            const errorMessage = "Erro ao editar o vídeo";
            callBack(new Error(errorMessage), null);
        }
        
    }
}