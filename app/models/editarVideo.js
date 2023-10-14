module.exports = {
    updateVideo: (video, dbConnection,  callBack) =>{
        console.log('Model do editarVideo');       
            const selectedVideo = `select * from videocadastrado where id_musica = "${video}";`;
            dbConnection.query(selectedVideo, callBack);        
    }
}