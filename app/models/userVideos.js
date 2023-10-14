module.exports = {
    getVideos: (dbConnection, userId, callBack) =>{
        //console.log('Model userVideo');
        const videos = `select * from videocadastrado where id_usuario = "${userId}";`;
        dbConnection.query(videos, callBack);
    },
    
}