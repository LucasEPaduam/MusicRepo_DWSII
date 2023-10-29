module.exports = {
    deleteVideo: (video, dbConnection,  callBack) =>{      
        const selectedVideo = `delete from videocadastrado where id_musica = "${video.id_musica}";`;
        dbConnection.query(selectedVideo, callBack);        
    },
    getVideoForDelete: (video, dbConnection,  callBack) =>{      
        const selectedVideo = `select * from videocadastrado where id_musica = "${video}";`;
        dbConnection.query(selectedVideo, callBack);        
    }
}