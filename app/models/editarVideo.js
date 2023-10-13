module.exports = {
    getVideos: (dbConnection, userId, callBack) =>{
        const videos = `select * from videocadastrado where id_usuario = "${userId}";`;
        dbConnection.query(videos, callBack);
    }
}